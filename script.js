
//he product grid sathi ahee


const collection = [
    { img: 'womens_images/womens1.png', name: 'Elegant Dress', price: 3000 },
    { img: 'womens_images/womens2.png', name: 'Chic Blouse', price: 1700 },
    { img: 'womens_images/womens3.png', name: 'Black Square Neck Top', price: 999 },
    { img: 'womens_images/womens4.png', name: 'Ribbed Red Top', price: 1700 },
    { img: 'womens_images/womens5.png', name: 'Grey Square Neck Top', price: 999 },
    { img: 'womens_images/womens6.png', name: 'Wide Cargo Trousers', price: 2999 },
    { img: 'womens_images/womens7.png', name: 'Coated Jacket', price: 3700 },
    { img: 'womens_images/womens8.png', name: 'Cotton Shirt', price: 1300 },
    { img: 'womens_images/womens9.png', name: 'Stylish Skirt', price: 2500 }
];




// Product data for dresses
const dresses = [
    // (Dresses data)
    { img: 'womens_images/womensdress1.png', name: 'Knotted Midi Knit Dress', price: 3000 },
{ img: 'womens_images/womensdress2.png', name: 'Open Back Mesh Cami Dress', price: 3000 },
{ img: 'womens_images/womensdress3.png', name: 'Asymmetric Tank Dress', price: 1490 },
{ img: 'womens_images/womensdress4.png', name: 'Floral Print Dress', price: 3500 },
{ img: 'womens_images/womensdress5.png', name: 'Asymmetric Cami Dress', price: 3290 },
{ img: 'womens_images/womensdress6.png', name: 'Tied Tank Dress', price: 2600 },
{ img: 'womens_images/womensdress7.png', name: 'Open Back Floral Dress', price: 2999 },
{ img: 'womens_images/womensdress8.png', name: 'Tank Dress', price: 3700 },
{ img: 'womens_images/womensdress9.png', name: 'Tank Dress', price: 1300 },
{ img: 'womens_images/womensdress10.png', name: 'Classic Black Dress', price: 3500 },
{ img: 'womens_images/womensdress11.png', name: 'Buttoned A-Line Dress', price: 3450 },
{ img: 'womens_images/womensdress12.png', name: 'Evening Gown', price: 3000 }

];

// Product data for tops
const tops = [
    // (Tops data)
    { img: 'womens_images/womenstop1.jpg', name: 'Scoop-neck Microfibre Top', price:  799 },
        { img: 'womens_images/womenstop2.png', name: 'Oversized printed T-shirt', price:  1299 },
        { img: 'womens_images/womenstop3.webp', name: 'Fine-knit polo shirt', price:  1299.00 },
        { img: 'womens_images/womenstop4.webp', name: 'Overlock-detail ribbed top', price:  799.00 },
        { img: 'womens_images/womenstop5.png', name: 'Oversized T-shirt', price:  799.00 },
        { img: 'womens_images/womenstop6.png', name: 'Overlock-detail smocked top', price:  999.00 },
        { img: 'womens_images/womenstop7.png', name: 'Dusty purple chiffon top', price:  1499.00 },
        { img: 'womens_images/womenstop8.png', name: 'Red ribbed T-shirt', price:  699.00 },
        { img: 'womens_images/womenstop9.png', name: 'Broderie anglaise blouse', price:  1899.00 },
        { img: 'womens_images/womenstop10.png', name: 'Textured-weave shirt', price:  1899.00 },
        { img: 'womens_images/womenstop11.png', name: 'Viscose-blend shirt', price:  1899.00 },
        { img: 'womens_images/womenstop12.png', name: 'Short vest top', price:  699.00 }
];

const ethnic = [
    // (ethnic data)
    { img: 'womens_images/womensethnic1.png', name: 'Peach Floral A-line Kurta', price: 3040 },
{ img: 'womens_images/womensethnic2.png', name: 'Sage Floral Embroidered Set', price: 4000 },
{ img: 'womens_images/womensethnic3.png', name: 'Beige Embellished A-Line Kurta', price: 2490 },
{ img: 'womens_images/womensethnic4.png', name: 'White Embroidered A-Line Dupatta Set', price: 1500 },
{ img: 'womens_images/womensethnic5.png', name: 'Beige Floral Embroidered A-Line Cotton Kurta', price: 3290 },
{ img: 'womens_images/womensethnic6.png', name: 'Turquoise Embellished Dupatta Set', price: 2900 },
{ img: 'womens_images/womensethnic7.png', name: 'Pink Bandhani Floral Cotton A-Line Kurta', price: 2999 },
{ img: 'womens_images/womensethnic8.png', name: ' Off-White Embroidered Linen Kurta', price: 2700 },
{ img: 'womens_images/womensethnic9.png', name: 'Off-White Floral Embroidered Dupatta Set', price: 2300 },
{ img: 'womens_images/womensethnic10.png', name: 'Yellow Embroidered Kurta Set', price: 3500 },
{ img: 'womens_images/womensethnic11.png', name: 'Black Anar Printed A-Line Kurta', price: 2450 },
{ img: 'womens_images/womensethnic12.png', name: 'Black Printed Straight Kurta', price: 1000 }

];

const bottoms = [
    { img: 'womens_images/womensbottoms1.png', name: 'Straight Leg Jeans', price: 2400 },
    { img: 'womens_images/womensbottoms2.png', name: 'High-Waist Palazzo Jeans', price: 3000 },
    { img: 'womens_images/womensbottoms3.png', name: 'Seam Straight Leg Jeans', price: 2690 },
    { img: 'womens_images/womensbottoms4.png', name: 'Buttoned Denim A-Line Skirt', price: 2300 },
    { img: 'womens_images/womensbottoms5.png', name: 'Wide Leg Jeans', price: 3290 },
    { img: 'womens_images/womensbottoms6.png', name: 'Low-Waist Wide Leg Jeans', price: 2690 },
    { img: 'womens_images/womensbottoms7.png', name: 'Flare Leg Jeans', price: 2999 },
    { img: 'womens_images/womensbottoms8.png', name: 'Cut Out Skinny Jeans', price: 3700 },
    { img: 'womens_images/womensbottoms9.png', name: 'Darted Tapered Pants', price: 3300 },
    { img: 'womens_images/womensbottoms10.png', name: 'Pocket Straight Leg Pants', price: 2500 },
    { img: 'womens_images/womensbottoms11.png', name: 'Straight Leg Pants', price: 2450 },
    { img: 'womens_images/womensbottoms12.png', name: 'Patchwork Wide Leg Pants', price: 3000 }
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
            <p>Rs. ${product.price}</p>
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
