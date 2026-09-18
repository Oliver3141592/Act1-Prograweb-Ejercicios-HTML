const formularioEstudiante = document.getElementById('formulario-estudiante');
const campoNombre = document.getElementById('input-nombre');
const campoCalificacion = document.getElementById('input-calificacion');
const mensajeError = document.getElementById('mensaje-error');
const listaEstudiantesUl = document.getElementById('lista-estudiantes');
const botonCalcular = document.getElementById('boton-calcular');

const resultadoPromedio = document.getElementById('resultado-promedio');
const resultadoMayor = document.getElementById('resultado-mayor');
const resultadoMenor = document.getElementById('resultado-menor');

/*Aquí se guardarán todos los objetos estudiante*/
const estudiantes = [];

/*Evento para agregar un estudiante a la lista*/
formularioEstudiante.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nombre = campoNombre.value.trim();
    const calificacion = campoCalificacion.value.trim();

    /*Validación: campos vacíos*/
    if (nombre === '' || calificacion === '') {
        mensajeError.textContent = 'Debes llenar el nombre y la calificación.';
        return;
    }

    /*Validación: la calificación debe ser un número válido*/
    if (isNaN(calificacion)) {
        mensajeError.textContent = 'La calificación debe ser un número.';
        return;
    }

    /*Si pasa las validaciones, se limpia el mensaje de error*/
    mensajeError.textContent = '';

    /*se crea el objeto estudiante y lo agregamos al arreglo*/
    const nuevoEstudiante = {
        nombre: nombre,
        calificacion: Number(calificacion)
    };
    estudiantes.push(nuevoEstudiante);

    /*se muestra el estudiante agregado en la lista visual*/
    const elementoLista = document.createElement('li');
    elementoLista.textContent = nuevoEstudiante.nombre + ' - ' + nuevoEstudiante.calificacion;
    listaEstudiantesUl.appendChild(elementoLista);

    //se limpia el formulario
    campoNombre.value = '';
    campoCalificacion.value = '';
    campoNombre.focus();
});

/*Evento para calcular promedio, mayor y menor*/
botonCalcular.addEventListener('click', function () {

    /*Validación: que haya al menos un estudiante agregado*/
    if (estudiantes.length === 0) {
        mensajeError.textContent = 'Agrega al menos un estudiante antes de calcular.';
        return;
    }

    mensajeError.textContent = '';

    /*calcular el promedio con reduce()*/
    const suma = estudiantes.reduce(function (total, estudiante) {
        return total + estudiante.calificacion;
    }, 0);
    const promedio = suma / estudiantes.length;

    /*Calculamos la calificación máxima y mínima*/
    const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    /*Buscamos el estudiante que tiene esa calificación máxima/mínima*/
    const estudianteMayor = estudiantes.find(function (estudiante) {
        return estudiante.calificacion === calificacionMaxima;
    });
    const estudianteMenor = estudiantes.find(function (estudiante) {
        return estudiante.calificacion === calificacionMinima;
    });

    /*se muestra el resultado*/
    resultadoPromedio.value = promedio.toFixed(2);
    resultadoMayor.value = estudianteMayor.nombre;
    resultadoMenor.value = estudianteMenor.nombre;
});