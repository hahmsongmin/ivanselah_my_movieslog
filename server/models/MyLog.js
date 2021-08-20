import mongoose from "mongoose";

const MyLogSchema = new mongoose.Schema({
    userId : {type: String, required: true},
    contents : [{
        createdAt : {type : Date, required: true, default: Date.now },
        logText : String, 
        logId : Number
    }],
});

const MyLog = mongoose.model("MyLog", MyLogSchema);

export default MyLog;