function trocaModo(){
      button.classList.toggle("dark-mode");
      body.classList.toggle("dark-mode");
      footer.classList.toggle("dark-mode");
      trocaTexto();
}

function trocaTexto(){
      if(body.classList.contains("dark-mode")){
            h1.innerHTML = "Dark Mode ON";
            button.innerHTML = "Light Mode";
      }
      else{
            h1.innerHTML= "Light Mode ON";
            button.innerHTML = "Dark Mode";
      }
}



const body = document.getElementsByTagName("body")[0];
const h1 = document.getElementById("page-title");
const button =  document.getElementById("mode-selector");
const footer = document.getElementsByTagName("footer")[0];

button.addEventListener("click", trocaModo);


