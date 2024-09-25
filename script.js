/** ----- Método 1: sort() ----- */

/** Criando a lista **/
const nomes1 = ["Flávio", "Millie", "Rafa", "Júlia", "Barbara", "Ana"];

/** Clonando a lista com Spread */

const nomesOriginal = [...nomes1];

/** Criando o método sort() **/
const sortedNomes = nomes1.sort();

var lista1 = document.querySelector(".sortListaNomes");
var botao1 = document.querySelector(".sortButton");
var botao2 = document.querySelector(".sortOriginalButton");

botao1.addEventListener("click", function(){
    lista1.textContent = sortedNomes;

})

botao2.addEventListener("click", function(){
    lista1.textContent = nomesOriginal;

})

/** ------------------------------------ **/

/** ----- Método 2: filter() ----- */

/** Criando a lista */

const numeros1 = [112,53,13,346,28,71,5];

/** Clonando a lista com Spread */

const numeros1Original = [...numeros1];

/** Criando o método filter() */

const paresNumeros1 = numeros1.filter(element => element%2 == 0);
const imparesNumeros1 = numeros1.filter(element => element%2 !== 0);

var lista2 = document.querySelector(".filterListaNumeros");
var botao3 = document.querySelector(".filterParButton");
var botao4 = document.querySelector(".filterImparButton");
var botao5 = document.querySelector(".filterOriginalButton");

botao3.addEventListener("click", function(){
    lista2.textContent = paresNumeros1;
})

botao4.addEventListener("click", function(){
    lista2.textContent = imparesNumeros1;
})

botao5.addEventListener("click", function(){
    lista2.textContent = numeros1Original;
})

/** ------------------------------------ */

/** ----- Método 3: map() ----- */

/** Criando a lista */

const numeros2 = [66,42,83,21,90];

/** Clonando a lista com Spread */

const numeros2Original = [...numeros2];

/** Criando o método map() */

const mapx10Numeros2 = numeros2.map(x10Function);

function x10Function (num) {
    return num * 10;
}

var lista3 = document.querySelector(".mapListaNumeros");
var botao6 = document.querySelector(".mapMultiplicaButton");
var botao7 = document.querySelector(".mapOriginalButton");

botao6.addEventListener("click", function(){
    lista3.textContent = mapx10Numeros2;
})

botao7.addEventListener("click", function(){
    lista3.textContent = numeros2Original;
})

/** ------------------------------------ */

/** Método 4: reduce() */

/** Criando a lista */

const numeros3 = [51,22,43,87,99];

/** Clonando a lista com Spread */

const numeros3Original = [...numeros3];

/** Criando o método reduce() */

const reduceNumeros3 = numeros3.reduce(getSoma, 0);

function getSoma(total, num) {
    return total + Math.round(num);
}

var lista4 = document.querySelector(".reduceListaNumeros");
var botao8 = document.querySelector(".reduceSomaButton");
var botao9 = document.querySelector(".reduceOriginalButton");

botao8.addEventListener("click", function(){
    lista4.textContent = reduceNumeros3;
})

botao9.addEventListener("click", function(){
    lista4.textContent = numeros3Original;
})