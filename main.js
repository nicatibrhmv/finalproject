// scroll color change 
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

// menu 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
//  menu on scroll disappear
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

document.addEventListener("DOMContentLoaded", function () {
    // array - products
    const products = [
        { name: "Nike Therma", image: "shop1.png", price: 50.99 },
        { name: "Adidas Jacket", image: "shop2.png", price: 45.99 },
        { name: "Puma Sneakers", image: "shop3.png", price: 55.99 },
        
    ];

    function createProductHTML(product) {
        return `
            <div class="box">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <span>${product.price.toFixed(2)}$</span>
                <button onclick="saveToSession('${product.name}', ${product.price}, '${product.image}')">
                    <i class='bx bx-cart-alt' ></i>
                </button>
            </div>
        `;
    }

    function populateProducts(containerId, productList) {
        const container = document.getElementById(containerId);
        container.innerHTML = productList.map(createProductHTML).join("");
    }

    
    window.saveToSession = function (productName, productPrice, image) {
        
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if(cart.filter(x=>x.name === productName).length !== 0){
            alert(`"${productName}" already added to the cart!`);
        }
        else{
            
            cart.push({ name: productName, price: productPrice, image });

            
            localStorage.setItem('cart', JSON.stringify(cart));

            
            updateCartCount();

            
            alert(`"${productName}" added to the cart!`);
        }
    };

    
    function updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCountElement.textContent = cart.length.toString();
    }

    
    populateProducts("shop-container", products);
    populateProducts("new-container", products);

    
    updateCartCount();
});
