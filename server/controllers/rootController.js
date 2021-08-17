import User from "../models/User";

export const postJoin = async (req, res) => {
    const { email, username, password, password2 } = req.body;
    if(password !== password2){
        console.log("❌ password is wrong.");
        return res.status(400).send({ error : "password is wrong." });
    }
    const exists = await User.exists({$or: [{username}, {email}]});
    if(exists){
        console.log("❌ already using.");
        return res.status(400).send({ error : "username/email is already using."});
    }
    try{
        await User.create({
            email,
            username,
            password,
        });
        console.log("✅ Join Completion");
        return res.send("success");
    }catch(error){
        console.log("❌ something error");
        return res.status(400).send({ error : error.message });
    }
};
export const postLogin = (req, res) => {};
