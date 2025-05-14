document.addEventListener('DOMContentLoaded', () => {
    const imagemSol = document.getElementById('imagemSol');
    const imagemPaisagem = document.getElementById('imagemPaisagem');
    const somConceitual = document.getElementById('somConceitual');
    const container = document.getElementById('imagemContainer');

    let paisagemAtiva = false;

    container.addEventListener('click', () => {
        if (!paisagemAtiva) {
            imagemSol.classList.remove('visivel');
            imagemPaisagem.classList.add('visivel');
            somConceitual.play().catch(e => console.error("Erro ao tocar som:", e));
        } else {
            imagemPaisagem.classList.remove('visivel');
            imagemSol.classList.add('visivel');
            somConceitual.pause();
            somConceitual.currentTime = 0;
        }
        paisagemAtiva = !paisagemAtiva;
    });
});
