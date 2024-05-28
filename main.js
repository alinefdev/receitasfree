const capa = document.querySelector(".imagem-inicio");
const overlay = document.getElementById("overlay");
const titleCapa = document.getElementById("h1-title")
const imgcapa = document.getElementById("imgcapa")


capa.addEventListener('mouseenter', () => {
  overlay.style.opacity = '1'; // Mostra o elemento quando o mouse entra
  imgcapa.style.opacity ='0.4';
  titleCapa.style.animation = 'none'; // Remove a animação atual
  void titleCapa.offsetWidth; // Força o recálculo do layout
  titleCapa.style.animation = null; // Reativa a animação
  
  
});

capa.addEventListener('mouseleave', () => {
  overlay.style.opacity = '0'; // Mostra o elemento quando o mouse entra
  imgcapa.style.opacity ='1';
  titleCapa.style.animationPlayState = 'paused';
});