// 

//     // (T-Shirts data)
// const tshirts = [
//    { img: 'tt1.webp', name: 'White Printed Shirt', price: 'Rs.3,000' },
//                 { img: 'tt2.webp', name: 'Silk Back Shirt', price: 'Rs.3,000' },
//                 { img: 'tt3.webp', name: 'Classic Plain White Shirt', price: 'Rs.1,490' },
//                 { img: 'tt4.jpeg', name: 'Light Blue Denim Shirt', price: 'Rs.3,500' },
//                 { img: 'tt5.webp', name: 'Dark Blue Denim Shirt', price: 'Rs.3,290' },
//                 { img: 'tt6.webp', name: 'Light Green Plain Shirt', price: 'Rs.2,600' },
//                 { img: 'tt7.jpeg', name: 'Dark Blue Printed Shirt', price: 'Rs.2,999' },
//                 { img: 'tt8.webp', name: 'Multicolour Shirt', price: 'Rs.3,700' },
//                 { img: 'tt9.jpeg', name: 'Pink Plain Shirt', price: 'Rs.1,300' },
//                 { img: 'tt10.jpg', name: 'Classic Pattern Shirt', price: 'Rs.3,500' },
//                 { img: 'tt11.jpeg', name: 'Green Printed Shirt', price: 'Rs.3,450' },
//                 { img: 'tt12.jpeg', name: 'Black Printed Shirt', price: 'Rs.3,000' }
// ];

//     // (Shirts data)
// const shirts = [
//     { img: 'ss1.avif', name: 'White Printed Shirt', price: 'Rs.3,000' },
//                 { img: 'ss2.jpg', name: 'Silk Back Shirt', price: 'Rs.3,000' },
//                 { img: 'ss3.jpg', name: 'Classic Plain White Shirt', price: 'Rs.1,490' },
//                 { img: 'ss4.webp', name: 'Light Blue Denim Shirt', price: 'Rs.3,500' },
//                 { img: 'ss5.webp', name: 'Dark Blue Denim Shirt', price: 'Rs.3,290' },
//                 { img: 'ss6.jpg', name: 'Light Green Plain Shirt', price: 'Rs.2,600' },
//                 { img: 'ss7.jpg', name: 'Dark Blue Printed Shirt', price: 'Rs.2,999' },
//                 { img: 'ss8.jpeg', name: 'Multicolour Shirt', price: 'Rs.3,700' },
//                 { img: 'ss9.png', name: 'Pink Plain Shirt', price: 'Rs.1,300' },
//                 { img: 'ss10.jpg', name: 'Classic Pattern Shirt', price: 'Rs.3,500' },
//                 { img: 'ss11.jpeg', name: 'Green Printed Shirt', price: 'Rs.3,450' },
//                 { img: 'ss12.jpg', name: 'Black Printed Shirt', price: 'Rs.3,000' }
// ];

//  // (Shirts data)
// const suitsets = [
//     { img: 'sss1.jpeg', name: '', price: 'Rs.' },
//                 { img: 'sss2.avif', name: '', price: 'Rs.3,000' },
//                 { img: 'sss3.webp', name: '', price: 'Rs.1,490' },
//                 { img: 'sss4.avif', name: 'Light Blue Denim Shirt', price: 'Rs.3,500' },
//                 { img: 'sss5.avif', name: 'Dark Blue Denim Shirt', price: 'Rs.3,290' },
//                 { img: 'sss6.webp', name: 'Light Green Plain Shirt', price: 'Rs.2,600' },
//                 { img: 'sss7.jpg', name: 'Dark Blue Printed Shirt', price: 'Rs.2,999' },
//                 { img: 'sss8.jpg', name: 'Multicolour Shirt', price: 'Rs.3,700' },
//                 { img: 'sss9.avif', name: 'Pink Plain Shirt', price: 'Rs.1,300' },
// ];

// // Function to display products
// function displayProducts(products) {
//     const productGrid = document.getElementById('productGrid');
//     products.forEach(product => {
//         const productItem = document.createElement('div');
//         productItem.classList.add('product-item');
//         productItem.innerHTML = `
//             <img src="${product.img}" alt="${product.name}">
//             <h3>${product.name}</h3>
//             <p>${product.price}</p>
//         `;
//         productItem.onclick = () => viewProduct(product.img, product.name, product.price);
//         productGrid.appendChild(productItem);
//     });
// }

// // Function to view detailed product
// function viewProduct(image, name, price, description) {
//     const product = { image, name, price, description };
//     localStorage.setItem('selectedProduct', JSON.stringify(product));
//     window.location.href = 'menproduct.html';
// }

