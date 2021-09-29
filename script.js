function entrar(){
	
	var area = document.getElementById('login3');
	var texto = prompt('Digite seu nome?');
	
	//comparação para saber se foi escrito algo
	if(texto == '' || texto == null){
		alert('Digite seu nome novamente');
		login3.innerHTML = 'Bem vindo ...';
	}else{
		login3.innerHTML = 'Bem vindo ' + texto;
	}
		
}

//pode usar no innerHTML a variável do js ou id do html
function entrar2(nome, idade){
	
	var area = document.getElementById('login4');
	var texto = prompt('Digite seu sobrenome?');
	
	if(texto == '' || texto == null){
		alert('Digite seu sobrenome novamente');
		area.innerHTML = 'Bem vindo ...';
	}else{
		area.innerHTML = 'Bem vindo ' + nome + " " + texto + " " + idade;
	}

}

//loop while = Enquanto
x = 0;
while(x < 10){
	document.write("</br> O valor do x eh:" + x);
	x++;
}

document.write("</br></br>");


//loop for = para

for(i = 0; i < 10; i++){
		document.write("</br> O valor do i eh:" + i);
}

document.write("</br></br>");

//Switch = escolha

document.write("</br> Escolha seu pedido: </br>");
document.write("</br> 0 - Sorvete </br>");
document.write("</br> 1 - Agua </br>");
document.write("</br> 2 - Acai </br>");

function pedir(){
	
	//O prompt gera uma string
	y = prompt("O que deseja pedir");
	
	switch(y){
	case "0":
		document.write("Sorvete");
		break;
	case "1":
		document.write("Agua");
		break;
	case "2":
		document.write("Acai");
		break;
	default:
		document.write("Nao temos esse item");
		break;
}	
}

function temporizador(){
	document.write("Executando...</br>");
}
//temporizador de tempo em tempo(function, tempo(ms))
//setInterval(temporizador, 1000)


//temporizador de execução unica(function, tempo(ms))
//setTimeout(temporizador, 1000);








