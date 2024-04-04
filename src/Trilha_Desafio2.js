const ePrimo = (numero) => {
    if (numero <= 1) {
        return false;
    }

    for(let i = 2; i <= Math.sqrt(numero); i++){
        if(numero % i === 0){
            return false;
        }
    }

    return true;
}

const filtrarOsPrimos = (arrayDeNUmeros) => {
    return arrayDeNUmeros.filter(numero => ePrimo(numero));
}

const objNumerosPrimos = [2, 17, 4, 23, 10, 13, 8, 19, 21];
const novoArray = filtrarOsPrimos(objNumerosPrimos);

console.log(`Array original: ${objNumerosPrimos}`);
console.log(`Array de primos: ${novoArray}`);

console.log(objNumerosPrimos.length -1)