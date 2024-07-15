//--------------------------------------------------------
//                Teste Proporcao de Tela
//--------------------------------------------------------

function adjustLayout() {
  const screenWidth = window.innerWidth;
  if (screenWidth <= 480) {
    // Ajustar layout para dispositivos móveis
    document.body.classList.add('mobile');
  } else if (screenWidth <= 767) {
    // Ajustar layout para tablets
    document.body.classList.add('tablet');
  } else {
    // Ajustar layout para desktops
    document.body.classList.add('desktop');
  }
}

window.addEventListener('resize', adjustLayout);
adjustLayout();



let cadastrarD = document.getElementById("cadastrarD")

let cadastrarFunc = document.getElementById("cadastrarFunc")

let cadastrarP = document.getElementById("cadastrarP")

let cadastrarFab = document.getElementById("cadastrarFab")

let cadastrarEntrega = document.getElementById("cadastrarEntrega")
let respEntrega = document.getElementById("respEntrega")


let res = document.getElementById("respList")









//--------------------------------------------------------
//                       Funcionario
//--------------------------------------------------------



cadastrarFunc.addEventListener('click', (e) => {
  e.preventDefault();

  let nomeFuncionario = document.getElementById('nomeFuncionario').value
  let cargoFuncionario = document.getElementById('cargoFuncionario').value
  let cpfFuncionario = document.getElementById('cpfFuncionario').value
  let telefoneFuncionario = document.getElementById('telefoneFuncionario').value
  let situacaoFuncionario = document.getElementById('situacaoFuncionario').value

  const valores = {
    nomeFuncionario: nomeFuncionario,
    cargoFuncionario: cargoFuncionario,
    cpfFuncionario: cpfFuncionario,
    telefoneFuncionario: telefoneFuncionario,
    situacaoFuncionario: situacaoFuncionario,
  }

  fetch('http://localhost:8080/funcionario',{
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(valores)
  })
  .then(resposta => resposta.json())
  .then(valores =>{
    console.log(valores)
  })
  .catch((err)=>console.error("ERRO NO SERVIDOR",err))
});



//     //--------------------------------------------------------
//     //                       Doador
//     //--------------------------------------------------------

cadastrarD.addEventListener('click',(e)=>{
    e.preventDefault();

    let nomeDoador = document.getElementById('nomeDoador').value
    let cnpjDoador = document.getElementById('cnpjDoador').value
    let cpfDoador = document.getElementById('cpfDoador').value
    let enderecoDoador = document.getElementById('enderecoDoador').value
    let emailDoador = document.getElementById('emailDoador').value
    let telefoneDoador = document.getElementById('telefoneDoador').value
    let situacaoDoador = document.getElementById('situacaoDoador').value
    let codFuncionario = Number(document.getElementById("codFuncionarioD").value)

    const valores = {

        nomeDoador: nomeDoador,
        cnpjDoador: cnpjDoador,
        cpfDoador: cpfDoador,
        enderecoDoador: enderecoDoador,
        emailDoador: emailDoador,
        telefoneDoador: telefoneDoador,
        situacaoDoador: situacaoDoador,
        codFuncionario: codFuncionario
    }

        fetch('http://localhost:8080/doador',{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(valores)
        })
        .then(resposta => resposta.json())
        .then(dados =>{
            console.log(dados)
        })
        .catch((err)=>console.error("ERRO NO SERVIDOR",err))
    })



//     //--------------------------------------------------------
//     //                       Produto
//     //--------------------------------------------------------



cadastrarP.addEventListener('click',()=>{

   let nomeProduto = document.getElementById("nomeProduto").value
   let descricaoProduto = document.getElementById("descricaoProduto").value
   let valorProduto = document.getElementById("valorProduto").value
   let quantidadeProduto = Number(document.getElementById("quantidadeProduto").value)
   let validadeProduto = (document.getElementById("validadeProduto").value)
   let doadorId = Number(document.getElementById("codDoadorProd").value )     
   let fabricanteId =Number(document.getElementById("codFabricanteProd").value)  
   let funcionarioId = Number(document.getElementById("codFuncionarioProd").value)
  
   
   const dados = {
     nomeProduto: nomeProduto,
     descricaoProduto: descricaoProduto ,
     valorProduto: valorProduto,
     quantidadeProduto: quantidadeProduto,
     validadeProduto: validadeProduto,
     doadorId: doadorId ,
     fabricanteId:  fabricanteId,
     funcionarioId: funcionarioId
   }
  
   fetch("http://localhost:8080/produto", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
      body: JSON.stringify(dados)
  
  })
  .then(
    resposta => resposta.json()) 
  .then(valores => {
    console.log(valores);
  })
  .catch((err)=> console.error("Erro", err))
      })



//     //--------------------------------------------------------
//     //                       Fabricante
//     //--------------------------------------------------------

cadastrarFab.addEventListener('click', (e) => {
  e.preventDefault();

  let nomeFabricante = document.getElementById('nomeFabricante').value
  let codFuncionario = Number(document.getElementById("codFuncionarioFab").value)
  
  const dados = {
    nomeFabricante: nomeFabricante,
    codFuncionario: codFuncionario
  }

  fetch('http://localhost:8080/fabricante',{
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(dados)
  })
  .then(resposta => resposta.json())
  .then(valores =>{
    console.log(valores)
  })
  .catch((err)=>console.error("ERRO NO SERVIDOR",err))
})


//     //--------------------------------------------------------
//     //                       Entrega
//     //--------------------------------------------------------




cadastrarEntregas.addEventListener("click", (e)=>{
  e.preventDefault();

  let nomeProdutoEntrega = document.getElementById("nomeProdutoEntrega").value
  let dataEntrega = document.getElementById("dataEntrega").value
  let responsavelEntrega = document.getElementById("responsavelEntrega").value
  let quantidadeEntrega = document.getElementById("quantidadeEntrega").value
  let funcionarioId = document.getElementById("codFuncionarioEntrega").value
  let estoqueId = document.getElementById("codEstoqueEntrega").value

  const dados = {
    nomeProdutoEntrega: nomeProdutoEntrega,
    dataEntrega: dataEntrega,
    responsavelEntrega: responsavelEntrega,
    quantidadeEntrega: quantidadeEntrega,
    funcionarioId: funcionarioId,
    estoqueId: estoqueId

  }
  fetch("http://localhost:8080/entrega",{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(dados)
  })
  .then(
    console.log(dados),
    resposta => resposta.json()
  )
  .then(dados => {
    console.log(dados);
  })
  .catch((err)=> console.error("Erro", err))

})