import express from 'express';

import authRoutes from './router/authroutes.js';
import messagesRoutes from './router/messagesroutes.js';
import userRoutes from './router/usersroutes.js'

import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectToMongodb from './db/mongodbconnect.js';
import { app, server } from './socket/socket.js';

dotenv.config();

// const app=express();
const PORT =process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
//app.use(express.urlencoded({ extended: true }));

app.use('/api/auth',authRoutes);
app.use('/api/messages',messagesRoutes);
app.use('/api/users',userRoutes)





server.listen(PORT,()=>{
    connectToMongodb();
    console.log(`Server is running on port ${PORT}`);
})

