// 1
const nome = "Messias";
const idadeAtual = 16;
const altura = 1.73;
const peso = 60;

//1.2
console.log(nome);
console.log(idadeAtual);
console.log(altura);
console.log(peso);

// 1.3
console.log(`Olá meu nome ${nome}, tenho ${idadeAtual}, ${altura} e ${peso}Kg`);

// 1.4
const idade_daqui_5_anos = idadeAtual + 5;
const imc = peso / (Math.pow(altura, 2));

// 1.5, 1.6, 1.7
console.log("Idade: " + idade_daqui_5_anos);
console.log("Meu IMC" + imc);

// 2
const idade =+ idadeAtual;

if (idade > 13 && idade < 17) {
    console.log('Você é adolescente.')
}
if (idade >= 18) {
    console.log('Você é maior de idade.');
}
if (idade <= 13){
    console.log('Você é uma criança.')
}

// 3
let numero = 40;

if (numero >= 0) {
    while (numero <= 40 & numero >= 0) {
        console.log(numero)
        numero--;
    }
}
else{
    console.log('O número informado não é um valor válido.')
}

// 4
let x = 1;

while (x <= 100) {
    console.log(x);
    x++;

    if (x === 100) {
        while (x >= 0) {
            console.log(x);
            x--;
        }
    }

    if (x < 0) {
        return;
    }
}