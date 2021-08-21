import User from "../models/User";
import MyLog from "../models/MyLog";
import bcrypt from "bcrypt";

// React 랜더링 전 User Session 정보 확인

export const home = (req, res) => {
    return res.json(req.session);
};

export const getLogout = (req, res) => {
    req.session.destroy();
    return res.status(200);
};

export const postMyLogInfo = async(req, res) => {
    const { user : { _id : id } } = req.session;
    const { user } = req.session;
    try{
        const myLog = await MyLog.findOne({userId : id});
        if(myLog){
            console.log("❤check");
            return res.json({myLog, user}); 
        }
        else {
            return res.json({ error : "Please login first."})
        }
    } catch {
        return res.json({ error : "Error❌" })
    }
};


// User 정보 

export const postJoin = async (req, res) => {
    const { email, username, password, password2 } = req.body;
    if(password !== password2){
        console.log("❌ password is wrong.");
        return res.json({ error : "Password confirmation does not match." });
    }
    const exists = await User.exists({$or: [{username}, {email}]});
    if(exists){
        console.log("❌ already using.");
        return res.json({ error : "This Username / Email is already using."});
    }
    try{
        await User.create({
            email,
            username,
            password,
        });
        console.log("✅ Join Completion");
        return res.status(200).json({ joinOK : "success"});
    }catch(error){
        console.log("❌ something error");
        return res.status(400).json({ error : error.message });
    }
};

export const postLogin = async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email, socialOnly: false});
    if(!user){
        return res.json({ error : "An account with this email does not exists."});
    }
    const passwordCheck = await bcrypt.compare(password, user.password);
    if(!passwordCheck){
        return res.json({ error : "Wrong Password!"});
    }
    console.log("✅ Login Success");
    req.session.loggedIn = true;
    req.session.user = user;
    return res.status(200).json({ loggedIn : true, loginData : req.session.user });
};


// Log 저장
export const postLogSave = async(req, res) => {
    const { logInfo } = req.body;
    const { session : { user : { _id : id}}} = req;
    const myLog = await MyLog.findOne({userId : id});
    if(!myLog){
        try{
            await MyLog.create({
                userId : id,
                contents : logInfo,
            })
            return res.status(200).json({ saveOk : "success"});
        } catch {
            return res.status(400);
        }
    } else {
        try {
            await MyLog.findOneAndUpdate({userId : id},
                { $push : { contents : logInfo },
            })
            return res.status(200).json({ updateOk : "success"});
        } catch(error) {
            return res.status(400);
        }
    }
};

// Log 삭제
export const postMyLogDelete = async(req, res) => {
    const {objectId} = req.body;
    const temp = await MyLog.findOneAndUpdate({}, {
        $pull : { contents : { 
            _id : objectId 
        }}
    }
    );
    console.log(temp);
    return res.send("success");
};

