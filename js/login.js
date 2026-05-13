function verSenha() {
  const inputSenha = document.getElementById("password");
  const olhoSenha = document.getElementById("eyeIcon")

  if (inputSenha === "password") {
      inputSenha.type = "text";
  } else {
    passwordInput.type = "password";
  }
}


function mostrarSenha() {
  let botao = document.getElementById("botao-senha1")
  let campo = document.getElementById("senha1")

  if (campo.type === "password") {
    campo.type = "text"
    botao.style.backgroundImage = "url(/Nambio/assets/icons/olho-senha.svg)"
    botao.style.backgroundRepeat = "no-repeat"
    botao.style.backgroundPosition = "center"
    botao.style.backgroundImage = "contain"
  } else {
    campo.type = "password"
    botao.style.backgroundImage = "url(/Nambio/assets/icons/olho-senha-fechado.svg)"
    botao.style.backgroundRepeat = "no-repeat"
    botao.style.backgroundPosition = "center"
    botao.style.backgroundImage = "contain"
  }

}