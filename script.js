document.addEventListener('DOMContentLoaded', () => {
  const imagem = document.getElementById('imagem');
  const som = document.getElementById('somConceitual');

  let mostrandoPaisagem = false;

  imagem.addEventListener('click', () => {
    imagem.style.opacity = 0;

    setTimeout(() => {
      if (!mostrandoPaisagem) {
        imagem.src = 'paisagem.png';
        som.play();
      } else {
        imagem.src = 'sol.png';
        som.pause();
        som.currentTime = 0;
      }

      imagem.style.opacity = 1;
      mostrandoPaisagem = !mostrandoPaisagem;
    }, 300); // pequeno delay para transição
  });
});
