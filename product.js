//he product description wala page sathi ahee


document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the selected product from localStorage
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    if (selectedProduct) {
        // Populate the product details page with the product data
        document.getElementById('productImage').src = selectedProduct.image;
        document.getElementById('productName').textContent = selectedProduct.name;
        document.getElementById('productPrice').textContent = selectedProduct.price;
        document.getElementById('productDescription').textContent = selectedProduct.description;
    }
});
