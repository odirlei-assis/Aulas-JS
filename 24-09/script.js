// let nome1 = "Levi";
// let nome2 = "Duda";
// let nome3 = "Gustavo";
// let nome4 = "Bernardo";

// ---------- ARRAY
//              0       1       2           3
// let nomes = ["Levi", "Duda", "Gustavo", "Bernardo"];//Criação do Array/Lista

// console.log(nomes);//Mostra a lista completa na mesma linha

// console.log(nomes[1]);//Mostra o item da posição mencionada entre colchetes

// nome4 = "Ana";
// nomes[3] = "Ana"; //Altera o valor na posição especificada

// console.log(nomes.length);//Mostra o tamanho do Array

// Exercício 07 — Lista de frutas
// Crie um array chamado frutas contendo 5 frutas.
// Depois:
// 1.	Exiba o array completo. 
// 2.	Exiba a primeira fruta. 
// 3.	Exiba a terceira fruta. 
// 4.	Exiba a quantidade de frutas. 

// Exercício 08 — Lista de cidades
// Crie um array contendo 5 cidades brasileiras.
// Depois:
// 1.	Exiba o array completo. 
// 2.	Altere a segunda cidade. 
// 3.	Exiba a segunda cidade 
// 4.	Exiba a quantidade de cidades. 



// ---------- ARRAY + ESTRUTURA DE REPETIÇÂO ----------
let cidades = ["São Paulo", "Santo André", "São Caetano", "Mauá", "Pindamonhangaba", "Salvador"];
// console.log(cidades[0]);
// console.log(cidades[1]);
// console.log(cidades[2]);
// console.log(cidades[3]);
// console.log(cidades[4]);

// for (let index = 0; index < 5; index++) {
//     console.log(cidades[index]);
// }

// for (let index = 0; index < cidades.length; index++) {
//     console.log(cidades[index]);
// }

// Exercicios
// Exercício 09 — Nomes
// Crie um array com 6 nomes.
// Utilize um for para exibir todos os nomes no console.

// Exercício 10 — Preços
// Crie um array contendo 5 preços de produtos.
// Utilize um for para exibir todos os preços.

// Exercício 11 — Produtos e Preços
// Crie dois arrays, um contendo 5 nomes de produtos e
// outro contendo 5 preços de produtos.
// Utilize um for para exibir todos os nomes e preços.
// let produtos = ["Shampoo", "Vassoura", "Creme", "Perfume", "Diabo Verde",];
// let valores = [20, 15, 30, 150, 58];

// for (let index = 0; index < produtos.length; index++) {
//     console.log("Produto: " + produtos[index] +" - valor: R$"+ valores[index] + ",00");

// }





// ---------- Estrutura de Repetição + Estrutura de Decisão ----------
// for (let index = 0; index <= 10; index++) {//contando de 0 a 10

//     if (index >= 5) {// verificando se é maior ou igual a 5
//         console.log(index);//mostra o numero
//     }
// }


// let numeros = [5, 9, 10, 2, 20, 32, 7, 17, 9, 12];
// for (let index = 0; index < numeros.length; index++) {//lendo o array

//     if (numeros[index] >= 10) {// verificando se é maior ou igual a 10
//         console.log(numeros[index]);//mostra o numero do array
//     }
// }



let numeros = [5, 9, 10, 2, 20, 32, 7, 17, 9, 12];
for (let index = 0; index < numeros.length; index++) {//lendo o array
    let sobra = numeros[index] % 2;

    if (sobra == 0) {
        console.log("O numero " + numeros[index] +" é par");
        
    } else {
        console.log("O numero " + numeros[index] +" é impar");
    }
}

// Exercício 01 — Analisando notas
// Crie um array com 8 notas.
// Utilize for para percorrer as notas e if/else para informar:
// •	Nota maior ou igual a 7 → "Aprovado" 
// •	Nota menor que 7 → "Reprovado"

// Exercício 02 — Temperaturas
// Crie um array contendo 7 temperaturas.
// Percorra o array e classifique cada temperatura:
// •	Maior que 30 → "Quente" 
// •	Entre 20 e 30 → "Agradável" 
// •	Menor que 20 → "Frio"