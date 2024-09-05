// Datos de los estudiantes
const studentNames = ["Aniol", "Erik"];
const studentLastNames = ["Rodriguez", "Riquelme"];
const studentAges = [28, 26];
const averageAge = (studentAges[0] + studentAges[1]) / 2;

//Datos de los cursos ofrecidos
const courses = [
  "Introducción a Python",
  "JavaScript para PRO",
  "TypeScript para Leyendas",
];
const difficulty = ["básico", "intermedio", "avanzado"];
const durationHours = [10, 20, 30];

console.log("INFORME DE LA ESCUELA\n\n");
console.log("Cursos:");
console.log(
  "- " +
    courses[0] +
    " (nivel " +
    difficulty[0] +
    ", " +
    durationHours[0] +
    " horas)"
);
console.log(
  "- " +
    courses[1] +
    " (nivel " +
    difficulty[1] +
    ", " +
    durationHours[1] +
    " horas)"
);
console.log(
  "- " +
    courses[2] +
    " (nivel " +
    difficulty[2] +
    ", " +
    durationHours[2] +
    " horas)\n\n"
);
console.log("Alumnos:");
console.log(
  "- " + studentNames[0],
  studentLastNames[0] + ",",
  studentAges[0],
  "años"
);
console.log(
  "- " + studentNames[1],
  studentLastNames[1] + ",",
  studentAges[1],
  "años\n\n"
);
console.log("Edad media de los alumnos:", averageAge, "años");
