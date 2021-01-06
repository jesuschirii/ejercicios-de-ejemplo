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

/* const eV=(e=undefined)=>{
if(e===undefined)return console.warn("No ingresado ningun email");
if(typeof e!=="string")return console.warn("El email no es valido");

let clavesemail=/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(e);

return (clavesemail)?console.log(`${e}`):console.log(`No es un email valido`);

}

eV();
eV(12);
eV("hola@");
eV("@gmail.com");
eV("jesuschirii@gmail.com"); */

 




