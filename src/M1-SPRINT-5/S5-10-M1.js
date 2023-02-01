//Adição
function add(num1, num2){
  return num1+=num2
}
console.log(add(2,4))

//Multiplicação
function multiply(num3, num4){
  let soma = 0
  for(let i = 0; i < num4; i++){
      soma = add(soma, num3)
  }
  return soma
}
console.log(multiply(6,8))

//Potência
function power(x,n){
  let potencia = 1
  for(let i = 0; i < n; i++){
      potencia =  multiply(potencia, x)
  }
  return potencia
}
console.log(power(2,8))

//Fatorial
function fatorial(num5){
  let fat = 0
  for(let i = num5-1; i >= 1; i--){
      fat = fat + multiply(i, num5)
  }
  return fat
}
console.log(fatorial(4))