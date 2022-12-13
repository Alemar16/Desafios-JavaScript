//genera un numero aleatorio dentro de un rango de dos números:

function numeroAleatorio(numeroA, numeroB) {
  return Math.random() * (numeroA - numeroB) + numeroB;

}

console.log(numeroAleatorio(5, 10)); //9
console.log(numeroAleatorio(-25, -22));//-25
console.log(numeroAleatorio(100, 0));//77
console.log(numeroAleatorio(-2, 2));//-1

//EXPLICACIÓN

//PRIMERO
//Declaramos la funcion con los parametros numeroA y numeroB [linea 3]
//El objeto «Math» de JavaScript tiene un método que se llama «random», el cual genera un número aleatorio entre 0 y 1. Por ejemplo, aquí si yo hago que la función numeroAleatorio retorne el valor de Math.random,  Ahora yo voy a utilizar este método para generar un número aleatorio entre el númeroA y númeroB. Para eso debo tomar el valor que retorna Math.random y tengo que multiplicarlo por la diferencia entre «numeroA - numeroB». Esto para factorizar los números. [linea 4]
//Ya con esto, entonces, si yo ejecuto el código, puedes notar que los valores han cambiado y me ha generado un número diferente.Ya con este valor, entonces, yo lo único que tengo que hacer es hacer una suma del «númeroB» al final.Esto va a llevar los valores al rango entre el númeroA y el númeroB, como pueden notar aquí.Al llamar a la función con 5 y 10, obtengo un 6. Luego si llamo con - 25, -22, obtuve un - 23. Entre 100 y 0 obtuve un 41. Y entre - 2 y 2 obtuve un 0. Lo único que quedaría hacer aquí es tal vez remover los decimales.
//Para eso yo puedo utilizar el método «Math.floor» y luego envolver la ecuación dentro de la función.Aquí ya puedes notar que los números han sido redondeados.