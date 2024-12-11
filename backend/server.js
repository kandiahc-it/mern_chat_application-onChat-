import express from 'express';

import authRoutes from './router/authroutes.js';
import messagesRoutes from './router/messagesroutes.js';
import userRoutes from './router/usersroutes.js'
import path from 'path';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectToMongodb from './db/mongodbconnect.js';
import { app, server } from './socket/socket.js';

dotenv.config();

// const app=express();
const PORT =process.env.PORT || 5000;
const __dirname=path.resolve();
app.use(express.json());
app.use(cookieParser());
//app.use(express.urlencoded({ extended: true }));

app.use('/api/auth',authRoutes);
app.use('/api/messages',messagesRoutes);
app.use('/api/users',userRoutes)
app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
});


server.listen(PORT,()=>{
    connectToMongodb();
    console.log(`Server is running on port ${PORT}`);
})

