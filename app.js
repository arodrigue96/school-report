// Datos de los estudiantes
const nombresEstudiantes = ["Aniol", "Erik"];
const apellidosEstudiantes = ["Rodriguez", "Riquelme"];
const edadEstudiantes = [28, 26];
const edadMedia = (28 + 26) / 2;

//Datos de los cursos ofrecidos
const cursos = [
  "Introducción a Python",
  "JavaScript para PRO",
  "TypeScript para Leyendas",
];
const dificultad = ["básico", "intermedio", "avanzado"];
const duracionHoras = [10, 20, 30];

console.log("INFORME DE LA ESCUELA\n\n");
console.log("Cursos:");
console.log(
  "- " +
    cursos[0] +
    " (nivel " +
    dificultad[0] +
    ", " +
    duracionHoras[0] +
    " horas)"
);
console.log(
  "- " +
    cursos[1] +
    " (nivel " +
    dificultad[1] +
    ", " +
    duracionHoras[1] +
    " horas)"
);
console.log(
  "- " +
    cursos[2] +
    " (nivel " +
    dificultad[2] +
    ", " +
    duracionHoras[2] +
    " horas)\n\n"
);
console.log("Alumnos:");
console.log(
  "- " + nombresEstudiantes[0],
  apellidosEstudiantes[0] + ",",
  edadEstudiantes[0],
  "años"
);
console.log(
  "- " + nombresEstudiantes[1],
  apellidosEstudiantes[1] + ",",
  edadEstudiantes[1],
  "años\n\n"
);
console.log("Edad media de los alumnos:", edadMedia, "años");
