export function header(navController) {
    const burger = document.querySelector('.header__burger');
    const mobileNav = document.getElementById('mobileNav');
    if (!burger || !mobileNav) return;

    const isMobile = () => window.matchMedia('(max-width: 1024px)').matches;

    const openMobileNav = () => {
        if (!isMobile()) return;
        if (navController && typeof navController.open === 'function') {
            navController.open();
            return;
        }
        mobileNav.classList.add('show');
        document.documentElement.classList.add('overflow-hidden');
    };

    const closeMobileNav = () => {
        if (navController && typeof navController.close === 'function') {
            navController.close();
            return;
        }
        mobileNav.classList.remove('show');
        document.documentElement.classList.remove('overflow-hidden');
    };

    burger.addEventListener('click', openMobileNav);

    mobileNav.querySelectorAll('[data-mobile-menu-close]').forEach(btn => {
        btn.addEventListener('click', closeMobileNav);
    });

}
