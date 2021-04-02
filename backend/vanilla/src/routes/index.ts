import { Router } from 'express';
import UserRouter from './Books';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/books', UserRouter);

// Export the base-router
export default router;
