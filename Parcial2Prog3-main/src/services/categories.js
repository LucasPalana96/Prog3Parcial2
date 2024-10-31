//=== CATEGORIA ===

import {handleGetProductLocalStorage} from "../persistence/localStorage.js";
import {categoriaActiva} from "../../main.js";
import {handleRenderList} from "../views/store.js";

const handleFilterProductsByCategory = (categoryIn)=>{
    const products = handleGetProductLocalStorage()

    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el)=> el.categories === categoryIn);
            handleRenderList(result);
            break;
        case "mayorPrecio":
            const resultPrecioMayor = products.sort((a,b)=> b.precio - a.precio);
            handleRenderList(resultPrecioMayor);
            break;
        case "menorPrecio":
            const resultPrecioMenor = products.sort((a,b)=> a.precio - b.precio);
            handleRenderList(resultPrecioMenor);
            break;
    }
}

//render de la vista categorias
export const renderCategories = ()=>{
    //tomamos elementos de la lista
    const ulList = document.getElementById("listFilter");
    //creamos esos elementos dentro de la lista
    ulList.innerHTML = `
        <li id="Todo">Todos los productos</li>
        <li id="Hamburguesas">Hamburguesas</li>
        <li id="Papas">Papas</li>
        <li id="Gaseosas">Gaseosas</li>
        <li id="mayorPrecio">Mayor precio</li>
        <li id="menorPrecio">Menor precio</li>
    `;
    //añadimos dinamicamente el evento click
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement)=>{
        liElement.addEventListener('click', () => {
            handleClick(liElement);
        });
    });

    //verificamos y manejamos el estilo del elemento activo
    const handleClick = (elemento)=>{
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el)=>{
            if(el.classList.contains('liActive')) {
                el.classList.remove('liActive');
            } else {
                if(elemento === el) {
                    el.classList.add("liActive")
                }
            }
        })
    }

};