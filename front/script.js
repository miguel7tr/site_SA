let cadastrarD = document.getElementById("cadastrarD")
let consultarD = document.getElementById("consultarD")
let listarD = document.getElementById("listarD")
let deletarD = document.getElementById("deletarD")
let atualizarD = document.getElementById("atualizarD")


let cadastrarFunc = document.getElementById("cadastrarFunc")
let consultarFunc = document.getElementById("consultarFunc")
let listarFunc = document.getElementById("listarFunc")
let atualizarFunc = document.getElementById("atualizarFunc")
let deletarFunc = document.getElementById("deletarFunc")


let cadastrarP = document.getElementById("cadastrarP")
let listarP = document.getElementById("listarP")
let consultarP = document.getElementById("consultarP")
let deletarP= document.getElementById("deletarP")
let atualizarP = document.getElementById("atualizarP")


let cadastrarFab = document.getElementById("cadastrarFab")
let listarFab = document.getElementById("listarFab")
let consultarFab = document.getElementById("consultarFab")
let deletarFab = document.getElementById("deletarFab")
let atualizarFab =document.getElementById("atualizarFab")

let res = document.getElementById("res")







    //--------------------------------------------------------
    //                       Doador
    //--------------------------------------------------------

cadastrarD.addEventListener('click',()=>{
    let codDoador = document.getElementById("codDoador").value
    let nomeDoador = document.getElementById('nomeDoador').value
    let cnpjDoador = document.getElementById('cnpjDoador').value
    let cpfDoador = document.getElementById('cpfDoador').value
    let enderecoDoador = document.getElementById('enderecoDoador').value
    let emailDoador = document.getElementById('emailDoador').value
    let telefoneDoador = document.getElementById('telefoneDoador').value
    let situacaoDoador = document.getElementById('situacaoDoador').value
    let codFuncionario = document.getElementById("codFuncionario").value

    const valores = {
        codDoador: codDoador,
        nomeDoador: nomeDoador,
        cnpjDoador: cnpjDoador,
        cpfDoador: cpfDoador,
        enderecoDoador: enderecoDoador,
        emailDoador: emailDoador,
        telefoneDoador: telefoneDoador,
        situacaoDoador: situacaoDoador,
        codFuncionario: codFuncionario
    }

        fetch('http://localhost:8080/doadores',{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(valores)
        })
        .then(resposta => resposta.text())
        .then(dados =>{
            console.log(dados)
        })
        .catch((err)=>console.error("ERRO NO SERVIDOR",err))
    })

    
    listarD.addEventListener('click', ()=>{
        fetch('http://localhost:8080/doadores')
        .then(resposta => resposta.json())
        .then(dados => {
            console.log(dados)
            res.innerHTML = "<ul>"
            dados.forEach(valores => {
              res.innerHTML += "<li>Código: " + valores.codDoador + "&emsp;" +
                               "Nome: " + valores.nomeDoador + "&emsp;"+ 
                               "Cnpj: " + valores.cnpjDoador+ "&emsp"+
                               "Cpf: " + valores.cpfDoador+ "&emsp"+  
                               "Endereço: " + valores.enderecoDoador+ "&emsp"+ 
                               "Email: " + valores.emailDoador+ "&emsp"+ 
                               "Telefone: " + valores.telefoneDoador+ "&emsp"+ 
                               "Situação: " + valores.situacaoDoador+ "&emsp"+"<br>" 
            })
        })
        .catch((err)=> console.error("ERRO",err))
    })

    consultarD.addEventListener('click', ()=>{
        let codDoador = Number(document.getElementById('codDoador').value)
    
        fetch(`http://localhost:8080/doadores/${codDoador}`)
        .then(resposta => resposta.json())
        .then(dados =>{
            res.innerHTML = "Código: " + dados.codDoador + "&emsp;" +
            "Nome: " + dados.nomeDoador + "&emsp;"+"<br>" 
            "Cnpj: " + dados.cnpjDoador+ "&emsp"+
            "Cpf: " + dados.cpfDoador+ "&emsp"+  //escrevi
            "Endereço: " + dados.enderecoDoador+ "&emsp"+ 
            "Email: " + dados.emailDoador+ "&emsp"+ 
            "Telefone: " + dados.telefoneDoador+ "&emsp"+ 
            "Situação: " + dados.situacaoDoador+ "&emsp"+"<br>" 
            })
            .catch((err)=> console.error("servidor não responde!",err))
        })


        let resp_apag = document.getElementById("resp_apag")
