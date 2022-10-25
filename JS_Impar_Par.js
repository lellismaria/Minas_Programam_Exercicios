/*
  Crie um programa que verifique se um determinado número é impar ou par!
  Caso seja ímpar retorne "O número X é ímpar"
  Caso seja par retorne "O número X é ímpar"
  Dica do sucesso: todo número par é divisível por 2.
*/

var n = prompt("Digite um numero");
var total=n/2;
if(n%2 == 0){
	alert("Par");
}else{
	alert("Impar");
}
alert(total);
