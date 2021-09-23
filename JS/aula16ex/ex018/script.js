var numero = document.querySelector("input#formulario_numero");
var lista = document.querySelector("select#formulario_lista");
var resultado = document.querySelector("div#resultado");
var valores = [];

function is_numero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function in_lista(n, lista) {
  if (lista.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (is_numero(numero.value) && !in_lista(numero.value, valores)) {
    valores.push(Number(numero.value));
    var item = document.createElement("option");
    item.text = `Valor ${numero.value} adicionado.`;
    lista.appendChild(item);
    resultado.innerHTML = "";
  } else {
    window.alert("Valor inválido ou já encontrado na lista.");
  }
  numero.value = "";
  numero.focus();
}

function finalizar() {
  if (valores.length == 0) {
    window.alert("Adicione valores antes de finalizar!");
  } else {
    var total = valores.length;
    var maior = valores[0];
    var menor = valores[0];
    var soma = 0;
    var media = 0;
    for (var pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }
    media = soma / total;
    resultado.innerHTML = "";
    resultado.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.`;
    resultado.innerHTML += `<p>A média dos valores digitados é ${media}.`;
  }
}
