// 1. Escribir una clase para guardar el nombre, la fecha de expiracion
// y el precio de venta de los productos.

class Producto{
  _nombre;
  _precio;
  _fechaVencimiento;

  constructor(nombre, precio, fechaVencimiento) {
    this._nombre = nombre;
    this._precio = precio;
    this._fechaVencimiento = new Date(fechaVencimiento);
  }
}

// 2. Escribir una función que tome una lista de productos y sume el total del costo
// de los productos, excuyendo los productos expirados.
function carritoDeCompra(productos) {
  const hoy = new Date();
  const productosValidos = productos.filter((producto) => producto._fechaVencimiento > hoy);
  return productosValidos.reduce((acumulador, producto) => acumulador += producto._precio, 0);
}

const resultado = carritoDeCompra([
  new Producto("Leche", 4, "15-03-2022"),
  new Producto("Pan", 2, "14-03-2022"),
  new Producto("Mantequilla", 3, "18-03-2022"),
  new Producto("Queso", 4, "19-03-2022"),
]);

console.log(resultado);




//EXPLICACÍON

//PRIMERO

//Voy a empezar por escribir la clase «Producto». (linea 4 )
//Esta clase debe tener tres propiedades, que son «nombre», «precio» y «fechaVencimiento».
//Ahora para actualizar las propiedades de la clase tenemos dos opciones, podemos utilizar modificadores o un constructor.Yo voy a ir con la opción del «constructor», el cual va a recibir tres parámetros para actualizar cada una de las propiedades.
//Ahora aquí lo que hago es que llamo con el keyword «this» cada propiedad y le asigno el valor.Hago «this._precio», le asigno el «precio» y luego hago «this._fechaVencimiento», que es igual a la fecha de vencimiento.

//SEGUNDO

//Ahora lo que sigue es escribir la función de carrito de compra.Esta va a recibir un array que contiene instancias de la clase producto, entonces la voy a llamar «productos».(linea 18)

//Los requerimientos nos dice que la función de retornar el total de la suma de los productos dentro del arreglo, excluyendo los que ya están expirados.

//Entonces, primero yo debo eliminar los productos que ya están expirados.Para eso voy a crear una constante que se llama «hoy» que va a ser una instancia del objeto fecha.(linea 19)

//Luego voy a crear otra constante que se llama «productosValidos» que va a almacenar los productos filtrados.

//Para filtrar los productos lo que hago es que llamo al objeto array y llamo a la función «filter». En filter paso una función como parámetro que va a recibir un parámetro que se va a llamar «producto». Este indica el producto que está siendo evaluado en la ejecución de la función.

//Ahora lo que hago es que llamo al parámetro «producto» y valido que la fecha de vencimiento sea mayor al valor que contiene «hoy» de esta manera.

//Ahora, aquí hay algo que no va a funcionar porque aquí yo dentro de la clase lo que estoy asignando es el valor directamente.Ahora, ¿qué pasa si esto es un String ? Bueno, yo voy a asumir que lo que se recibe como parámetro es un String y se lo estoy asignando directamente a la propiedad, pero a la hora de validarlo con el objeto fecha no va a funcionar.Entonces, lo que voy a hacer aquí es convertir este valor en un objeto fecha de esta manera.(this._fechaVencimiento = new Date(fechaVencimiento);)

//Ahora sí, siendo fechaVencimiento y hoy ambos objetos fecha, entonces esta condición sí debería funcionar.

//Ya con esto yo lo que hago es que hago un «return» de los «productosValidos» en donde yo llamo a la función «reduce».

//La función reduce como parámetro otra función, la cual tiene dos parámetros.La primera es un «acumulador» y la segunda es el «producto» o la instancia del producto que se está evaluando en ese momento.

//Reduce lo que hace es que convierte un arreglo a un valor en específico, que ese valor se almacena en acumulador.Entonces, aquí lo que hago es que a «acumulador» le sumo el precio del producto.

//Ahora como segundo parámetro dentro de la función reduce paso el valor de «0» para indicar que el acumulador va a empezar en 0.

//Entonces, ya con esto esta función va a devolver un número que es la suma de todos los precios de las instancias dentro del producto.Ahora lo que queda hacer es simplemente probar la función.Vamos a ver cómo nos va.Entonces, voy a crear una constante del resultado que va a almacenar el resultado al llamar la función.

//Aquí yo voy a crear las nuevas instancias de producto.Primera va a tener un nombre de «leche», que va a tener un precio de «4» y la fecha de vencimiento va a ser el «15» de marzo.Luego voy a crear otros más.

//VERIFICACION EN LA CONSOLA DEL NAVEGADOR