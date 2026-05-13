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

