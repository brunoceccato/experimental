document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao');
    const paisagemImagem = document.getElementById('paisagemImagem');
    const solImagem = document.getElementById('solImagem');
    const imagemSol = document.getElementById('imagemSol');
    const imagemPaisagem = document.getElementById('imagemPaisagem');
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

        // Exibir a imagem do sol com animação suave
        solImagem.style.animation = "aparecerSol 2s ease-out forwards";
        
        // Após um tempo, substituir o sol pela paisagem
        setTimeout(() => {
            solImagem.style.display = "none"; // Ocultar o sol
            paisagemImagem.style.display = "block"; // Mostrar a paisagem
            paisagemImagem.style.animation = "aparecerPaisagem 2s ease-out forwards";
        }, 2000); // 2 segundos após a animação do sol
    });
});
