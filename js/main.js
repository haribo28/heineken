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

    // 슬라이드 변경 시 실행되는 콜백
    on: {
        init: function () {
            updateActiveSlide(this);
        },
        slideChange: function () {
            updateActiveSlide(this);
        },
    },
});

// active 클래스 업데이트 함수
function updateActiveSlide(swiper) {
    // 모든 figure에서 active 클래스 제거
    const allFigures = document.querySelectorAll(".product-item figure");
    allFigures.forEach((figure) => figure.classList.remove("active"));

    // 현재 활성화된 슬라이드의 figure에 active 클래스 추가
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (activeSlide) {
        const activeFigure = activeSlide.querySelector("figure");
        if (activeFigure) {
            activeFigure.classList.add("active");
        }
    }
}

// 이벤트
gsap.registerPlugin(ScrollTrigger);

const eventTL = gsap.timeline({
    scrollTrigger: {
        trigger: ".events",
        start: "top 0%",
        end: "+=100%", // 스크롤 길이를 더 길게 설정
        scrub: 1,
        pin: true,
        pinSpacing: true,
        markers: true, // 개발 완료 후 제거
    },
});

// 각 이벤트 요소에 대한 애니메이션
eventTL.from(".events-container", {
    y: 200,
    autoAlpha: 0,
    duration: 0.4,
});
eventTL.to(".events-container", {
    y: -800,
    duration: 0.5,
});

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
