// Đợi cho toàn bộ nội dung trang web được tải xong trước khi chạy script
document.addEventListener("DOMContentLoaded", function () {
  // --- Script thiết lập chiều cao cho viewport ---
  function setViewportHeight() {
    document.documentElement.style.setProperty(
      "--vh",
      window.innerHeight * 0.01 + "px"
    );
  }
  window.addEventListener("resize", setViewportHeight);
  // Gọi hàm khi trang tải lần đầu
  setViewportHeight();

  // --- Script hiệu ứng cuộn trang (scroll) ---
  const topSticky = document.getElementById("topSticky");
  const bg1 = document.querySelector(".bg-image.bg1");
  const bg2 = document.querySelector(".bg-image.bg2");

  window.addEventListener("scroll", () => {
    if (topSticky) {
      if (window.scrollY > 300) {
        topSticky.style.transition = "opacity 0.5s ease";
        topSticky.style.opacity = "0";
      } else {
        topSticky.style.transition = "opacity 0.5s ease";
        topSticky.style.opacity = "1";
      }
    }

    const scrollStart = 0;
    const scrollEnd = window.innerHeight * 0.7;
    const currentScroll = window.scrollY;
    const progress = Math.min(
      Math.max((currentScroll - scrollStart) / (scrollEnd - scrollStart), 0),
      1
    );
    const opacity = 1 - 1.95 * progress; // from 1 to 0.05

    // Set opacity for background images
    if (bg1) bg1.style.opacity = opacity.toFixed(3);
    if (bg2) bg2.style.opacity = opacity.toFixed(3);

    // Parallax scroll effect for background images
    const parallaxScroll = window.scrollY * -0.35;
    if (bg1) bg1.style.transform = `translateY(${parallaxScroll}px)`;
    if (bg2) bg2.style.transform = `translateY(${parallaxScroll}px)`;
  });

  // --- Script cho QR Code Lightbox ---
  const qrLink = document.getElementById("qrLink");
  const lightbox = document.getElementById("lightbox");
  const closeLightbox = document.getElementById("closeLightbox");

  if (qrLink && lightbox && closeLightbox) {
    qrLink.addEventListener("click", (e) => {
      e.preventDefault();
      lightbox.style.display = "flex";
    });

    closeLightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.style.display = "none";
    });
  }
});
