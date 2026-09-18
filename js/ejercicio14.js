const formularioNumeros = document.getElementById('formulario-numeros');
const campoNumeros = document.getElementById('input-numeros');
const resultadoMayor = document.getElementById('resultado-mayor');
const resultadoMenor = document.getElementById('resultado-menor');
const resultadoPromedio = document.getElementById('resultado-promedio');
const mensajeError = document.getElementById('mensaje-error');

/*El formulario debe de llevar un evento para que al momento de presionar el
boton la pagina no se recargue, es muy importante*/
formularioNumeros.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const cadena = campoNumeros.value.trim();

    /*Cuando el campo está vacío*/
    if (cadena === '') {
        mensajeError.textContent = 'Debes ingresar al menos un número.';
        resultadoMayor.value = '';
        resultadoMenor.value = '';
        resultadoPromedio.value = '';
        return;
    }

    /*Separamos la cadena en un arreglo de textos usando la coma*/
    const arregloTexto = cadena.split(',');

    /*Convertimos cada elemento del arreglo de texto a número*/
    const numeros = arregloTexto.map(function (valor) {
        return Number(valor.trim());
    });

    /*Validación: verificamos que todos los elementos sean números válidos*/
    const hayInvalido = numeros.some(function (numero) {
        return isNaN(numero);
    });

    if (hayInvalido) {
        mensajeError.textContent = 'Todos los valores deben ser números válidos separados por comas.';
        resultadoMayor.value = '';
        resultadoMenor.value = '';
        resultadoPromedio.value = '';
        return;
    }

    /*Si pasa las validaciones, se limpia el mensaje de error*/
    mensajeError.textContent = '';

    /*Calculamos el mayor y el menor usando el operador spread (...)*/
    const mayor = Math.max(...numeros);
    const menor = Math.min(...numeros);

    /*Calculamos el promedio usando reduce()*/
    const suma = numeros.reduce(function (acumulador, valor) {
        return acumulador + valor;
    }, 0);
    const promedio = suma / numeros.length;

    /*Mostramos los resultados en las cajas readonly*/
    resultadoMayor.value = mayor;
    resultadoMenor.value = menor;
    resultadoPromedio.value = promedio;
});