document.addEventListener('DOMContentLoaded', () => {
    const imagem = document.getElementById('imagemTransformadora');
    const som = document.getElementById('somConceitual');

    let mostrandoPaisagem = false;

    imagem.addEventListener('click', () => {
        // Atualiza imagem e som com base no estado atual
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

        // Reaplica animação de revelação
        imagem.classList.remove('imagem-clique');
        void imagem.offsetWidth; // Força reflow
        imagem.classList.add('imagem-clique');

        mostrandoPaisagem = !mostrandoPaisagem;
    });
});
