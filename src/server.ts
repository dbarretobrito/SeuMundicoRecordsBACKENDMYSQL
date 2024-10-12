import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(productRoutes);

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
