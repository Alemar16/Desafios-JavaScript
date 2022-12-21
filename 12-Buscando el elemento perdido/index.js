// Buscar elemento dentro del DOM utilizando recursión.

const elemento = "Elemento5";
let encontrado = false;

function buscarElemento(root) {
  if (root.innerHTML === elemento || root.innerText === elemento) {
    encontrado = true;
    return;
  }

  if (root.children && root.children.leght === 0) {
    return;
  }

  for (const hijo of root.children) {
    buscarElemento(hijo);
  }
}

buscarElemento(document.body);
console.log(encontrado);


//EXPLICACIÓN

// Como puedes ver aquí, este desafío ya incluye un HTML el cual tiene muchos div anidados unos dentro de los otros y algunos tienen algunos elementos de tipo texto. En el código lo que yo voy a hacer es validar si el Elemento9 existe dentro de los div. Para esto primero voy a crear una función que se llama «buscarElemento» y esta va a recibir un parámetro que se llama «root». Lo primero que voy a hacer es validar si «root» contiene el elemento que yo estoy buscando. Para esto primero lo que voy a hacer es validar si la propiedad «innerHTML» es igual al «elemento» que estoy buscando o si la propiedad «innerText» del root es igual al «elemento». En caso de que sea así, entonces voy a poner «encontrado» como «true» y voy a hacer un «return» de la función para detener la ejecución en caso de que la condición se cumpla. Luego aquí yo estoy trabajando con una función recursiva, esto significa que esta función se va a llamar a sí misma. Y todas las funciones recursivas deben contener una condición que detenga la llamada recursiva. Aquí entonces yo lo que voy a hacer es agregar una condición para detener la recursividad. Entonces, lo que voy a validar es que si el «root» tiene la propiedad «children» pero esta propiedad está vacía, o sea, que si el «length» es igual a «0», entonces la ejecución de la función se va a detener. Ya con esto entonces yo lo que voy a hacer es llamar la función recursivamente en cada uno de los hijos nodos del root. Para esto lo que hago es que creo un «for» of donde crea una condición «hijo» dentro del «root.children» y llamo a la función recursivamente en cada uno los hijos. Ahora voy a probar la función y para esto lo que hago es que llamo a la función «buscarElemento» y paso el «body» de la página. Y al final voy a hacer un «console.log» del resultado para ver si el elemento se encontró o no. Entonces, voy a refrescar la página y aquí puedes ver que la función me ha tirado un true. Si yo paso un elemento que no exista, por ejemplo si paso un valor de «XXX», me dirá que el valor no se encuentra. Y con este código entonces yo he resuelto el desafío.