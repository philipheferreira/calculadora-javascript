var variavel;
var resultado;

function botao(num){ 
	variavel = document.calc.tela.value += num;
}

function reset(){ 
	document.calc.tela.value = '';
}
function calcula(){ 
	resultado = eval(variavel);
	document.calc.tela.value = resultado;
}