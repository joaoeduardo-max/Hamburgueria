import models from '../models/index.js';
const { Pedido } = models;

const PedidoController = {
  async index(req, res) {
    try {
      const pedidos = await Pedido.findAll({
        include: [
          { association: 'entrega' },
          { association: 'avaliacao' }
        ]
      });
      return res.json(pedidos);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};

export default PedidoController;