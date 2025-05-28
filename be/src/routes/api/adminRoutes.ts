import { authenticateJWT } from "~/middlewares/auth";
import express from 'express';
import memberController from "~/controllers/admin/memberController";
import membershipController from "~/controllers/admin/membershipController";
import appointmentController from "~/controllers/admin/appointmentController";

const router = express.Router();

// All these routes require authentication
router.use(authenticateJWT);

// Member management routes
router.get('/members/stats', memberController.getMemberStats);
router.post('/members', memberController.createMember);
router.get('/members', memberController.getAllMembers);
router.get('/members/:memberId', memberController.getMemberById);
router.put('/members/:memberId', memberController.updateMember);
router.patch('/members/:memberId/status', memberController.updateMemberStatus);
router.delete('/members/:memberId', memberController.deleteMember);

// Membership routes
router.get('/memberships/stats', membershipController.getMembershipStats);
router.get('/memberships', membershipController.getAllMemberships);
router.get('/membership/:membershipId', membershipController.getMembershipById);
router.delete('/membership/delete', membershipController.deleteMembership);


//appointments
router.get('/appointments', appointmentController.getAllAppointments);
router.get('/appointments/:appointmentId', appointmentController.getAppointmentById);
router.patch('/appointments/:appointmentId/status', appointmentController.updateAppointmentStatus);
router.get('/appointments/stats', appointmentController.getAppointmentStats);
export default router;