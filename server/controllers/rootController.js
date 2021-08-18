import User from "../models/User";
import bcrypt from "bcrypt";

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

export const getLogout = (req, res) => {
    req.session.destroy();
    return res.json({ logoutIn : true });
};