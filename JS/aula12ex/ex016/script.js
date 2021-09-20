function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var formulario_ano = document.getElementById("txtano");
  var resultado = document.querySelector("div#resultado");

  if (formulario_ano.value.length == 0 || Number(formulario_ano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
  } else {
    var formulario_sexo = document.getElementsByName("radsex");
    var idade = ano - Number(formulario_ano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (formulario_sexo[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "fotos/criançah.png");
      } else if (idade < 21) {
        img.setAttribute("src", "fotos/jovemh.png");
      } else if (idade < 50) {
        img.setAttribute("src", "fotos/adultoh.png");
      } else {
        img.setAttribute("src", "fotos/idosoh.png");
      }
    } else if (formulario_sexo[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "fotos/criançam.png");
      } else if (idade < 21) {
        img.setAttribute("src", "fotos/jovemm.png");
      } else if (idade < 50) {
        img.setAttribute("src", "fotos/adultom.png");
      } else {
        img.setAttribute("src", "fotos/idosom.png");
      }
    }

    resultado.style.textAlign = "center";
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    resultado.appendChild(img);
  }
}
