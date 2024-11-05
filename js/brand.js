const brewingTextswiper = new Swiper(".brewing-text-swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,
});

const brewingIconswiper = new Swiper(".brewing-icon-swiper", {
    direction: "vertical",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
});

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
