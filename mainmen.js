
//he product grid sathi ahee






// Product data for dresses
const kurtas = [
    // (Kurtas data)
     { img: 'kk1.jpg', name: 'Elegant Kurta With Jacket', price: 'Rs.2,400' },
                { img: 'kk2.jpg', name: 'Dark Blue Cotton Kurta', price: 'Rs.3,000' },
                { img: 'kk3.jpeg', name: 'Stylish Skinny Kurta', price: 'Rs.2,690' },
                { img: 'kk4.jpeg', name: 'Black Kurta', price: 'Rs.2,300' },
                { img: 'kk5.avif', name: 'Elegant Shiny Green Kurta', price: 'Rs.3,290' },
                { img: 'kk6.jpg', name: 'Plain Black Kurta', price: 'Rs.2,690' },
                { img: 'kk7.avif', name: 'Blue Pattern Kurta', price: 'Rs.2,999' },
                { img: 'kk8.avif', name: 'Multicolour Shinny Kurta', price: 'Rs.3,700' },
                { img: 'kk9.avif', name: 'Black Chikankari Kurta', price: 'Rs.3,300' },
                { img: 'kk10.webp', name: 'Blue Shaded Chikankari Kurta', price: 'Rs.2,500' },
                { img: 'kk11.avif', name: 'Green Shinny Kurta', price: 'Rs.2,450' },
                { img: 'kk12.avif', name: 'Dark Blue Kurta', price: 'Rs.3,000' }
];

// Product data for tops
const t-shirts = [
    // (T-Shirts data)
    { img: 'womens_images/womenstop1.jpg', name: 'Scoop-neck Microfibre Top', price: 'Rs. 799' },
        { img: 'womens_images/womenstop2.png', name: 'Oversized printed T-shirt', price: 'Rs. 1,299' },
        { img: 'womens_images/womenstop3.webp', name: 'Fine-knit polo shirt', price: 'Rs. 1,299.00' },
        { img: 'womens_images/womenstop4.webp', name: 'Overlock-detail ribbed top', price: 'Rs. 799.00' },
        { img: 'womens_images/womenstop5.png', name: 'Oversized T-shirt', price: 'Rs. 799.00' },
        { img: 'womens_images/womenstop6.png', name: 'Overlock-detail smocked top', price: 'Rs. 999.00' },
        { img: 'womens_images/womenstop7.png', name: 'Dusty purple chiffon top', price: 'Rs. 1,499.00' },
        { img: 'womens_images/womenstop8.png', name: 'Red ribbed T-shirt', price: 'Rs. 699.00' },
        { img: 'womens_images/womenstop9.png', name: 'Broderie anglaise blouse', price: 'Rs. 1,899.00' },
        { img: 'womens_images/womenstop10.png', name: 'Textured-weave shirt', price: 'Rs. 1,899.00' },
        { img: 'womens_images/womenstop11.png', name: 'Viscose-blend shirt', price: 'Rs. 1,899.00' },
        { img: 'womens_images/womenstop12.png', name: 'Short vest top', price: 'Rs. 699.00' }
];

const shirts = [
    // (Shirts data)
    { img: 'ss1.avif', name: 'White Printed Shirt', price: 'Rs.3,000' },
                { img: 'ss2.jpg', name: 'Silk Back Shirt', price: 'Rs.3,000' },
                { img: 'ss3.jpg', name: 'Classic Plain White Shirt', price: 'Rs.1,490' },
                { img: 'ss4.webp', name: 'Light Blue Denim Shirt', price: 'Rs.3,500' },
                { img: 'ss5.webp', name: 'Dark Blue Denim Shirt', price: 'Rs.3,290' },
                { img: 'ss6.jpg', name: 'Light Green Plain Shirt', price: 'Rs.2,600' },
                { img: 'ss7.jpg', name: 'Dark Blue Printed Shirt', price: 'Rs.2,999' },
                { img: 'ss8.jpeg', name: 'Multicolour Shirt', price: 'Rs.3,700' },
                { img: 'ss9.png', name: 'Pink Plain Shirt', price: 'Rs.1,300' },
                { img: 'ss10.jpg', name: 'Classic Pattern Shirt', price: 'Rs.3,500' },
                { img: 'ss11.jpeg', name: 'Green Printed Shirt', price: 'Rs.3,450' },
                { img: 'ss12.jpg', name: 'Black Printed Shirt', price: 'Rs.3,000' }
];

// Function to display products
function displayProducts(products) {
    const productGrid = document.getElementById('productGrid');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productItem.onclick = () => viewProduct(product.img, product.name, product.price);
        productGrid.appendChild(productItem);
    });
}

// Function to view detailed product
function viewProduct(image, name, price, description) {
    const product = { image, name, price, description };
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = 'product.html';
}

// Check which page is being loaded
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname; // Get the current page path
    if (path.includes('womens_dresses.html')) {
        displayProducts(dresses);
    } else if (path.includes('womens_tops.html')) {
        displayProducts(tops);
    } else if (path.includes('womens_ethnic.html')) {
        displayProducts(ethnic);
    }
});
