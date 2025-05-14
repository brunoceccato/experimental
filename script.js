document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao');
    const solImagem = document.getElementById('solImagem');
    const paisagemImagem = document.getElementById('paisagemImagem');
    const somConceitual = document.getElementById('somConceitual');
    
    // Função para transformação da paisagem
    botao.addEventListener('click', () => {
        // Tocar o som
        if (somConceitual.paused) {
            somConceitual.play().catch(error => console.error("Erro ao tocar o som:", error));
        } else {
            somConceitual.currentTime = 0;
            somConceitual.play().catch(error => console.error("Erro ao reiniciar o som:", error));
        }

        // Transição do sol para a paisagem
        solImagem.style.opacity = '0'; // Faz o sol desaparecer
        paisagemImagem.style.display = 'block'; // Exibe a paisagem
        paisagemImagem.style.opacity = '1'; // Torna a paisagem visível com transição suave
    });
});
