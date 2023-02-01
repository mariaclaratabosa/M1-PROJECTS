function inserir(string){
  let lista = []
  lista.slice(0, 9)
  if(string.length < 7){
      lista = lista + lista.splice(0, 0, string)
      console.log(`Elemento inserido com sucesso, a lista agora é: ${lista}`)
  } else {
      console.log('Não foi possível inserir esse valor')
  }
}
inserir('Maria')