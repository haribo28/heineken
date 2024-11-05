// Swiper 인스턴스 생성
const brewingTextswiper = new Swiper(".brewing-text-swiper", {
    direction: "vertical",
    loop: true,
});

const brewingIconswiper = new Swiper(".brewing-icon-swiper", {
    direction: "vertical",
    slidesPerView: 1,
    loop: true,
    loopAdditionalSlides: 2,
});

// 슬라이드 변경을 동기화하는 함수
function syncSwipers(mainSwiper, secondarySwiper) {
    mainSwiper.on("slideChangeTransitionStart", function () {
        // 현재 인덱스를 가져와서 다른 Swiper에 적용
        const newIndex = mainSwiper.realIndex;
        if (secondarySwiper.realIndex !== newIndex) {
            secondarySwiper.slideToLoop(newIndex);
        }
    });
}

// 텍스트와 아이콘 Swiper 동기화
syncSwipers(brewingTextswiper, brewingIconswiper);
syncSwipers(brewingIconswiper, brewingTextswiper);

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

    $brewingBg.css("background", `url(../img/sub-brewing-bg${bgNumber}.jpg)`);
});
