import Produto from "../models/produto";
export default class GerenciadorEstoque {
    constructor() {
        this.produtos = [];
    }
    adicionarEstoque(id, nome, preco, quantidade) {
        const index = this.produtos.findIndex((produto) => produto.id === id);
        if (index < 0) {
            const produto = new Produto(id, nome, preco, quantidade);
            this.produtos.push(produto);
        }
        else {
            alert("O id do produto já existe em estoque");
        }
    }
    atualizarEstoque(id, nome, preco, quantidade) {
        const index = this.produtos.findIndex((produto) => produto.id === id);
        if (index !== -1) {
            this.produtos[index].nome = nome;
            this.produtos[index].preco = preco;
            this.produtos[index].quantidade = quantidade;
        }
        else {
            alert("O id produto não existe");
        }
    }
    verificarEstoque() {
        if (this.produtos.length > 0) {
            return this.produtos;
        }
        else {
            alert("Estoque vazio.");
        }
    }
    verificarPorId(id) {
        const produtoId = this.produtos.filter((produto) => produto.id === id);
        if (produtoId.length > 0) {
            return produtoId;
        }
        else {
            alert("O produto não existe no estoque!!");
        }
    }
    calcularValor() {
        let total = 0;
        this.produtos.forEach((produto) => {
            total += produto.preco * produto.quantidade;
        });
        return `Valor total: ${total}`;
    }
}
