//filter array in JS

const carro = [{marca:"bmw",precio:300,color: "azul"},{marca:"toyota",precio:700,color: "marillo"},{marca:"renault",precio:300,color: "azul"}];

let select = carro.filter(e => e.color == 'azul');// filter for color azul

for(let car of select){ // recorre el arreglo por medio de la funcion  filter
    console.log(car.marca,"su color ",car.color);
}