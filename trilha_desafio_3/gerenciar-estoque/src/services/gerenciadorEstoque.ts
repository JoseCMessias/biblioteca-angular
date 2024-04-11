import Produto from "../models/produto";

export default class GerenciadorEstoque {
  produtos: Array<Produto>;

  constructor() {
    this.produtos = [];
  }

  adicionarEstoque(
    id: number,
    nome: string,
    preco: number,
    quantidade: number
  ) {
    if (Math.sign(id) !== -1) {
      const index = this.produtos.findIndex((produto) => produto.id === id);
      if (index < 0) {
        const produto = new Produto(id, nome, preco, quantidade);
        this.produtos.push(produto);
      } else {
        alert("O id do produto já existe em estoque");
      }
    } else {
      alert("O id não pode ser um número negativo");
    }
  }

  atualizarEstoque(
    id: number,
    nome: string,
    preco: number,
    quantidade: number
  ) {
    const index = this.produtos.findIndex((produto) => produto.id === id);
    if (index !== -1) {
      this.produtos[index].nome = nome;
      this.produtos[index].preco = preco;
      this.produtos[index].quantidade = quantidade;
    } else {
      alert("O id produto não existe");
    }
  }

  verificarEstoque() {
    if (this.produtos.length > 0) {
      return this.produtos;
    } else {
      alert("O estoque está vazio.");
    }
  }

  verificarPorId(id: number) {
    if (Math.sign(id) !== -1) {
      const produtoId = this.produtos.filter((produto) => produto.id === id);

      if (produtoId.length > 0) {
        return produtoId;
      } else {
        alert("O produto não existe no estoque!!");
      }
    }
  }

  calcularValor() {
    let total: number = 0;

    this.produtos.forEach((produto) => {
      total += produto.preco * produto.quantidade;
    });
    return `Valor total: ${total}`;
  }
}
