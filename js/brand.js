// 영역별로 스크롤트리거 설정
const sectionEl = gsap.utils.toArray(".brand");

sectionEl.forEach((sec) => {
    ScrollTrigger.create({
        trigger: sec,
        // markers: true,
        start: "top top",
        end: "bottom top",
        pin: true, // 영역을 고정
        pinSpacing: false, // 고정된 핀 사이에 보이는 여백을 없애라
    });
});

// brewing-item
const $brewingButtons = $(".brewing-flex button");
const $brewingBg = $(".brewing-bg");

$brewingButtons.on("click", function () {
    // 모든 버튼의 active 클래스 제거
    $brewingButtons.removeClass("active");

    // 클릭된 버튼에만 active 클래스 추가
    $(this).addClass("active");

    // 클릭된 버튼의 인덱스 가져오기
    const index = $brewingButtons.index(this);
    const bgNumber = index + 1;

    $brewingBg.css("background", `url(img/sub-brewing-bg${bgNumber}.jpg)`);
});

// brewing-text-swiper
const brewingTextswiper = new Swiper(".brewing-text-swiper", {
    direction: "vertical",
    loop: true,
});

// brewing-icon-swiper
const brewingIconswiper = new Swiper(".brewing-icon-swiper", {
    direction: "vertical",
    slidesPerView: 5,
    loop: true,
    spaceBetween: 54,
    centeredSlides: true,
    slideToClickedSlide: true,
});

// 위에 두 슬라이더 합치기
function syncSwipers(mainSwiper, secondarySwiper) {
    mainSwiper.on("slideChangeTransitionStart", function () {
        // 현재 인덱스를 가져와서 다른 Swiper에 적용
        const newIndex = mainSwiper.realIndex;
        if (secondarySwiper.realIndex !== newIndex) {
            secondarySwiper.slideToLoop(newIndex);
        }
        const btnMenu = document.querySelector(".btn-menu");
        const btnClose = document.querySelector(".btn-close");
        const mobileMenu = document.querySelector(".mobile-menu");

        btnMenu.addEventListener("click", () => {
            mobileMenu.classList.add("active");
        });

        // 대상.classList.remove('클래스명')

        btnClose.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });
}

// 텍스트와 아이콘 Swiper 동기화
syncSwipers(brewingTextswiper, brewingIconswiper);
syncSwipers(brewingIconswiper, brewingTextswiper);

AOS.init();

Splitting();
