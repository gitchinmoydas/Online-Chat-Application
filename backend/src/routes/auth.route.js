import express from "express";
import {signup,login,logout, updateProfile, checkAuth} from "../controllers/auth.controller.js"; // Adjust the path as necessary
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post('/login',login);
router.post('/signup',signup);

router.get('/logout',logout);
router.put('/update-profile',protectRoute,updateProfile);
router.get('/check',protectRoute,checkAuth);

export default router;
