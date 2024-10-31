// === LOCALSTORAGE ===
//Traer productos localStorage
export const handleGetProductLocalStorage = ()=>{
    const products = JSON.parse(localStorage.getItem("products"));
    if (products) {
        return products;
    } else {
        return [];
    }
};

//Guardar en localStorage

//Recibir un producto
export const setInLocalStorage = (productIn)=>{

    //Traer los elementos
    let productsInLocal = handleGetProductLocalStorage();

    const existingIndex = productsInLocal.findIndex((productsLocal)=>
        productsLocal.id === productIn.id
    )

    //Verificar si el elemento existe
    if (existingIndex !== -1) {
        //Si existe debe reemplazarse
        productsInLocal[existingIndex] = productIn;
    } else {
        //Si no existe, agregarse
        productsInLocal.push(productIn);
    }
    //Setear el nuevo array
    localStorage.setItem("products", JSON.stringify(productsInLocal));
};