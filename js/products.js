const products = new Swiper(".products", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
        prevEl: ".products-swiper-wrap .products-prev",
        nextEl: ".products-swiper-wrap .products-next",
    },
});

// 제품 아이콘 버튼들
const productBtns = document.querySelectorAll(".products-icon button");

// 버튼 클릭 이벤트
productBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        // 모든 버튼에서 active 클래스 제거
        productBtns.forEach((b) => b.classList.remove("active"));

        // 클릭된 버튼에 active 클래스 추가
        btn.classList.add("active");

        // 버튼 인덱스에 따라 다른 슬라이드로 이동
        switch (index) {
            case 0: // 첫 번째 버튼 (오리지널)
                products.slideTo(0);
                break;
            case 1: // 두 번째 버튼 (제로)
                products.slideTo(2);
                break;
            case 2: // 세 번째 버튼 (실버)
                products.slideTo(4);
                break;
        }
    });
});

AOS.init();

Splitting();
