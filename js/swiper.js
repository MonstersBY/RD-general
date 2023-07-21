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
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: false,
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
    breakpoints: {
        769: {
            slidesPerView: 'auto',
            slidesPerGroup: 4,
            spaceBetween: rem(3),
            centeredSlides: true,
        }
    }
});

var results_swiper = new Swiper(".results-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: false,
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
    breakpoints: {
        769: {
            slidesPerView: 'auto',
            slidesPerGroup: 3,
            centeredSlides: true,
            spaceBetween: rem(3),
        }
    }
});

var pro_engaged_swiper = new Swiper(".pro-engaged-swiper", {
    slidesPerView: 'auto',
    spaceBetween: rem(2),
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var service_packages_swiper = new Swiper(".service-packages-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    centeredSlides: false,
    spaceBetween: rem(3),
    pagination: {
        el: ".service-packages-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">0' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".service-packages-button-next",
        prevEl: ".service-packages-button-prev",
    },
});


var reviews_swiper = new Swiper(".reviews-swiper", {
    spaceBetween: rem(10),
    pagination: {
        el: ".reviews-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">0' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
    },
});