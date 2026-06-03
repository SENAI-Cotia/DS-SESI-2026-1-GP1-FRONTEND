fetch("http://localhost:3000/produtos")
.then(response => {
    if(!response.ok){
        alert("Ocorreu um erro")
    }
    return response.json()
})
.then(data => {
    const tabela = document.getElementById("linha-estoque")
    console.log(data)

    data.forEach(function(produto){

        const linha = document.createElement("tr")

        linha.innerHTML = `
            <td>${produto.codigo_barra}</td>
            <td>${produto.nome}</td>
            <td>${produto.preco}
            <td>${produto.categoria}</td>
            <td>${produto.estoques[0]?.quantidade}</td>
            <td>${produto.estoques[0]?.id_filial}</td>
        `

        tabela.appendChild(linha)
    })
})

