 /* 12) Programa una función que determine si un número es primo 
 (aquel que solo es divisible por sí mismo y 1) o no, 
 pe. miFuncion(7) devolverá true */

/* const nP=(n="")=>{
if(n===2||n===3) return console.log(`El numero: ${n} es un numero primo`);
if(!n)return console.log("No ingresaste ningún un numero");
if(typeof n!=="number")return console.log(`El dato ingresado: ${n} no es un numero`);
if(Math.sign(n)===-1)return console.log(`El numero: ${n} no es un numero primo, ya que es negativo y no pertenece a los numeros naturales`);
if(n===1)return console.log(`El numero ${n} no es un numero primo`);

if(n%2===0||n%3===0||n%7===0||n%11===0){console.log(`El numero: ${n} No es un numero primo`);    
}else console.log(`El numero: ${n} es un numero primo`);
}

nP(2)
 */


/* 13) Programa una función que determine si un número es par o impar, 
pe. miFuncion(29) devolverá Impar */

/* const pI=(n="")=>{
if(!n)return console.log("No ingresaste ningún un numero.");
if(typeof n!=="number")return console.log(`El dato ingresado: ${n} no es un numero.`);
if(Math.sign(n)===-1)return console.log(`El numero: ${n} es negativo y no pertenece a los numeros naturales.`);

if(n%2===0){
console.log(`El numero: ${n} es un numero par.`);
}else{
console.log(`El numero: ${n} es un numero impar.`);
}
}
pI()
pI("Hola")
pI(-1)
pI(2)
pI(5) */

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F */

//Solucion1

/* const cF=(t="",g="",tf,tc)=>{
if(!t)return console.log("No ingresaste ninguna temperatura.");
if(typeof t!=="number") return console.log(`El dato ingresado: ${t} no es una termperatura.`);
if(typeof g!=="string") return console.log(`El dato ingresado: ${g} no es una unidad de temperatura valida`);

if(t>=-273.15&&g==="c"){
tf=(t*9/5)+32;
console.log(`${t} Celsius ----> ${tf} Fahrenheit`); 
}else 
if(t>=-459.67&&g==="f"){
tc=(t-32)*5/9;
console.log(`${t} Fahrenheit ----> ${tc} Celsius`);
}
}
cF(20,"f"); */

//Solucion2 - Con operador ternario

/* 
const cF=(t="",g="",tf,tc)=>{
    if(!t)return console.log("No ingresaste ninguna temperatura.");
    if(typeof t!=="number") return console.log(`El dato ingresado: ${t} no es una termperatura.`);
    if(typeof g!=="string") return console.log(`El dato ingresado: ${g} no es una unidad de temperatura valida`);
    
(t>=-273.15&&g==="c")
?console.log(`${t} Celsius ----> ${(t*9/5)+32} Fahrenheit`)
:(t>=-459.67&&g==="f") 
?console.log(`${t} Fahrenheit ----> ${(t-32)*5/9} Celsius`)
:console.log(`El valor de temperatura ${t} no esta dentro del rango`);
}
    
cF(-300,"f"); */

