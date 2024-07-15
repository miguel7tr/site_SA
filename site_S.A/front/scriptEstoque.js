//     //--------------------------------------------------------
//     //                       Estoque
//     //--------------------------------------------------------

let listarEstoques = document.getElementById("listarEstoques")
let estoqueListR = document.getElementById("estoqueListR")

let buscarNomeProdut = document.getElementById("buscarNomeProdut")
let estoqueConsultaE = document.getElementById("estoqueConsultaE")



buscarNomeProdut.addEventListener("click", ()=>{

    estoqueConsultaE.innerHTML = ""
    let nomeProduto = document.getElementById("nomeProdutoList").value
  

    
    fetch(`http://localhost:8080/estoque/${nomeProduto}`)
    
    
    .then(resposta => resposta.json())
    .then(dados => {
      console.log(dados);
      
        estoqueConsultaE.innerHTML += "►Código: " + dados.codProduto + "&emsp;"+"<br>"+
        "Nome: " + dados.nomeProduto + "&emsp;"+"<br>"+
        "Quantidade: " +dados.quantidadeProduto + "&emsp;"+ "<br>"
  
      })
  
      .catch((err)=> console.error("Erro", err))
      
  })




listarEstoques.addEventListener("click", (e)=>{
  estoqueListR.innerHTML = ""
  e.preventDefault();
  fetch("http://localhost:8080/estoque")
  .then(resp => resp.json())
  .then(dados =>{
    console.log(dados)

    dados.forEach(dados => {
      estoqueListR.innerHTML += "►Código: " + dados.codProduto + "&emsp;"+"<br>"+
      "Nome: " + dados.nomeProduto + "&emsp;"+"<br>"+
      "Quantidade: " +dados.quantidadeProduto + "&emsp;"+ "<br>"+"<br>"

    })
  })
  .catch((err)=> console.error("Erro", err))
})



