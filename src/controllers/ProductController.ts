import { Request, Response } from 'express';
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
  getAllProducts,
} from '../models/Product';

export const createProductController = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      name,
      price,
      back_image,
      detail_image,
      detail2_image,
      description,
      year,
      tags,
    } = req.body;

    let front_image: string | undefined;
    if (req.file) {
      front_image = req.file.path;
    } else if (req.body.front_image) {
      front_image = req.body.front_image;
    }

    if (!front_image) {
      res.status(400).json({ message: "O campo 'front_image' é obrigatório." });
      return;
    }

    const product = {
      name,
      price,
      front_image,
      back_image,
      detail_image,
      detail2_image,
      description,
      year,
      tags,
    };

    const id = await createProduct(product);
    res.status(201).json({ id, message: 'Produto criado com sucesso' });
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Erro ao criar produto', error: error.message });
    } else {
      res.status(500).json({ message: 'Erro desconhecido ao criar produto' });
    }
  }
};

export const updateProductController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const product = req.body;

  try {
    const result = await updateProduct(Number(id), product);
    if (result) {
      res.status(200).json({ message: 'Produto atualizado com sucesso' });
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error: unknown) {
    console.error('Erro ao atualizar produto:', error);
    if (error instanceof Error) {
      res.status(500).json({ message: 'Erro ao atualizar produto', error: error.message });
    } else {
      res.status(500).json({ message: 'Erro desconhecido ao atualizar produto' });
    }
  }
};


export const deleteProductController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const result = await deleteProduct(Number(id));
    if (result) {
      res.status(200).json({ message: 'Produto deletado com sucesso' });
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Erro ao deletar produto', error: error.message });
    } else {
      res.status(500).json({ message: 'Erro desconhecido ao deletar produto' });
    }
  }
};


export const getProductByIdController = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const product = await getProductById(Number(id));
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Produto não encontrado' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Erro ao obter produto', error: error.message });
    } else {
      res.status(500).json({ message: 'Erro desconhecido ao obter produto' });
    }
  }
};


export const getAllProductsController = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Erro ao obter produtos', error: error.message });
    } else {
      res.status(500).json({ message: 'Erro desconhecido ao obter produtos' });
    }
  }
};

