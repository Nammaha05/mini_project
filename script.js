
//he product grid sathi ahee


const collection = [
    { img: 'womens_images/womens1.png', name: 'Elegant Dress', price: 'Rs.3000' },
    { img: 'womens_images/womens2.png', name: 'Chic Blouse', price: 'Rs.1700' },
    { img: 'womens_images/womens3.png', name: 'Black Square Neck Top', price: 'Rs.999' },
    { img: 'womens_images/womens4.png', name: 'Ribbed Red Top', price: 'Rs.1700' },
    { img: 'womens_images/womens5.png', name: 'Grey Square Neck Top', price: 'Rs.999' },
    { img: 'womens_images/womens6.png', name: 'Wide Cargo Trousers', price: 'Rs.2999' },
    { img: 'womens_images/womens7.png', name: 'Coated Jacket', price: 'Rs.3700' },
    { img: 'womens_images/womens8.png', name: 'Cotton Shirt', price: 'Rs.1300' },
    { img: 'womens_images/womens9.png', name: 'Stylish Skirt', price: 'Rs.2500' }
];




// Product data for dresses
const dresses = [
    // (Dresses data)
    { img: 'womens_images/womensdress1.png', name: 'Knotted Midi Knit Dress', price: 'Rs.3,000' },
{ img: 'womens_images/womensdress2.png', name: 'Open Back Mesh Cami Dress', price: 'Rs.3,000' },
{ img: 'womens_images/womensdress3.png', name: 'Asymmetric Tank Dress', price: 'Rs.1,490' },
{ img: 'womens_images/womensdress4.png', name: 'Floral Print Dress', price: 'Rs.3,500' },
{ img: 'womens_images/womensdress5.png', name: 'Asymmetric Cami Dress', price: 'Rs.3,290' },
{ img: 'womens_images/womensdress6.png', name: 'Tied Tank Dress', price: 'Rs.2,600' },
{ img: 'womens_images/womensdress7.png', name: 'Open Back Floral Dress', price: 'Rs.2,999' },
{ img: 'womens_images/womensdress8.png', name: 'Tank Dress', price: 'Rs.3,700' },
{ img: 'womens_images/womensdress9.png', name: 'Tank Dress', price: 'Rs.1,300' },
{ img: 'womens_images/womensdress10.png', name: 'Classic Black Dress', price: 'Rs.3,500' },
{ img: 'womens_images/womensdress11.png', name: 'Buttoned A-Line Dress', price: 'Rs.3,450' },
{ img: 'womens_images/womensdress12.png', name: 'Evening Gown', price: 'Rs.3,000' }

];

// Product data for tops
const tops = [
    // (Tops data)
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

const ethnic = [
    // (ethnic data)
    { img: 'womens_images/womensethnic1.png', name: 'Peach Floral A-line Kurta', price: 'Rs.3,040' },
{ img: 'womens_images/womensethnic2.png', name: 'Sage Floral Embroidered Set', price: 'Rs.4,000' },
{ img: 'womens_images/womensethnic3.png', name: 'Beige Embellished A-Line Kurta', price: 'Rs.2,490' },
{ img: 'womens_images/womensethnic4.png', name: 'White Embroidered A-Line Dupatta Set', price: 'Rs.1,500' },
{ img: 'womens_images/womensethnic5.png', name: 'Beige Floral Embroidered A-Line Cotton Kurta', price: 'Rs.3,290' },
{ img: 'womens_images/womensethnic6.png', name: 'Turquoise Embellished Dupatta Set', price: 'Rs.2,900' },
{ img: 'womens_images/womensethnic7.png', name: 'Pink Bandhani Floral Cotton A-Line Kurta', price: 'Rs.2,999' },
{ img: 'womens_images/womensethnic8.png', name: ' Off-White Embroidered Linen Kurta', price: 'Rs.2,700' },
{ img: 'womens_images/womensethnic9.png', name: 'Off-White Floral Embroidered Dupatta Set', price: 'Rs.2,300' },
{ img: 'womens_images/womensethnic10.png', name: 'Yellow Embroidered Kurta Set', price: 'Rs.3,500' },
{ img: 'womens_images/womensethnic11.png', name: 'Black Anar Printed A-Line Kurta', price: 'Rs.2,450' },
{ img: 'womens_images/womensethnic12.png', name: 'Black Printed Straight Kurta', price: 'Rs.1,000' }

];

const bottoms = [
    { img: 'womens_images/womensbottoms1.png', name: 'Straight Leg Jeans', price: 'Rs.2,400' },
    { img: 'womens_images/womensbottoms2.png', name: 'High-Waist Palazzo Jeans', price: 'Rs.3,000' },
    { img: 'womens_images/womensbottoms3.png', name: 'Seam Straight Leg Jeans', price: 'Rs.2,690' },
    { img: 'womens_images/womensbottoms4.png', name: 'Buttoned Denim A-Line Skirt', price: 'Rs.2,300' },
    { img: 'womens_images/womensbottoms5.png', name: 'Wide Leg Jeans', price: 'Rs.3,290' },
    { img: 'womens_images/womensbottoms6.png', name: 'Low-Waist Wide Leg Jeans', price: 'Rs.2,690' },
    { img: 'womens_images/womensbottoms7.png', name: 'Flare Leg Jeans', price: 'Rs.2,999' },
    { img: 'womens_images/womensbottoms8.png', name: 'Cut Out Skinny Jeans', price: 'Rs.3,700' },
    { img: 'womens_images/womensbottoms9.png', name: 'Darted Tapered Pants', price: 'Rs.3,300' },
    { img: 'womens_images/womensbottoms10.png', name: 'Pocket Straight Leg Pants', price: 'Rs.2,500' },
    { img: 'womens_images/womensbottoms11.png', name: 'Straight Leg Pants', price: 'Rs.2,450' },
    { img: 'womens_images/womensbottoms12.png', name: 'Patchwork Wide Leg Pants', price: 'Rs.3,000' }
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
     if (path.includes('womens.html')) {
        displayProducts(collection);
    }else if (path.includes('womens_dresses.html')) {
        displayProducts(dresses);
    } else if (path.includes('womens_tops.html')) {
        displayProducts(tops);
    } else if (path.includes('womens_ethnic.html')) {
        displayProducts(ethnic);
    } else if (path.includes('womens_bottoms.html')) {
        displayProducts(bottoms);
    }
});
