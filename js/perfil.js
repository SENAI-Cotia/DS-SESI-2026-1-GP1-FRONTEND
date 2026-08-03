// 1. Pega o usuário salvo no login
const user = JSON.parse(sessionStorage.getItem("user"));
const token = sessionStorage.getItem('token');

document.getElementById("nomePerfil").textContent = user.nome


// 2. Verifica se o usuário e o token existem
if (!token || !user) {
    // Se não estiver logado, manda pra tela de login
    window.location.href = '../pages/login.html'
} else {
    // 3. Preenche os inputs com os dados do usuário (ajuste os IDs se necessário)
    const emailInput = document.getElementById("email");
    const nomeInput = document.getElementById("nome");
    const senhaInput = document.getElementById("senha")

    if (emailInput) emailInput.value = user.email || '';
    if (nomeInput) nomeInput.value = user.nome || '';
    if (senhaInput) senhaInput.value = user.senha || '';

    const fotoPerfil = document.getElementById("fotoperfil");
    fotoPerfil.src = user.imagem;

    
    if (user.role === 'ADMIN') {
        const gerentesContainer = document.getElementById("gerentes-container");
        gerentesContainer.style.display="inline-block"
    }


    if (user.role === 'gerente') {
        const addBtn = document.getElementById("addGerentes");
        addBtn.style.display = "none";
   
    
}
    
}

console.log(JSON.parse(sessionStorage.getItem("user")));

fetch("http://localhost:3000/gerentes" , {
            headers: {'Authorization' : 'Bearer ' + token}
        })
.then(response => {
    if(!response.ok){
        alert("Ocorreu um erro")
    }
    return response.json()
})
.then(data => {
    document.getElementById("id=nome-gerente") = user.imagem
        
  
})

function sair() {
    sessionStorage.removeItem("token"); // Remove o token 
    sessionStorage.removeItem("user");  // Remove o user

    window.location.href = "login.html";
}