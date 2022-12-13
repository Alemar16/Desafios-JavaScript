//Determinar si amn¿bos arreglos son similares

function sonSimilares(arregloA, arregloB) { 
  if (arregloA.length !== arregloA.length) {
    return false;
  }
  for (let indice = 0, total = arregloA.length; indice <= total; indice++){
    if (arregloA[indice] !== arregloB[indice]) {
      return false;
    }
  }
  return true;
}

console.log(sonSimilares([1, 2], [1, 2, 3]));
console.log(sonSimilares([1, 2, 3], [1, 2, 3]));
console.log(sonSimilares([1, 2, 3], ["1", "2", "3"]));

//EXPLICACIÓN

//PRIMERO
//se declara la funcion [linea 3]
//Lo primero es averiguar si los arreglos rienen el mismo largo [linea 4]
//de no ser así, retornará falso [linea 5]

//SEGUNDO
//Ahora se compara cada cada uno de los elementos uno por uno con un ciclo for[linea 7]
//Para eso voy a crear un bucle de «for» y dentro del bucle voy a crear una variable «indice» que va a empezar con valor de «0». Luego voy a crear otra variable que se llama «total», la cual va a tomar el valor de largo del «arregloA». El bucle va a correr mientras «indice <= total». Luego hacemos que el «indice» aumente su valor uno por uno
//Ya dentro del for voy a agregar un «if» donde voy a validar si el valor dentro del «arregloA» según el «indice» es diferente al valor según el índice en el «arregloB». Entonces, en caso de que así suceda, voy a retornar un false [linea 8]

//TERCERO
// Al final se hace un return true [linea 12]

//--------------------------------------------------------------------------------------------------------------------------------------------

//RESUMEN

//Bueno, en la primera parte de la función se averigua si ambos arreglos tienen el mismo largo o el mismo número de elementos. En caso de que no sea así, entonces hago un return de false. En el for yo lo que hago es que comparo los elementos de ambos arreglos según el índice uno por uno. En caso de que no sean iguales, entonces voy a hacer un return de false.

//Hay que recordar que cuando uno hace un return dentro de un for, la ejecución de la función se detiene y el valor se devuelve cuando se llama a la función. Ya en caso de que los parámetros no cumplan ninguna de estas condiciones, entonces hacemos un return de true, indicando que los arreglos sí son similares