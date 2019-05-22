# Exercícios: Módulo 01

## 1º exercício

Para testar seus conhecimentos com classes, crie uma classe com nome "Admin", essa classe deve extender uma segunda classe chamada "Usuario". 

A classe usuário deve receber dois parâmetros no método construtor, e-mail e senha, e anotá-los em propriedades da classe. A classe "Admin" por sua vez não recebe parâmetros mas deve repassar os parâmetros de e-mail e senha à classe pai e marcar uma propriedade "admin" como `true` na classe.

Agora com suas classes formatadas, adicione um método na classe Usuario chamado `isAdmin` que retorna se o usuário é administrador ou não baseado na propriedade `admin` ser `true` ou não.

```js
const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
```


class Usuario {
    constructor(email, senha) {
      this.email = email;
      this.senha = senha;
    }
  
    isAdmin() {
      return this.admin === true;
    }
  }
  
  class Admin extends Usuario {
    constructor(email, senha) {
      super(email, senha);
  
      this.admin = true;
    }
  }
  
  const User1 = new Usuario("email@teste.com", "senha123");
  const Adm1 = new Admin("email@teste.com", "senha123");
  
  console.log(User1.isAdmin()); // false
  console.log(Adm1.isAdmin()); // true