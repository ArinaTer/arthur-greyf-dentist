export function equalizeFinancingRows() {
    const cards = document.querySelectorAll('.financing-programs__card-grid');
    if (!cards.length) return;

    cards.forEach(card => {
        card.querySelectorAll('.financing-programs__card-row').forEach(row => {
            row.style.height = 'auto';
        });
    });

    const maxRows = Math.max(...Array.from(cards).map(card => card.querySelectorAll('.financing-programs__card-row').length));

    for (let i = 0; i < maxRows; i++) {
        let maxHeight = 0;

        cards.forEach(card => {
            const row = card.querySelectorAll('.financing-programs__card-row')[i];
            if (row) {
                maxHeight = Math.max(maxHeight, row.offsetHeight);
            }
        });

        cards.forEach(card => {
            const row = card.querySelectorAll('.financing-programs__card-row')[i];
            if (row) {
                row.style.height = maxHeight + 'px';
            }
        });
    }
}
