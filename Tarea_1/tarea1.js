var asistencia, calificacion

function verificarAprobacion (asistencia, calificacion) {

    var porcentajeAsistencias = (asistencia / 100) * 80

    if(calificacion >= 3 && asistencia >= porcentajeAsistencias){
        return "Aprobado"
    }else{
        return "Reprobado"
    }

}

var calificacion = parseFloat(prompt("Ingrese la calificacion del alumno: "))
var asistencia = parseFloat(prompt("Ingrese el porcentaje de asistencia del alumno: "))

var resultado = verificarAprobacion(asistencia, calificacion)

alert("El estudiante esta " + resultado)
