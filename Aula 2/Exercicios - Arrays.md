# Exercícios: 

Crie um array de alunas contendo as informações: nome, idade, materia_preferida, conforme exemplo abaixo:

```js
const alunas = [
    { nome: "XXX", idade: 23, materia_preferida: "JavaScript" },
    { nome: "ZZZ", idade: 15, materia_preferida: "JQuery" },
    { nome: "AAA", idade: 30, materia_preferida: "Bootstrap" }
  ];
```
## 1º exercício

Percorra o array alunas e retorne outro array contendo apenas as idades de todas as alunas. Exemplo:

```js
[
  23,
  15,
  30
]
```

## 2º exercício

Retorne um array que contenha os dados da alunas que tem a idade maior que 24. Exemplo:

```js
[
  {  nome: "AAA", idade: 30, materia_preferida: "Bootstrap" }
]
```

## 2º exercício

Retorne um array que encontre as alunas na qual a matéria preferida seja JavaScript. Exemplo:

```js
[
  { nome: "XXX", idade: 23, materia_preferida: "JavaScript" }
]