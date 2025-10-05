// Mobile navigation functionality
export function toggleNavbar() {
    document.addEventListener('DOMContentLoaded', () => {
            const navbarToggle = document.getElementById('navbarToggle');
            const navbarMenu = document.getElementById('navbarMenu');
            
            navbarToggle.addEventListener('click', () => {
                navbarMenu.classList.toggle('active');
                
                // Toggle hamburger animation
                navbarToggle.classList.toggle('active');
                if (navbarToggle.classList.contains('active')) {
                    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
                } else {
                    document.body.style.overflow = ''; // Restore scrolling when menu is closed
                }
            });

            // Close mobile menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navbarToggle.contains(e.target) && !navbarMenu.contains(e.target)) {
                    navbarMenu.classList.remove('active');
                    navbarToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        

        // Close mobile menu when window is resized above mobile breakpoint
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navbarMenu.classList.remove('active');
                navbarToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}