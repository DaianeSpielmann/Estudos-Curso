function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var texto = `Agora são ${hora} horas.`;

  if (hora == 1) {
    texto = "Agora é 1 hora.";
  }

  msg.innerHTML = texto;

  if (hora >= 0 && hora < 12) {
    img.src = "fotos/manha.png";
    document.body.style.background = "#ffe99e";
  } else if (hora >= 12 && hora < 18) {
    img.src = "fotos/tarde.png";
    document.body.style.background = "#fbd6b3";
  } else {
    img.src = "fotos/noite.png";
    document.body.style.background = "#1e333a";
  }
}
