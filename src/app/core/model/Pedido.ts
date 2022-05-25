import { Produto } from './Produto';

export interface Pedido {
  id: number;
  idCliente: number;
  total: number;
  desconto: number;
  frete: number;
  totalAPagar: number;
  statusPedido: string;
  statusPagamento: string;
  statusEntrega: string;
  tamanho: string;


  produtos: Produto[];
}
