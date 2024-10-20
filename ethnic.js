document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/2/12e4c03NH_GAJRA00003410_1.jpg?rnd=20200526195200&tr=w-256', name: 'Pink Embroidered Top,Skirt And Overlay ', price: 700 },
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/d/1d89b07LIKL018_1.jpg?rnd=20200526195200&tr=w-256', name: 'Black Printed Tiered Lehenga Choli with Dupatta ', price: 2000 },
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/d/8de6359Choli_ALC080_1.jpg?rnd=20200526195200&tr=w-256', name: 'Cotton Printed Embellished Blue Free Stitched Navratri Lehenga & Blouse Fabric ', price: 1000 },
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/6/b6a691fChitra-Multi_1.jpg?rnd=20200526195200&tr=w-256', name: 'Chinoon Printed Semi Stitched Lehenga & Unstitched Blouse with Dupatta - Yellow ', price: 1500 },
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/9/e9318d9TGAJRA00007566_3.jpg?rnd=20200526195200&tr=w-256', name: ' Yellow Printed Pallav stitched Blouse with Cowl Skirt (Set of 2)', price: 1000 },
        { img: 'https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/6/c6fb460AAH-5055_1.jpg?rnd=20200526195200&tr=w-256', name: 'White Shirt And Printed Bandhani Skirt (Set of 2)', price: 900 },
        
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
