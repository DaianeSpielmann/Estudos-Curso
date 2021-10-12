var div_resultado = document.querySelector("#contador");
var resultado = 0;

function diminuir() {
  if (resultado <= 0) {
    window.alert("ERRO! Você chegou ao número zero, clique em aumentar!");
  } else {
    atualizarContador(--resultado);
  }
}

function resetar() {
  if (resultado <= 0) {
    window.alert("O contador já foi resetado, clique em aumentar!");
  } else {
    atualizarContador((resultado = 0));
  }
}

function aumentar() {
  atualizarContador(++resultado);
}

function atualizarContador(resultado) {
  div_resultado.innerHTML = resultado;
}
