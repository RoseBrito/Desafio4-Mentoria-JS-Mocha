const listaDadosPessoas = [
  { nome: "Rose", idade: 35, email: "rose@mentoria.com" },
  { nome: "Lucy", idade: 8, email: "lucy@mentoria.com" },
  { nome: "Reginaldo", idade: 14, email: "reginaldo@mentoria.com" },
  { nome: "Priscila", idade: 17, email: "priscila@mentoria.com" },
  { nome: "Lucas", idade: 70, email: "lucas@mentoria.com" },
  {nome: "Mayara", idade: 11, email: "mayara@mentoria.com"}
 ];

console.table(listaDadosPessoas);

function classificarPessoasDaLista(listaDadosPessoas){
  listaDadosPessoas.forEach((pessoas) => {
    let status;

      if (typeof pessoas.idade === 'number' && pessoas.idade > 0 &&  pessoas.idade  < 12) {
      status = "criança"; 
    } else if (typeof pessoas.idade === 'number' && pessoas.idade > 12 &&  pessoas.idade < 18 ) {
      status = "adolescente";
    } else if (typeof pessoas.idade === "number" && pessoas.idade >18) {
      status = "adulto";
    } else if (typeof pessoas.idade !== 'number' || pessoas.idade < 0){
      status = "Idade Inválida"    
    } 
         
    console.log(`${pessoas.nome} é ${status}. Tem ${pessoas.idade} anos e seu email é ${pessoas.email}`);     
  });

  console.log(`\nO número total de pessoas listadas é: ${listaDadosPessoas.length}`);

  return listaDadosPessoas.length;    
}

exports.listaDadosPessoas = listaDadosPessoas;
exports.classificarPessoasDaLista = classificarPessoasDaLista; 