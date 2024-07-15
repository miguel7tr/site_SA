
let deletarD = document.getElementById("deletarD")
let deletarFunc = document.getElementById("deletarFunc")

let deletarP= document.getElementById("deletarP")
let deletarFab = document.getElementById("deletarFab")
let resDelFunc = document.getElementById("resDelFunc")
let resDelDoa = document.getElementById("resDelDoa")
let resDelFab = document.getElementById("resDelFab")
let resDelProd = document.getElementById("resDelProd")
let resDelEntr = document.getElementById("resDelEntr")

deletarFunc.addEventListener('click', ()=>{
  
    let codFuncionario = Number(document.getElementById("codFuncionarioDel").value)
    console.log(codFuncionarioDel);
    fetch(`http://localhost:8080/funcionario/${codFuncionario}`,{
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    })
    .then(resposta=> resposta.text())              
    .then(dados => {
        console.log(dados);
        resDelFunc.innerHTML = "Dados Apagados"
    })
    
    .catch((err) => console.error("Erro", err))
            })
deletarD.addEventListener('click', ()=>{
    let codDoador = document.getElementById("codDoadorDel").value

    fetch(`http://localhost:8080/doador/${codDoador}`,{
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    })
    .then(resposta => resposta.text()) 
    .then(dados => {
        console.log(dados);
        resDelDoa.innerHTML = "Dados Apagados"
    })
    .catch((err) => console.error("Erro", err))
})
deletarFab.addEventListener('click', (e)=>{
e.preventDefault();

let codFabricante = Number(document.getElementById("codFabricanteDel").value)

  fetch(`http://localhost:8080/fabricante/${codFabricante}`,{
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
  })
  .then(resposta => resposta.text()) 
  .then(dados => {
      console.log(dados);
      resDelFab.innerHTML = "Dados Apagados"
  })
  .catch((err) => console.error("Erro", err))
})