function tabuada() {
  var numero = document.querySelector("input#numero");
  var tabuada = document.querySelector("select#select_tabuada");

  if (numero.value.length == 0) {
    window.alert("Por favor, digite um número!");
  } else {
    var num = Number(numero.value);
    var c = 1;
    tabuada.innerHTML = "";
    while (c <= 10) {
      var item = document.createElement("option");
      item.text = `${num} x ${c} = ${num * c}`;
      item.value = `tabuada ${c}`;
      tabuada.appendChild(item);
      c++;
    }
  }
}
