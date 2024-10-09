document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { img: 'newin/no1.webp', name: 'Korean love symbol Oversized T-shirt', price: 'Rs. 799' },
        { img: 'newin/no2.avif', name: 'Venom Oversized T-shirt', price: 'Rs. 1,299' },
        { img: 'newin/no3.avif', name: 'Printed Oversized T-shirt', price: 'Rs. 1,299.00' },
        { img: 'newin/no4.avif', name: 'Brown Printed Oversized T-shirt', price: 'Rs. 799.00' },
        { img: 'newin/no5.avif', name: 'Panther Oversized T-shirt', price: 'Rs. 799.00' },
        { img: 'newin/no6.avif', name: 'Bob-Sponge Oversized T-shirt', price: 'Rs. 999.00' },
        { img: 'newin/no7.avif', name: 'Leopard Printed Oversized T-shirt', price: 'Rs. 1,499.00' },
        { img: 'newin/no8.avif', name: 'Red Printed Oversized T-shirt', price: 'Rs. 699.00' },
        { img: 'newin/no9.avif', name: 'Pink Calligraphed Oversized T-shirts', price: 'Rs. 1,899.00' },
        { img: 'newin/no10.avif', name: 'Light brown Printed Oversized T-shirts', price: 'Rs. 1,899.00' },
        { img: 'newin/no11.avif', name: 'Bollmer Oversized T-shirt<', price: 'Rs. 1,899.00' },
        { img: 'newin/no12.avif', name: 'Colorfully designed Oversized T-shirt', price: 'Rs. 699.00' }
    ];

    const productGrid = document.getElementById('productGrid');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        productItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

        // Add event listener for click event on each product
        productItem.addEventListener('click', () => {
            viewProduct(product.img, product.name, product.price, product.description);
        });

        productGrid.appendChild(productItem);
    });
});

// Function to handle product click and redirect to the description page
function viewProduct(image, name, price, description) {
    const product = {
        image/*: image*/,
        name/*: name*/,
        price/*: price*/,
        description/*: description*/
    };
    // Store the product data in localStorage
    localStorage.setItem('selectedProduct', JSON.stringify(product));

    // Redirect to the product details page
    window.location.href = 'product.html';
}