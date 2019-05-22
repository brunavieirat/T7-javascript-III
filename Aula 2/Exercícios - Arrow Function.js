## 3º exercício

Converta as funções nos seguintes trechos de código em Arrow Functions:

```js
// 3.1

const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
  return item + 10;
});
```

```js
// 3.2 
// Dica: Utilize uma constante pra function

const usuario = { nome: 'Diego', idade: 23 };

function mostraIdade(usuario) {
  return usuario.idade;
}

mostraIdade(usuario);
```

```js
// 3.3
// Dica: Utilize uma constante pra function

const nome = "Diego";
const idade = 23;

function mostraUsuario(nome = 'Diego', idade = 18) {
  return { nome, idade };
}

mostraUsuario(nome, idade);
mostraUsuario(nome);
```
