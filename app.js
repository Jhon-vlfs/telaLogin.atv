document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault(); 
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    if (login && password) {
        alert("Login bem-sucedido! Bem-vindo ao Anime World.");
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});