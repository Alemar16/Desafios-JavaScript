function generarNumeroAleatorio(max) {
  return Math.floor(Math.random() * max);
}

function generarRocas() {
  var fragmento = new DocumentFragment();

  for (let i = 0; i <= 50; i++) {
    const elemento = document.createElement("div");
    elemento.style.position = "absolute";
    elemento.style.width = `${generarNumeroAleatorio(70)}px`;
    elemento.style.height = `${generarNumeroAleatorio(70)}px`;
    elemento.style.top = `${generarNumeroAleatorio(window.innerHeight)}px`;
    elemento.style.left = `${generarNumeroAleatorio(window.innerWidth)}px`;
    elemento.style.borderRadius = "10px";
    elemento.style.backgroundColor = `#${Math.floor(
      Math.random() * 16777215
    ).toString(16)}`;
    fragmento.appendChild(elemento);
  }

  document.body.appendChild(fragmento);
}

generarRocas();

// Determinar si el puntero se encuentra encima del fondo de la pantalla
// o si esta tocando algún elemento en la página

const resultado = document.getElementsByTagName("span")[0];

document.addEventListener("mousemove", (evento) => {
  const x = evento.clientX;
  const y = evento.clientY;
  const el = document.elementFromPoint(x, y);
  if (el.tagName == "BODY" || el.tagName == "HTML") {
    resultado.innerText = "El puntero se está quemando!";
  } else {
    resultado.innerText = "El puntero está a salvo!";
  }
});



//EXPLICACIÓN

//Antes de empezar a resolver este desafío vamos a ver qué es lo que ya ofrece el ejercicio.

//Refrescando la página, puedo notar que hay elementos que se generan y se posicionan aleatoriamente por la página y luego hay un área aquí arriba la cual tiene de objetivo mostrar el resultado.
//El código que genera todos estos elementos es esta función que puedes encontrar aquí.Y luego aquí hay una constante que hace referencia al span que vemos aquí arriba.

//Ya con esto entonces voy a empezar a resolver el desafío.Para esto voy a llamar al objeto «document» y voy a agregarle un «addEventListener». Este addEventListener es el de «mousemove», ya que este se ejecuta cada vez que el mouse mueva por la pantalla.Y luego seguido de esto voy a pasar como parámetro una función, la cual se va a ejecutar cada vez que el mouse se mueva.Esta función recibe como parámetro un objeto que contiene la información del evento de mousemove.Luego yo lo que quiero aquí es detectar que si el mouse está tocando algún elemento de estos que se han generado.Para eso entonces voy a capturar las coordenadas X y Y del objeto «evento». Para esto llamo a la propiedad «clientX» que se encuentra dentro del objeto.Y hago lo mismo con la coordenada Y.Ya con esta información entonces yo puedo utilizar la función «document.elementFromPoint». Esta función lo que hace es que retorna el elemento HTML acorde a las coordenadas que pasemos como parámetro.Yo puedo guardar ese resultado en una constante y esta la voy a llamar «el». Luego ya con esta información yo puedo validar qué elemento me retornó la función elementFromPoint.Entonces, yo voy a validarlo por el «tagName».Entonces, voy a decir que si el elemento HTML tiene un tagName, que es igual a «BODY» o si el «tagName» del elemento se llama «HTML», entonces el «resultado» deberá mostrar que «El puntero se está quemando». Si no, «resultado» debe mostrar que «El puntero está a salvo». Ahora voy a refrescar la página para ver si eso funciona.Aquí puedes ver como se actualiza la información en el área de resultados cada vez que yo muevo el puntero encima de alguno de los tips, entonces esto indica que el puntero está a salvo.Y si toca el fondo de la página, entonces es que se está quemando.Aquí puedes ver que yo estoy validando dos tagName, uno es el BODY y el otro es el HTML.Ya que yo puse el evento de mouse encima del document, entonces yo estoy accesando directamente al tag de HTML de la página y al BODY.Entonces, en cualquier caso, cuando se toca el fondo, yo voy a obtener como resultado alguno de estos dos.Cualquier cosa que no sea esto, entonces significa que el puntero está a salvo.