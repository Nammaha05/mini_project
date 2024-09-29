// cart.js

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
