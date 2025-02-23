// Add any interactive JavaScript functionality here if needed
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-bar ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.backgroundColor = 'white';
            link.style.color = '#4CAF50';
        });

        link.addEventListener('mouseleave', () => {
            link.style.backgroundColor = '';
            link.style.color = '#333';
        });
    });
});
// Image Slider Functionality
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto-slide every 5 seconds
    setInterval(nextSlide, 5000);
});
// Add interactivity to the "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;

            alert(`Added to Cart: ${productName} - ${productPrice}`);
            // You can replace this with actual cart functionality
        });
    });
});