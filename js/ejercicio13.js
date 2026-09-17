const formularioEdad = document.getElementById('formulario-edad');
const campoEdad = document.getElementById('edad');
const campoResultado = document.getElementById('resultado');
const mensajeError = document.getElementById('mensaje-error');


/*El formulario debe de llevar un evento para que al momento de presionar el
boton la pagina no se recargue, es muy importante*/
formularioEdad.addEventListener('submit', function (evento) {
    evento.preventDefault(); 

    const edad = campoEdad.value.trim();

    /*Cuando el campo está vacío*/
    if (edad === '') {
        mensajeError.textContent = 'Debes ingresar un valor válido en el campo "edad".';
        campoResultado.value = '';
        return;
    }

    

    /*Validación que solo permite numeros*/
    if (isNaN(edad)) {
        mensajeError.textContent = 'El valor ingresado debe ser numérico.';
        campoResultado.value = '';
        return;
    }

    /*Si pasa las validaciones, se limpia el mensaje de error*/
    mensajeError.textContent ='';


    if(edad < 18){
        campoResultado.value = 'No puedes votar.';
    } else {
        campoResultado.value = 'Puedes votar.';
    }
});