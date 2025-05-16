import express from 'express';
import { authenticateJWT } from '~/middlewares/auth';
import {
  getCurrentProfile,
  updateProfile,
  updateAvatar,
  updateEmail,
  getMemberById,
  deactivateAccount
} from '~/controllers/user/memberController';
import { memberUpdateValidationRules } from '~/utils/validators/memberValidator';

const router = express.Router();
router.use(authenticateJWT);// All these routes require authentication

// Member profile routes
router.get('/profile', getCurrentProfile);
router.put('/profile', memberUpdateValidationRules(), updateProfile);
router.put('/profile/avatar', updateAvatar);
router.put('/profile/email', updateEmail);
router.post('/deactivate', deactivateAccount);