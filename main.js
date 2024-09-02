import './style.css'

// --------------------------------
// Estructuras de repeticion
// --------------------------------

// !--------------------------------
//! Bloque For
// !--------------------------------

console.warn('Bloque For');
//* 3 puntos: NOTA: i es index!!
//*            1.              2.               3.
for (let i = 0; i < array.length; i++) {
  const element = array[index];
}
/*

*1. Inicializacion: una vez sola 
*2. Condicion de corte (por cada iteracion se evalua si cumple o no)
*3. Incremento/decremento
*/


// !--------------------------------
//! Bloque For Each
// !--------------------------------

console.warn('Bloque For Each');

// Gralmente me sirve para recorrer arrays, llama un callback

const arrayColores = ['rojo', 'azul', 'verde', 'amarillo']

// arrayColores.forEach((color, indice) = > {
//   console.log(`${indice} - ${color}`);
// })

function recorrerData(data, indice, array) { //*Siempre el foreach me va a entregar la data, la posicion del array de esa data y el array tambien
    console.log(`${indice} - ${data}`);
}

arrayColores.forEach(recorrerData) // el callback (una funcion llama a la otra)


// !--------------------------------
//! Bloque WHILE
// !--------------------------------
console.warn('Bloque WHILE');

let contador = 0 

while (contador < 10) {
  contador++

  console.log(contador);
}

//! NOTA IMPORTANTE: Dentro de TODOS los bloque de iteración, voy a tener 2 palabras reservadas muy utiles; BREAK y CONTINUE.

console.warn('Bloque WHILE ---> break');

// volviendo a inicializar la variable contador
let contador = 0 

while (contador < 10) {
  contador++
  if(contador === 5){
  console.log('encontré el valor');  
  break // Se detiene en el valor de 5 el bucle
  }

  console.log(contador);
}

console.warn('Bloque WHILE ---> continue (división)');

const arrayNumeros = [10,23,40,30,20,50]
const arrayDivisores = [3,0,3,8,5,0]

let indice = 0 

while (indice < arrayDivisores.length) {
  indice++
    if( arrayDivisores[indice] === 0) {
    console.log('Divisor igual a cero... No se puede');  
    continue // Lo que hace es saltear ese numero o ese objeto en esa posicion
    }
  
  arrayNumeros[indice] / arrayDivisores[indice]

  console.log(contador);

}


// !--------------------------------
/*
* Característica     |            forEach                 |      for...in              |        for...of
? Tipo de dato       |            Arrays                  |    Objetos (propiedades)   |   Objetos iterables (valores)
* Acceso a elementos |     Elemento, índice, array        |       Clave del objeto     |     Valor del iterable
? Orden de iteración |          Garantiza                 |       No garantizado       |        Garantizado
* Interrupción 
? (break/continue)   |    No soportado directamente       |          Soportado         |          Soportado

*/
// !--------------------------------
//! Bloque For In
// !--------------------------------
// (Sí permite el uso de BREAK y CONTINUE)

// ? QUE HACE? --> ITERA SOBRE LAS PROPIEDADES ENUMERADAS DE UN OBJETO (incluyendo heredadas) o dicho de otra manera, RECORRE LAS PROPIEDADES
// no recomendada para arrays, Si quisiera hacerlo me devolveria los indices

console.warn(' Bloque For In');

const persona = {
  /* Propiedad: valor */
  /* Key: value */
  nombre: 'Pedro';
  edad:33;
  ciudad: 'Buenos Aires'
}

/** Dot natation -> persona.nombre / persona.edad */
/** Brackt notation -> persona ['nombre'] / persona ['edad'] */

for (const propiedad in persona) {
  console.log(`${propiedad} : ${persona[propiedad]} `);
}

// Controlo si la propiedad existe

for (const propiedad in persona) {
  if (persona.hasOwnProperty(propiedad)) {
    console.log(`Existe la ${propiedad}: ${persona.hasOwnProperty(propiedad)}`);
    console.log(`${propiedad}: ${persona[propiedad]}`);
  }
}

// !--------------------------------
//! Bloque For Of
// !--------------------------------