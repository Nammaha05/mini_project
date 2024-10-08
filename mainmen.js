//he product grid sathi ahee


document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { img: 'mm1.jpeg', name: 'Denim Jacket', price: 'Rs.3000' },
        { img: 'mm2.jpg', name: 'White Shirt', price: 'Rs.1700' },
        { img: 'mm3.jpg', name: 'Stylish Jacket', price: 'Rs.2500' },
        { img: 'mm4.jpg', name: 'Black three piece suit', price: 'Rs.999' },
        { img: 'mm5.jpg', name: 'White Kurta', price: 'Rs.1700' },
        { img: 'mm6.jpeg', name: 'Black Kurta', price: 'Rs.999' },
        { img: 'mm7.jpg', name: 'Elegant suit', price: 'Rs.2999' },
        { img: 'mm8.avif', name: 'Chikankari Kurta', price: 'Rs.3700' },
        { img: 'mm9.jpg', name: 'White Hoodie', price: 'Rs.1300' },
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
