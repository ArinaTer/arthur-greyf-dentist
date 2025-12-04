export function submenuController() {
    const root = document.querySelector('.submenu');
    if (!root) return;

    const toggle = root.querySelector('.submenu__toggle-btn');
    const overlay = root.querySelector('.submenu__overlay');
    const submenuMobile = root.querySelector('#submenuMobile');
    const submenuDropdown = root.querySelectorAll('.submenu__dropdown');

    const isMobile = () => window.matchMedia('(max-width: 576.98px)').matches;
    isMobile() ? root.classList.add('_close') : root.classList.remove('_close');

    const open = () => {
        if (!isMobile()) return;
        root.classList.remove('_close');
        root.classList.add('_open');
        submenuDropdown.forEach(d => d.classList.add('submenu__dropdown--open'));
        toggle?.setAttribute('data-expanded', 'true');
        document.body.classList.add('hidden');
    };

    const close = () => {
        const anyOpen = [...submenuDropdown].some(d => d.classList.contains('submenu__dropdown--open'));
        if (!anyOpen) {
            root.classList.remove('_open');
            root.classList.add('_close');
            toggle?.setAttribute('data-expanded', 'false');
            document.body.classList.remove('hidden');
        }
    };

    const toggleMenu = () => {
        if (!isMobile()) return;
        if (root.classList.contains('_open')) {
            submenuDropdown.forEach(d => d.classList.remove('submenu__dropdown--open'));
            close();
        } else {
            open();
        }
    };

    toggle?.addEventListener('click', toggleMenu);
    overlay?.addEventListener('click', () => {
        submenuDropdown.forEach(d => d.classList.remove('submenu__dropdown--open'));
        close();
    });

    submenuDropdown.forEach(d => {
        d.addEventListener('click', (e) => {
            if (e.target.closest('.submenu__list')) {
                return;
            }

            if (d.classList.contains('submenu__dropdown--open')) {
                d.classList.remove('submenu__dropdown--open');
                close();
            } else {
                d.classList.add('submenu__dropdown--open');
                root.classList.remove('_close');
                root.classList.add('_open');
            }
        });
    });

    window.addEventListener('resize', () => {
        if (!isMobile()) {
            submenuDropdown.forEach(d => d.classList.remove('submenu__dropdown--open'));
            root.classList.remove('_open');
            root.classList.add('_close');
            document.body.classList.remove('hidden');
        }
    });

    submenuMobile?.addEventListener('click', (e) => {
        const link = e.target.closest('.submenu__link');
        if (link && submenuMobile.contains(link)) {
            submenuDropdown.forEach(d => d.classList.remove('submenu__dropdown--open'));
            close();
        }
    });

    return { open, close };
}
