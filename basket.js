function createProductHTML(product) {
    return `
            <div class="box">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <span>${product.price.toFixed(2)}$</span>
            </div>
        `;
}

function populateProducts(containerId) {
    const cartData = localStorage.getItem('cart');


    const cartArray = JSON.parse(cartData) || [];

    console.log(cartArray);

    const container = document.getElementById(containerId);
    if(cartArray.length === 0){
        container.innerHTML = `<p>You don't have any item</p>`
    }
    else{
        container.innerHTML = cartArray.map(createProductHTML).join("");
    }
}

populateProducts("basket-container") 
function clearLocalStorage() {
    localStorage.clear();
    updateCartCount(0); 
    const container = document.getElementById('basket-container');
    container.innerHTML = `<p>You don't have any item</p>`;
}


clearLocalStorage();
