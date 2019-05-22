
## 4º exercício

### 4.1 Desestruturação simples

A partir do seguinte objeto:

```js
const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
};
```

Utilize a desestruturação para transformar as propriedades nome, cidade e estado em variáveis, no fim deve ser possível fazer o seguinte:

```js
console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC
```

### 4.2 Desestruturação em parâmetros

Na seguinte função:

```js
function mostraInfo(usuario) {
  return `${usuario.nome} tem ${usuario.idade} anos.`;
}

mostraInfo({ nome: 'Diego', idade: 23 })
```

Utilize a desestruturação nos parâmetros da função para buscar o nome e idade do usuário separadamente e a função poder retornar apenas:

```js
return `${nome} tem ${idade} anos.`;
```

## 5º Exercício

Utilizando o operador de rest/spread (`...`) realize as seguintes operações:

### 5.1 Rest

A partir do array: `const arr = [1, 2, 3, 4, 5, 6]`, defina uma variável `x` que recebe a primeira posição do vetor e outra variável `y` que recebe todo restante dos dados.

```js
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
```

Crie uma função que recebe inúmeros parâmetros e retorna a soma de todos eles:

```js
// function soma...

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3
```

### 5.2 Spread

A partir do objeto e utilizando o operador spread:

```js
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};
```

Crie uma variável `usuario2` que contenha todos os dados do usuário porém com nome `Gabriel`.

Crie uma variável `usuario3` que contenha todos os dados do usuário porém com cidade `Lontras`.

## 6º Exercício

Converta o seguinte trecho de código utilizando Template Literals:

```js
const usuario = 'Diego';
const idade = 23;

console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
```