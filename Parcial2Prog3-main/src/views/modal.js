/*=== POPUP ===*/

import {productoActivo, setProductoActivo} from "../../main.js";
import {handleDeleteProduct} from "../services/products.js";

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", ()=>{
    closeModal();
});

//FUNCIONES ABRIR CERRAR MODAL
export const openModal = ()=>{
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "flex";
    const buttonDelete = document.getElementById("deleteButton");
    if (productoActivo) {
        buttonDelete.style.display = "block";
    } else {
        buttonDelete.style.display = "none";
    }

    if (productoActivo) {
        const nombre = document.getElementById("nombre"),
            imagen = document.getElementById("img"),
            precio = document.getElementById("precio"),
            categories = document.getElementById("categoria");
        imagen.value = productoActivo.imagen;
        categories.value = productoActivo.categories;
        precio.value = productoActivo.precio;
        nombre.value = productoActivo.nombre;
    }
};

export const closeModal = ()=>{
    const modal = document.getElementById("modalPopUP");
    modal.style.display = "none";
    setProductoActivo(null);
    resetModal();
};

const resetModal = ()=>{
    const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");
    imagen.value = "";
    categories.value = "Seleccione una categoria";
    precio.value = 0;
    nombre.value = "";
}

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", ()=>{
    handleButtonDelete();
})

const handleButtonDelete = ()=>{
    handleDeleteProduct();
}