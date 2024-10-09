document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/9/3991e54SS226071_1.jpg?rnd=20200526195200&tr=w-256', name: 'Oversized t-shirt ', price: 'Rs. 799' },
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/1/919052eTSTE06OT7027-BE_2.jpg?rnd=20200526195200&tr=w-256', name: 'Black Printed t-shirt ', price: 'Rs. 299' },
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/9/3991e54SS226074_1.jpg?rnd=20200526195200&tr=w-256', name: 'Peach oversized t-shirt ', price: 'Rs. 299.00' },
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/4/049e4a6CD20221121210388LT-Camel_0.jpg?rnd=20200526195200&tr=w-256', name: 'Camel Raglan Sleeve Patchy Long Sleeve Top', price: 'Rs. 500.00' },
        
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