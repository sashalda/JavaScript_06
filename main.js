const hora = 50;
class Libro {
    constructor(nombre, paginas, autor) {
        this.nombre = nombre;
        this.paginas = paginas;
        this.autor = autor;
    }

    obtenerDificultad() {
        let dificultad = 0;

        switch(this.nombre) {
            case "el principito":
                dificultad = 1.0;
                break;
            case "el psicoanalista":
                dificultad = 1.8;
                break;
            case "la biblia":
                dificultad = 2.2;
                break;
            case "los tres chanchitos":
                dificultad = 1.2;
                break;    
            default:
                alert("ERROR");
        }

        let calculo = (this.paginas/hora)*dificultad;
        console.log("El tiempo de lectura es de "+ calculo + " horas");

    }
}

const libro1 = new Libro("el principito", 200,  "Antoine de Saint-Exupéry");
libro1.obtenerDificultad();
console.log(libro1);

const libro2 = new Libro("el psicoanalista", 600, "John Katzenbach");
libro2.obtenerDificultad();
console.log(libro2);

const libro3 = new Libro("la biblia", 3000, "Iglesia");
libro3.obtenerDificultad();
console.log(libro3);

const libro4 = new Libro("los tres chanchitos", 50, "Los hermanos Grimm");
libro4.obtenerDificultad();
console.log(libro4);