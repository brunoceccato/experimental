document.addEventListener('DOMContentLoaded', () => {
    const imagemSol = document.getElementById('imagemSol');
    const imagemPaisagem = document.getElementById('imagemPaisagem');
    const somConceitual = document.getElementById('somConceitual');

    let mostrandoPaisagem = false;

    imagemSol.addEventListener('click', () => {
        if (!mostrandoPaisagem) {
            imagemSol.classList.remove('ativa');
            imagemPaisagem.classList.add('ativa');
            somConceitual.play();
        } else {
            imagemPaisagem.classList.remove('ativa');
            imagemSol.classList.add('ativa');
            somConceitual.pause();
            somConceitual.currentTime = 0;
        }

        mostrandoPaisagem = !mostrandoPaisagem;
    });

    imagemPaisagem.addEventListener('click', () => {
        imagemPaisagem.classList.remove('ativa');
        imagemSol.classList.add('ativa');
        somConceitual.pause();
        somConceitual.currentTime = 0;
        mostrandoPaisagem = false;
    });
});
