let consultarD = document.getElementById("consultarD")
let consultarFunc = document.getElementById("consultarFunc")
let consultarP = document.getElementById("consultarP")
let consultarFab = document.getElementById("consultarFab")
let buscarEntrega = document.getElementById("buscarEntrega")

let respConsultarFunc = document.getElementById("respConsultarFunc")
let respEntrega = document.getElementById("respEntrega")
let respConsultarFab = document.getElementById("respConsultarFab")
let respConsultarD = document.getElementById("respConsultarD")
let resBuscEntr = document.getElementById("resBuscEntr")




 consultarFunc.addEventListener('click', ()=>{
          respConsultarFunc.innerHTML = ""
            let codFuncionario = Number(document.getElementById('codFuncionario').value)
        
            fetch(`http://localhost:8080/funcionario/${codFuncionario}`)
            .then(resposta => resposta.json())
            .then(dados =>{
              respConsultarFunc.innerHTML = "►Cod. Funcionário: " + dados.codFuncionario + "&emsp;"+ "<br>"+
              "Nome: " + dados.nomeFuncionario +"&emsp;"+ "<br>"+
              "Cpf: " + dados.cpfFuncionario+"&emsp;"+   "<br>"+
              "Telefone: " + dados.telefoneFuncionario+ "&emsp;"+"<br>"+
              "Situação: " + dados.situacaoFuncionario + "&emsp;"+"<br>" + "<br>"
                })
                .catch((err)=> console.error("servidor não responde!",err))
            })
 consultarD.addEventListener('click', ()=>{

        let codDoador = Number(document.getElementById('codDoador').value)
        respConsultarD.innerHTML = ''
        fetch(`http://localhost:8080/doador/${codDoador}`)
        .then(resposta => resposta.json())
        .then(dados =>{
            respConsultarD.innerHTML = "►Cod. Doador: " + dados.codDoador  +"&emsp;"+ "<br>"+
            "Nome: " + dados.nomeDoador +"&emsp;" +  "<br>"+
            "Cnpj: " + dados.cnpjDoador +"&emsp;"+  "<br>"+
            "Cpf: " + dados.cpfDoador +"&emsp;"+  "<br>"+
            "Endereço: " + dados.enderecoDoador+"&emsp;" +  "<br>"+
            "Email: " + dados.emailDoador+"&emsp;" +  "<br>"+
            "Telefone: " + dados.telefoneDoador+"&emsp;" +  "<br>"+
            "Situação: " + dados.situacaoDoador + "&emsp;" + "<br>"
            })
            .catch((err)=> console.error("servidor não responde!",err))
        })


consultarFab.addEventListener('click', (e)=>{
  e.preventDefault();
let codFabricante = Number(document.getElementById('codFabricante').value)
respConsultarFab.innerHTML = ''
fetch(`http://localhost:8080/fabricante/${codFabricante}`)
 .then(resposta => resposta.json())
.then(dados =>{
  respConsultarFab.innerHTML += "►Cod. Fabricante: " + dados.codFabricante + "&emsp;"+"<br>"+
  "Nome: " + dados.nomeFabricante +"&emsp;" +"<br>" + "<br>"

 })
.catch((err)=> console.error("servidor não responde!",err))
 })
buscarEntrega.addEventListener("click", ()=>{
  resBuscEntr.innerHTML = ""
  let codEntrega = document.getElementById("codEntrega").value
  fetch(`http://localhost:8080/entrega/${codEntrega}`)
  .then(resposta => resposta.json())
  .then(dados => {
    console.log(dados);
    resBuscEntr.innerHTML += "►Cod. Entrega: "+ dados.codEntrega+ "&emsp;"+"<br>"+
    "Nome do Produto: "+ dados.nomeProdutoEntrega+ "&emsp;"+"<br>"+
    "Data da Entrega: "+ dados.dataEntrega+ "&emsp;"+"<br>"+
    "Responsável: "+ dados.responsavelEntrega+ "&emsp;"+"<br>"+
    "Quantidade: "+ dados.quantidadeEntrega+ "&emsp;"+"<br>"+
    "Cod. Funcionário: "+ dados.funcionarioId+ "&emsp;"+"<br>"+
    "Estoque: "+ dados.estoqueId+ "&emsp;"+"<br>"
  })
  .catch((err)=> console.error("servidor não responde!",err))

})


