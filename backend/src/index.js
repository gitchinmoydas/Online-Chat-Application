import express from 'express';
import authRoutes from './routes/auth.route.js'; // Adjust the path as necessary
import dotenv from 'dotenv';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import messageRoutes from './routes/message.route.js'; // Adjust the path as necessary
import cors from 'cors';
import{app,server} from './lib/socket.js'; // Adjust the path as necessary      
dotenv.config();



const PORT = process.env.PORT;
app.use(express.json({ limit: '10mb' })); // or higher if needed
// app.use(express.json()); // or higher if needed
// app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend URL
    credentials: true, // Allow credentials to be sent
}));
app.use('/api/auth/', authRoutes)
app.use('/api/messages/', messageRoutes)



server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});