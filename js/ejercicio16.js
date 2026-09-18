const campoNumero1 = document.getElementById('numero1');
const campoNumero2 = document.getElementById('numero2');
const campoResultado = document.getElementById('resultado');

/*Funciones flecha para cada operación*/
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

/*Función principal que decide qué operación ejecutar*/
function calcularOperacion(operacion) {

    const texto1 = campoNumero1.value.trim();
    const texto2 = campoNumero2.value.trim();

    /*Validación: campos vacíos*/
    if (texto1 === '' || texto2 === '') {
        Swal.fire({
            icon: 'error',
            title: 'Campos vacíos',
            text: 'Debes ingresar los dos números.'
        });
        campoResultado.value = '';
        return;
    }

    /*Validación: que ambos valores sean números*/
    if (isNaN(texto1) || isNaN(texto2)) {
        Swal.fire({
            icon: 'error',
            title: 'Valor no válido',
            text: 'Ambos campos deben contener números.'
        });
        campoResultado.value = '';
        return;
    }

    /*Convertimos los textos a números*/
    const numero1 = Number(texto1);
    const numero2 = Number(texto2);

    let resultado;

    /*Elegimos qué función flecha llamar según la operación*/
    if (operacion === 'suma') {
        resultado = sumar(numero1, numero2);
    } else if (operacion === 'resta') {
        resultado = restar(numero1, numero2);
    } else if (operacion === 'multiplicacion') {
        resultado = multiplicar(numero1, numero2);
    } else if (operacion === 'division') {
        resultado = dividir(numero1, numero2);
    }

    /*Si la división fue por cero, resultado será un texto de error*/
    if (resultado === 'Error: División por cero') {
        Swal.fire({
            icon: 'error',
            title: 'División por cero',
            text: 'No es posible dividir entre cero.'
        });
        campoResultado.value = '';
        return;
    }

    /*Mostramos el resultado*/
    campoResultado.value = resultado;
}