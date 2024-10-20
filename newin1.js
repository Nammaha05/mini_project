document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { img: nc1.jpg', name: 'High waist Straight fit Wide leg Cargo jeans', price: 'Rs. 799' },
        { img: 'nk1.avif', name: 'Peach Colored Chikankaari Short Kurti', price: 'Rs. 1,299' },
        { img: 'nk2.avif', name: 'Shaded Blue embroidered Kurti', price: 'Rs. 1,299.00' },
        { img: 'nc2.jpg', name: 'High waist Straight fit Cargo jeans', price: 'Rs. 799.00' },
        { img: 'no1.avif', name: 'Red Printed Oversized T-shirt', price: 'Rs. 799.00' },
        { img: 'nt1.jpg', name: 'Brown-peach colored floral Gorgette crop top', price: 'Rs. 999.00' },
        { img: 'no2.avif', name: 'Pink Calligraphed Oversized T-shirt', price: 'Rs. 1,499.00' },
        { img: 'nk3.avif', name: 'Red Embroidered Kurti', price: 'Rs. 699.00' },
        { img: 'nc3.jpg', name: 'High waist Straight fit Cargo jeans', price: 'Rs. 1,899.00' },
        { img: 'no3.avif', name: 'Light brown Printed Oversized T-shirt', price: 'Rs. 1,899.00' },
        { img: 'nt2.jpg', name: 'Knitted white crop top', price: 'Rs. 1,899.00' },
        { img: 'nt3.avif', name: 'Black Polyster crop top', price: 'Rs. 699.00' }
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
