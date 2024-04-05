function verificarAprobacion(calificacion, asistencias, totalClases) {

    var porcentajeAsistencias = (asistencias / totalClases) * 100;
    if (porcentajeAsistencias >= 80) {
        if (calificacion >= 3) {
            console.log("¡Felicidades! Estás aprobado.");
        } else {
            console.log("Lo siento, estás reprobado debido a tu calificación.");
        }
    } else {
        console.log("Lo siento, estás reprobado debido a tus asistencias.");
    }
}

var calificacionAlumno = parseFloat(prompt("Ingresa la calificación del alumno: "));
var asistenciasAlumno = parseInt(prompt("Ingresa el número de asistencias del alumno: "));
var totalClases = parseInt(prompt("Ingresa el número total de clases: "));

verificarAprobacion(calificacionAlumno, asistenciasAlumno, totalClases);
