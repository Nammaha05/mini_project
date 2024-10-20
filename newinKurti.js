document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { img: 'newin/nk1.avif', name: 'Peach Colored Chikankaari Short Kurti', price: 800 },
        { img: 'newin/nk2.avif', name: 'Peach Colored Chikankaari Short Kurti', price: 1000 },
        { img: 'newin/nk3.avif', name: 'Red Embroidered Kurti', price: 1000 },
        { img: 'newin/nk4.avif', name: 'Pink Chikankaari kurti', price: 1000 },
        { img: 'newin/nk5.avif', name: 'White printed Kurti', price: 800 },
        { img: 'newin/nk6.avif', name: 'Abstract Black Kurti', price: 800 },
        { img: 'newin/nk7.avif', name: 'Crimson Embroidered Kurti', price: 800 },
        { img: 'newin/nk8.avif', name: 'Light Pink Embroidered Kurti', price: 800 },
        { img: 'newin/nk9.avif', name: 'Abstract Printed White Kurti', price: 800 },
        { img: 'newin/nk10.avif', name: ' Pink Malai Silk Chikankaari Kurti', price: 800 },
        { img: 'newin/nk11.avif', name: 'Black Printed Kurti', price: 800 },
        { img: 'newin/nk12.avif', name: 'Navi Blue Embroidered Kurti', price: 800 }
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
