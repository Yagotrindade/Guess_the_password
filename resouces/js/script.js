function verificarEnigma() {
    const respostaCorreta = ["4", "2", "9", "1", "8", "3", "7", "0", "6", "5"]; // Exemplo de senha
    let escolhas = [];

    for (let i = 0; i < 10; i++) {
        let selecionado = document.querySelector(`input[name="group${i}"]:checked`);
        escolhas.push(selecionado ? selecionado.value : null);
    }

    if (JSON.stringify(escolhas) === JSON.stringify(respostaCorreta)) {
        window.location.href = 'sucesso.html'; // Redireciona se acertar
    } else {
        alert('Combinação incorreta! Tente novamente.');
    }
}