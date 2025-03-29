window.onload = function() {
    let imagem = document.getElementById("trocar");
    imagem.style.opacity = "0"; // Some com a imagem

    setTimeout(() => {
        imagem.src = "./resouces/images/tulipaComplete.png"; // Troca a imagem
        imagem.style.opacity = "1"; // Reaparece suavemente
    }, 1500); // Pequeno atraso para suavizar
};