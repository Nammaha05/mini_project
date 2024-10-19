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
