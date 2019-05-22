const alunas = [
    { nome: "XXX", idade: 23, materia_preferida: "JavaScript" },
    { nome: "ZZZ", idade: 15, materia_preferida: "JQuery" },
    { nome: "AAA", idade: 30, materia_preferida: "Bootstrap" }
  ];
  
  // 2.1
  
  const idades = alunas.map(aluna => aluna.idade);
  console.log(idades);
  
  // 2.2
  
  const filterMaior24 = alunas.filter(
    aluna => aluna.idade >= 24
  );
  console.log(filterMaior24);
  
  // 2.3
  
  const javaScript = alunas.find(aluna => aluna.materia_preferida === "javaScript");
  console.log(javaScript);
  