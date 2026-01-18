// Simple JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    const sneakerCards = document.querySelectorAll('.sneaker-card');

    sneakerCards.forEach(card => {
        card.addEventListener('click', function() {
            alert('You clicked on ' + this.querySelector('h3').textContent);
        });
    });
});
