// Пересчет rem в px для swiper
// spaceBetween: rem(5),
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/375) * (0.1 * $(window).width()) * rem;
    }
}

var our_cases_swiper = new Swiper(".our-cases-swiper", {
    pagination: {
        el: ".our-cases-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">0' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".our-cases-button-next",
        prevEl: ".our-cases-button-prev",
    },
});

var competitive_swiper = new Swiper(".competitive-swiper", {
    slidesPerView: 'auto',
    slidesPerGroup: 4,
    centeredSlides: true,
    spaceBetween: rem(3),
    pagination: {
        el: ".competitive-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">0' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".competitive-button-next",
        prevEl: ".competitive-button-prev",
    },
});

var results_swiper = new Swiper(".results-swiper", {
    slidesPerView: 'auto',
    slidesPerGroup: 3,
    centeredSlides: true,
    spaceBetween: rem(3),
    pagination: {
        el: ".results-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">0' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".results-button-next",
        prevEl: ".results-button-prev",
    },
});


