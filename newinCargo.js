
//he product grid sathi ahee


document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { img: 'nc1.jpg', name: 'High waist Straight fit Wide leg Cargo jeans', price: 'Rs. 799' },
        { img: 'nc2.jpg', name: 'High waist Straight fit Cargo jeans', price: 'Rs. 1,299' },
        { img: nc3.jpg', name: 'High waist Straight fit Cargo jeans', price: 'Rs. 1,299.00' },
        { img: 'nc4.jpg', name: 'High waist black Straight fit Cargo jeans', price: 'Rs. 799.00' },
        { img: 'nc5.jpg', name: 'High waist Boot cut Cargo jeans', price: 'Rs. 799.00' },
        { img: 'nc6.jpg', name: 'High waist Straight fit Cargo jeans', price: 'Rs. 999.00' },
        { img: 'nc7.jpg', name: 'High waist Baggy Cargo jean', price: 'Rs. 1,499.00' },
        { img: 'nc8.jpg', name: 'High waist Boot cut Cargo jeanst', price: 'Rs. 699.00' },
        { img: 'nc9.jpg', name: 'High waist Straight fit Cargo jeans', price: 'Rs. 1,899.00' },
        { img: 'nc10.jpg', name: 'High waist Boot cut Cargo jeans', price: 'Rs. 1,899.00' },
        { img: 'nc11.jpg', name: 'High waist flarred Cargo jeans', price: 'Rs. 1,899.00' },
        { img: 'nc12.jpg', name: 'High rise wide leg cargo jeans', price: 'Rs. 699.00' }
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
