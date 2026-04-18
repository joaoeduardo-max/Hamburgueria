import express from 'express';
import categoriaRoutes from './routes/categoriaRoutes.js';
import avaliacaoRoutes from './routes/avaliacaoRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import entregaRoutes from './routes/entregaRoutes.js';
import produtoRoutes from './routes/produtoRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hamburgueria API Rodando!');
});

app.use('/categoria', categoriaRoutes);
app.use('/avaliacao', avaliacaoRoutes);
app.use('/pedido', pedidoRoutes);
app.use('/entrega', entregaRoutes);
app.use('/produto', produtoRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});