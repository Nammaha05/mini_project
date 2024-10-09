let images = ["s2.jpg", "image2.jpg"]; 
let currentIndex = 0;
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
}

function showImage() {
    const image1 = document.getElementById('slideshow-image');
    const image2 = document.getElementById('slideshow-image-2');

    if (currentIndex === 0) {
        image1.style.display = 'block';
        image2.style.display = 'none';
    } else {
        image1.style.display = 'none';
        image2.style.display = 'block';
    }
}

function showSizeChart() {
    document.getElementById('size-chart-modal').classList.remove('hidden');
}

function closeSizeChart() {
    document.getElementById('size-chart-modal').classList.add('hidden');
}

function addToCart() {
    const productName = document.getElementById('product-name').innerText;
    const productPrice = parseFloat(document.getElementById('product-price').innerText.replace(' USD', ''));
    const size = document.getElementById('size').value;
    const productImage = images[currentIndex]; // Get the currently displayed image

    const existingProduct = cart.find(item => item.name === productName && item.size === size);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, size: size, quantity: 1, image: productImage });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('${productName} (Size: ${size}) has been added to your cart.');
}

function openCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty. Add items before proceeding to checkout.');
        return;
    }
    location.href = 'cart1.html';
}

function shopNow() {
    document.getElementById('payment-modal').classList.remove('hidden');
}

function confirmOrder() {
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zip = document.getElementById('zip').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (!address || !city || !state || !zip) {
        alert('Please fill in all address fields.');
        return;
    }

    // Show confirmation message
    const confirmationMessage = `Thank you for your order! ${cart.length} item(s) will be shipped to ${address}, ${city}, ${state} - ${zip}. Payment method: ${paymentMethod}.`;
    document.getElementById('confirmation-message').innerText = confirmationMessage;

    // Clear the cart
    localStorage.removeItem('cart');
    cart = [];
    closePaymentModal();
    document.getElementById('confirmation-modal').classList.remove('hidden');
}

function closePaymentModal() {
    document.getElementById('payment-modal').classList.add('hidden');
}

function closeConfirmation() {
    document.getElementById('confirmation-modal').classList.add('hidden');
}
   
  
