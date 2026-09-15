const formulario = document.getElementById('formulario-conversion');
const campoTemperatura = document.getElementById('temperatura');
const campoResultado = document.getElementById('resultado');
const mensajeError = document.getElementById('mensaje-error');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); // Evita que la página se recargue

    const valorIngresado = campoTemperatura.value.trim();

    /*Cuando el campo está vacío*/
    if (valorIngresado === '') {
        mensajeError.textContent = 'Debes ingresar un valor.';
        campoResultado.value = '';
        return;
    }

    const celsius = Number(valorIngresado);

    /*Validación que solo permite numeros*/
    if (isNaN(celsius)) {
        mensajeError.textContent = 'El valor ingresado debe ser numérico.';
        campoResultado.value = '';
        return;
    }

    /*Si pasa las validaciones, se limpia el mensaje de error*/
    mensajeError.textContent = '';

    /* se usa la formula para convertir el valor ingresado*/
    const fahrenheit = (celsius * 9 / 5) + 32;

    campoResultado.value = fahrenheit.toFixed(1) + '°F';
});