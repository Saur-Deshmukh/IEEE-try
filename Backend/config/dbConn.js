import mongoose from "mongoose";
import"dotenv/config"
import { logger } from "../utils/logger.js";
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
        logger.info('connected to database!!');
    } catch (error) {
        logger.error(error)
    }
}

export default dbConnect;