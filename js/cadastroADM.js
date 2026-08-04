const user = JSON.parse(sessionStorage.getItem("user"));
const token = sessionStorage.getItem("token")
document.getElementById("nav-nome").textContent = user.nome


document.getElementById("container-label-cadastro").addEventListener('submit', async (e) => {
    e.preventDefault()

    const novoPerfil = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        role: document.getElementById("roles").value,
        filial: document.getElementById("filial").value,
        imagem: document.getElementById("url").value
    }

    fetch("http://localhost:3000/cadastro/gerentes", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + token
        },
        body: JSON.stringify(novoPerfil)
        
    }).then((response) => {
        if(!response.ok){
            alert("Ocorreu um erro ao cadastrar o gerente!")
        } else {
            alert("gerente cadastrado com sucesso!")
            window.location.href = 'gerentes.html'
            e.target.reset()
        }
    })
})

function sair(){
    sessionStorage.removeItem("token") //remove o token 
    sessionStorage.removeItem("user") //remove o user

    window.location.href = "login.html"
}
