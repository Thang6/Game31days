let currentPage = 1;
const totalPages = document.querySelectorAll('.page').length;

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
});

document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
    }
});

function updatePagination() {
    document.querySelectorAll('.page').forEach((page) => {
        if (parseInt(page.getAttribute('data-page')) === currentPage) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });

    document.getElementById('pageInfo').textContent = `${currentPage} / ${totalPages}`;

    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === totalPages;
}

updatePagination();
