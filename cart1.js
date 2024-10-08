let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    let totalCost = 0;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('total-cost').innerText = 'Total: 0.00 USD';
        return;
    }

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalCost += itemTotal;

        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <div class="cart-item">
                <span>${item.name} - ${item.size} - ${item.price.toFixed(2)} USD (Quantity: ${item.quantity})</span>
                <span>Total: ${itemTotal.toFixed(2)} USD</span>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });

    document.getElementById('total-cost').innerText = `Total: ${totalCost.toFixed(2)} USD`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

function openCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add items before proceeding to checkout.');
        return;
    }
    document.getElementById('checkout-modal').classList.remove('hidden');
}

function closeCheckout() {
    document.getElementById('checkout-modal').classList.add('hidden');
    clearCheckoutForm();
}

function clearCheckoutForm() {
    document.getElementById('checkout-form').reset();
}

function submitCheckout() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked');

    if (!paymentMethod) {
        alert('Please select a payment method.');
        return;
    }

    const paymentMethodValue = paymentMethod.value;

    if (!name || !address || !city || !state || !zip) {
        alert('Please fill in all the details.');
        return;
    }

    const confirmationMessage = `Thank you, ${name}! Your order for ${cart.length} item(s) will be shipped to ${address}, ${city}, ${state} - ${zip} via ${paymentMethodValue}.`;
    document.getElementById('confirmation-message').innerText = confirmationMessage;
    
    closeCheckout();
    document.getElementById('confirmation-modal').classList.remove('hidden');

    localStorage.removeItem('cart');
    cart = [];
    displayCartItems();
}

function closeConfirmation() {
    document.getElementById('confirmation-modal').classList.add('hidden');
}

// Initial display of cart items
displayCartItems();
