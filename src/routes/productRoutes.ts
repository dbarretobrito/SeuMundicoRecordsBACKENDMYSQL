import { Router } from 'express';
import * as ProductController from '../controllers/ProductController';
import multer from 'multer';
import { authenticateAdmin } from '../middlewares/authMiddleware'; // Importe o middleware de autenticação

const upload = multer({ dest: 'uploads/' });

const router = Router();

// Proteger as rotas de criação, atualização e exclusão com o middleware
router.post('/products', authenticateAdmin, upload.single('front_image'), ProductController.createProductController);
router.put('/products/:id', authenticateAdmin, ProductController.updateProductController);
router.delete('/products/:id', authenticateAdmin, ProductController.deleteProductController);

// As rotas de visualização não precisam de autenticação
router.get('/products/:id', ProductController.getProductByIdController);
router.get('/products', ProductController.getAllProductsController);

export default router;
