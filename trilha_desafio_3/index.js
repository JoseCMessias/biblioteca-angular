import GerenciadorEstoque from './service/gerenciadorEstoque.js';

const gerenciador = new GerenciadorEstoque();

gerenciador.adicionarProduto(1, "Camisa", 20, 50);
gerenciador.adicionarProduto(2, "Calças", 50, 20);
gerenciador.adicionarProduto(3, "Meias", 10, 50);

gerenciador.atualizarProduto(3, "Meias", 35, 70);  

console.log(gerenciador.verificarEstoque(1));

console.log(`Valor total: $${gerenciador.calcularValorTotal()}`);
