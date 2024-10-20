document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/9/3991e54SS226071_1.jpg?rnd=20200526195200&tr=w-256', name: 'Oversized t-shirt ', price: 700 },
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/1/919052eTSTE06OT7027-BE_2.jpg?rnd=20200526195200&tr=w-256', name: 'Black Printed t-shirt ', price: 700 },
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/9/3991e54SS226074_1.jpg?rnd=20200526195200&tr=w-256', name: 'Peach oversized t-shirt ', price:  299.00 },
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/4/049e4a6CD20221121210388LT-Camel_0.jpg?rnd=20200526195200&tr=w-256', name: 'Camel Raglan Sleeve Patchy Long Sleeve Top', price: 500.00 },
    ];

    const productGrid = document.getElementById('productGrid');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rs.${product.price}</p>
        `;

        productItem.addEventListener('click', () => {
            viewProduct(product.img, product.name, product.price);
        });

        productGrid.appendChild(productItem);
    });
});

function viewProduct(image, name, price) {
    const product = { image, name, price };
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = 'product.html';
}
