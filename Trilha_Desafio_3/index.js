import GerenciadorEstoque from './service/GerenciadorEstoque.js';

const gerenciador = new GerenciadorEstoque();

gerenciador.adicionarProduto(1, 'Camiseta', 20, 50);
gerenciador.adicionarProduto(2, "Calça", 50, 20);
gerenciador.adicionarProduto(3, "Meias", 10, 50);

gerenciador.atualizarProduto(1, "Camiseta", 25, 60);  

console.log(gerenciador.verificarEstoque());

console.log(`Valor total: $${gerenciador.calcularValorTotal()}`);
