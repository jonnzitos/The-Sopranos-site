const botaoTema = document.querySelector("#tema");

botaoTema.addEventListener("click", function () {
    document.body.classList.toggle("escuro");

    if (document.body.classList.contains("escuro")) {
        botaoTema.textContent = "Tema claro";
    } else {
        botaoTema.textContent = "Tema escuro";
    }
});

const linksMenu = document.querySelectorAll("nav a");
const contador = document.querySelector("#contador");

let cliques = 0;

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        cliques++;
        contador.textContent = "Cliques no menu: " + cliques;
    });
});

const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const mensagem = document.querySelector("#mensagem");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (campoNome.value.trim() === "") {
        mensagem.textContent = "Preencha seu nome antes de enviar.";
        return;
    }

    mensagem.textContent = "Formulário enviado com sucesso!";
    campoNome.value = "";
});