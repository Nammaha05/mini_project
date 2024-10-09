document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { img: 'nt1.jpg', name: 'Brown-peach colored floral Gorgette crop top', price: 'Rs. 799' },
        { img: 'nt2.jpg', name: 'Knitted white crop top', price: 'Rs. 1,299' },
        { img: 'nt3.avif', name: 'Black Polyster crop top', price: 'Rs. 1,299.00' },
        { img: 'nt4.avif', name: 'Short ruffle sleeved red crop top', price: 'Rs. 799.00' },
        { img: 'nt5.avif', name: 'Long sleeved off-shoulder floral top', price: 'Rs. 799.00' },
        { img: 'nt6.avif', name: 'Long sleeved black top', price: 'Rs. 999.00' },
        { img: 'nt7.avif', name: 'Pink Striped Bell Sleeves Crop Top', price: 'Rs. 1,499.00' },
        { img: 'nt8.avif', name: '>Womens Black Tie-Up Waist Crop Top', price: 'Rs. 699.00' },
        { img: 'nt9.avif', name: 'White Twist Detail Collar Neck top', price: 'Rs. 1,899.00' },
        { img: 'nt10.avif', name: 'Multi-Color Floral Print off-Shoulder Bardot Top', price: 'Rs. 1,899.00' },
        { img: 'nt11.avif', name: 'Pink Geometric Printed Crop Top', price: 'Rs. 1,899.00' },
        { img: 'nt12.avif', name: 'Pink Geometric Printed Crop Top', price: 'Rs. 699.00' }
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
