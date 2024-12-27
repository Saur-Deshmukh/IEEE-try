import participant from "../models/participant.js";
import { logger } from "../utils/logger.js";

const registerParticipant = async (req,res) => {
    try {
        const {name, uid, branch, phoneNumber, email}= req.body;
        if (!name || !uid || !branch || !phoneNumber || !email){
            return res.status(400).json({message:'All Feilds are required'});
        }
        const existingUid = await participant.findOne({ uid });
        if (existingUid) {
            return res.status(400).json({ message: 'UID already registered' });
        }

        const existingEmail = await participant.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        const existingPhone = await participant.findOne({ phoneNumber });
        if (existingPhone) {
            return res.status(400).json({ message: 'Phone number already registered' });
        }
        const result =  await participant.create({
            name:name,
            uid:uid,
            branch:branch,
            phoneNumber:phoneNumber,
            email:email
        });
        res.status(201).json({message:"registered sucessfully!!!"});
    } catch (error) {
        logger.error(error);
        res.status(500).json({message:'Internal Server Error'})
    }
    
}

export default registerParticipant;