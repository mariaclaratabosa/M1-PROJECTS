//Exerício 1
function renderUpToTwenty(){
  let str = ''
  for (let i=0; i<=20; i++){
      if(1==20){
          str = str + i
      } else{
          str = str + i + ', '
      }
  }
  return str
}
console.log(renderUpToTwenty())

//Exercício 2
function tenInTenToAHundred(){
  for (let i=10; i<=100; i+=10)
  console.log(i)
}
tenInTenToAHundred()

//Exercício 3
function oddUpToTwenty(){
  for (let i=1; i<=20; i++){
      if (i%2 == 1){
          console.log(i)  
      }
  }
}
oddUpToTwenty() 

//Exercício 4
function evenUpToTwenty(){
  const n = 20
  for (let i=0; i<=n; i++){
      if(i%2 == 0){
          console.log(i)
      }
  }
}
evenUpToTwenty()

//Exercício 5
function fromNegativeToPositive(){
  let i = 10
  while(i<=0){
      console.log(i)
      i++
  }
}
fromNegativeToPositive()

//Exercício 6
function inDescendingDirection() {
  for (i=10; i>=0; i--){
      console.log(i)
  }  
}
inDescendingDirection()

//Exercício 7
function toSquare(){
  for (i=1; i<=10; i++){
      console.log(i*i)
  }
  }
toSquare()
