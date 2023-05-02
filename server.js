/*
 * Reto #3
 * ¿ES UN NÚMERO PRIMO?
 * Fecha publicación enunciado: 17/01/22
 * Fecha publicación resolución: 24/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */



function checkPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        const divResult = number % i;
        if (divResult === 0) {
            return false;
        }
    }
    return true;
}

function getPrimeNumbers(initialNumber, finalNumber) {
    let primeNumbers = "";
    for (let i = initialNumber; i <= finalNumber; i++){
        if(checkPrime(i))
        {
            primeNumbers += i + ", ";
        }
    }
    console.log(primeNumbers.slice(0, -2));
    return primeNumbers;
}
getPrimeNumbers(1, 100);
