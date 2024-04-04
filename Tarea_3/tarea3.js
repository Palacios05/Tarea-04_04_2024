var num1, num2, resultado;

num1 = parseInt(prompt("Ingrese el numero 1: "));
num2 = parseInt(prompt("Ingrese el numero 2: "));

if (num1 > num2) {
    resultado = num1 + num2;
} else if (num2 > num1) {
    num1 = Math.pow(num1, 2);
    num2 = Math.pow(num2, 2);

    resultado = num1 + num2;
} else if (num1 == num2) {
    resultado = "Los numeros son iguales";
}

alert(resultado);
