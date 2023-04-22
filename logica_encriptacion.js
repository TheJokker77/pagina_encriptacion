// document.addEventListener("DOMContentLoaded", encriptacion);
const contenido = document.querySelector("#resultado");

let boton = document.getElementById("botonEncriptar");
boton.addEventListener('click',encriptacion);

let boton1= document.getElementById("botonDesencriptar");

boton1.addEventListener('click', desencriptar );

var html='';
let texto = document.querySelector("textarea");


function encriptacion() {
  
  
  let textoAEncriptar = texto.value;
  
  let encriptado = "";

  for (let i = 0; i < textoAEncriptar.length; i++) {
    if (textoAEncriptar[i] === "a") {
      
      encriptado += "ai";
    } else if (textoAEncriptar[i] === "e") {
      
      encriptado += "enter";
    } else if (textoAEncriptar[i] === "i") {
      
      encriptado += "imes";
    } else if (textoAEncriptar[i] === "o") {
      
      encriptado += "ober";
    } else if (textoAEncriptar[i] === "u") {
      
      encriptado += "ufat";
    } else {
      
      encriptado += textoAEncriptar[i];
    }
  }
 
  //Mostrar en pantalla
  
   
  if (encriptado.length > 0) {
    html='';
    html += `<textarea class="textResultado" id="textResultado" cols="25" rows="20" style=""> ${encriptado}</textarea></br><button id="botonCopiar" onclick="copiarTextResultado()">Copiar</button>`;
    
  } else {
    html='';
    html += (` <img
    class="imagenResultado"
    src="imagenes/Muñeco.png"
    alt="Imagen de busqueda"
  />
    <div>
        <p class="pResultado" id="pResultado">Ningún mensaje fue encontrado</p>
        <span class="spanResultado" >Ingresa el texto que desees encriptar o desencriptar</span>
    </div>`);
    
  }
  texto.value='';
  contenido.innerHTML=html;


}


function desencriptar(){
  
  let textoDesencriptar = texto.value;
  
  let desencriptado=textoDesencriptar.replace(/enter/gi, "e")
  .replace(/imes/gi, "i")
  .replace(/ai/gi, "a")
  .replace(/ober/gi, "o")
  .replace(/ufat/gi, "u");
  console.log(desencriptado);
  if (desencriptado.length > 0) {
    html='';
    html += `<textarea class="textResultado" id="textResultado" cols="25" rows="20" style=""> ${desencriptado}</textarea></br><button id="botonCopiar" onclick="copiarTextResultado()">Copiar</button>`;
    
  } else {
    html='';
    html += (` <img
    class="imagenResultado"
    src="imagenes/Muñeco.png"
    alt="Imagen de busqueda"
  />
    <div>
        <p class="pResultado" id="pResultado">Ningún mensaje fue encontrado</p>
        <span class="spanResultado" >Ingresa el texto que desees encriptar o desencriptar</span>
    </div>`);
    
  }
  texto.value='';
  contenido.innerHTML=html;
  
}

function copiarTextResultado(){
  let respuesta= document.getElementById('textResultado');
  let boton=document.getElementById('botonCopiar');
  navigator.clipboard.writeText(respuesta.textContent);
  boton.textContent='Copiado'
}

