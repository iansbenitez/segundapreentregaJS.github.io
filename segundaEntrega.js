// Zona de funciones


// Función saludo 
const saludoConNombre = (nombre) => {

    do{
        nombre = prompt("Ingrese por favor su nombre")

        if(!isNaN(nombre) || (nombre === "")){
            alert("Por favor, ingresar solo letras y no dejar vacío.")
        }
        else{
            alert("Hola " + nombre + ", bienvenido a nuestro sistema de alumnos.")
        }

    }while(!isNaN(nombre) || (nombre == ""))
    

};

// Función para recorrer y mostrar alumnos

const recorridaListaAlumnos = () => {
    let mensaje = '';

    listaDeAlumnos.forEach((el, index) => {
        let nombre = el.nombre;
        let apellido = el.apellido;
        let curso = el.curso;

        mensaje += `${index + 1}) ${nombre} ${apellido} - curso: ${curso}\n`;
    });

    alert(`Este es el listado de alumnos\n\n${mensaje}`);
};

// Función para mostrar aprobados 

const alumnosAprobados = () => {
    const aprobados = listaDeAlumnos.filter(alumno => alumno.aprobado);

    const mensajeAprobados = aprobados.map((alumno, index) => `${index + 1}) ${alumno.nombre} ${alumno.apellido}. Nota: ${alumno.nota}`);

    const mensajeFinalizado = mensajeAprobados.join(`\n`);

    alert(`Estos son los alumnos aprobados\n\n${mensajeFinalizado}`)
};


// Función para agregar alumnos 

const agregarAlumno = (nombre, apellido, curso, nota) => {
    do {
        nombre = prompt("Ingrese el nombre del alumno:")

        if (!isNaN(nombre) || nombre.trim() === "") {
            alert("Por favor, no dejar vacío ni ingresar números.");
        };
    } while (!isNaN(nombre) || nombre.trim() === "");

    do {
        apellido = prompt("Ingrese el apellido del alumno:")
        
        if (!isNaN(apellido) || apellido.trim() === "") {
            alert("Por favor, no dejar vacío ni ingresar números.");
        }
    } while (!isNaN(apellido) || apellido.trim() === "");

    do {
        curso = prompt("Ingrese el curso del alumno:")
        
        if (!isNaN(curso) || curso.trim() === "") {
            alert("Por favor, no dejar vacío ni ingresar números.");
        };
    } while (!isNaN(curso) || curso.trim() === "");

    do {
        nota = parseFloat(prompt("Ingrese la nota del alumno:"))
        
        if (isNaN(nota) || nota < 1 || nota > 10) {
            alert("Por favor, ingrese solo números del 1 al 10.");
        };
    } while (isNaN(nota) || nota < 1 || nota > 10);

    const nuevoAlumno = new Alumno(nombre.toUpperCase(), apellido.toUpperCase(), curso.toUpperCase(), nota);

    listaDeAlumnos.push(nuevoAlumno);

    alert(`Nuevo alumno agregado, estos son los datos:\n\nNombre: ${nuevoAlumno.nombre}\nApellido: ${nuevoAlumno.apellido}\nCurso: ${nuevoAlumno.curso}\nNota: ${nuevoAlumno.nota}`);
};


// Función para mostrar las notas de los alumnos de mayor a menor

const notasDeAlumnosMayor = () => {
    const mayorNota = listaDeAlumnos.sort((a, b) => b.nota - a.nota);

    arrayNotasMayor = mayorNota.map((alumno, index) => `${index + 1}) ${alumno.nombre} ${alumno.apellido}. Nota final: ${alumno.nota}.`)

    const mensajeFinalNotas = arrayNotasMayor.join(`\n`);
    
    alert(`Estas son las notas de nuestros alumnos ordenados de mayor a menor.\n\n${mensajeFinalNotas}`)
}

// Función para mostrar las notas de los alumnos de menor a mayor

const notasDeAlumnosMenor = () => {
    const mayorNota = listaDeAlumnos.sort((a, b) =>  a.nota - b.nota);

    arrayNotasMayor = mayorNota.map((alumno, index) => `${index + 1}) ${alumno.nombre} ${alumno.apellido}. Nota final: ${alumno.nota}.`)

    const mensajeFinalNotas = arrayNotasMayor.join(`\n`);
    
    alert(`Estas son las notas de nuestros alumnos ordenados de menor a mayor.\n\n${mensajeFinalNotas}`)
}



// Array lista de alumnos para funcion constructora
const listaDeAlumnos = [];

class Alumno{
    constructor (nombreAlumno, apellidoAlumno, cursoAlumno, notaAlumno) {
        this.nombre = nombreAlumno;
        this.apellido = apellidoAlumno;
        this.curso = cursoAlumno;        
        this.nota = notaAlumno;
        this.aprobado = notaAlumno >6;
    }
};







// Inicio algoritmo
saludoConNombre();

let opcion;
let opcionNota;

do {
    opcion = parseInt(prompt("Por favor, ingrese una opción.\n\n\n1) Ver listado de alumnos.\n2) Ver alumnos aprobados.\n3) Ver notas.\n4) Agregar un alumno.\n\n0) Presione para salir."));

    switch (opcion) {
        case 0:
            alert("Gracias por asistir, nos vemos pronto.");
            break;

        case 1:
            // Función que recorra los alumnos y mostrar
            if (listaDeAlumnos.length === 0) {
                alert("No hay alumnos aún, por favor agregar.");
            } else {
                recorridaListaAlumnos();
            }
            break;

        case 2:
            // Función que recorra y muestre los alumnos aprobados
            if (listaDeAlumnos.length === 0) {
                alert("No hay alumnos aún, por favor agregar.");
            } else {
                alumnosAprobados();
            }
            break;

        case 3:
            // Función que recorra y muestre las valoraciones
            if (listaDeAlumnos.length === 0) {
                alert("No hay alumnos aún, por favor agregar.");
            } else {
                do {
                    opcionNota = parseInt(prompt("Cómo quiere mostrar las valoraciones?\n\n1) De mayor a menor.\n2) De menor a mayor.\n\n0) Volver al menú principal."));

                    switch (opcionNota) {
                        case 1:
                            notasDeAlumnosMayor();
                            break;

                        case 2:
                            notasDeAlumnosMenor();
                            break;

                        default:
                            break;
                    }
                } while (opcionNota !== 0);
            }
            break;

        case 4:
            // Función objeto clase constructora que pida los datos y pushee al array de alumnos
            agregarAlumno();
            break;

        default:
            alert("Ingresó una opción inexistente");
    }
} while (opcion !== 0);
