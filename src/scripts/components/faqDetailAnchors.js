export function faqDetailAnchors() {
    const faqRoot = document.querySelector('.faq-detail');
    if (!faqRoot) return;

    const getHeaderHeight = () => {
        const headerEl = document.getElementById('header') || document.querySelector('.header');
        if (!headerEl) return 0;
        return Math.ceil(headerEl.getBoundingClientRect().height);
    };

    const scrollToTarget = (target) => {
        if (!target) return;
        const headerHeight = getHeaderHeight();
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
    };

    const handleClick = (event) => {
        const link = event.currentTarget;
        const hash = link.getAttribute('href');
        if (!hash || !hash.startsWith('#')) return;
        const target = document.querySelector(hash);
        if (!target) return;
        event.preventDefault();
        history.pushState(null, '', hash);
        scrollToTarget(target);
    };

    faqRoot.querySelectorAll('.faq-detail__nav-link[href^="#"]').forEach((link) => {
        link.addEventListener('click', handleClick);
    });

    const initialHash = window.location.hash;
    if (initialHash) {
        const target = document.querySelector(initialHash);
        if (target && faqRoot.contains(target)) {
            setTimeout(() => scrollToTarget(target), 0);
        }
    }
}
