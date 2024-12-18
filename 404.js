
});

// Retornar para a página anterior ao clicar no botão
document.getElementById("go-back").addEventListener("click", () => {
    window.history.back();
});

// Efeito de clarear o fundo ao mover o mouse
document.addEventListener("mousemove", (e) => {
    const background = document.querySelector(".background");
    background.style.background = `radial-gradient(circle at ${e.pageX}px ${e.pageY}px, #29293d 10%, #0b0b30 40%)`;
});
// Exibir mensagem após o "404" voar
setTimeout(() => {
    const message = document.querySelector(".message");
    message.textContent = "404 is out of orbit! Refresh the page to bring it back.";
    message.style.color = "#ff6f61"; // Muda a cor da mensagem para destaque
}, 6000);

    // Inicia a animação do 404
    const astronaut = document.querySelector(".astronaut");
    astronaut.classList.add("fly");
}, 3000);

// Exibe uma mensagem após o "404" voar
setTimeout(() => {
    const message = document.querySelector(".message");
    message.textContent = "404 is out of orbit! Refresh the page to bring it back.";
    message.style.color = "#ff6f61"; // Muda a cor da mensagem para destaque
}, 9000);
