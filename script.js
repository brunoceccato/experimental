document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao');
    const paisagem = document.getElementById('paisagem');
    const somConceitual = document.getElementById('somConceitual');
    const circulo = document.querySelector('.circulo');

    botao.addEventListener('click', () => {
        // Reproduzir som ao clicar no botão
        if (somConceitual.paused) {
            somConceitual.play();
        } else {
            somConceitual.currentTime = 0;
            somConceitual.play();
        }

        // Animação do botão transformando-se no sol
        circulo.style.transition = "all 1s ease";
        circulo.style.width = "150px";
        circulo.style.height = "150px";
        circulo.style.borderWidth = "5px";

        // Exibir paisagem com animações
        paisagem.style.display = "block";
    });
});
