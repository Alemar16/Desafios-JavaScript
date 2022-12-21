// Validar que el número de teléfono tenga el formato correcto:
// XXXX-XX-XX

const input = document.getElementById("input");
const buscar = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

const regex = new RegExp(/[0-9]{3}-[0-9]{3}-[0-9]{4}/, "g");

buscar.addEventListener("click", () => {
  const valor = input.value;
  if (regex.test(valor)) {
    resultado.innerText = "Teléfono es válido!";
  } else {
    resultado.innerText = "Teléfono no es válido!";
  }
});


//EXPLICACIÓN

//Este desafío ya contiene una página HTML, la cual contiene un campo de texto, un botón de buscar y un área de texto que se encuentra aquí que se va a utilizar para mostrar el resultado.

//También incluye un listener al botón click del botón Buscar para ejecutar la validación.

//Ahora lo que yo voy a hacer es crear la expresión regular para validar que el valor que se ponga aquí siga el formato de número de teléfono que andamos buscando.
//Para esto entonces voy a crear una constante, la cual para recibir la expresión regular, y voy a pasar también la bandera global indicando que la búsqueda se va a ejecutar en todo el String.("g")(linea 8)

//Ahora voy a empezar a trabajar en la expresión regular.Como para recordar, las expresiones regulares utilizan símbolos para representar los patrones de un String.Entonces, yo voy a validar primero que haya cuatro números al inicio.Para eso voy a agregar paréntesis cuadrados, los cuales indican que el valor que andamos buscando o el primer carácter pertenece a un grupo de elementos.

//Entonces, yo voy a pasar que este debe ser entre «0» o «9». Ahora necesitamos validar que sean cuatro los números aquí entre este grupo.Entonces, yo voy a utilizar paréntesis y voy a pasar el número «3».

//Ahora yo tengo que validar que luego siga un guion.Para esto nada más simplemente tengo que poner el carácter aquí y luego tengo que repetir lo mismo que hice con estos números para validar que sean dos solamente.

//Entonces, puedo copiar esto que está aquí y ponerlo y cambiar el valor de «3». 

//Y luego simplemente tengo que agregar el siguiente guion y pegar el mismo valor que tenía antes pero cambiando el último número a un «4».

//OK.Ya tenemos la expresión regular, ahora lo que queda es validar que el valor cumpla con la expresión regular.Para eso entonces llamamos a un «if» y utilizamos la función «test» de la expresión regular.(linea12)

//La función test retorna un booleano indicando si el valor cumple con la expresión regular o no.En caso de que así sea, entonces vamos a decir que «resultado.innerText» es igual a «Teléfono es válido». En caso de que no lo cumpla, entonces vamos a mostrar un mensaje diciendo que no es válido.Ahora voy a probar la funcionalidad.Si agrego un número random, me dice que no es válido.Ahora voy a probar a ver si funciona.Entonces, digo 1, 2, 3, 4, guion, dos números, guion, dos números, y ahora me dice que es válido.