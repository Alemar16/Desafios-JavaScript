const nombres = [
  "June Greene",
  "Armando Martínez",
  "Isi Graterol",
  "Alejandro Martínez",
  "Marian Martínez",
  "Arianna Martínez",
  "Adrian Martínez",
  "Leonardo Granadillo",
  "Abril Granadillo",
  "Elsa Zambrano",
  "Magdalena Hardy",
  "Merle Gonzales",
  "Whitaker Anderson",
  "Lucille Landry",
  "Annmarie Burns",
  "Erica Morrison",
  "Twila Dotson",
  "Cash Ratliff",
  "Maria Pierce",
  "Slater Mayo",
  "Gonzales Velazquez",
  "Hogan Tran",
  "Holland Harvey",
  "Carr Porter",
  "Marquez Bruce",
  "Rojas Wall",
  "Florine Lang",
  "Quinn Blanchard",
  "Charles Hughes",
  "Melba Moon",
  "Gilliam Marsh",
  "Lea Salazar",
  "Jackie Hogan",
  "Jacobson Riggs",
  "Mckee Mcclure",
  "Joanna Hampton",
  "Alexander Stokes",
  "Lola Witt",
  "Doyle Lee",
];

// Ordenar los nombres alfabeticamente.

const ordenados = nombres.sort((a, b)=> {
  const nombreA = a.split(' ')[0];
  const nombreB = b.split(' ')[0];
  return nombreA < nombreB? - 1 : nombreA > nombreB? 1 : 0;
});

console.log(ordenados);

//-----------------------------------------------------------------------------------------------------

//EXPLICACION
//En este desafío yo ya tengo aquí disponible la lista de nombres que hay que ordenar alfabéticamente. (linea 1 al 41) Puedes notar que cada nombre es un String que contiene nombre y apellido.

//PRIMERO

//Para ordenar los nombres primero yo voy a crear una constante que se va a llamar «ordenadors». (Linea 45) Esta constante va a tener el resultado del ordenamiento de los nombres.
//Ahora para ordenarlo lo que hago es que llamo al arreglo «nombres» y llamo a la función «sort». La función sort recibe como parámetro una función, la cual recibe dos parámetros «a» y «b». Estos parámetros son los valores que se van a comparar para poder ordenar el arreglo.

//SEGUNDO
//Crea la función.Yo ahora lo que voy a hacer es extraer los «nombres» de cada String.Entonces, primero voy a crear una constante que se llama «nombreA», que va a ser el resultado de la división del String «a». Lo voy a dividir por el espacio en blanco que se encuentra entre el nombre y el apellido; «split» retorna un arreglo, entonces primero yo voy a intentar ordenar este arreglo por el primer nombre.Entonces, voy a substraer el valor del arreglo en el índice «0», ya que va a contener el nombre del momento en que se haga split del String.(linea 46)

//TERCERO
//Lo mismo voy a hacer con b, (linea 47)

//CUARTO
//Ahora lo que tengo que hacer es retornar un valor de menos uno ó uno o cero, indicando si los valores son mayores o menores.Entonces, hago un «return» en donde si «nombreA < nombreB», va a retornar un valor de «-1». Si no, voy a poner otra condición donde «nombreA > nombreB», va a retornar «1». Y si no, va a retornar un valor de «0».

//VERIFICACION EN CONSOLA DEL NAVEGADOR
//Aquí podemos ver que primero se muestran los nombres que empiezan con A, luego con C, D, E, F, G y así sucesivamente.Si comparamos al arreglo inicial, podemos ver que primero empezaba con nombre June, pero ahora tenemos Abril.Esto quiere decir que entonces la función de sort está funcionando correctamente.