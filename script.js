const dataInicial = new Date('2022-07-23T16:00:00');

function atualizarContador() {
  const agora = new Date();
  let diff = agora - dataInicial;

  const segundosTotais = Math.floor(diff / 1000);

  const anos = Math.floor(segundosTotais / (365.25 * 24 * 60 * 60));
  const meses = Math.floor((segundosTotais % (365.25 * 24 * 60 * 60)) / (30.44 * 24 * 60 * 60));
  const dias = Math.floor((segundosTotais % (30.44 * 24 * 60 * 60)) / (24 * 60 * 60));
  const horas = Math.floor((segundosTotais % (24 * 60 * 60)) / (60 * 60));
  const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
  const segundos = segundosTotais % 60;

  document.getElementById("timer").innerHTML =
    `${anos} anos, ${meses} meses, ${dias} dias<br>` +
    `${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

atualizarContador();
setInterval(atualizarContador, 1000);

const imagens = ["./assets/img1.JPG", "./assets/img2.jpg", "./assets/img3.jpg", "./assets/img4.jpg", "./assets/img5.JPG", "./assets/img6.JPG", "./assets/img7.jpg", "./assets/img8.jpg", "./assets/img9.jpg", "./assets/img10.jpg", "./assets/img11.jpg", "./assets/img12.jpg", "./assets/img13.jpg", "./assets/img14.jpg", "./assets/img15.jpg", "./assets/img16.jpg", "./assets/img17.jpg"];
let indice = 0;

function mostrarFoto() {
  document.getElementById("slide").src = imagens[indice];
}

function avancarFoto() {
  indice = (indice + 1) % imagens.length;
  mostrarFoto();
}

function voltarFoto() {
  indice = (indice - 1 + imagens.length) % imagens.length;
  mostrarFoto();
}

setInterval(avancarFoto(), 5000);

