const token = sessionStorage.getItem('token')
if(!token) {
    window.location.href= "login.html"
}


const user = JSON.parse(sessionStorage.getItem("user"))

document.getElementById("nav-nome").textContent = user.nome




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
    if (!data || !Array.isArray(data)) return // proteção extra

    const tabela = document.getElementById("linha-estoque")

    data.forEach(function(gerente) {
        const linha = document.createElement("tr")
        linha.innerHTML = `
            <td>${gerente.imagem}</td>
            <td>${gerente.nome}</td>
            <td>${gerente.email}</td>
            <td class ="ultima-coluna"> 
                <button class="btn-editar-gerentes" type ="submit"></button>
                <button class ="btn-excluir-gerentes" type ="submit"></button>
            </td>
        `
        tabela.appendChild(linha)
    })
})





function sair(){
    sessionStorage.removeItem("token") //remove o token 
    sessionStorage.removeItem("user") //remove o user

    window.location.href = "login.html"
    }
