function snapCrackle(maxValue){
  let str = ''
  for (let i = 1; i<=maxValue; i++){
      if (i%2 != 0 && i%5 == 0){
          str = str + 'SnapCrackle' 
      } else if (i%2 != 0){
          str = str + 'Snap' 
      } else if (i%5 == 0){
          str = str + 'Crackle' 
      } else {
          str = str + i 
      }
      if (i < maxValue){
          str = str + ', '
      }
  }
  return str

}
console.log(snapCrackle(15))
