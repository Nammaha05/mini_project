// Function to change the image, product name, price, and description when a thumbnail is clicked
function changeProduct(imageSrc, productName, priceOriginal, priceDiscounted, descriptionId) {
    document.getElementById("productImage").src = imageSrc;
    document.getElementById("productName").textContent = productName;
    document.getElementById("priceOriginal").textContent = priceOriginal;
    document.getElementById("priceDiscounted").textContent = priceDiscounted;

    // Hide all descriptions
    const descriptions = document.querySelectorAll(".description-content");
    descriptions.forEach(desc => desc.style.display = "none");

    // Show the selected description
    document.getElementById(descriptionId).style.display = "block";
}

// Open size chart modal
const sizeChartBtn = document.getElementById("sizeChartBtn");
const sizeChartModal = document.getElementById("sizeChartModal");
const closeModal = document.getElementById("closeModal");

sizeChartBtn.onclick = function () {
    sizeChartModal.style.display = "block";
}

// Close size chart modal
closeModal.onclick = function () {
    sizeChartModal.style.display = "none";
}

// Close modal if user clicks outside of the modal
window.onclick = function (event) {
    if (event.target == sizeChartModal) {
        sizeChartModal.style.display = "none";
    }
}