// // Check which page is being loaded
// document.addEventListener('DOMContentLoaded', () => {
//     const path = window.location.pathname; // Get the current page path
//    if (path.includes('mens.html')) {
//         displayProducts(mens);
//    }else if (path.includes('kurtas.html')) {
//         displayProducts(kurtas);
//     } else if (path.includes('tshirts.html')) {
//         displayProducts(tshirts);
//     } else if (path.includes('shirts.html')) {
//         displayProducts(shirts);
//     } else if (path.includes('suitsets.html')) {
//         displayProducts(suitsets);
//     }
// });

// // Open size chart modal
// const sizeChartBtn = document.getElementById("sizeChartBtn");
// const sizeChartModal = document.getElementById("sizeChartModal");
// const closeModal = document.getElementById("closeModal");

// sizeChartBtn.onclick = function () {
//     sizeChartModal.style.display = "block";
// }

// // Close size chart modal
// closeModal.onclick = function () {
//     sizeChartModal.style.display = "none";
// }

// // Close modal if user clicks outside of the modal
// window.onclick = function (event) {
//     if (event.target == sizeChartModal) {
//         sizeChartModal.style.display = "none";
//     }
// }


// function nextImage() {
//     currentIndex = (currentIndex + 1) % images.length;
//     showImage();
// }

// function prevImage() {
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     showImage();
// }

// function showImage() {
//     const image1 = document.getElementById('slideshow-image');
//     const image2 = document.getElementById('slideshow-image-2');

//     if (currentIndex === 0) {
//         image1.style.display = 'block';
//         image2.style.display = 'none';
//     } else {
//         image1.style.display = 'none';
//         image2.style.display = 'block';
//     }
// }

// // Initialize cart
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// // Function to add a product to the cart
// function addToCart() {
//     const productName = document.querySelector('.product-info h1').innerText; // Get the product name
//     const productPrice = parseFloat(document.querySelector('.price-discounted').innerText.replace('Rs.', '').replace(',', '')); // Get the product price
//     const size = document.getElementById('size').value; // Get selected size
//     const productImage = document.querySelector('.product-image img').src; // Get the current image src

//     if (!size) {
//         alert('Please select a size.');
//         return;
//     }

//     // Check if product already exists in cart
//     const existingProduct = cart.find(item => item.name === productName && item.size === size);

//     if (existingProduct) {
//         existingProduct.quantity += 1;
//     } else {
//         // Add new product to the cart
//         cart.push({ name: productName, price: productPrice, size: size, quantity: 1, image: productImage });
//     }

//     // Update localStorage with the new cart
//     localStorage.setItem('cart', JSON.stringify(cart));

//     alert(`${productName} (Size: ${size}) has been added to your cart.`);
// }

// // Function to go to the checkout page
// function openCheckout() {
//     if (cart.length === 0) {
//         alert('Your cart is empty. Add items before proceeding to checkout.');
//     } else {
//         window.location.href = 'cart1.html'; // Redirect to cart page
//     }
// }

// // Add event listeners to buttons
// document.querySelector('#addToCartButton').addEventListener('click', addToCart);
// document.querySelector('#goToCartButton').addEventListener('click', openCheckout);


// // Function to navigate to the cart page
// function openCheckout() {
//     if (cart.length === 0) {
//         alert('Your cart is empty. Add items before proceeding to checkout.');
//         return;
//     }
//     location.href = 'cart1.html';
// }

// function shopNow() {
//     document.getElementById('payment-modal').classList.remove('hidden');
// }

// function confirmOrder() {
//     const address = document.getElementById('address').value;
//     const city = document.getElementById('city').value;
//     const state = document.getElementById('state').value;
//     const zip = document.getElementById('zip').value;
//     const paymentMethod = document.getElementById('payment-method').value;

//     if (!address || !city || !state || !zip) {
//         alert('Please fill in all address fields.');
//         return;
//     }

//     // Show confirmation message
//     const confirmationMessage = `Thank you for your order! ${cart.length} item(s) will be shipped to ${address}, ${city}, ${state} - ${zip}. Payment method: ${paymentMethod}.`;
//     document.getElementById('confirmation-message').innerText = confirmationMessage;

//     // Clear the cart
//     localStorage.removeItem('cart');
//     cart = [];
//     closePaymentModal();
//     document.getElementById('confirmation-modal').classList.remove('hidden');
// }

// function closePaymentModal() {
//     document.getElementById('payment-modal').classList.add('hidden');
// }

// function closeConfirmation() {
//     document.getElementById('confirmation-modal').classList.add('hidden');
// }
   
  
