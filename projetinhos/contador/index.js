var div_resultado = document.querySelector("#contador");
var resultado = 0;

function diminuir() {
  if (resultado <= 0) {
    window.alert("ERRO! Você chegou ao número zero, clique em aumentar!");
  } else {
    updateDisplay(--resultado);
  }
}

function resetar() {
  if (resultado <= 0) {
    window.alert("O contador já foi resetado, clique em aumentar!");
  } else {
    updateDisplay((resultado = 0));
  }
}

function aumentar() {
  updateDisplay(++resultado);
}

function updateDisplay(resultado) {
  document.getElementById("contador").innerHTML = resultado;
}
