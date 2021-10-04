function clicar() {
  var input1 = document.querySelector("#cor1");
  var input2 = document.querySelector("#cor2");

  var cor1 = input1.value;
  var cor2 = input2.value;

  var resultado = document.querySelector("#resultado");

  if (cor1 == "" || cor2 == "") {
    resultado.innerHTML = "Adicione valores ao campo para gerar seu degradê!";
  } else {
    document.body.style.background = `linear-gradient(to bottom right, ${cor1}, ${cor2})`;
    resultado.innerHTML = "";
  }

  input1.value = "";
  input2.value = "";
}
