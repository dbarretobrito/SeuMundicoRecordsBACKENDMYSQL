import { Router } from 'express';
import * as ProductController from '../controllers/ProductController';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

const router = Router();

router.post('/products', upload.single('front_image'), ProductController.createProductController); // Altere para createProductController
// Outras rotas para update, delete, etc.
router.put('/products/:id', ProductController.updateProductController); // Rota para atualização
router.delete('/products/:id', ProductController.deleteProductController); // Rota para deletar
router.get('/products/:id', ProductController.getProductByIdController); // Rota para obter produto por ID
router.get('/products', ProductController.getAllProductsController); // Rota para obter todos os produtos

export default router;
