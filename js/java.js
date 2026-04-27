function togglePassword() {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.getElementById("eyeIcon")

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "../assets/icons/Eye.png"
  } else {
    passwordInput.type = "password";
  }
}

/* Isso esconde o ícone de senha padrão do Edge/IE */
input[type="password"]::-ms-reveal,
input[type="password"]::-ms-clear {
    display: none;
}

/* Isso esconde o ícone de preenchimento automático do Chrome */
input[type="password"]::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    display: none;
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.querySelector("input[type='email']").value;
    const password = document.getElementById("password").value;

    if(email && password) {
        alert("Login realizado com sucesso!");
    } else {
        alert("Preencha todos os campos!");
    }
});