document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        if (details.style.display === 'none') {
            details.style.display = 'block';
            button.textContent = 'Mostrar menos';
        } else {
            details.style.display = 'none';
            button.textContent = 'Mostrar mais';
        }
    });
});