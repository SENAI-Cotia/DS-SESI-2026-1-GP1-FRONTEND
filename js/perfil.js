const token = localStorage.getItem('token')

const user = JSON.parse(sessionStorage.getItem("user"))
if(user && user.role == 'admin') { // vai verificar se o user existe e se ele é ADMIN
    document.getElementById("gerentes-container").style.display = 'inline-block' //lá no html ele fica com style="display: none"
}



document.getElementById("nome-perfil").textContent =  user.nome
document.getElementById("foto-perfil").src = user.imagem


function sair(){
    sessionStorage.removeItem("token") //remove o token 
    sessionStorage.removeItem("user") //remove o user

    window.location.href = "login.html"
    }
