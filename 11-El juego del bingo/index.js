function generarNumeroAleatorio(max) {
  return Math.floor(Math.random() * max);
}

function generarMatriz(tamano) {
  const matrix = [];
  for (let a = 0; a < tamano; a++) {
    const hijo = [];
    for (let b = 0; b < tamano; b++) {
      hijo.push(generarNumeroAleatorio(2));
    }
    matrix.push(hijo);
  }
  return matrix;
}

// Determinar si el usuario ha ganado el juego cuando
// la matriz tiene una fila o columna donde todos los elementos son iguales.

const TAMANO_TABLERO = 4;
const matriz = generarMatriz(TAMANO_TABLERO);
console.log(matriz);

function arregloValido(valores) {
  return valores.every((valor) => valor === valores[0]);
}

let resultado = "";

for (let fila = 0; fila < TAMANO_TABLERO; fila++) {
  if (arregloValido(matriz[fila])) {
    resultado = `Fila ${fila}`;
    break;
  }
}

if (resultado === "") {
  for (let columna = 0; columna < TAMANO_TABLERO; columna++) {
    const columnaEl = matriz.map((fila) => fila[columna]);
    if (arregloValido(columnaEl)) {
      resultado = `Columna ${columna}`;
      break;
    }
  }
}

console.log(resultado);



//EXPLICACIÓN

//Este desafío ya incluye una función que genera la matriz cuadrada. La matriz que se genera tiene un tamaño de cuatro columnas por cuatro filas y contiene números entre 0 y 1. Ahora ya con esto entonces yo puedo utilizar la constante matriz para validar si el usuario ha ganado el bingo. Lo primero que voy a hacer es crear una «funcion» que se va a llamar «arregloValido», la cual va a recibir un arreglo que contiene «valores». Esta función va a hacer un «return» de «valores» llamando a la función «every». Esta función recibe como parámetro una función, la cual valida que todos los valores dentro del arreglo cumplan una condición. Entonces, yo voy a validar que todos los valores dentro del arreglo que recibe como parámetro sean iguales. Para eso lo que hago es que comparo los valores dentro del arreglo con el primer valor dentro del mismo arreglo y en el momento en que este valor sea falso, entonces every va a retornar false. Pero si todos los valores dentro del arreglo cumplen la condición, entonces la función va a retornar true. Yo voy a utilizar esta función para validar las filas y las columnas de la matriz. Ahora ya con esto entonces yo puedo empezar a validar la matriz y para esto voy a empezar por las filas. Entonces, voy a crear un «for» en donde «fila» es igual a «0» y el valor «fila» es menor al tamaño de la matriz y luego voy aumentando el valor uno por uno. Aquí voy a agregar una condición que dice que si «arreglo» es válido y paso como parámetro la fila de la matriz. Para eso llamo la constante «matriz» y paso la «fila» que estamos seleccionando en este momento. En caso que todos los valores de la fila sean iguales, entonces voy a guardar un resultado en una variable que voy a llamar «resultado», la cual es una String, y voy a guardar la fila que contiene todos los valores que son iguales para saber cuál es la fila ganadora. Para esto guardo el resultado como un String y paso como parámetro el número de fila. Este for lo que irá es ir fila por fila validando que todos los valores en cada fila sean iguales y en el momento que encuentre una que es igual, entonces la va a guardar y va a detenerse también la ejecución del for. Puedes notar aquí que agregué un «break» para este propósito. Ahora, en caso de que no hay una fila que contenga todos los valores iguales, entonces tenemos que validar las columnas. Entonces, yo voy a decir que si «resultado» es igual a una cadena vacía, entonces voy a validar las columnas. Para esto voy a copiar este mismo código, ya que es muy similar, pero en lugar de fila voy a llamarlo «columna». Igual, columna empieza con un valor de 0, es menor al tamaño del tablero y aumenta uno por uno. Aquí la diferencia es que la columna tenemos que generarla, ya que los valores de la columna viven en arreglos diferentes, como puedes ver aquí. Entonces, para yo poder acceder a las columnas voy a utilizar la función map de la matriz. La función map lo que hace es que convierten los elementos de un arreglo en otro valor. Entonces, por ejemplo, yo aquí lo que hago es que recorro todas las filas y lo que hago es que entonces retorno el valor de la «fila» según la «columna». Por ejemplo, ya que empezamos columna con valor de 0, entonces lo que va a hacer es tomar todos los valores que se encuentran en el índice 0 de todas las filas y se guardan en el arreglo que se llama columnaEl. Ahora ya con esto generado, las columnas, entonces ahora lo que queda es simplemente validar si hay alguna columna que tenga todos los valores iguales. Para eso paso la columna como parámetro a la función arregloValido. En caso de que haya una «columna» que sea igual, entonces voy a guardarla en el resultado. OK. Ahora con esto lo que hago es simplemente un «console.log» del «resultado». Y veamos qué nos muestra la consola del navegador cuando yo refresco la página. Ahora puedes ver aquí que la consola indica que la fila 1 es la que contiene todos los elementos que son iguales, ya que nos estamos manejando por índice, entonces la fila 1 es esta que puedes ver aquí. Podemos refrescar esto nuevamente. Y, bueno, parece que la fila uno nuevamente es la ganadora. Vamos a refrescarlo otra vez. Ahora me dice que es la fila 2 y ahora aquí me dice que es la columna 2. Cero, uno, dos y, como puedes ver, la columna toda contiene ceros.