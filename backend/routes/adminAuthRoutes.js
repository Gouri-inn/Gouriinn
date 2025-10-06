// 📁 routes/adminAuthRoutes.js
import express from 'express';
import { loginAdmin } from '../controllers/adminController.js';
import { getAllContacts } from '../controllers/contactController.js';
import { verifyAdmin } from '../middleware/verifyAdmin.js';

const router = express.Router();

// ✅ ADMIN LOGIN WITH 2FA
router.post('/login', loginAdmin);


// ✅ PROTECTED: GET ALL CONTACTS
router.get('/contacts', verifyAdmin, getAllContacts);

export default router;
