const token = sessionStorage.getItem("token")
const user = JSON.parse(sessionStorage.getItem("user"))

document.getElementById("nav-nome").textContent = user.nome


if(!token) {
    window.location.href= "login.html"
}


fetch("http://localhost:3000/produtos" , {
            headers: {'Authorization' : 'Bearer ' + token}
        })
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
            <td>${produto.preco}</td>
            <td>${produto.categoria}</td>
            <td>${produto.estoques[0]?.quantidade ?? 0}</td>
            <td>${produto.estoques[0]?.id_filial ?? "-"}</td>
        `

        tabela.appendChild(linha)
    })
})

function sair(){
    sessionStorage.removeItem("token") //remove o token 
    sessionStorage.removeItem("user") //remove o user

    window.location.href = "login.html"
    }
