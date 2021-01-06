/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */

/* const vC=(t=undefined)=>{
if(!t)return console.warn("No ingresaste texto");
if(typeof t!== "string") return console.warn("El tipo de dato ingresado no es texto");

let erv=/[aeiou]/gi;
let erc=/([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]|[Ñ])/gi;
let rerv=t.match(erv);
let rerc=t.match(erc);
console.log(`El texto "${t}" tiene "${rerv.length}" vocales y "${rerc.length}" consonantes.`);
}
vC("Ñoño");
 */


/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */

/* const nA=(n=undefined)=>{
    if(n===undefined)return console.warn("No ingresado ningun nombre");
    if(typeof n!=="string")return console.warn("El nombre no es valido");
   
    console.info(`El nombre "${n}" introducido es correcto.`);
    }
    nA("Hola"); */

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */

 /*  const eV=(e=undefined)=>{
if(e===undefined)return console.warn("No ingresado ningun email");
if(typeof e!=="string")return console.warn("El email no es valido");
if((e.includes("@"))!==true) return console.warn("No has ingresado el @");
if((e.includes(".com"))!==true) return console.warn("No has ingresado el .com");

console.info(`El email "${e}" introducido es correcto.`);
}

eV();
eV(123421);
eV("holagmail.com");
eV("hola@gmail.co");
eV("hol3_5a@gmail.com"); */
 




