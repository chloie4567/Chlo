document.addEventListener('DOMContentLoaded', function() {

    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        navbar.classList.toggle('sticky', window.scrollY > 0);
    });

    const changeColorBtn = document.getElementById('change-color-btn');
    const root = document.documentElement;

    const colors = [
        '#ff6b9d',
        '#00bfa5',
        '#6c5ce7',
        '#fdcb6e',
        '#e17055'
    ];
    let currentColorIndex = 0;

    changeColorBtn.addEventListener('click', function() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        root.style.setProperty('--primary-color', colors[currentColorIndex]);
        
        this.textContent = 'Theme Changed! 🎨';
        setTimeout(() => {
            this.textContent = 'Click to Change Theme!';
        }, 1500);
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        alert('Thank you for your message! I will get back to you soon. 😊');
        contactForm.reset();
    });

});
