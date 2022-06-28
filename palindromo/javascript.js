function avaliaPalindromo(word){
      if(!word) return;

      let palavraQuebrada = word.split("")
      let aux1=[]

      for(i=0; i<=palavraQuebrada.length -1; i++){
            aux1.push(palavraQuebrada[palavraQuebrada.length - 1 - i])
      }
      if(aux1.join("")==word) console.log("Palíndromo")
      else console.log("Não palíndromo")
}


function avaliaPalindromo2(word){
      if(!word) return;

      if( word.split("").reverse().join("") === word) console.log("Palíndromo")
      else console.log("Não palíndromo")
}

function substituiPares(arrayNum){
      if(arrayNum.length == 0) {
            console.log(-1);
            return;
      }

      for(i=0; i<=arrayNum.length -1; i++){
            if(arrayNum[i]==0) console.log("Esse valor já é 0")
            else if(arrayNum[i]%2==0) {
                  console.log("Substituindo" + arrayNum[i] + " por 0")
                  arrayNum[i]=0
            }
      }
      return arrayNum
      }


avaliaPalindromo("aaa");
var abc = "aaaaaa"
console.log(abc.length)
avaliaPalindromo2("aaa");



console.log(substituiPares(arrayEx));

