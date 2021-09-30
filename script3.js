let nomes = ["Gildson", "Rafaela", "Rafael"];

console.log(nomes.includes('Gildson'));


//includes procurar o que desejamos no array e retorna true ou false


let nome = "Gildson";

console.log(nome.endsWith('n'));

//endsWith analiza se termina e o startsWith analiza se começa com o parâmetro desejado e retorna com true ou false


let nomes1 = ["Gildson", "Rafaela", "Rafael"];

console.log(nomes1.some(nomes1 => nomes1 === "Gildson"));

//some serve para verificar se existe pelo menos um

let nomes2 = [
	{nome: 'Gildson', idade: 32},
	{nome: 'Rafaela', idade: 28}

];

console.log(nomes2.every(nome => nome.idade >= 15));

//every serve para comparar todos
