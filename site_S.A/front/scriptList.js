let listarD = document.getElementById("listarD")
let listarFunc = document.getElementById("listarFunc")
let listarP = document.getElementById("listarP")
let listarFab = document.getElementById("listarFab")
let listarEntrega = document.getElementById("listarEntrega")

let respList = document.getElementById("respList")




listarFunc.addEventListener('click', ()=>{
    respList.innerHTML = ''
    
      fetch('http://localhost:8080/funcionario')
      .then(resposta => resposta.json())
      .then(dados => {
          console.log(dados)
          dados.forEach(dados => {
            respList.innerHTML += "►Cod. Funcionário: " + dados.codFuncionario + "&emsp;"+ "<br>"+
           "Nome: " + dados.nomeFuncionario +"&emsp;"+ "<br>"+
           "Cpf: " + dados.cpfFuncionario+"&emsp;"+   "<br>"+
           "Telefone: " + dados.telefoneFuncionario+ "&emsp;"+"<br>"+
           "Situação: " + dados.situacaoFuncionario + "&emsp;"+"<br>" + "<br>"

       })
           
      })
      .catch((err)=> console.error("ERRO",err))
      
  })




listarD.addEventListener('click', ()=>{
respList.innerHTML = ''
  fetch('http://localhost:8080/doador')
  .then(resposta => resposta.json())
  .then(dados => {
      console.log(dados)
      dados.forEach(dados => {
        respList.innerHTML += "►Cod. Doador: " + dados.codDoador  +"&emsp;"+ "<br>"+
      "Nome: " + dados.nomeDoador +"&emsp;" +  "<br>"+
      "Cnpj: " + dados.cnpjDoador +"&emsp;"+  "<br>"+
      "Cpf: " + dados.cpfDoador +"&emsp;"+  "<br>"+
      "Endereço: " + dados.enderecoDoador+"&emsp;" +  "<br>"+
      "Email: " + dados.emailDoador+"&emsp;" +  "<br>"+
      "Telefone: " + dados.telefoneDoador+"&emsp;" +  "<br>"+
      "Situação: " + dados.situacaoDoador + "&emsp;" + "<br>"+"<br>"
      })

  })
  .catch((err)=> console.error("ERRO",err))
})





listarP.addEventListener('click', (e)=>{
e.preventDefault();
respList.innerHTML = ''
fetch('http://localhost:8080/produto')
.then(resposta => resposta.json())
.then(dados => {
   console.log(dados)
   dados.forEach(dados => {
    respList.innerHTML += "►Cod. Prod: " + dados.codProduto + "&emsp;" + "<br>"+
                      "Nome: " + dados.nomeProduto + "&emsp;"+ "<br>"+
                      "Quantidade: " + dados.quantidadeProduto + "&emsp;"+ "<br>"+
                      "Descrição: " + dados.descricaoProduto + "&emsp;"+ "<br>"+
                      "Valor: " + dados.valorProduto +  "&emsp;"+ "<br>"+
                      "Validade: " + dados.validadeProduto +  "&emsp;"+ "<br>" + "<br>"
   })
})
.catch((err)=> console.error("ERRO",err))
})
listarFab.addEventListener('click', (e)=>{
e.preventDefault();
respList.innerHTML = ""

fetch('http://localhost:8080/fabricante')
.then(resposta => resposta.json())
.then(dados => {
  console.log(dados)
  dados.forEach(dados => {

    respList.innerHTML += "►Cod. Fabricante: " + dados.codFabricante + "&emsp;"+"<br>"+
     "Cod. Funcionario: " + dados.codFuncionario + "&emsp;"+ "<br>"+
     "Nome: " + dados.nomeFabricante +"&emsp;" +"<br>" + "<br>"
 })

})
.catch((err)=> console.error("ERRO",err))
})



listarEntrega.addEventListener("click", ()=>{
respList.innerHTML = ""
fetch("http://localhost:8080/entrega")
.then(resposta => resposta.json())
.then(dados => {
console.log(dados);
dados.forEach(dados => {
respList.innerHTML += "►Cod. Entrega: "+ dados.codEntrega+ "&emsp;"+"<br>"+
"Nome do Produto: "+ dados.nomeProdutoEntrega+ "&emsp;"+"<br>"+
"Data da Entrega: "+ dados.dataEntrega+ "&emsp;"+"<br>"+
"Responsável: "+ dados.responsavelEntrega+ "&emsp;"+"<br>"+
"Quantidade: "+ dados.quantidadeEntrega+ "&emsp;"+"<br>"+
"Cod. Funcionário: "+ dados.funcionarioId+ "&emsp;"+"<br>"+
"Estoque: "+ dados.estoqueId+ "&emsp;"+"<br>"+"<br>"
})
})
})