//Crear array de productos que cada uno incluya información sobre id, nombreProducto, marca, fechaExpiracion:

const listaProductos = [
  {
    id: 1,
    nombreProducto: "Mantequilla",
    marca: "Mavesa",
    fechaExpiracion: "2022-12-20",
  },
  {
    id: 2,
    nombreProducto: "Leche",
    marca: "Serenísima",
    fechaExpiracion: "2022-12-13",
  },
  {
    id: 3,
    nombreProducto: "Jamón",
    marca: "Tirolesa",
    fechaExpiracion: "2022-12-18",
  },
  {
    id: 4,
    nombreProducto: "Pan",
    marca: "Bimbo",
    fechaExpiracion: "2022-12-29",
  },
  {
    id: 5,
    nombreProducto: "Huevos",
    marca: "La Granja",
    fechaExpiracion: "2022-12-18",
  },
];

//crear dos funciones para buscar productos acorde a los parámetros:

function buscarProductosorId(id) {
  return listaProductos.filter((producto) => producto.id === id);
}
console.log(buscarProductosorId(2));/* 
[
  {
    id: 2,
    nombreProducto: "Leche",
    marca: "Serenísima",
    fechaExpiracion: "2022-12-13",
  },
]; 
*/

function buscarProductosPorFecha(fecha) {
  return listaProductos.filter(
    (producto) => producto.fechaExpiracion === fecha
  );
}
console.log(buscarProductosPorFecha("2022-12-18"));
/* 
[
  {
    id: 3,
    nombreProducto: 'Jamón',
    marca: 'Tirolesa',
    fechaExpiracion: '2022-12-18'
  },
  {
    id: 5,
    nombreProducto: 'Huevos',
    marca: 'La Granja',
    fechaExpiracion: '2022-12-18'
  }
]
 */

//EXPLICACIÓN

//PRIMERO

//se define una variable listaProductos array que contendrá objetos que tienen información de cada producto [lineas 3 al 34]

//SEGUNDO

//se crea una funcion de buscarProductosPorId, donde se utilizará el metodo filter que se encarga de buscar o comparar cada uno de los elementos dentro de un arreglo.

//TERCERO

//hacemos lo mismo para buscar por fecha, solo que tenemos que asignar los parametros a buscar.


/* 
function buscarProductosPorFecha(fechaA, fechaB) {
  fechaA = new Date(fechaA);
  fechaB = new Date(fechaB);
  return listaProductos.filter((producto) => {
    const fechaExpiracion = new Date(producto.fechaExpiracion);
    return fechaExpiracion <= fechaA && fechaExpiracion >= fechaB;
  });
}
console.log(buscarProductosPorFecha("2022-12-30", "2022-12-15"));
COMO RESULTADO TENEMOS:
[
  {
    id: 1,
    nombreProducto: "Mantequilla",
    marca: "Mavesa",
    fechaExpiracion: "2022-12-20",
  },
  {
    id: 3,
    nombreProducto: "Jamón",
    marca: "Tirolesa",
    fechaExpiracion: "2022-12-18",
  },
  {
    id: 4,
    nombreProducto: "Pan",
    marca: "Bimbo",
    fechaExpiracion: "2022-12-29",
  },
  {
    id: 5,
    nombreProducto: "Huevos",
    marca: "La Granja",
    fechaExpiracion: "2022-12-18",
  },
];
 */
