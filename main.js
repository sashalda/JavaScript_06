// const libro = {
//     nombre: "el principito", 
//     paginas:20 , 
//     editorial: "Anagrama"
// }

const hora = 50;

function libro (nombre,paginas, autor) {
    this.nombre= nombre;
    this.paginas= paginas;
    this.autor=autor;
    let dificultad = 0;

    switch (nombre) {

        case "el principito":
            dificultad= 1.0;
            break;
        case "el psicoanalista":
            dificultad= 1.8;
            break;
        case "la biblia":
            dificultad = 2.2;
            break;
        case "los tres chanchitos":
            dificultad = 1.2;
            break;    
        default:
            alert("ERROR")
    }

    calculo=(paginas/hora)*dificultad;
    console.log("El tiempo de lectura es de "+ calculo + " horas");

    

}

const libro1 = new libro("el principito", 200,  "Antoine de Saint-Exupéry");
console.log(libro1);

const libro2 = new libro("el psicoanalista", 600, "John Katzenbach");
console.log(libro2);

const libro3 = new libro("la biblia", 3000, "Iglesia");
console.log(libro3);

const libro4 = new libro("los tres chanchitos", 50, "Los hermanos Grimm");
console.log(libro4);