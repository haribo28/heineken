const swiper = new Swiper(".sponsorships-swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: true, // 자동으로 넘어가기
    speed: 1000, // 속도 (기본값 3000 0.3초)

    // Navigation arrows
    navigation: {
        nextEl: ".sponsorships-slider-wrap .spon-next",
        prevEl: ".sponsorships-slider-wrap .spon-prev",
    },
});

AOS.init();

Splitting();
