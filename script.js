document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll to top button functionality
    const scrollTopButton = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Book table button functionality
    const bookTableButton = document.querySelector('.book-table');
    if (bookTableButton) {
        bookTableButton.addEventListener('click', () => {
            alert('Функция бронирования столика будет доступна в ближайшее время!');
        });
    }

    // Add animation to menu items on scroll
    const menuItems = document.querySelectorAll('.menu-item');

    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    menuItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });

    // Burger menu
    const burger = document.querySelector('.burger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavClose = document.querySelector('.mobile-nav-close');

    burger.addEventListener('click', function() {
        burger.classList.toggle('open');
        if (mobileNav) {
            mobileNav.classList.toggle('open');
        }
    });

    // Закрытие меню по клику на ссылку
    if (mobileNav) {
        document.querySelectorAll('.mobile-nav a').forEach(link => {
            link.addEventListener('click', function() {
                burger.classList.remove('open');
                mobileNav.classList.remove('open');
            });
        });
    }

    // Закрытие меню по кнопке-крестику
    if (mobileNavClose) {
        mobileNavClose.addEventListener('click', function() {
            burger.classList.remove('open');
            mobileNav.classList.remove('open');
        });
    }
});
