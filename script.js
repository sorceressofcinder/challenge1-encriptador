//variables generales//
var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var textoEscondido = document.querySelector("#textoescondido");
var botonCopiar = document.querySelector(".copiar");


botonEncriptar.addEventListener("click",presionarBotonEncriptar);
botonDesencriptar.addEventListener("click",presionarBotonDesencriptar);


function presionarBotonEncriptar(){
    textoEscondido.textContent = encriptar(recogerTexto())
    esconderTexto();
}

function presionarBotonDesencriptar(){
    esconderTexto();
    textoEscondido.textContent = desencriptar(recogerTexto())
}

function recogerTexto(){   
    var texto = document.querySelector(".primertexto"); 
    return(texto.value);   
}

function encriptar(mensaje){
    var textoacifrar = mensaje;
    var textoCifrado = "";

    for(var i=0; i < textoacifrar.length; i++){
        if(textoacifrar[i] == "a"){
            textoCifrado = textoCifrado + "ai"
        }

        else if(textoacifrar[i] == "e"){
            textoCifrado = textoCifrado + "enter"
        }

        else if(textoacifrar[i] == "i"){
            textoCifrado = textoCifrado + "imes"
        }

        else if(textoacifrar[i] == "o"){
            textoCifrado = textoCifrado + "ober"
        }

        else if(textoacifrar[i] == "u"){
            textoCifrado = textoCifrado + "ufat"
        }

        else{
            textoCifrado = textoCifrado + textoacifrar[i];
        }

    }  
    
    return textoCifrado;
    
}


function desencriptar(mensaje){
    var textoacifrar = mensaje;
    var textoCifrado = "";

    for(var i=0; i < textoacifrar.length; i++){
        if(textoacifrar[i] == "a"){
            textoCifrado = textoCifrado + "a"
            i = i+1;
        }

        else if(textoacifrar[i] == "e"){
            textoCifrado = textoCifrado + "e"
            i = i+4;
        }

        else if(textoacifrar[i] == "i"){
            textoCifrado = textoCifrado + "i"
            i = i+3;
        }

        else if(textoacifrar[i] == "o"){
            textoCifrado = textoCifrado + "o"
            i = i+3;
        }

        else if(textoacifrar[i] == "u"){
            textoCifrado = textoCifrado + "u"
            i = i+3;
        }

        else{
            textoCifrado = textoCifrado + textoacifrar[i];
        }

    }  
    
    return textoCifrado;
    
}

function esconderTexto(){
    document.getElementById("reloj").style.display = "none";
    document.getElementById("segundotexto").style.display = "none";
    document.getElementById("textoescondido").style.display = "block";
}

botonCopiar.onclick = copiar;

function copiar() {
    var textoaCopiar = document.getElementById("textoescondido");

    textoaCopiar.select();
    textoaCopiar.setSelectionRange(0,99999);
    navigator.clipboard.writeText(textoaCopiar.value);
    swal.fire({
        html: '<p class = "textoalertcopiar"> Texto copiado </p>',
        background:'#fff url(img/a.jpg)',
        confirmButtonColor:'#dd4cc5',
        confirmButtonText: 'Entendido',
        padding: '1em',
        position:'top',
    });
    limpiar();

}

botonEncriptar.addEventListener("click",validarTexto);
botonDesencriptar.addEventListener("click",validarTexto);


function validarTexto (){
    const caracteres = /[A-Z0-9~!@#$%&*()_+|{}[\]\\\/?><^:"`;.,áéíóúàèìòù']/g;
    var txt = document.querySelector("#textoacifrar").value;
    if (txt == ""){
        swal.fire({
            html: '<p class = "textoalert"> La caja de texto no puede quedar vacía</p>',
            background:'#fff url(img/a.jpg)',
            confirmButtonColor:'#b813c7',
            confirmButtonText: 'Entendido',
            padding: '1em',
            position:'top',
        });
        limpiar();
        
    } else if (txt.match(caracteres) != txt.match(caracteres)){
        swal.fire({
            html: '<p class = "textoalert2"> El texto ingresado es inválido </p>',
            background:'#fff url(img/a.jpg)',
            icon:'error',
            iconColor:'#0400ff',
            confirmButtonColor:'#0c09e9d5',
            confirmButtonText: 'Intentar nuevamente',
            padding: '1em',
        
        });
        limpiar();
    }
}

var botonLimpiar = document.querySelector(".limpiar");
botonLimpiar.addEventListener("click",limpiar);

function limpiar(){
    document.getElementById("textoacifrar").value = "";
    document.getElementById("reloj").style.display = "block";
    document.getElementById("segundotexto").style.display = "block";
    document.getElementById("textoescondido").style.display = "none";
}
