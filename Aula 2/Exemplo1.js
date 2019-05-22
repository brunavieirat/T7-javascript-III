function exibeHabilidades(usuarios) {
  for (usuario of usuarios) {
    console.log(
      `A ${usuario.nome} possui as habilidades: 
      ${usuario.habilidades.join(", ")}`
    );
  }
}

var usuarios = [
  {
    nome: "Bruna",
    habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
    nome: "Gabriela",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

exibeHabilidades(usuarios);