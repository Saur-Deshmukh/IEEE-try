import mongoose from "mongoose";
import { type } from "os";
const schema = mongoose.Schema;

const participantSchema = new schema({
    name :{
        type:String,
        required:true
    },
    uid:{
        type:String,
        required:true,
        unique:true
    },
    branch: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        unique :true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
});

export default mongoose.model('participant',participantSchema);