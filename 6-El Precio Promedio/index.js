//CALCULAR EL PRECIO DE LAS CASAS POR LOCALIDAD
// LA CONSTANTE CASAS CONTIENE LA INFORMACIÓN DE CASAS

const acumulado = {};

for (const casa of casas) {
  if (!acumulado[casa.localidad]) {
    acumulado[casa.localidad] = { acumuladoPrecio: 0, contador: 0 };
  }
  acumulado[casa.localidad].acumuladoPrecio += casa.precio;
  acumulado[casa.localidad].contador += 1;
}

console.log(acumulado);

//----------CALCULAR PRECIO PROMEDIO----------------------------------------------------------------------

const localidades = Object.keys(acumulado);

for (const localidad of localidades) {
  console.log(localidad + ' ' + Math.floor(acumulado[localidad].acumuladoPrecio / acumulado[localidad].contador));
}

//-----------------------------------------------------------------------------------

//EXPLICACIÓN

//Primero
//Para este desafío yo ya tengo disponible la lista de casas.Esta lista se encuentra en el archivo casas.js y el mismo ya está siendo cargado en el archivo HTML.Por lo tanto, la lista ya está disponible dentro de este archivo.

//Segundo
//Ahora voy a crear una constante que se llama «acumulado» que va a ser un objeto.Yo voy a utilizar este objeto para hacer la agregación de los precios de las casas.(linea 4)

//Tercero
//Lo siguiente que voy a hacer es crear un «for» of para recorrer al arreglo de las casas.(linea 6 al 12)
//Luego para solucionar este desafío yo lo que necesito hacer es sumar los precios de las casas por localidad y también al mismo tiempo contar cuántas casas yo tengo por localidad.Entonces, para eso yo lo que voy a hacer es crear un objeto dentro del objeto acumulado cuya llave sea la localidad donde se encuentran las casas.(linea 7, 8)
//Proceso
//Para hacer eso voy a empezar primero con un if y voy a decir que si «acumulado», en donde la llave o el key sea la «localidad», no se encuentre dentro del objeto, entonces voy a agregar uno vacío.Para eso llamo a «acumulado», «casa.localidad». Y esto va a tener dos propiedades.La primera va a ser «acumulado» de «Precio» cuyo valor va a ser «0» y luego un «contador» que va a tener un valor de «0» también.Entonces, ya con esto, por ejemplo, en casas que la localidad sea San José, entonces acumulado va a tener un key cuyo nombre va a ser San José y este va a obtener un objeto con las propiedades acumuladoPrecio y contador.Ya con eso entonces yo puedo empezar a hacer el agregado.Entonces, yo puedo decir «acumulado» accesando el objeto por localidad, «.acumuladoPrecio += casa.precio». Y lo mismo puedo hacer con el número de casas con el contador.Entonces, sería acumulado, la localidad, el «contador» y lo sumo en «1», ya que simplemente estoy contando uno por uno.Ya aquí entonces yo he agregado los precios de las casas por localidad, entonces yo puedo hacer un «console.log» de «acumulado» para ver qué información ha colectado.

//Verificacion en consola del explorador

//Cuarto
//Ahora el siguiente paso es calcular el precio promedio.Entonces, yo tengo que recorrer acumulado e ir dividiendo el precio acumulado por el número de casas.Entonces, para hacer esto voy a crear una constante que se llama «localidades», la cual va a ser la lista de localidades.Y para eso yo voy a utilizar la función «Object.keys» y voy a pasar como parámetro «acumulado».Object.keys me va a devolver un arreglo que va a contener la lista de key de un objeto.(linea 18)

//Verificar consola de explorador
//voy a tener un arreglo que va a decir Caracas, Valencia, La Guaira y demás.

//Quinto
//Ya con eso entonces yo puedo hacer otro «for» of, llamarlo «localidad» de «localidades» y aquí entonces yo puedo hacer el cálculo de los promedios.(linea 20)

//Aquí yo simplemente voy a hacer un «console.log» que va a decir que la «localidad», un espacio en blanco, y luego voy a utilizar el objeto «Math» y llamar la función «floor» para redondear el valor que va a obtener del resultado de la operación.Y luego voy a decir que «acumulado» según la «localidad», «.acumuladoPrecio», lo voy a dividir entre «acumulado» en la «localidad» por el número de casas, o sea, el «contador». Ahora puedes ver aquí cómo quedó la operación.Entonces, yo llamo Math.floor y paso aquí la división entre ambos valores.Ahora voy a guardar ese código y lo ejecuto.Y ahora puedes ver aquí el promedio de precio por cada localidad de todas las listas de casas que están aquí.