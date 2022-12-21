// Escribir la implementación de la calculadora.

const input = document.getElementById("input-numero");

const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const multiplicar = document.getElementById("multiplicar");
const division = document.getElementById("divisar");

const resultado = document.getElementById("resultado");
const calcular = document.getElementById("calcular");

sumar.addEventListener("click", ejecutarOperacion);
restar.addEventListener("click", ejecutarOperacion);
multiplicar.addEventListener("click", ejecutarOperacion);
division.addEventListener("click", ejecutarOperacion);
calcular.addEventListener("click", ejecutarOperacion);

const operacion = { valor1: null, valor2: null, operador: null };
let tempOperador = null;

function mostrarValores(valor) {
  resultado.innerText = valor;
}

// Se puede utilizar código alternativo si así se desea:

function ejecutarOperacion(evento) {
  //Completar función:

  const valor = input.value === "" ? 0 : parseInt(input.value);
  input.value = 0;

  if (!operacion.valor1) {
    operacion.valor1 = valor;
    operacion.operador = evento.target.innerText;
    mostrarValores(`${operacion.valor1} ${operacion.operador}`);
    return;
  }

  if (!operacion.operador) {
    operacion.operador = evento.target.innerText;
    mostrarValores(`${operacion.valor1} ${operacion.operador}`);
    return;
  }

  operacion.valor2 = valor;

  if (evento.target.innerText !== "=") {
    tempOperador = evento.target.innerText;
  }

  calcularResultado();
}

function calcularResultado() {
  //Completar función:
  let total;
  switch (operacion.operador) {
    case "+":
      total = operacion.valor1 + operacion.valor2;
      break;
    case "*":
      total = operacion.valor1 * operacion.valor2;
      break;
    case "-":
      total = operacion.valor1 - operacion.valor2;
      break;
    case "/":
      total = operacion.valor1 / operacion.valor2;
      break;
  }

  mostrarValores(`${total} ${tempOperador ?? ""}`);

  operacion.valor1 = total;
  operacion.valor2 = null;
  operacion.operador = tempOperador ?? null;
  tempOperador = null;
}


//EXPLICACIÓN
//Este desafío ya incluye una página HTML, la cual contiene todos los elementos necesarios para construir la calculadora como puedes ver aquí y cada elemento tiene su correspondiente constante como ves aquí, que ya tienen los addEventListener del evento click que ejecuta la función ejecutarOperacion cuando se hace clic.

//Ahora yo voy a empezar con la implementación y lo primero que voy a hacer es crear un objeto que se llama «operación», el cual va a tener todos los valores necesarios para ejecutar una operación matemática.(linea 19)

//Primero voy a tener «valor1», que va a empezar con valor de nulo.Luego tenemos el «valor2», que también es nulo.Y el operador, nulo también.(linea 19)

//Ahora voy a crear una variable que se llama «tempOperador» que van a empezar como nulo también.(linea 20)

//Ahora lo que voy a hacer es aquí agregar las diferentes condiciones para ejecutar la funcionalidad de la calculadora.

//Hay que recordar que esta función se llama cada vez que se haga clic en un botón.Entonces, yo lo primero que voy a validar es si la «operación» no tiene un valor de 1. (linea 34)

//En caso de que así sea, entonces voy a guardar el valor de 1 (linea 35)

//y también voy a guardar el «operador», que este está contenido en el «evento.target.innerText».(linea 36)

//Y luego voy a mostrar al usuario los valores que eligió al llamar la función mostrarValores que ves aquí.Y a este le voy a pasar una String, la cual contiene la «operacion.valor1» más «operacion.valor2». (linea 37)

//Y luego hacemos un «return» de la función.El return es para que la ejecución de la función se detenga luego de que esto sea ejecutado.(linea 38)

//Este if (linea 34)se va ejecutar la primera vez que el usuario haga clic en un botón de los que ves en la página del navegador

//Ahora voy a agregar otro «if» que lo que va a hacer es validar si la «operación» no tiene «operador».(linea 41)
//Entonces, simplemente voy a copiar estas tres líneas de código del if anterior.Este if lo vamos a necesitar cuando el usuario esté haciendo operaciones ligadas una detrás de otra, o sea, cuando el usuario haga una operación y luego siga apretando botones de más, menos, división o multiplicación uno seguido del otro con valores en el medio.Entonces, tenemos que ir actualizando qué operador el usuario va eligiendo.
//Para eso entonces necesitamos este if.(linea 41 al 45)

//Ya con esto entonces yo voy a llamar «operación» y indicar que el «valor2» es igual al «valor»(linea 47), o sea, que si este if y este if no se ejecutan, entonces esta línea es la que se va a ejecutar.(linea 47)

//Y voy a agregar otro «if» (linea 49) aquí y voy a decir que si el «evento.target.innerText» no es el símbolo de igual, entonces voy a guardar el valor en el «tempOperador». (linea 50)

//Esto es para tener disponible qué operador eligió el usuario para la siguiente operación.(linea 50)

//Y aquí al final voy a llamar «calcularResultado». (linea 53)



//Ahora voy a ir a la función calcularResultado.

//En calcularResultado lo que voy a hacer es actualizar estos valores y voy a llamar el objeto «operación» en cada uno de estas propiedades de esta manera.Puedes notar que la función ya contiene una variable total y esta se actualiza según el operador que contenga el objeto operacion.(linea 59 al 70)

//Ya que tenemos ya aquí el total, entonces yo puedo mostrarle el usuario, el resultado de la operación.(linea 75)
//Entonces, voy a pasar «total» y luego voy a pasar también el «tempOperador» en caso de que no sea nulo.Si no, entonces, una cadena vacía. (linea 75)
//¿Esto por qué ? Bueno, recordamos que el tempOperador contiene el operador de la siguiente operación, que es basado en el total con el resultado de la operación anterior.Entonces, aquí de una vez se la mostramos al usuario al llamar el valor de esta manera. [ mostrarValores(`${total} ${tempOperador ?? ""}`); ]

//Ya con eso entonces yo debo reiniciar las propiedades del objeto «operación».En «valor1» agrego el «total», ya que el total se va a utilizar para la siguiente operación si el usuario así lo desea.(linea 77)

//Luego asigno un «null» al «valor2» (linea 78)
//y también hago lo mismo con el «operador». (linea 79)

//De hecho, aquí yo tengo que pasar el «tempOperador» en caso de que no sea null.(linea 79) Y si no, entonces, simplemente se va a reiniciar con el operador.

//El «tempOperador» también lo asigno a «null» para reiniciarlo en caso de que tenga un valor.(linea 80)

//Ya con esta funcionalidad voy a probar la calculadora a ver cómo me va.
