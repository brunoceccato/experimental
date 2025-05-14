document.addEventListener('DOMContentLoaded', () => {
  const imagem = document.getElementById('imagem');
  const som = document.getElementById('somConceitual');
  let mostrandoPaisagem = false;

  imagem.addEventListener('click', () => {
    imagem.classList.remove('revelar'); // reset da animação
    void imagem.offsetWidth; // força reflow
    imagem.classList.add('revelar');

    setTimeout(() => {
      if (!mostrandoPaisagem) {
        imagem.src = 'paisagem.png';
        som.play();
      } else {
        imagem.src = 'sol.png';
        som.pause();
      }
      mostrandoPaisagem = !mostrandoPaisagem;
    }, 100); // ligeiro atraso para não cortar a transição
  });
});
