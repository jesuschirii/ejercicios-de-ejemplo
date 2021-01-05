 /* 15) Programa una función para convertir números de base binaria a decimal y viceversa, 
 pe. miFuncion(100,2) devolverá 4 base 10 */


/* const bD=(n1="",n2="")=>{
if(!n1) return console.log("No has ingresado ningun numero");
if (typeof n1!=="number")return console.log("El tipo de dato ingresado no es un numero");

if(n2===2){
return console.log(`El numero binario es ${n1} y su valor decimal es ${parseInt(n1,2)}`);
}else if(n2===10){
return console.log(`El numero decimal es ${n1} y su valor binario es ${n1.toString(2)}`)
}else {
console.log("Solo se admiten las bases 2 para binario y 10 para decimal");
}
}
bD(1000,6) */


/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
pe. miFuncion(1000, 20) devolverá 800 */

/* const dC=(n1="",n2="")=>{
if(!n1)return console.log("No has ingresado ningun numero");
if(!n2)return console.log("No has ingresado ningun numero");
if(typeof n1!=="number")return console.log("El tipo de dato ingresado no es un numero");
if(typeof n2!=="number")return console.log("El tipo de dato ingresado no es un numero");
if(Math.sign(n1)===-1) return console.log("El monto no puede ser negativo");
if(Math.sign(n2)===-1) return console.log("El descuento no puede ser negativo");

return console.info(`El total es de: ${n1} menos el - %${n2} de descuento te da un total de: ${n1-((n2*n1)/100)}`);
}
dC();
dC("200");
dC(0);
dC(-1000);
dC(1000,"20");
dC(1000,-20);
dC(1000,20);
dC(1000); */

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
pe. miFuncion(new Date(1993,3,23)) devolverá 35 años (en 2020) */


/* const aP =(a="",m="",d="",f,f1)=>{
if(!a)return console.log("No has ingresado ningun año");
if(!m)return console.log("No has ingresado ningun mes");
if(!d)return console.log("No has ingresado ningun dia");
if(typeof a!=="number")return console.log("El tipo de dato ingresado no es un numero");
if(typeof m!=="number")return console.log("El tipo de dato ingresado no es un numero");
if(typeof d!=="number")return console.log("El tipo de dato ingresado no es un numero");
if(Math.sign(a)===-1) return console.log("El numero no puede ser negativo");
if(Math.sign(m)===-1) return console.log("El numero no puede ser negativo");
if(Math.sign(d)===-1) return console.log("El numero no puede ser negativo");

f=new Date(a,m,d);
f1=new Date();
console.info((f1.getFullYear())-(f.getFullYear()));

}
aP(1984,12,2); */



