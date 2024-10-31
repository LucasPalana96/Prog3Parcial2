import {renderCategories} from "./src/services/categories.js";
import "./style.css";
import {handleGetProductsToStore} from "./src/views/store.js";
import {openModal} from "./src/views/modal.js";
import {handleSearchProductByName} from "./src/services/searchBar.js";

//=== APLICACION ===
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn)=>{
    categoriaActiva = categoriaIn;
}

export let productoActivo = null;
export const setProductoActivo = (productoIn)=>{
    productoActivo = productoIn;
}

handleGetProductsToStore();
renderCategories();

//HEADER
const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener("click", ()=>{
    openModal();
});

//buttonSearch
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener("click", ()=>{
    handleSearchProductByName();
});