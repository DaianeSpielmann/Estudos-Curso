var form = document.querySelector("form");

form.addEventListener("submit", criar_tweet);

function criar_tweet(e) {
  e.preventDefault();

  // Pega os input (nome, conteudo)
  var nome_input = document.querySelector("input#input_nome");
  var conteudo_input = document.querySelector("textarea#input_conteudo");

  // Pega o valor dos inputs (.value)
  var nome = nome_input.value;
  var conteudo = conteudo_input.value;

  var tweet = {
    nome,
    conteudo,
  };

  if (nome && conteudo) {
    var lista_de_tweets_div = document.querySelector("div#lista_tweets");

    var div = document.createElement("div");
    var nome_h2 = document.createElement("h2");
    var conteudo_paragrafo = document.createElement("p");

    nome_h2.innerText = tweet.nome;
    conteudo_paragrafo.innerText = tweet.conteudo;

    div.appendChild(nome_h2);
    div.appendChild(conteudo_paragrafo);

    lista_de_tweets_div.appendChild(div);

    // Seta o .value dos inputs como uma string vazia para limpar eles
    nome_input.value = "";
    conteudo_input.value = "";
  }
}
