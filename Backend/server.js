import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import "dotenv/config"
import mongoose from 'mongoose';

import  dbConnect  from './config/dbConn.js';
import { logger } from './utils/logger.js';
import registerRouter from './routers/registerRouter.js';



dbConnect();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
    credentials: true 
}));

app.get('/',(req,res)=>{
    res.send('<h1> Hello </h1>');
})

app.use('/register',registerRouter);

mongoose.connection.once('open',()=>{
    app.listen(PORT,()=>logger.info(`Server running on port ${PORT}`));
})

