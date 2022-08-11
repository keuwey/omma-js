const nomeEmpresa = "Omma";
console.log(nomeEmpresa);
const listaDeReceitas = [ // isso é uma lista
 { // isso é um atributo name: value, ;
   id: 1, //a
   titulo: "Bolo", //b
   dificuldade: "moderada", //c
   ingredientes: ['Blá','Blá','Blá','Blá','Blá' ],   //d
   preparo: "Assar", //e
   link: 'vimeo.com', //f
   vegano: false

 } // isso é um objeto é uma receita 
];
/*4. Será preciso criar uma função que permita cadastrar uma receita dentro
da lista de receitas, seguindo os padrões do objeto estipulado na etapa
anterior. A função deve se chamar cadastrarReceita e deverá receber
cada informação da receita por parâmetro devolver um feedback no
console que o cadastro foi concluído.*/
const cadastrarReceita = (
   id, titulo, dificuldade,ingredientes,preparo,link, vegano

) => {
  const novaReceita = {
    id, 
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano
  };
  listaDeReceitas.push(novaReceita);
  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
}
cadastrarReceita(
    2, 
    "Panqueca",
    "simples", 
    ['Blá','Blá','Blá','Blá','Blá' ], 
    "Fritar", 
    'youtube.com', 
    false
);
console.log(listaDeReceitas)

// Parte 5
const exibirReceitas = () => {}