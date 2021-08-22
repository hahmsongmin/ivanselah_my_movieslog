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
        return res.status(200).json({ info : "Welcome, Joined!", joinOK : "success"});
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

export const postUserEdit = async(req, res) => {
    const { username, password, password1, password2 } = req.body;
    const { user : { _id }} = req.session;
    const user = await User.findById({_id});
    const oldPasswordCheck = await bcrypt.compare(password, user.password);
    // 기존 비밀번호 확인
    if(!oldPasswordCheck){
        return res.json({ error : "Wrong Password!"});
    }
    // username만 변경
    if(username !== user.username){
        const exists = await User.exists({username});
        if(exists){
            return res.json({ error : "This Username is already using."});
        } else {
            const updateUser = await User.findByIdAndUpdate(_id, {
                username,
            }, {new: true});
            req.session.user = updateUser;
            return res.status(200).json({ info : "Username Updated!"});
        }
    }
    // password만 변경
    if(password !== password1){
        if(password1 !== password2){
            return res.json({ error : "Change of Password confirmation does not match." });
        }
        user.password = password1;
        await user.save();
        req.session.user.password = user.password;
        return res.status(200).json({ info : "Password Updated!"});
    }
    // 둘다 변경
    if(username !== user.username && password !== password1){
        const exists = await User.exists({username});
        if(exists){
            return res.json({ error : "This Username is already using."});
        } else if (password1 !== password2) {
            return res.json({ error : "Change of Password confirmation does not match." });
        } else {
            const updateUser = await User.findByIdAndUpdate(_id, {
                username,
                password : password1,
            }, {new: true});
            req.session.user = updateUser;
            return res.status(200).json({ info : "All Updated!"});
        }
    }
    return res.end();
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
    await MyLog.findOneAndUpdate({}, {
        $pull : { contents : { 
            _id : objectId 
        }}
    }
    );
    return res.send("success");
};

