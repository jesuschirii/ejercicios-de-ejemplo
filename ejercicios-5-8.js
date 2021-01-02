 /* 5) Programa una función que invierta las palabras de una cadena de texto, 
 pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */

//Solución 1

/* const iP=(t="")=>{
if(!t)return console.warn("No ingresaste texto");
if(typeof t!== "string") return console.warn("El tipo de dato ingresado no es texto");
//Con Split creo un arreglo a partir de una cadena de texto
//Con reverse puedo intercambiar los elementos de un arreglo
//Con join uno los elementos de un arreglo y los convierto en una cadena de texto
let t1=t.split("").reverse().join("");
console.log(t1);
}
iP("Hola nino") */


/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

//Solucion 1

/* const rP=(t="",t1="")=>{
if(!t||!t1)return console.warn("No ingresaste texto");
if(typeof t!== "string"||typeof t1!== "string") return console.warn("El tipo de dato ingresado no es texto");
//Primero voy a convertir la cadena de texto en un arreglo
let t2=t.split(" ");
//Ahora creamos el arreglo que va a almacenar la palabra repetida
let t3=[];
//Luego voy a iterar en el arreglo que se creó con split
for(let i=0; i<t2.length;i++){
//Ahora si la palabra ingresada es igual a la elemento del arreglo que se creo con split, entonces agrega al arreglo t3 la palabra repetida.   
    if(t1===t2[i]) t3.push(t1);
}
console.log(t3.length);
}
rP("mi mama me mima mucho porque mi mama es muy buena","mama"); */



/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */

//Solucion 1

/* const pP=(t="")=>{
if(!t)return console.warn("No ingresaste texto");
if(typeof t!== "string") return console.warn("El tipo de dato ingresado no es texto");
//Transformamos el texto al reves
let t1=t.split("").reverse().join("");
//Ahora evaluamos si el texto t es igual que t1
(t1===t)?console.log(true):console.log(false);
}
pP("arepera");
 */


/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */


/* const pP=(t="",t1="",t2="",t3)=>{
    if(!t||!t1||!t2)return console.warn("No ingresaste texto");
    if(typeof t!== "string"||typeof t1!== "string"||typeof t2!== "string") return console.warn("El tipo de dato ingresado no es texto");
    t3= new RegExp(t1,"g","i")
    console.log(t);
console.log(t.replace(t3,t2));
}
pP("Todos somos los locos de la vida amigos","os","90"); */