let resApagar = document.getElementById("resApagar")


deletarD.addEventListener('click', ()=>{
    let codDoador = documento.getElementById("codDoador").value

    fetch(`http://localhost:8080/doadores/${codDoador}`,{
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
    })
    .then(resp_apag => resp_apag.text()) 
    .then(dados => {
        console.log(dados);
        resp_apag = "dados apagados"
    })
    .catch((err) => console.error("Erro", err))
})
      
atualizarD.addEventListener('click',()=>{
    fetch(`http://localhost:8080/doadores/${codDoador}`,{
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(valores)
    })
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados);
        resp_att.innerHTML = "Código: "+ dados.codDoador + "&emsp;" +
        "Nome: " + dados.nomeDoador + "&emsp;"+"<br>" 
            "Cnpj: " + dados.cnpjDoador+ "&emsp"+
            "Cpf: " + dados.cpfDoador+ "&emsp"+  
            "Endereço: " + dados.enderecoDoador+ "&emsp"+ 
            "Email: " + dados.emailDoador+ "&emsp"+ 
            "Telefone: " + dados.telefoneDoador+ "&emsp"+ 
            "Situação: " + dados.situacaoDoador+ "&emsp"+"<br>" 
    })
    .catch((err)=> console.error("Erro", err))
})








    //--------------------------------------------------------
    //                       Funcionario
    //--------------------------------------------------------

    cadastrarFunc.addEventListener('click',()=>{
        let codFuncionario = document.getElementById("codFuncionario").value
        let nomeFuncionario = document.getElementById('nomeFuncionario').value
        let cargoFuncionario = document.getElementById('cnpjFuncionario').value
        let cpfFuncionario = document.getElementById('cpfFuncionario').value
        let telefoneFuncionario = document.getElementById('telefoneFuncionario').value
        let situacaoFuncionario = document.getElementById('situacaoFuncionario').value
    
    
        const valores = {
            codFuncionario: codFuncionario,
            nomeFuncionario: nomeFuncionario,
            cargoFuncionario: cargoFuncionario,
            cpfFuncionario: cpfFuncionario,
            telefoneFuncionario: telefoneFuncionario,
            situacaoFuncionario: situacaoFuncionario,
        }
    
            fetch('http://localhost:8080/funcionarios',{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(valores)
            })
            .then(resposta => resposta.text())
            .then(dados =>{
                console.log(dados)
            })
            .catch((err)=>console.error("ERRO NO SERVIDOR",err))
        })
        
        listarFunc.addEventListener('click', ()=>{
            fetch('http://localhost:8080/funcionarios')
            .then(resposta => resposta.json())
            .then(dados => {
                console.log(dados)
                res.innerHTML = "<ul>"
                dados.forEach(valores => {
                  res.innerHTML += "<li>Código: " + dados.codFuncionario + "&emsp;" +
                                   "Nome: " + dados.nomeFuncionario + "&emsp;"+
                                   "Cpf: " + dados.cpfFuncionario+ "&emsp"+  
                                   "Endereço: " + dados.enderecoFuncionario+ "&emsp"+ 
                                   "Email: " + dados.emailFuncionario+ "&emsp"+ 
                                   "Telefone: " + dados.telefoneFuncionario+ "&emsp"+ 
                                   "Situação: " + dados.situacaoFuncionario+ "&emsp"+"<br>" 
                })
            })
            .catch((err)=> console.error("ERRO",err))
        })

        consultarFunc.addEventListener('click', ()=>{
            let codFuncionario = Number(document.getElementById('codFuncionario').value)
        
            fetch(`http://localhost:8080/doadores/${codFuncionario}`)
            .then(resposta => resposta.json())
            .then(dados =>{
                res.innerHTML = "Código: " + dados.codFuncionario + "&emsp;" +
                "Nome: " + dados.nomeFuncionario + "&emsp;"+"<br>" 
                "Cnpj: " + dados.cnpjFuncionario+ "&emsp"+
                "Cpf: " + dados.cpfFuncionario+ "&emsp"+  //escrevi
                "Endereço: " + dados.enderecoFuncionario+ "&emsp"+ 
                "Email: " + dados.emailFuncionario+ "&emsp"+ 
                "Telefone: " + dados.telefoneFuncionario+ "&emsp"+ 
                "Situação: " + dados.situacaoFuncionario+ "&emsp"+"<br>" 
                })
                .catch((err)=> console.error("servidor não responde!",err))
            })
    
            deletarFunc.addEventListener('click', ()=>{
                let resp_apag = document.getElementById("resp_apag")
                let resApagar = document.getElementById("resApagar")
                let codFuncionario = documento.getElementById("codFuncionario").value
            
                fetch(`http://localhost:8080/doadores/${codFuncionario}`,{
                    method: "DELETE",
                    headers: {"Content-Type": "application/json"}
                })
                .then(resp_apag => resp_apag.text()) 
                .then(dados => {
                    console.log(dados);
                    resp_apag = "dados apagados"
                })
                .catch((err) => console.error("Erro", err))
            })
                
        atualizarFunc.addEventListener('click',()=>{
            fetch(`http://localhost:8080/doadores/${codFuncionario}`,{
                method: "PUT",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(valores)
            })
            .then(resposta => resposta.json())
            .then(dados => {
                console.log(dados);
                resp_att.innerHTML = "Código: "+ dados.codFuncionario + "&emsp;" +
                "Nome: " + dados.nomeFuncionario + "&emsp;"+"<br>" 
                    "Cnpj: " + dados.cnpjFuncionario+ "&emsp"+
                    "Cpf: " + dados.cpfFuncionario+ "&emsp"+  
                    "Endereço: " + dados.enderecoFuncionario+ "&emsp"+ 
                    "Email: " + dados.emailFuncionario+ "&emsp"+ 
                    "Telefone: " + dados.telefoneFuncionario+ "&emsp"+ 
                    "Situação: " + dados.situacaoFuncionario+ "&emsp"+"<br>" 
            })
            .catch((err)=> console.error("Erro", err))
        })
    
    





    //--------------------------------------------------------
    //                       Produto
    //--------------------------------------------------------



    cadastrarP.addEventListener('click',()=>{
        let codProduto = document.getElementById("codProduto").value
        let nomeProduto = document.getElementById("nomeProduto").value
        let descricaoProduto = document.getElementById("descricaoProduto").value
        let valorProduto = document.getElementById("valorProduto").value
        let quantidadeProduto = document.getElementById("quantidadeProduto").value
        let validadeProduto = document.getElementById("validadeProduto").value


        
        const valores = {
          codProduto: codProduto,
          nomeProduto: nomeProduto,
          descricaoProduto: descricaoProduto ,
          valorProduto: valorProduto,
          quantidadeProduto: quantidadeProduto,
          validadeProduto: validadeProduto

        }
    
            fetch(`http://localhost:8080/produtos`,{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(valores)
            })
            .then(resposta => resposta.text())
            .then(dados =>{
                console.log(dados)
            })
            .catch((err)=>console.error("ERRO NO SERVIDOR",err))
        })
    
        
        listarP.addEventListener('click', ()=>{
            fetch('http://localhost:8080/produtos')
            .then(resposta => resposta.json())
            .then(dados => {
                console.log(dados)
                res.innerHTML = "<ul>"
                dados.forEach(valores => {
                  resp.innerHTML += "<li>Código: " + valores.codProduto + "&emsp;" +
                                   "Nome: " + valores.nomeProduto + "&emsp;"+
                                   "Quantidade: " + valores.quantidadeProduto + "&emsp;"
                                   "Descrição: " + valores.descricaoProduto + "&emsp"
                                   "Valor: " + valores.valorProduto +  "&emsp"
                                   "Validade: " + valores.validadeProduto +  "&emsp"+ "<br>"
                })
            })
            .catch((err)=> console.error("ERRO",err))
        })
    
        consultarP.addEventListener('click', ()=>{
            let codProduto = Number(document.getElementById('codProduto').value)
        
            fetch(`http://localhost:8080/produtos/${codProduto}`)
            .then(resposta => resposta.json())
            .then(dados =>{
                resP.innerHTML += "<li>Código: " + valores.codProduto + "&emsp;" +
                "Nome: " + valores.nomeProduto + "&emsp;"+
                "Quantidade: " + valores.quantidadeProduto + "&emsp;"
                "Descrição: " + valores.descricaoProduto + "&emsp"
                "Valor: " + valores.valorProduto +  "&emsp"
                "Validade: " + valores.validadeProduto +  "&emsp"+ "<br>" 
            })
            .catch((err)=> console.error("servidor não responde!",err))
        })

        atualizarP.addEventListener('click',()=>{
            fetch(`http://localhost:8080/produtos/${codProduto}`,{
                method: "PUT",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(valores)
            })
            .then(resposta => resposta.json())
            .then(dados => {
                console.log(dados);
                resP_att.innerHTML += "<li>Código: " + valores.codProduto + "&emsp;" +
                "Nome: " + valores.nomeProduto + "&emsp;"+
                "Quantidade: " + valores.quantidadeProduto + "&emsp;"
                "Descrição: " + valores.descricaoProduto + "&emsp"
                "Valor: " + valores.valorProduto +  "&emsp"
                "Validade: " + valores.validadeProduto +  "&emsp"+ "<br>" 
            })
            .catch((err)=> console.error("Erro", err))
        })


            
        deletarP.addEventListener('click', ()=>{
            let resp_apag = document.getElementById("resp_apag")
            let resApagar = document.getElementById("resApagar")
            let codProduto = documento.getElementById("codProduto").value
        
            fetch(`http://localhost:8080/produtos/${codProduto}`,{
                method: "DELETE",
                headers: {"Content-Type": "application/json"}
            })
            .then(resp_apag => resp_apag.text()) 
            .then(dados => {
                console.log(dados);
                resp_apag = "dados apagados"
            })
            .catch((err) => console.error("Erro", err))
        })





       
    //--------------------------------------------------------
    //                       Fabricante
    //--------------------------------------------------------


        cadastrarFab.addEventListener('click',()=>{
            let codFabricante = document.getElementById("codFabricante")
            let nomeFabricante = document.getElementById("nomeFabricante")


            const valores = {
                codFabricante: codFabricante,
                nomeFabricante: nomeFabricante
    
            }
        
                fetch(`http://localhost:8080/fabricantes`,{
                    method: "POST",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(valores)
                })
                .then(resposta => resposta.text())
                .then(dados =>{
                    console.log(dados)
                })
                .catch((err)=>console.error("ERRO NO SERVIDOR",err))
            })
        
            
            listarP.addEventListener('click', ()=>{
                fetch('http://localhost:8080/fabricantes')
                .then(resposta => resposta.json())
                .then(dados => {
                    console.log(dados)
                    res.innerHTML = "<ul>"
                    dados.forEach(valores => {
                      resp.innerHTML += "<li>Código: "+ valores.codFabricante +"&emsp;" +
                                       "Nome: "+ valores.nomeFabricante +"&emsp;"+"+<br>"
                                       
                    })
                })
                .catch((err)=> console.error("ERRO",err))
            })
        
            consultarP.addEventListener('click', ()=>{
                let codFabricante = Number(document.getElementById('codFabricante').value)
            
                fetch(`http://localhost:8080/fabricantes/${codFabricante}`)
                .then(resposta => resposta.json())
                .then(dados =>{
                    resP.innerHTML += "<li>Código: " + dados.codFuncionario + "&emsp;" +
                    "Nome: " + dados.nomeFuncionario + "&emsp;"+ "<br>" 
                })
                .catch((err)=> console.error("servidor não responde!",err))
            })
    
            atualizarP.addEventListener('click',()=>{
                fetch(`http://localhost:8080/fabricantes/${codFabricante}`,{
                    method: "PUT",
                    headers: {"Content-Type":"application/json"},
                    body: JSON.stringify(valores)
                })
                .then(resposta => resposta.json())
                .then(dados => {
                    console.log(dados);
                    resP.innerHTML += "<li>Código: " + dados.codFuncionario + "&emsp;" +
                    "Nome: " + dados.nomeFuncionario + "&emsp;"+ "<br>"

                })
                .catch((err)=> console.error("Erro", err))
            })
    
    
                
            deletarP.addEventListener('click', ()=>{
                let resp_apag = document.getElementById("resp_apag")
                let resApagar = document.getElementById("resApagar")
                let codProduto = documento.getElementById("codProduto").value
            
                fetch(`http://localhost:8080/fabricantes/${codFabricante}`,{
                    method: "DELETE",
                    headers: {"Content-Type": "application/json"}
                })
                .then(resp_apag => resp_apag.text()) 
                .then(dados => {
                    console.log(dados);
                    resp_apag = "dados apagados"
                })
                .catch((err) => console.error("Erro", err))
            })


