let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
<<<<<<< HEAD
    let dots = document.getElementsByClassName("dot");

    // Ẩn tất cả các ảnh
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Loại bỏ hiệu ứng active của các chấm
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    // Tăng chỉ số slideIndex
    slideIndex++;

    // Nếu slideIndex lớn hơn số lượng ảnh, đặt slideIndex về 1 (vòng lặp)
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Hiển thị ảnh và chấm tương ứng
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    // Thay đổi ảnh mỗi 2 giây
    setTimeout(showSlides, 2000);
}

// Hàm scroll đến đầu trang với hiệu ứng smooth
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
=======
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
>>>>>>> dc126ef (code new)
