/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

/* const aN=(ns="")=>{

if(!ns) return console.warn("No has ingresado nada");
if(!(ns instanceof Array)) return console.warn("Lo que has ingresado no es un arreglo");
if(ns.length===0) return console.warn("El arreglo introducido esta vacio");
//if((/[0-9]/g.test(ns))===false) return console.warn("El arreglo introducido debe incluir unicamente numeros");

for (let i = 0; i < ns.length; i++) {
if(typeof ns[i]!=="number") return console.log("No puedes ingresar otros elementos que no sean numeros")
 
}

let ns1=[];
ns.forEach(element => {
ns1.push(Math.pow(element,2));
});
console.log(ns1);

}

aN();
aN({});
aN([]);
aN([1,3,5,8,"b"]);
aN([1,2,3,4,5,[1]])
aN([1,2,3,4,5,6,7,8,9,20]) */



/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */

/* const aN=(mM="")=>{

    if(!mM) return console.warn("No has ingresado nada");
    if(!(mM instanceof Array)) return console.warn("Lo que has ingresado no es un arreglo");
    if(mM.length===0) return console.warn("El arreglo introducido esta vacio");
    //if((/[0-9]/g.test(ns))===false) return console.warn("El arreglo introducido debe incluir unicamente numeros");
    
    for (let i = 0; i < mM.length; i++) {
    if(typeof mM[i]!=="number") return console.log("No puedes ingresar otros elementos que no sean numeros")
    }
    
    let na=[];
    let max=na.push(Math.max.apply(null,mM))
    let min=na.push(Math.min.apply(null,mM));

    console.log(na);
    console.info(`Del arreglo introducido ${mM}, el número mayor es ${na[0]} y el mínimo es ${na[1]}`)
    }
    aN();
    aN({});
    aN([]);
    aN([1,3,5,8,"b"]);
    aN([1,2,3,4,5,[1]]);
    aN([-7,2,3,100,5,6,7,8,9,20]); */




/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */


/* const pI=(aPI="")=>{
    if(!aPI) return console.warn("No has ingresado nada");
    if(!(aPI instanceof Array)) return console.warn("Lo que has ingresado no es un arreglo");
    if(aPI.length===0) return console.warn("El arreglo introducido esta vacio");
    
    for (let i = 0; i < aPI.length; i++) {
    if(typeof aPI[i]!=="number") return console.log("No puedes ingresar otros elementos que no sean numeros")
    }

let apar=[];
let aimpar=[];

aPI.forEach(element => {
    (element%2===0)
    ?apar.push(element)
    :aimpar.push(element);
});
let obfinal={
apar,
aimpar
}

console.info(`Números Pares: ${obfinal.apar}, Números Impares: ${obfinal.aimpar}`);
}

pI();
pI({});
pI([]);
pI([1,3,5,8,"b"]);
pI([1,2,3,4,5,[1]]);
pI([-7,2,3,2,5,6,7,8,9,20]); */



