// Implementar el buscador de texto:
// Al hacer click en el botón, se deberá buscar el texto que el usuario a
// agregado al campo de texto y marcarlo en negrita en el párrafo.

const texto = document.getElementById("texto");
const input = document.getElementById("input");
const buscar = document.getElementById("buscar");

buscar.addEventListener("click", () => {
  let parrafos = texto.innerHTML;
  const valor = input.value;
  if (valor !== "") {
    let regex = new RegExp(valor, "g");
    parrafos = parrafos.replace(regex, `<b>${valor}</b>`);
  }
  texto.innerHTML = parrafos;
});



//EXPLICAIÓN

//Como puedes ver aquí, este desafío ya incluye una página HTML, la cual tiene un texto, un campo de texto y un botón de buscar.Y ya las constantes para acceder estos elementos han sido creadas.Entonces, yo voy a empezar a trabajar en la funcionalidad para editar el texto.Para eso agrego un «listener» al botón y dentro de la función lo que voy a hacer primeramente es capturar el texto que se encuentra en la pantalla.Repito, el texto que se encuentra la página.Para esto voy a crear una variable que se llama «parrafos» que va a contener el «innerHTML» del elemento «texto». Y ahora lo que voy a hacer es capturar el valor que el usuario agregue en el campo de texto.Para ese entonces llamo a la propiedad «value» del «input» y lo guardo en una constante.Entonces, voy a validar que si «valor» es diferente a una cadena vacía de texto, voy a ejecutar la función.Y para esto entonces voy a decir que «parrafos» es igual a «parrafos» y voy a llamar la función «replace», que pertenece a los String, y voy a pasar como parámetro primero el valor para que lo busque y luego el reemplazo para marcar el valor en negrita.Esto significa que voy a pasar una cadena texto que contiene las etiquetas de "bold" y voy a pasar el valor aquí para que se actualice en pantalla.Entonces, significa que todas las coincidencias de valor deberán reemplazarse con este String.Y luego de esto voy a llamar al texto nuevamente y voy a actualizar la propiedad «innerHTML» con los cambios que tenga «parrafos». Ahora voy a probar el código y voy a tomar una palabra de aquí, por ejemplo esta, y voy a buscar.Voy a hacer otra prueba, por ejemplo esta, puedes ver que hay varias coincidencias y voy a ver qué sucede.OK.He encontrado el problema aquí, que esta propiedad se puso mal, voy a volverlo a intentar y ahora voy a poner la palabra ahí, Buscar, y ves que ahora sí está funcionando.Ahora notarás aquí que hay varias coincidencias de la misma palabra, pero estas no están siendo marcadas en negrita.Esto es porque la función replace va a trabajar solamente con la primera coincidencia que encuentre en el texto y las demás se van a ignorar.Para arreglar esto tenemos que utilizar una expresión regular.Entonces, yo voy a crear una expresión regular la cual va a recibir de parámetro el valor y luego voy a utilizar la bandera «g». Esto indica que la expresión regular va a buscar todas las coincidencias del valor dentro del texto.Y ahora yo paso la expresión regular a la función replace.Quito valor, pongo la expresión regular y ahora voy a probar esto nuevamente.Voy a tomar otra palabra, pues la misma que utilicé anteriormente, y al hacer en Buscar ahora puedes notar que todas las coincidencias han sido marcadas.Voy a probar esto nuevamente.Por ejemplo, Null, que parece que es muy común en el texto, como puedes ver aquí.Entonces, voy a ponerlo aquí, voy a hacer Buscar y ahora ves que el código ha funcionado correctamente.