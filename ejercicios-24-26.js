 /* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/

 /* const aD=(arr="")=>{
    if(!arr) return console.warn("No has ingresado nada");
    if(!(arr instanceof Array)) return console.warn("Lo que has ingresado no es un arreglo");
    if(arr.length===0) return console.warn("El arreglo introducido esta vacio");
    
    for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i]!=="number") return console.log("No puedes ingresar otros elementos que no sean numeros")
    }

    let original=arr
    let ascendente=arr.map(el=>el*1);
    let descendente=arr.map(el=>el*1);
    ascendente.sort((a,b)=>b-a);
    descendente.sort((a,b)=>a-b);
    original

  console.log({
      original,
    ascendente,
    descendente
  });

}
aD();
aD({});
aD([]);
aD([1,3,5,8,"b"]);
aD([1,2,3,4,5,[1]]);
aD([1,5,3,8,20,2]); */

/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */


/* const dupli=(arrele="")=>{
    if(!arrele) return console.warn("No has ingresado nada");
    if(!(arrele instanceof Array)) return console.warn("Lo que has ingresado no es un arreglo");
    if(arrele.length===0) return console.warn("El arreglo introducido esta vacio");

    
    let newArr = arrele.filter((el, index) => arrele.indexOf(el) === index);
console.log(newArr); 


console.log([...new Set(arrele)]);

}
dupli();
dupli({});
dupli([]);
dupli([1,2,2,2,2,3,5,8,"b"]);
dupli([1,2,2,2,22,3,4,5,[1]]);
 */


/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */

/* const promArr=(aN="")=>{

    if(!aN) return console.warn("No has ingresado nada");
    if(!(aN instanceof Array)) return console.warn("Lo que has ingresado no es un arreglo");
    if(aN.length===0) return console.warn("El arreglo introducido esta vacio");
    //if((/[0-9]/g.test(ns))===false) return console.warn("El arreglo introducido debe incluir unicamente numeros");
    
    for (let i = 0; i < aN.length; i++) {
    if(typeof aN[i]!=="number") return console.log("No puedes ingresar otros elementos que no sean numeros")
    }


    let newN=0;
for (let i = 0; i < aN.length; i++) {
    
   newN+=aN[i]
     }
console.log(`Arreglo original ${aN}`);
     console.log(`Promedio del arreglo: ${(newN/aN.length).toFixed(2)}`);

}
promArr([98,56,43,1,3,5,90]); */

