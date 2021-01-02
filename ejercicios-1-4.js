/* 
1) Programa una funcion que cuente el numero de caracteres de 
una cadena de texto, pe.miFuncion("Hola Mundo")devolvera 10

*/

//Prueba 1 - Funcionó
/* function numeroCaracteres(texto){
    
    if(typeof texto == "string"){
    console.log(`La cadena de texto: ${texto}, tiene: ${texto.length} caracteres`);
}else{
    console.log("No estas introduciendo texto");
}
}
let prueba=true
numeroCaracteres(prueba); */



//Prueba con switch -case - Funcionó
 /* function numeroCaracteres1(texto3){

switch(typeof texto3){
    
    case "string":
    console.log(`La cadena de texto: ${texto3}, tiene: ${texto3.length} caracteres`);
    break;

    default:
    console.log("No estas introduciendo texto");
    break;
}

}

let cadena="mi mama me mima";

numeroCaracteres1(cadena); */



//Operador Ternario (Condicion)? verdadero: falso - No funcionó

/* function numeroCaracter(texto4, texto5){
    texto4 =(typeof texto5=="string")? console.log(`La cadena de texto: ${texto5}, tiene: ${texto5.length} caracteres`): console.log(`Lo que has introducido no es texto`);
}

numeroCaracter("Hola"); */

//Prueba 2 - No Funciona
/* function numeroCaracteres2(texto){
    
texto=Number(prompt("Introduce un texto:"));


    if(isNaN(texto)){
        console.log(`La cadena de texto: ${prompt}, tiene: ${prompt.length} caracteres`);
    
}else{
    console.log(`Lo que has introducido no es texto`);
}
}
numeroCaracteres2(); */



//Prueba 3 - Funcionó
/* function numeroCaracteres3(texto1,texto2){
texto1=prompt("Introduce un texto:");
texto2=Number(texto1);

if(isNaN(texto2)){
    console.log(`La cadena de texto: ${texto1}, tiene: ${texto1.length} caracteres`);

}else{
console.log(`Lo que has introducido no es texto`);
}
}
numeroCaracteres3(); */


//Funcion usada en la prueba 3 sacada de MDN Window.prompt()
/* let numero = Number(window.prompt("Type a number")); 
console.log(numero);
//El resultado de este log es que si introduzco un numero,
me imprime un numero, pero si introduzco texto, entonces me devuelve
un NaN.
console.log(typeof numero);
 */



////////////////////////////////////////////////////////////////////////////

/* 2) Programa una funcion que te devuelva el texto recortado 
según el numero de caracteres, pe.miFuncion("Hola mundo", 4) 
devolvera "Hola" 
 */


 //Prueba 1 - Usando substring - Funciona
 /* function textoRecortado (texto,segundovalor){
     if(typeof texto=="string"){

    console.log(texto.substring(0,segundovalor));

     }
    else{
        console.log("No estas introduciendo texto");
    }
 }

 textoRecortado("Quiero a mi papa",10); */


//Prueba 2 - Usando Slice - Funciona

/* function textoRecortado (texto,segundovalor){
    if(typeof texto=="string"){

   console.log(texto.slice(0,segundovalor));

    }
   else{
       console.log("No estas introduciendo texto");
   }
}

textoRecortado("Quiero a mi papa",6);
 */

 ///////////////////////////////////////////////////////////////////////////

/* 3) Programa una función que dada una String te devuelva 
un Array de textos separados por cierto caracter, pe.
 miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

 //Prueba 1 - Funciona

/* 
 const deStringParaArreglo =function(texto1,separador){
if(typeof texto1=="string"){
let texto2= texto1.split(separador)
    console.log(`El texto original es: ${texto1}`);
    console.log(`El separador es: ${separador}`);
    console.log(`El arreglo tiene: ${texto2.length} elementos`);
    console.log(texto2);

}else{
    console.log("No estas introduciendo texto");
}
 }

 deStringParaArreglo("Mi papa me ama mucho y mi mama tambien"," ") */

/////////////////////////////////////////////////////////////////////////////

 /* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
 devolverá Hola Mundo Hola Mundo Hola Mundo */

//Prueba 1 - Funciona

 /* const repetidoraTexto =function(texto1,iterador){

    if(typeof texto1=="string"){

for (let i=0;i<iterador;i++){
console.log(texto1);
    }
 }
}
 repetidoraTexto("Hola mundo",6) */

