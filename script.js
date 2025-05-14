document.addEventListener('DOMContentLoaded', () => {
    const elementoAnimado = document.getElementById('elementoAnimado');
    const somConceitual = document.getElementById('somConceitual');

    if (elementoAnimado && somConceitual) {
        elementoAnimado.addEventListener('click', () => {
            // Se o som estiver pausado ou no início, toca.
            // Se já estiver tocando, reinicia para permitir múltiplos cliques rápidos.
            if (somConceitual.paused) {
                somConceitual.play()
                    .catch(error => console.error("Erro ao tocar o som:", error)); // Boa prática: tratar erros
            } else {
                somConceitual.currentTime = 0; // Reinicia o som
                somConceitual.play()
                    .catch(error => console.error("Erro ao tocar o som (reinício):", error));
            }
        });
    } else {
        console.error("Elemento animado ou áudio não encontrado!");
    }
});
