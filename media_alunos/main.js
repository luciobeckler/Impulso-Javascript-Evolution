const alunos = [
      {
            nome: "João",
            nota: 5,
            turma:"1B",
      },
      {
            nome: "Sofia",
            nota: 9 ,
            turma:"1B",
      },
      {
            nome: "Paulo",
            nota:6,
            turma:"2C",
      },
];
const media = 6;


function verificaNotas(arr, media){
      let alunosAprovados=[];

      for(i=0; i<= arr.length -1; i++){
            const {nota, nome}=arr[i]
            if(nota >=media) {
                  alunosAprovados.push(nome);
            }
      }

      /* for(i=0; i<= arr.length -1; i++){
            if(arr[i].nota >=media) {
                  alunosAprovados.push(arr[i].nome);
            }
      } */
      return alunosAprovados;
}

console.log(verificaNotas(alunos,media));


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoas = 
      {
      nome: "Lúcio",
      idade: 21,
      nacionalidade: "Brasileiro",
      }


console.log(calculaIdade.call(pessoas,5))