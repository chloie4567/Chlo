/* // Wait for the entire page to load before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        // Change icon between bars and times
        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when a link is clicked
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // 2. Sticky Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        navbar.classList.toggle('sticky', window.scrollY > 0);
    });

    // 3. Theme Color Change (Click the button)
    const changeColorBtn = document.getElementById('change-color-btn');
    const root = document.documentElement; // Targets the :root in CSS

    // Array of fun primary colors to cycle through
    const colors = [
        '#ff6b9d', // Pink (default)
        '#00bfa5', // Teal
        '#6c5ce7', // Purple
        '#fdcb6e', // Yellow
        '#e17055'  // Coral
    ];
    let currentColorIndex = 0;

    changeColorBtn.addEventListener('click', function() {
        // Move to next color, loop back to start if at the end
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        // Update the primary color variable in CSS
        root.style.setProperty('--primary-color', colors[currentColorIndex]);
        
        // Optional: Show a small feedback message (you can remove this if you want)
        this.textContent = 'Theme Changed! 🎨';
        setTimeout(() => {
            this.textContent = 'Click to Change Theme!';
        }, 1500);
    });

    // 4. Dark/Light Theme Toggle (Bonus feature!)
    // You can add a button for this if you want, or uncomment below to add it automatically
    /*
    const themeToggle = document.createElement('button');
    themeToggle.className = 'btn theme-toggle';
    themeToggle.innerHTML = '<i class="fa fa-moon-o"></i>';
    themeToggle.style.position = 'fixed';
    themeToggle.style.bottom = '30px';
    themeToggle.style.right = '30px';
    themeToggle.style.zIndex = '999';
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const icon = themeToggle.querySelector('i');
        if(document.body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon-o');
            icon.classList.add('fa-sun-o');
        } else {
            icon.classList.remove('fa-sun-o');
            icon.classList.add('fa-moon-o');
        }
    });
    */

    // 5. Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission

        // Show a success message (you can customize this)
        alert('Thank you for your message! I will get back to you soon. 😊');
        contactForm.reset(); // Clear the form fields
    });

    // 6. Smooth Scroll Animation for Skill Bars (Optional: if you add skills later)
    // This activates the progress bar animation when the section is scrolled into view
    const skillBars = document.querySelectorAll('.progress-line span');
    function checkSkillBars() {
        const triggerBottom = window.innerHeight * 0.8;
        skillBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            if(barTop < triggerBottom) {
                bar.style.width = bar.style.width; // Re-apply the width to trigger animation
            }
        });
    }
    window.addEventListener('scroll', checkSkillBars);
    checkSkillBars(); // Run once on load

});
