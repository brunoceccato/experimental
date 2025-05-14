document.addEventListener('DOMContentLoaded', () => {
    const imagem = document.getElementById('imagemTransformadora');
    const som = document.getElementById('somConceitual');

    imagem.addEventListener('click', () => {
        // Toca o som
        if (som.paused) {
            som.play().catch(err => console.error("Erro no áudio:", err));
        } else {
            som.currentTime = 0;
            som.play();
        }

        // Transição visual: fade e troca de imagem
        imagem.style.opacity = 0;

        setTimeout(() => {
            imagem.src = 'paisagem.png';
            imagem.style.opacity = 1;
        }, 500); // tempo para "sumir" antes de trocar a imagem
    });
});
