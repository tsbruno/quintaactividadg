const comidas = ['pozole', 'queso', 'tacos']; 


console.log(comidas.length);



comidas.push('sopa'); 
console.log(comidas); 

comidas.unshift('agua'); 
console.log(comidas); 


comidas.pop(); 
console.log(comidas);

comidas.shift(); 
console.log(comidas); 

console.log(comidas [0]);
console.log(comidas [1]);
console.log(comidas [2]);

comidas.forEach(function(el){
    console.log(el); 
})

const numeros = [1,2,3];
console.log(numeros);

numeros.forEach(function(el){
    let suma = el + 1; 
    console.log(suma); 
})

console.log(numeros); 

const arr = [];

function suma(num){
    let sumNum = num +1;
    return arr.unshift(sumNum); 

}

suma(3);
suma(5);
suma(6);
suma(2);
suma(78); 

console.log(arr); 
