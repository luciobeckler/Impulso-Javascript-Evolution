async function  mudaGato(){
      try{  //Tenta realizar as operações abaixo, caso não funcione, o código após o catch é rodado
            const dados = await fetch(main_URL);  //Inicializa a constante dados com uma
            const json = await dados.json();  //
            return json.webpurl;
      }
      catch(e){
      console.log(e.message);  //Exibe no console o erro caso haja
      }
};

const carregaImg = async () => {
      img.src = await mudaGato();  //No atributo src da tag img colocamos a resposta da função mudaGato(que será uma foto) precedida de um await pois se trata de uma promise
};




const main_URL = 'https://thatcopy.pw/catapi/rest/';  //Endereço da API
const button = document.getElementById("change-cat")
const img = document.getElementById("cat")

button.addEventListener("click", carregaImg);  //Chama a função carregaImg assim que o evento (clique no botão) ocorre
carregaImg();  //Carrega uma imagem inicial para o site não ficar sem enquanto o botão não é clicado