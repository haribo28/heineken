// 스토리
const storySlider = new Swiper(".story-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    autoplay: true, // 자동으로 넘어가기
    speed: 1000, // 속도 (기본값 3000 0.3초)

    // If we need pagination
    pagination: {
        el: ".story-slider-wrap .story-pagination",
        type: "fraction",
    },
});

// 제품
const productsSlider = new Swiper(".products-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    slidesPerView: 3, // 보여질 슬라이드 갯수
    spaceBetween: 20, // 간격
    centeredSlides: true, // 첫번째 슬라이드를 가운데로

    // Navigation arrows
    navigation: {
        nextEl: ".products-slider-wrap .products-next",
        prevEl: ".products-slider-wrap .products-prev",
    },
});

// const $counters = $(".events-con");
// const exposurePercentage = 80;
// const loop = true;

// $(window)
//     .on("scroll", function () {
//         $counters.each(function () {
//             const $el = $(this);

//             const rect = $el[0].getBoundingClientRect();
//             const winHeight = window.innerHeight;
//             const contentHeight = rect.bottom - rect.top;

//             if (
//                 rect.top <= winHeight - (contentHeight * exposurePercentage) / 100 &&
//                 rect.bottom >= (contentHeight * exposurePercentage) / 100
//             ) {
//                 $el.addClass("active");
//             }
//             if (loop && rect.top >= window.innerHeight) {
//                 $el.removeClass("active");
//             }
//         });
//     })
//     .scroll();

// 음주문화 이미지
const enimgSwiper = new Swiper(".encouraging-img-swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    effect: "cards",
    grabCursor: true,

    // // Navigation arrows
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
});

// 음주문화 글씨
const enconSwiper = new Swiper(".encouraging-con-swiper", {
    // Optional parameters
    direction: "horizontal",
    effect: "fade",
    touchRatio: 0,
    loop: true,
});

// 음주문화 연동
enimgSwiper.on("slideChange", function () {
    idx = enimgSwiper.realIndex;
    enconSwiper.slideToLoop(idx);
});
