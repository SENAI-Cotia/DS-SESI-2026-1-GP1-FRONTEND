    function verSenha() {
        const inputSenha = document.getElementById("input-senha");
    const olhoSenha = document.getElementById("olho-senha")

    if (inputSenha.type ===  "password") {
        inputSenha.type = "text"
        olhoSenha.style.backgroundImage = "url(/assets/icons/olhoAberto.svg)"
        olhoSenha.style.backgroundRepeat = "no-repeat"
        olhoSenha.style.backgroundPosition = "center"
        olhoSenha.style.backgroundImage = "contain"

        console.log("mostrando senha 👁️")
    } else {
        inputSenha.type = "password"
        olhoSenha.style.backgroundImage = "url(/assets/icons/olhoFechado.svg)"
        olhoSenha.style.backgroundRepeat = "no-repeat"
        olhoSenha.style.backgroundPosition = "center"
        olhoSenha.style.backgroundImage = "contain"
        console.log("escondendo senha 👁️")
    }
    }



//AUTENTICAÇÃO DOS USUARIOS
document.getElementById("loginForms").addEventListener("submit", async(e) => {
    (e).preventDefault()

    const email = document.getElementById("email").value
    const senha = document.getElementById('input-senha').value

    try{
        const res = await fetch("http://localhost:3000/login", {
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify({email, senha})
        })

        const data = await res.json()

        if(res.ok){
            const token = data.token
            //Decodificar o payload do token
            const payload = JSON.parse(atob(token.split(".")[1]))

            //salvar ele 
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('user', JSON.stringify(payload))
            
            //move o usuario para outra página, no caso a página home
            window.location.href = '../pages/home.html'

        }else{
            alert(data.error || "Erro ao fazer login!")
        }
    }catch(error) {
        alert("Ocorreu um erro ao fazer login")

    }
})

