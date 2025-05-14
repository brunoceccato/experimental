document.addEventListener('DOMContentLoaded', () => {
    const imagem = document.getElementById('imagemTransformadora');
    const som = document.getElementById('somConceitual');

    let mostrandoPaisagem = false;

    imagem.addEventListener('click', () => {
        // Remove a animação se já foi aplicada
        imagem.style.animation = 'none';
        // Força reflow para reiniciar animação
        void imagem.offsetWidth;
        imagem.style.animation = 'revelar 1s ease';

        if (!mostrandoPaisagem) {
            imagem.src = 'paisagem.png';
            if (som.paused) {
                som.play().catch(err => console.error("Erro ao tocar som:", err));
            }
        } else {
            imagem.src = 'sol.png';
            som.pause();
            som.currentTime = 0;
        }

        mostrandoPaisagem = !mostrandoPaisagem;
    });
});
