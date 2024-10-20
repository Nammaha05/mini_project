document.addEventListener('DOMContentLoaded', () => {
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    if (selectedProduct) {
        document.getElementById('productImage').src = selectedProduct.image;
        document.getElementById('productName').textContent = selectedProduct.name;
        document.getElementById('productPrice').textContent = `Rs.${selectedProduct.price}`;
        document.getElementById('productDescription').textContent = selectedProduct.description || 'A stylish and comfortable crop top perfect for any occasion.';
    }

    document.querySelector('.buy-now-btn').addEventListener('click', () => {
        addToCart(selectedProduct);
    });
});

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.name === product.name);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} has been added to your cart.`);
}
