var cores = ["Red", "Blue", "Green", "Yellow", "Pink", "Black"];
var div_resultado = document.querySelector("span");

function clicar() {
  var proximoIndex = Math.floor(Math.random() * cores.length);
  var cor = cores[proximoIndex];

  document.body.style.backgroundColor = cor; // mudar o fundo para essa cor

  div_resultado.innerHTML = cor; // mudar o texto para essa cor
  div_resultado.style.color = cor; // mudar a cor do texto para essa cor
}
