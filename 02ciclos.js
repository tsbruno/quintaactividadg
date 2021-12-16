let condicion = 1; 

while(condicion <= 100){
    console.log('acceso denegado'); 
    /* condicion = condicion + 2; */ 
    condicion++;
} 





/* let numero = 1; 

numero ++;
console.log(numero);
numero ++;
console.log(numero);
numero ++;
console.log(numero);
numero ++;
console.log(numero);
numero --; 
console.log(numero); 
numero --;
console.log(numero);
numero --;
console.log(numero);
numero --;
console.log(numero);

console.log(numero); */
/* let condicion = 11; 

while(condicion <= 10){
    console.log(condicion); 
    /* condicion = condicion + 2; */ 
    //condicion++;


/* let numero = 11; 

do {
    console.log(numero); 
    numero++; 
}while(numero <=  10);  */  


/* for (let control = 11;  control <= 10; control++) {
    console.log(control); 
    
}
 */
const comidas = ['tacos', 'pozole', 'tamales', 'tortas']; 

for (let i = 0; i < comidas.length; i++){
    console.log(comidas[i]); 
}


/* Tomar los números de un arreglo llamado 'numeros', [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
- multiplicar cada numero por dos
-guardar los resultados en un arreglo llamado 'resultado'
-imprimir en consola o en el body cada elemento del arreglo 'resultado' */



const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
const resultado = []; 

for(let i = 0; i < numeros.length; i++){
    resultado[i] = numeros [i] * 2; 
    console.log(resultado[i]); 
}


const arreglo = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
const resultado = []; 

for(let i = 0;  i < arreglo.length; i++){

    resultado [i] = arreglo [i] *2;  
    console.log(resultado[i]);

}







