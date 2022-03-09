const menuOpinion = []
const menuFood = []

/* Iteramos el objeto de products creado en menuListing solo para obtener los productos que sean considerados comida (food) */




for (const menu of products) {
    if (menu.food == true) {
        menuFood.push(menu.name);
    }
}

alert('Actualmente el menú de comida es ' + menuFood);
alert('Dejanos tu opinion sobre que comida haría falta y lo tendremos en cuenta para agregar al menú!');
let foodOpinion = prompt('Decinos que plato quieras agregar');
menuOpinion.push(foodOpinion);

alert('Gracias, tendremos muy en cuenta tu opinion de: ' + menuOpinion); 


const newMenuOpinion=document.createElement('h3')
newMenuOpinion.innerText=foodOpinion;
root.append(newMenuOpinion);