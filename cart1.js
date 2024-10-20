// Load cart items from localStorage and display them
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <p>Price: Rs.${item.price}</p>
                <div class="cart-item-controls">
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
        cartItemsDiv.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    const tax = total * 0.05;
    const grandTotal = total + tax;

    document.getElementById('totalPrice').textContent = `Rs.${total.toFixed(2)}`;
    document.getElementById('taxPrice').textContent = `Rs.${tax.toFixed(2)}`;
    document.getElementById('grandTotal').textContent = `Rs.${grandTotal.toFixed(2)}`;
}

// Function to update item quantity
function updateQuantity(index, newQuantity) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (newQuantity < 1) return;

    cart[index].quantity = parseInt(newQuantity);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

// Function to remove an item from the cart
function removeItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

// Checkout flow functions
document.getElementById('checkoutButton').addEventListener('click', () => {
    document.getElementById('addressPopup').classList.remove('hidden');
});

document.getElementById('nextPaymentButton').addEventListener('click', () => {
    const address = document.getElementById('addressInput').value;
    if (address.trim()) {
        document.getElementById('addressPopup').classList.add('hidden');
        document.getElementById('paymentPopup').classList.remove('hidden');
    } else {
        alert('Please enter a valid address.');
    }
});

document.getElementById('confirmOrderButton').addEventListener('click', () => {
    const paymentMethod = document.getElementById('paymentMethod').value;
    if (paymentMethod) {
        document.getElementById('paymentPopup').classList.add('hidden');
        document.getElementById('confirmationPopup').classList.remove('hidden');
        localStorage.removeItem('cart'); // Clear cart after order confirmation
    } else {
        alert('Please select a payment method.');
    }
});

function closePopup(popupId) {
    document.getElementById(popupId).classList.add('hidden');
}

window.onload = loadCart;
