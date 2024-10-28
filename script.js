
    // Solicita o nome do usuário
    const userName = prompt("Por favor, insira seu nome:");
    if (userName) {
        document.getElementById("userName").textContent = userName.split(" ")[0]; // Mostra apenas o primeiro nome
    }
});

// Função para abrir PDF em uma nova aba
function openPDF(filePath) {
    const newTab = window.open();
    newTab.document.write(`
        <html>
            <head><title>Visualização do PDF</title></head>
            <body style="margin:0">
                <embed src="${filePath}" type="application/pdf" width="100%" height="100%">
            </body>
        </html>
    `);
}
