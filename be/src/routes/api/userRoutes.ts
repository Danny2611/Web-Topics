import express from 'express';
import { authenticateJWT } from '~/middlewares/auth';
import memberController from '~/controllers/user/memberController';
import membershipController from '~/controllers/user/membershipController';
import appointmentController from '~/controllers/user/appointmentController';

//valid
import { memberUpdateValidationRules } from '~/utils/validators/memberValidator';
import { registerPackage } from '~/controllers/user/packageController';
const router = express.Router();
router.use(authenticateJWT);// All these routes require authentication

// Member profile routes
router.get('/profile', memberController.getCurrentProfile);
router.put('/profile', memberUpdateValidationRules(),  memberController.updateProfile);
router.put('/profile/avatar',  memberController.updateAvatar);
router.put('/profile/email',  memberController.updateEmail);
router.post('/deactivate',  memberController.deactivateAccount);

// membership Routes
router.get('/training-locations', membershipController.getMemberTrainingLocations);
router.post('/packages/register', registerPackage);
router.get('/my-package', membershipController.getMemberships);
router.get('/my-package-active', membershipController.getMembershipsActive);
router.post('/my-package/detail', membershipController.getMembershipById);
router.patch('/my-package/pause', membershipController.pauseMembership);
router.patch('/my-package/resume', membershipController.resumeMembership);
router.get('/my-package/infor-membership', membershipController.getInforMembershipDetails);

// Route lịch hẹn
router.get('/appointments/next-week', appointmentController.getUpcomingAppointments);
router.post('/appointments', appointmentController.createAppointment); // Tạo lịch hẹn
router.get('/my-schedule', appointmentController.getMemberSchedule);// Lấy danh sách lịch hẹn đã xác nhận của hội viên
router.get('/appointments',appointmentController. getAllMemberAppointments); // Lấy danh sách lịch hẹn của hội viên
router.get('/appointments/:appointmentId', appointmentController.getAppointmentById); // Lấy danh sách lịch hẹn của hội viên
router.delete('/:appointmentId/cancel', appointmentController.cancelAppointment); // Hủy lịch hẹn
router.put('/:appointmentId/complete', appointmentController.completeAppointment);
router.put('/:appointmentId/reschedule', appointmentController.rescheduleAppointment); // Đổi lịch hẹn
router.post('/appointments/check-availability', appointmentController.checkTrainerAvailability); // Kiểm tra lịch trống của huấn luyện viên
