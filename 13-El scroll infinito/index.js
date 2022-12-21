// Implementar scroll infinito en la página:

const contenedor = document.getElementById("contenedor");

document.addEventListener("scroll", () => {
  const alturaDocumento = document.documentElement.scrollHeight;
  const alturaVentana = document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;

  if (scrollTop + alturaVentana === alturaDocumento) {
    contenedor.appendChild(document.createElement("li"));
  }

/*   if (scrollTop === 0) {
    contenedor.prepend(document.createElement("li"));
  } */
});



//EXPLICACIÓN

//Este desafío ya incluye una página HTML la cual incluye ya una lista no ordenada, como puedes ver aquí. Cada li se muestra como un cuadrado con color rojo, como puedes ver en la página. Ahora aquí en el archivo JavaScript yo voy a implementar el scroll infinito. Lo primero que voy a hacer es llamar la propiedad «document» y agregarle un «listener» de «scroll» y luego voy a pasar una función la cual se va a ejecutar cada vez que el usuario haga scroll en la página. Ahora aquí lo que debo hacer es capturar varias propiedades. La primera es la altura del documento. Esta propiedad la obtenemos llamando «document.documentElement.scrollHeight». Luego voy a capturar otra propiedad que se llama altura de la ventana. Y este valor yo lo obtengo al llamar «document.documentElement.clientHeight». Y ahora necesito una tercera que se va a llamar «scrollTop», que lo obtengo al llamar «document.documentElement.scrollTop» Explicando brevemente, alturaDocumento o scrollHeight lo que hace es que me retorna el tamaño de este contenedor que ves aquí sin tomar en cuenta el scroll. Luego la altura de la ventana contiene el tamaño o el alto del navegador o el área del browser. Y scrollTop lo que retorna es en pixeles el offset o, digamos, la diferencia entre la altura del documento y la altura de la ventana, la parte que no vemos o que está escondida a la hora de hacer scroll. Ahora con esto yo voy a poder validar si el usuario ha hecho scroll al final de la página, ya sea arriba o abajo. Para esto voy a llamar un «if» y voy a sumar «scrollTop» y altura de la ventana y en caso que sea igual a la altura del documento, esto indica que el usuario ha hecho scroll al final de la página. Entonces, ya con esta información yo voy a agregar más elementos a la misma. Entonces, para esto llamo el «contenedor», que contiene todos los elementos li y voy a crear uno nuevo. OK. Ahora voy a refrescar la página y vamos a ver si este código funciona correctamente. Si yo me voy al final de la misma, puedes ver que se siguen agregando elementos. Podemos verlo aquí también utilizando las herramientas del desarrollador del navegador. Puedes notar como se van agregando elementos al final. Ahora podemos hacer lo mismo si el usuario está haciendo scroll y llega al final de la página pero cuando hace scroll hacia arriba. Para eso validamos si la propiedad «scrollTop» es igual a «0», o sea, que no hay diferencia entre la posición del contenedor y el scroll, ya que está aquí en 0. Entonces, significa que el usuario está al inicio de la página. Entonces, para esto voy a llamar... De hecho, voy a copiar esta línea y la voy a pegar aquí. Pero, a diferencia de lo que tenemos aquí appendChild, yo voy a llamar la función «prepend». AppendChild lo que hace es que agrega un elemento al final de la fila y prepend la agrega al inicio. OK. Ahora si yo hago scroll al final, los elementos se agregan. Y si yo hago scroll hacia arriba, puedes notar que el elemento se agrega, pero el efecto no es igual que cuando hacemos scroll hacia abajo y esto es mucho por el comportamiento del navegador, ya que este tiende a empujar el contenido hacia abajo. Ya que aquí estamos en posición cero, entonces, por así decirlo, los elementos se van hacia abajo. Es por esta razón que el scroll hacia arriba no es común. A pesar de que es posible, no es común, pero sí el scroll infinito hacia abajo es muy común en páginas web.