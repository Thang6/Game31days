document.addEventListener('DOMContentLoaded', () => {
    const itemsPerPage = 6;
    const gridContainer = document.getElementById('game-grid');
    const gridItems = Array.from(gridContainer.getElementsByClassName('grid-item'));
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const pageInfo = document.getElementById('page-info');

    let currentPage = 1;
    const totalPages = Math.ceil(gridItems.length / itemsPerPage);

    function showPage(page) {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        gridItems.forEach((item, index) => {
            item.style.display = index >= start && index < end ? 'block' : 'none';
        });

        prevBtn.disabled = page === 1;
        nextBtn.disabled = page === totalPages;

        pageInfo.textContent = `${page} / ${totalPages}`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Hiển thị trang đầu tiên
    showPage(currentPage);
});
