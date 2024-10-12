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
  tags?: string;
}

export const createProduct = async (product: Product) => {
  const [id] = await knex('products').insert(product);
  return id;
};

export const updateProduct = async (id: number, product: Product) => {
  return knex('products').where({ id }).update(product);
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
