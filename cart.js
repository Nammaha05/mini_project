// cart.js
/*
// Load cart items from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render the cart items
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItemsContainer.innerHTML = ''; // Clear the container
    let total = 0;
    
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
            </div>
            <div class="cart-item-controls">
                <input type="number" value="${item.quantity}" min="1" data-index="${index}" onchange="updateQuantity(${index}, this.value)">
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
        cartItemsContainer.appendChild(itemElement);

        total += item.price * item.quantity; // Update total price
    });
    
    cartTotal.textContent = total.toFixed(2); // Update total in UI
}

// Function to update item quantity
function updateQuantity(index, newQuantity) {
    if (newQuantity < 1) return;
    
    cart[index].quantity = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    renderCart(); // Re-render cart
}

// Function to remove an item
function removeItem(index) {
    cart.splice(index, 1); // Remove item from array
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    renderCart(); // Re-render cart
}
// addToCart.js

function addToCart(name, price, image) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item is already in the cart
    const existingItemIndex = cart.findIndex(item => item.name === name);
    if (existingItemIndex !== -1) {
        cart[existingItemIndex].quantity += 1; // Increase quantity if already in the cart
    } else {
        // Add new item to cart
        cart.push({ name, price, image, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
    alert(`${name} added to cart!`); // Notify user
}

// Initial rendering of cart on page load
document.addEventListener('DOMContentLoaded', renderCart);
*/

// Function to load cart items from localStorage and display them
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart items from localStorage
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = ''; // Clear existing items
    let total = 0;

    // Loop through the cart items and create elements for each item
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div>
                <h3>${item.name}</h3>
                <p>Rs.${item.price}</p>
            </div>
        `;
        cartItemsDiv.appendChild(cartItem);
        total += item.price; // Calculate total price
    });

    // Calculate tax and grand total
    const tax = total * 0.05; // 5% tax
    const grandTotal = total + tax;

    // Update total prices in the cart
    document.getElementById('totalPrice').textContent = `Rs.${total}`;
    document.getElementById('taxPrice').textContent = `Rs.${tax.toFixed(2)}`;
    document.getElementById('grandTotal').textContent = `Rs.${grandTotal.toFixed(2)}`;
}

// Load cart items when the page loads
window.onload = loadCart;


let cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart items from localStorage

function addToCart(image, name, price) {
    const product = { image, name, price };
    cart.push(product); // Add product to cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Store updated cart in localStorage
}
