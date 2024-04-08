import Produto from '../model/Produto.js';

export default class GerenciadorEstoque {
    constructor(){
        this.produtos = [];
    }

    adicionarProduto(id, nome, preco, quantidade){
        const produto = new Produto(id, nome, preco, quantidade);
        this.produtos.push(produto);
    }

    atualizarProduto(id, nome, preco, quantidade){
       const index = this.produtos.findIndex(produto => produto.id === id);

       if (index !== -1) {
            this.produtos[index].nome = nome;
            this.produtos[index].preco = preco;
            this.produtos[index].quantidade = quantidade;
       } else {
        console.log("Produto não encontrado.");
       }
    }

    verificarEstoque(){
        return this.produtos;
    }

    calcularValorTotal(){
        let total = 0; 

        this.produtos.forEach(produto => {
            total += produto.preco * produto.quantidade;
        });

        return total;
    }
}