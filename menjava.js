document.querySelectorAll('.size-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('selected-size'));
        button.classList.add('selected-size');
    });
});
