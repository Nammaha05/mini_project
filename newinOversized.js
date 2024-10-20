document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { img: 'no1.webp', name: 'Korean love symbol Oversized T-shirt', price: 500 },
        { img: 'no2.avif', name: 'Venom Oversized T-shirt', price: 500 },
        { img: 'no3.avif', name: 'Printed Oversized T-shirt', price: 500 },
        { img: 'no4.avif', name: 'Brown Printed Oversized T-shirt', price: 500 },
        { img: 'no5.avif', name: 'Panther Oversized T-shirt', price: 500 },
        { img: 'no6.avif', name: 'Bob-Sponge Oversized T-shirt', price: 500 },
        { img: 'no7.avif', name: 'Leopard Printed Oversized T-shirt', price: 500 },
        { img: 'no8.avif', name: 'Red Printed Oversized T-shirt', price: 500 },
        { img: 'no9.avif', name: 'Pink Calligraphed Oversized T-shirts', price: 500 },
        { img: 'no10.avif', name: 'Light brown Printed Oversized T-shirts', price: 500 },
        { img: 'no11.avif', name: 'Bollmer Oversized T-shirt<', price: 500 },
        { img: 'no12.avif', name: 'Colorfully designed Oversized T-shirt', price: 500 }
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
