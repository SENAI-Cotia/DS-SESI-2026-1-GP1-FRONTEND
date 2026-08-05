const user = JSON.parse(sessionStorage.getItem("user"))
document.getElementById("nav-nome").textContent = user.nome
const token = sessionStorage.getItem("token")


document.getElementById("container-label-cadastro").addEventListener('submit', async (e) => {
    e.preventDefault()

    const novoProduto = {
        nome: document.getElementById("nome").value,
        categoria: document.getElementById("categoria").value,
        preco: document.getElementById("venda").value,
        descricao: document.getElementById("descricao").value,
        codigo_barra: document.getElementById("codigo").value,
        estoque: document.getElementById("estoque").value,
        imagem: document.getElementById("url").value
    }

    fetch("http://localhost:3000/cadastro/produtos", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        },
        body: JSON.stringify(novoProduto)
        
    }).then((response) => {
        if(!response.ok){
            alert("Ocorreu um erro ao cadastrar o produto!")
        } else {
            alert("Produto cadastrado com sucesso!")
            window.location.href = 'produtos.html'
            e.target.reset()
        }
    })
})

function sair(){
    sessionStorage.removeItem("token") //remove o token 
    sessionStorage.removeItem("user") //remove o user

    window.location.href = "login.html"
    }
