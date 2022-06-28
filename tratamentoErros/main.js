function trataErro(arr,num){         
      if(!arr || (!num && num!=0)){
            const Erro1 = new Error("Um ou mais parâmetros não foram fornecidos.");
            Erro1.name = 'ReferenceError';
            throw Erro1;
      }

      if(typeof(arr)!="object"){
            const Erro2 = new Error("O array fornecido não é do tipo object.");
            Erro2.name = 'TypeError';
            throw Erro2;
      }
      if(typeof(num)!="number"){
            const Erro3 = new Error("O número fornecido não é do tipo number.");
            Erro3.name = 'TypeError';
            throw Erro3;
      }
      if(arr.length != num){
            const Erro4 = new Error("O tamanho do array não corresponde ao valor fornecido.");
            Erro4.name = 'RangeError';
            throw Erro4;
      }
}

function trataErroTryCatch(arr, num){
      try {
            trataErro(arr,num);
      }
      catch(e){
            throw e;
      }
}


var obj=[];
trataErroTryCatch(obj,1)