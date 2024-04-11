import GerenciadorEstoque from "./services/gerenciadorEstoque";
const geranciador = new GerenciadorEstoque();
geranciador.adicionarEstoque(1, "Carro 1", 10, 60);
geranciador.adicionarEstoque(2, "Carro 2", 20, 60);
geranciador.atualizarEstoque(-2, "Carro 1", 20, 100);
console.log(geranciador.verificarPorId(2));
console.log(geranciador.verificarEstoque());
console.log(geranciador.calcularValor());
