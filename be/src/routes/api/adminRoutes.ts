import { authenticateJWT } from "~/middlewares/auth";
import express from 'express';
import memberController from "~/controllers/admin/memberController";
import membershipController from "~/controllers/admin/membershipController";
import appointmentController from "~/controllers/admin/appointmentController";
import trainerController from "~/controllers/admin/trainerController";
import paymentController from "~/controllers/admin/paymentController";
import promotionController from "~/controllers/admin/promotionController";
import memberReportController from "~/controllers/admin/reports/memberReportController";
import revenueReportController from "~/controllers/admin/reports/revenueReportController";
import reportController from "~/controllers/admin/reportController";

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

// Trainer routes
router.get('/trainers', trainerController.getAllTrainers); // Lấy tất cả huấn luyện viên
router.get('/trainers/:id', trainerController.getTrainerById); // Lấy thông tin huấn luyện viên theo ID
router.post('/trainers', trainerController.createTrainer); // Tạo huấn luyện viên mới
router.put('/trainers/:id', trainerController.updateTrainer); // Cập nhật thông tin huấn luyện viên
router.delete('/trainers/:id', trainerController.deleteTrainer); // Xoá huấn luyện viên
router.patch('/trainers/:id/schedule', trainerController.updateTrainerSchedule); // Cập nhật lịch huấn luyện viên
router.get('/trainers/:id/availability', trainerController.getTrainerAvailability); // Lấy lịch trống của huấn luyện viên
router.get('/trainers/stats', trainerController.getTrainerStats); // Lấy thống kê huấn luyện viên
router.patch('/trainers/:id/status', trainerController.toggleTrainerStatus); // Toggle package status

//appointments
router.get('/appointments', appointmentController.getAllAppointments);
router.get('/appointments/:appointmentId', appointmentController.getAppointmentById);
router.patch('/appointments/:appointmentId/status', appointmentController.updateAppointmentStatus);
router.get('/appointments/stats', appointmentController.getAppointmentStats);

// Payment management routes
router.get('/payments', paymentController.getAllPayments);
router.get('/payments/statistics', paymentController.getPaymentStatistics);
router.get('/payments/:id', paymentController.getPaymentById);
router.patch('/payments/:id/status', paymentController.updatePaymentStatus);
router.get('/members/:memberId/payments', paymentController.getPaymentsByMemberId);

// Promotion management routes
router.get('/promotions', promotionController.getAllPromotions);
router.get('/promotions/stats', promotionController.getPromotionStats);
router.get('/promotions/:id', promotionController.getPromotionById);
router.post('/promotions', promotionController.createPromotion);
router.put('/promotions/:id', promotionController.updatePromotion);
router.delete('/promotions/:id', promotionController.deletePromotion);
router.get('/promotions/:id/effectiveness', promotionController.getPromotionEffectiveness);
router.get('/packages/:packageId/promotions/active', promotionController.getActivePromotionsForPackage);
router.patch('/promotions/statuses/update', promotionController.updatePromotionStatuses);

// Thống kê thành viên
router.get('/reports/members/stats', memberReportController.getMemberStats);
router.get('/reports/members/comprehensive', memberReportController.getComprehensiveMemberReport);
router.get('/reports/members/export/excel', memberReportController.exportMemberReportToExcel);
router.get('/reports/members/export/pdf', memberReportController.exportMemberReportToPDF);


// Doanh thu theo gói
router.get('/reports/revenue/packages', revenueReportController.getRevenueByPackagesController);
router.get('/reports/revenue/time-series', revenueReportController.getRevenueTimeSeriesController);
router.get('/reports/revenue/analytics', revenueReportController.getAdvancedAnalyticsController);
router.get('/reports/revenue/comprehensive', revenueReportController.getComprehensiveRevenueReportController);
router.get('/reports/revenue/export/excel', revenueReportController.exportRevenueReportToExcelController);
router.get('/reports/revenue/export/pdf', revenueReportController.exportRevenueReportToPDFController);
router.get('/reports/revenue/dashboard', revenueReportController.getRevenueDashboardController);


// Thống kê tổng hợp dashboard
router.get('/reports/dashboard/stats', reportController.getDashboardStats);

// Phân tích nâng cao
router.get('/reports/advanced-analytics', reportController.getAdvancedAnalytics);
export default router;