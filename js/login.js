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



// AUTENTICAÇÃO DOS USUARIOS
document.getElementById("loginForms").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById('input-senha').value;

    try {
        const res = await fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        });

        const data = await res.json();

        if (res.ok) {
            const token = data.token;

            // 1. Verificação de segurança: O token realmente existe?
            if (!token || token.split('.').length < 2) {
                alert("Token inválido retornado pelo servidor.");
                return;
            }

            // 2. Decodificação segura do payload do JWT
            const base64Url = token.split(".")[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const payload = JSON.parse(decodeURIComponent(escape(window.atob(base64))));

            // Salvar no sessionStorage
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('user', JSON.stringify(payload));
            
            // Redirecionar para a home
            window.location.href = '../pages/home.html';
        } else {
            alert(data.error || "Erro ao fazer login!");
        }
    } catch (error) {
        console.error("Erro detalhado:", error);
        alert("Ocorreu um erro ao fazer conexão com o servidor.");
    }
});
