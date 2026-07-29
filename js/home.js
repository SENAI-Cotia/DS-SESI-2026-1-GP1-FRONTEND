const token = localStorage.getItem('token')

const user = JSON.parse(sessionStorage.getItem("user"))

document.getElementById("nome-home").textContent =  user.nome
document.getElementById("nav-nome").textContent = user.nome


function sair(){
    sessionStorage.removeItem("token") //remove o token 
    sessionStorage.removeItem("user") //remove o user

    window.location.href = "login.html"
    }
