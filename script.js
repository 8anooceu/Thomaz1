// Define a saudação personalizada com o nome do dispositivo
document.addEventListener("DOMContentLoaded", () => {
    const userName = navigator.userAgent.includes("Windows") ? "Usuário Windows" : 
                     navigator.userAgent.includes("Mac") ? "Usuário Mac" :
                     navigator.userAgent.includes("Linux") ? "Usuário Linux" : "Visitante";
    document.getElementById("userName").textContent = userName;
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
