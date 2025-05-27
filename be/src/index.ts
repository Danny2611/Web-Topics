// export default app;

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import passport from 'passport';


// config
import connectDB  from './config/db';
import corsConfig from './config/cors';
import './config/passport'; // Import cấu hình OAuth
import cookieParser from 'cookie-parser'; // Đọc và xử lý cookie từ request

// Import scheduled jobs
import { initScheduledJobs } from './services/user/appointmentService';
import { initScheduledMembershipJobs } from './services/user/membershipService';
import { initScheduledWorkoutJobs } from './services/user/workoutService';
import { initScheduledTrainerJobs } from './services/user/trainerService';

//middleware
import {errorHandler} from './middlewares/errorHandler';

// routes
import authRoutes from './routes/api/authRoutes';
import publicRoutes from "./routes/api/publicRoutes";
import userRoutes from "./routes/api/userRoutes";
// import adminRoutes from '~/routes/api/adminRoutes';



dotenv.config(); // Load biến môi trường từ file .env
const PORT = process.env.PORT ; // Lấy PORT từ .env, nếu không có thì dùng 5000

const app = express();

connectDB();

// Initialize scheduled jobs after database connection
initScheduledJobs();
initScheduledWorkoutJobs();
initScheduledMembershipJobs();
initScheduledTrainerJobs();
console.log('Scheduled jobs initialized');


app.use(express.json());
app.use(passport.initialize());
app.use(cors(corsConfig.current));
app.use(errorHandler);
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/public', express.static('public'));
app.use('/api/auth', authRoutes);
app.use("/api/user", userRoutes);
// app.use("/api/admin", adminRoutes);
app.use("/api/public", publicRoutes);
export default app;
