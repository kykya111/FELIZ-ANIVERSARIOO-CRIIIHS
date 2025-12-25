
const musicas = [
  "assets/musicas/Eres.mp3",
  "assets/musicas/carinhoso.mp3",
  "assets/musicas/janeiro-a-janeiro.mp3"
];

let indice = 0;
const audio = document.getElementById("audio");

function tocarMusica() {
  audio.src = musicas[indice];
  audio.play();
}

audio.addEventListener("ended", () => {
  indice = (indice + 1) % musicas.length; 
  tocarMusica();
});

tocarMusica();

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("ativo");
})