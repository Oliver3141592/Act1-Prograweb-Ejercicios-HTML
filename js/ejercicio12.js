const formulario = document.getElementById('formulario-conversion');
const formularioTasa = document.getElementById('formulario-cambio');
const tasa = document.getElementById('tasa-cambio');
const campopesos = document.getElementById('pesos');
const campoResultado = document.getElementById('resultado');
const mensajeError = document.getElementById('mensaje-error');


/*El formulario debe de llevar un evento para que al momento de presionar el
boton la pagina no se recargue, es muy importante*/
formularioTasa.addEventListener('submit', function (evento) {
    evento.preventDefault(); 

    const mxn = campopesos.value.trim();

    /*Cuando el campo está vacío*/
    if (mxn === '') {
        mensajeError.textContent = 'Debes ingresar un  en el campo "pesos".';
        campoResultado.value = '';
        return;
    }

    

    /*Validación que solo permite numeros*/
    if (isNaN(mxn)) {
        mensajeError.textContent = 'El valor ingresado debe ser numérico.';
        campoResultado.value = '';
        return;
    }

    /*Si pasa las validaciones, se limpia el mensaje de error*/
    mensajeError.textContent = '';

    /* se usa la formula para convertir el valor ingresado*/
    
    /*Cuando el campo está vacío*/
    if (tasa.value.trim() === '') {
        tasa.value = 0.055;
    }

    const dolares = mxn * tasa.value;

    campoResultado.value = dolares.toFixed(2)+' USD';
});