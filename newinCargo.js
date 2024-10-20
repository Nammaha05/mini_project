document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { img: 'newin/nc1.jpg', name: 'High waist Straight fit Wide leg Cargo jeans', price:  799 },
        { img: 'newin/nc2.jpg', name: 'High waist Straight fit Cargo jeans', price: 799 },
        { img: 'newin/nc3.jpg', name: 'High waist Straight fit Cargo jeans', price: 799 },
        { img: 'newin/nc4.jpg', name: 'High waist black Straight fit Cargo jeans', price: 799.00 },
        { img: 'newin/nc5.jpg', name: 'High waist Boot cut Cargo jeans', price: 799.00 },
        { img: 'newin/nc6.jpg', name: 'High waist Straight fit Cargo jeans', price: 999.00 },
        { img: 'newin/nc7.jpg', name: 'High waist Baggy Cargo jean', price: 799 },
        { img: 'newin/nc8.jpg', name: 'High waist Boot cut Cargo jeanst', price: 699.00 },
        { img: 'newin/nc9.jpg', name: 'High waist Straight fit Cargo jeans', price: 799 },
        { img: 'newin/nc10.jpg', name: 'High waist Boot cut Cargo jeans', price:  799 },
        { img: 'newin/nc11.jpg', name: 'High waist flarred Cargo jeans', price: 799 },
        { img: 'newin/nc12.jpg', name: 'High rise wide leg cargo jeans', price: 699.00 }
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
