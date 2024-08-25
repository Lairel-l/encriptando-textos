    /*------------Apartado de textarea-------------*/
document.querySelector(".caja-escribir").addEventListener("input",(e)=>{
    /*quitando imagen del gatito escribiendo para cuando se muestre el texto encriptado/desencriptado*/
    document.querySelector(".gato-escribiendo").style.display = "none";
    /*Ir captando el mensaje */
    console.log(e.target.value);
})


/*claves de encriptación establecidas por el Reto Alura*/
const claves = [
    ["e", "enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"]
];

    /*-----------------Encriptación----------------- */
/*Declarando función*/
function encriptarTexto(texto){
    /*guardar nuestro texto encriptado (declaración de una variable)*/
    let textoEncriptado = "";
    /*recorriendo letra por letra, para obtener las vocales del texto con un ciclo*/
    for (let i = 0; i < texto.length; i++){
        /*declarando más variables*/
        let vocal = texto[i];
        let palabraEncriptada = vocal;
        /*evaluando claves y comparando con las vocales*/
        for (let j = 0; j < claves.length; i++){
            /*Reemplazando la vocal:*/
            if (vocal === claves[j][0]){
                palabraEncriptada = claves[j][1];
                break;
            }
        }
        /*Uniendo las claves al mensaje de nuevo*/
        textoEncriptado += palabraEncriptada;
    }
    /*mostrar mensaje encriptado*/
    return textoEncriptado;
}

    /*-----------------Desencriptación----------------- */
/*Declarando función*/
function desencriptarTexto(texto){
    /*guardar nuestro texto encriptado (declaración de una variable)*/
    let textoDesencriptado = texto;
    /*recorriendo las claves*/
    for (let i = 0; i < claves.length; i++){
        /*declarando más variables*/
        /*Buscando las claves en el texto, de manera global 'g'*/
        let regex = new RegExp(claves[i][1], 'g');
        /*ent. remplazamos el texto clave por sus respectivas vocales*/
        textoDesencriptado = textoDesencriptado.replace(regex, claves[i][0]);
    }
    /*mostrar mensaje desencriptado*/
    return textoDesencriptado;
}


/*Creación de variables
var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var imagen = document.querySelector(".imagen");
var textoImagen = document.querySelector(".texto-imagen");
var textoResultado = document.querySelector(".texto-encriptado-desencriptado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;*/
