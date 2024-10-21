import knex from '../database/connection';

interface Product {
  id?: number;
  name: string;
  front_image: string;
  back_image?: string;
  detail_image?: string;
  detail2_image?: string;
  description?: string;
  price: number;
  year?: number;
  tags?: string[];
  created_at?: string; // Adicionando a propriedade created_at
  updated_at?: string; // Adicionando a propriedade updated_at
}

export const createProduct = async (product: Product) => {
  const [id] = await knex('products').insert(product);
  return id;
};

export const updateProduct = async (id: number, product: Product) => {
  // Removendo 'created_at' para não ser atualizado
  const { created_at, ...productData } = product;

  const productToUpdate = {
    ...productData,
    tags: JSON.stringify(product.tags), // Converte array para string JSON
    updated_at: new Date().toISOString().slice(0, 19).replace('T', ' '), // Atualiza o updated_at no formato correto
  };

  return knex('products').where({ id }).update(productToUpdate);
};

export const deleteProduct = async (id: number) => {
  return knex('products').where({ id }).del();
};

export const getProductById = async (id: number) => {
  return knex('products').where({ id }).first();
};

export const getAllProducts = async () => {
  return knex('products').select('*');
};
