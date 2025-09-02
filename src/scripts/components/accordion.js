export function accordion() {
    document.querySelectorAll('.accordion__trigger').forEach(button => {
        button.addEventListener('click', () => {
            const parentItem = button.closest('.accordion__item');
            const isActive = parentItem.classList.contains('_active');

            document.querySelectorAll('.accordion__item').forEach(item => {
                item.classList.remove('_active');
            });

            if (!isActive) {
                parentItem.classList.add('_active');
            }
        });
    });
}
