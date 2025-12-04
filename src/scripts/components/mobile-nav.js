export function mobileNav() {
    const root = document.getElementById('mobileNav');
    if (!root) return;

    const overlay = root.querySelector('.mobile-nav__overlay');
    const contentSubmenu = root.querySelector('.mobile-nav__content--submenu');
    const closeButtons = root.querySelectorAll('.mobile-nav__close');
    const backButtons = root.querySelectorAll('.mobile-nav__back');
    const mainMenu = root.querySelector('#mobileNavMain');
    const submenus = root.querySelectorAll('.mobile-nav__menu--submenu');


    if (!contentSubmenu || !mainMenu) return;

    const isMobile = () => window.matchMedia('(max-width: 1024px)').matches;

    const openRoot = () => {
        if (!isMobile()) return;
        root.classList.add('show');
        document.documentElement.classList.add('overflow-hidden');
        goToMain();
    };

    const closeRoot = () => {
        root.classList.remove('show');
        document.documentElement.classList.remove('overflow-hidden');
        goToMain();
    };

    const goToMain = () => {
        submenus.forEach(m => m.classList.remove('_active'));
        mainMenu.classList.add('_active');
        contentSubmenu.classList.remove('_active');
        contentSubmenu.classList.add('_isactive');
    };

    const openSubmenuById = (submenuId) => {
        const submenu = root.querySelector(`#${submenuId}`);
        if (!submenu) return;

        mainMenu.classList.remove('_active');

        contentSubmenu.classList.add('_active');
        contentSubmenu.classList.remove('_isactive');

        submenus.forEach(m => m.classList.remove('_active'));
        submenu.classList.add('_active');
    };

    if (overlay) overlay.addEventListener('click', closeRoot);

    closeButtons.forEach(btn => btn.addEventListener('click', closeRoot));
    backButtons.forEach(btn => btn.addEventListener('click', goToMain));

    mainMenu.addEventListener('click', (event) => {
        const item = event.target.closest('.mobile-nav__item');
        if (!item || !mainMenu.contains(item)) return;
        const submenuId = item.dataset.submenu;
        if (submenuId) {
            event.preventDefault();
            openSubmenuById(submenuId);
        }
    });


    return { open: openRoot, close: closeRoot, goToMain };
}
