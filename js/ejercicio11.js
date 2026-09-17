const formulario = document.getElementById('formulario-conversion');
const campoKilometros = document.getElementById('kilometros');
const campoResultado = document.getElementById('resultado');
const mensajeError = document.getElementById('mensaje-error');


/*El formulario debe de llevar un evento para que al momento de presionar el
boton la pagina no se recargue, es muy importante*/
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); 

    const valorIngresado = campoKilometros.value.trim();

    /*Cuando el campo está vacío*/
    if (valorIngresado === '') {
        mensajeError.textContent = 'Debes ingresar un valor.';
        campoResultado.value = '';
        return;
    }

    const km = Number(valorIngresado);

    /*Validación que solo permite numeros*/
    if (isNaN(km)) {
        mensajeError.textContent = 'El valor ingresado debe ser numérico.';
        campoResultado.value = '';
        return;
    }

    /*Si pasa las validaciones, se limpia el mensaje de error*/
    mensajeError.textContent = '';

    /* se usa la formula para convertir el valor ingresado*/
    
    const millasConvertidas = km * 0.621371;

    campoResultado.value = millasConvertidas.toFixed(5) + ' Millas';
});