import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes'; // Ajuste o caminho conforme necessário

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', productRoutes); // Você pode mudar a base da rota como preferir

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
