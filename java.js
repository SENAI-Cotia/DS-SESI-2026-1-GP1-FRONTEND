function togglePassword() {
  const passwordInput = document.getElementById("password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
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