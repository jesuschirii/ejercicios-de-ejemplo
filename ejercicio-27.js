/* 27) Programa una clase llamada Pelicula.
        La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
- Valida que el título no rebase los 100 caracteres.
- Valida que el director no rebase los 50 caracteres.
- Valida que el año de estreno sea un número entero de 4 dígitos.
          - Valida que el país o paises sea introducidos en forma de arreglo.
          - Valida que los géneros sean introducidos en forma de arreglo.
          - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
          - Crea un método estático que devuelva los géneros aceptados*.
          - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
          - Crea un método que devuelva toda la ficha técnica de la película.
          - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
        * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
        */

        class Pelicula {

            //constructor(id,titulo,director,anioestreno,paisorigen,generos,calificacion)
            constructor({id,titulo,director,anioestreno,paisorigen,generos,calificacion}){
                
            this.id=id;
            this.titulo=titulo;
            this.director=director;
            this.anioestreno=anioestreno;
            this.paisorigen=paisorigen;
            this.generos=generos;
            this.calificacion=calificacion;

            this.validarIMDB(id);
            this.validarTitulo(titulo);
            this.validarDirector(director);
            this.validarAnio(anioestreno);
            this.validarPais(paisorigen);
            this.validarGeneros(generos);
            }

        //Validaciones generales
validarCadena(propiedad,valor){
     if(!valor)return console.warn(`No has introducido ningun ${propiedad}`);
     if(typeof valor!=="string")return console.warn(`El ${propiedad}: ${valor} no es una cadena de texto.`);

    return true;
}

validarLongitud(propiedad,valor,longitud){
    if(!valor)return console.warn(`No has introducido ningun ${propiedad}`);
    if(valor.length>longitud)return console.warn(`La longitud de ${propiedad} es mayor a ${longitud} caracteres.`);
    return true;
}

validarArreglo(propiedad,valor){
    if(!valor)return console.warn(`No has introducido ningun ${propiedad}`);
    if(!(valor instanceof Array)) return console.warn(`El dato ${valor} introducido no es un arreglo`);
    if(valor.length===0)return console.warn(`El arreglo ${valor} no puede estar vacio`);
    for (let i = 0; i < valor.length; i++) {
        if(typeof valor[i]!=="string") return console.warn(`El arreglo ${valor} debe contener unicamente texto.`);
    }
    return true;
}



        //Validaciones especificas
        validarIMDB(id){
            if(this.validarCadena("id",id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) return console.error(`${id} no es un IMDB id valido.`);
            }
        }


        validarTitulo(titulo){
            if(this.validarCadena("titulo",titulo)){
            if(this.validarLongitud("titulo",titulo,100)){}
           // if(titulo.length>100) console.error(`El titulo: ${titulo} supera los 100 caracteres.`);
            }
        }

        validarDirector(director){
            if(this.validarCadena("director",director)){
            if(this.validarLongitud("director",director,50)){}
            //if(director.length>50) console.error(`El director: ${director} supera los 100 caracteres.`);
            }
        }

        validarAnio(anioestreno){
            if(!anioestreno)return console.warn(`No has introducido ningun año`);
            if(typeof anioestreno!=="number") return console.warn(`${anioestreno} no es un año valido`);
            if(!(/^([0-9]){4}$/.test(anioestreno))) return console.warn(`El año ${anioestreno} posee mas de 4 caracteres.`);
        }

        validarPais(paisorigen){
            if(this.validarArreglo("pais",paisorigen)){}
        }

        static get generos1(){
            return ["Action","Adult","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film Noir","Game-Show","History","Horror","Musical","Music","Mystery","News","Reality-TV","Romance","Sci-Fi","Short","Sport","Talk-Show","Thriller","War","Western"]
        }
        static generos2(){
            return console.info(`Los generos aceptados son ${Pelicula.generos1.join(", ")}`)
        }

        validarGeneros(generos){
            if(this.validarArreglo("genero",generos)){
                if(generos.includes()){}
            }

        }
    }

        







        const ejemplo=new Pelicula ({
            id:"tt1234567",
            titulo: "Los vaqueros",
            director: "Stiven guy",
            anioestreno:1958,
            paisorigen:["hola"],
            generos:["hola"]
        })
        
    
    