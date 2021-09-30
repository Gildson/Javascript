function cadastroPessoa(info){
	let novosDados = {
		...info,
		cargo: 'Programador',
		status: 1,
		codigo: '28758425'
	};
	
	return novosDados;
}

console.log(cadastroPessoa({nome: 'Gildson', sobrenome: 'Bezerra', idade: 32, anoInicio: 2021}));


//operando arrays

const lista = [1, 2, 3, 4, 5, 6];

const novaLista = lista.map(function(item){
	return item * 5;
});

console.log(novaLista);


//function(item, index), o index é a posição do item.

const soma = lista.reduce(function(total, proximo){
	return total + proximo;
});

console.log(soma);


const find = lista.find(function(item){
	return item === 6;
});

console.log(find);

//se não existe no array manda um undefined



//função anominas
const soma1 = lista.reduce((total, proximo) => {
	return total + proximo;
});

console.log(soma1);


//ou, apenas uma linha

const soma2 = lista.reduce((total, proximo) => total + proximo );

console.log(soma2);

