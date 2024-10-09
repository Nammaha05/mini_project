document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/2/12e4c03NH_GAJRA00003410_1.jpg?rnd=20200526195200&tr=w-256', name: 'Pink Embroidered Top,Skirt And Overlay ', price: 'Rs. 799' },
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/d/1d89b07LIKL018_1.jpg?rnd=20200526195200&tr=w-256', name: 'Black Printed Tiered Lehenga Choli with Dupatta ', price: 'Rs. 1,299' },
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/d/8de6359Choli_ALC080_1.jpg?rnd=20200526195200&tr=w-256', name: 'Cotton Printed Embellished Blue Free Stitched Navratri Lehenga & Blouse Fabric ', price: 'Rs. 1,299.00' },
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/6/b6a691fChitra-Multi_1.jpg?rnd=20200526195200&tr=w-256', name: 'Chinoon Printed Semi Stitched Lehenga & Unstitched Blouse with Dupatta - Yellow ', price: 'Rs. 799.00' },
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/9/e9318d9TGAJRA00007566_3.jpg?rnd=20200526195200&tr=w-256', name: ' Yellow Printed Pallav stitched Blouse with Cowl Skirt (Set of 2)', price: 'Rs. 799.00' },
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/6/c6fb460AAH-5055_1.jpg?rnd=20200526195200&tr=w-256', name: 'White Shirt And Printed Bandhani Skirt (Set of 2)', price: 'Rs. 999.00' },
        
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