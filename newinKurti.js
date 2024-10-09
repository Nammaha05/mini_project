document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { img: 'newin/nk1.avif', name: 'Peach Colored Chikankaari Short Kurti', price: 'Rs. 799' },
        { img: 'newin/nk2.avif', name: 'Peach Colored Chikankaari Short Kurti', price: 'Rs. 1,299' },
        { img: 'newin/nk3.avif', name: 'Red Embroidered Kurti', price: 'Rs. 1,299.00' },
        { img: 'newin/nk4.avif', name: 'Pink Chikankaari kurti', price: 'Rs. 799.00' },
        { img: 'newin/nk5.avif', name: 'White printed Kurti', price: 'Rs. 799.00' },
        { img: 'newin/nk6.avif', name: '>Abstract Black Kurti', price: 'Rs. 999.00' },
        { img: 'newin/nk7.avif', name: 'Crimson Embroidered Kurti', price: 'Rs. 1,499.00' },
        { img: 'newin/nk8.avif', name: 'Light Pink Embroidered Kurti', price: 'Rs. 699.00' },
        { img: 'newin/nk9.avif', name: 'Abstract Printed White Kurti', price: 'Rs. 1,899.00' },
        { img: 'newin/nk10.avif', name: ' Pink Malai Silk Chikankaari Kurti', price: 'Rs. 1,899.00' },
        { img: 'newin/nk11.avif', name: 'Black Printed Kurti', price: 'Rs. 1,899.00' },
        { img: 'newin/nk12.avif', name: 'Navi Blue Embroidered Kurti', price: 'Rs. 699.00' }
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