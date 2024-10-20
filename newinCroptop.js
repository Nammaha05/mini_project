document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { img: 'nt1.jpg', name: 'Brown-peach colored floral Gorgette crop top', price: 799 },
        { img: 'nt2.jpg', name: 'Knitted white crop top', price: 1299},
        { img: 'nt3.avif', name: 'Black Polyster crop top', price: 1000},
        { img: 'nt4.avif', name: 'Short ruffle sleeved red crop top', price: 900 },
        { img: 'nt5.avif', name: 'Long sleeved off-shoulder floral top', price: 800},
        { img: 'nt6.avif', name: 'Long sleeved black top', price: 600 },
        { img: 'nt7.avif', name: 'Pink Striped Bell Sleeves Crop Top', price:700 },
        { img: 'nt8.avif', name: '>Womens Black Tie-Up Waist Crop Top', price:  800},
        { img: 'nt9.avif', name: 'White Twist Detail Collar Neck top', price: 900},
        { img: 'nt10.avif', name: 'Multi-Color Floral Print off-Shoulder Bardot Top', price:1000 },
        { img: 'nt11.avif', name: 'Pink Geometric Printed Crop Top', price:1000 },
        { img: 'nt12.avif', name: 'Pink Geometric Printed Crop Top', price: 1000}
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
