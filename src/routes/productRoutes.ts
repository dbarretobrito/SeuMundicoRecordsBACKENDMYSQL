// routes/ProductRoutes.ts

import { Router } from 'express';
import * as ProductController from '../controllers/ProductController';
import { authenticateAdmin } from '../middlewares/authMiddleware';
import { formatProductName } from '../utils/formatProductName';  // Importe a função de formatação

const router = Router();

// Rotas protegidas com autenticação de admin
router.post('/products', authenticateAdmin, ProductController.createProductController);
router.put('/products/:id', authenticateAdmin, ProductController.updateProductController);
router.delete('/products/:id', authenticateAdmin, ProductController.deleteProductController);

// Rotas públicas para visualização
router.get('/products/:id', ProductController.getProductByIdController);

// Modificar a rota para garantir que o nome do produto seja formatado
router.get('/product/:name', (req, res, next) => {
  try {
    const formattedName = formatProductName(req.params.name); // Formate o nome do produto
    req.params.name = formattedName; // Atribua o nome formatado ao `req.params.name`
    next(); // Chame o próximo middleware (que será o controller)
  } catch (error) {
    next(error); // Caso haja um erro, passe para o próximo middleware de erro
  }
}, ProductController.getProductByNameController);

router.get('/products', ProductController.getAllProductsController);

export default router;
