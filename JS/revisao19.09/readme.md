### Variáveis:

É algo que contém um dado;

```js
var hora = 12;
var dia = "Domingo";
var texto = `Hoje é ${dia}`;

// Jeitos de escrever uma variável:
var ja_reprovou_de_ano = false; // Snake case
var jaReprovouDeAno = false; // Camel case
```

### Tipos Primitivos:

É o tipo da variável;

```js
var nome = "Daiane"; //String
var idade = 19; // Number
var tem_CNH = true; // Boolean (true ou false)
var votou_em = null; // Null (nulo)
var hora = agora.getHours(); // Undefined (quando a variável não foi definida, mas tentou ser usada)
```

### Operadores:

São utilizados para fazer operações, tanto matemáticas, quanto de comparação;

```js
// Aritméticos
5 + 2 = 7 // Adição
5 - 2 = 3 // Subtração
5 * 2 = 10 // Multiplicação
5 / 2 = 2.5 // Divisão
5 % 2 = 1 // Resto
5 ** 2 = 25 // Potência

// Atribuição
var n = 3
n = n + 4 // n += 4

// Relacionais (sempre retornam boolean)
5 > 2 // Maior que
2 < 5 // Menor que
3 >= 3 // Maior ou igual a
2 <= 2 // Menor ou igual a
2 == 2 // Igual a
3 != 5 // Diferente de
3 === "3" // Compara os valores e os tipos (false)
3 === 3 // True

// Lógicos
// ! = negação
!true == false
if (tem_CNH) // true
if (!tem_CNH) // false
// && = conjunção (várias condições que se complementam "e")
if (tem_CNH && idade > 18)
// || = disjunção (várias condições indiferentes, uma coisa ou outra "ou")
if (caneta == "azul" || caneta == "vermelha")
if (tem_pao && suco == "laranja" || suco == "limão")

// Ternário (condição ? true : false)
tem_CNH ? "Liberada" : "Presa sem habilitação"
```

### Condições:

```js
if (condição) {
  true
} // Simples

if (condição) {
  true
} else {
  false
} // Composta

if (condição1) {
  bloco 1
} else if {
  bloco 2
} else {
  último bloco
} // Condições aninhadas

switch (condição) {
  case valor 1:
    bloco 1
    break
  case valor 2:
    bloco 2
    break
  case valor 3:
    bloco 3
    break
  default // Opção padrão, caso nenhuma outra seja verdadeira
    bloco padrão
    break
} // Condição múltipla
```
