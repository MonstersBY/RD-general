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
            return (index + 1) >9 ? '<span class="' + className + '">' + (index + 1) + "</span>" : '<span class="' + className + '">0' + (index + 1) + "</span>"
        },
    },
    navigation: {
        nextEl: ".our-cases-button-next",
        prevEl: ".our-cases-button-prev",
    },
    on: {
        slideChange: function (swiper) {
            const bullet_width = Number($('.our-cases-pagination span').css('width').replace('px','')) + Number($('.our-cases-pagination').css('gap').replace('px',''))
            const div_left = Number($('.our-cases-pagination').css('left').replace('px',''))
            const four_bullet = $('.our-cases-pagination').width() - bullet_width
            if(((swiper.activeIndex-1)*bullet_width) > four_bullet) {
                $('.our-cases-pagination').css('left', `calc( ${div_left}px - ${bullet_width}px )`)
            } else if (four_bullet - div_left - swiper.activeIndex*bullet_width > four_bullet) {
                $('.our-cases-pagination').css('left', `calc( ${div_left}px + ${bullet_width}px )`)
            }
        }
    },
});

let our_cases_swiper_text = 'Портал в сфере наркологии'

our_cases_swiper.on('slideChange', function (e) {
    $('.our-cases-bottom__text').html(our_cases_swiper_text+(our_cases_swiper.activeIndex+1));
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
            return (index + 1) >9 ? '<span class="' + className + '">' + (index + 1) + "</span>" : '<span class="' + className + '">0' + (index + 1) + "</span>"
        },
    },
    navigation: {
        nextEl: ".competitive-button-next",
        prevEl: ".competitive-button-prev",
    },
    on: {
        slideChange: function (swiper) {
            const bullet_width = Number($('.competitive-pagination span').css('width').replace('px','')) + Number($('.competitive-pagination').css('gap').replace('px',''))
            const div_left = Number($('.competitive-pagination').css('left').replace('px',''))
            const four_bullet = $('.competitive-pagination').width() - bullet_width
            if(((swiper.activeIndex-1)*bullet_width) > four_bullet) {
                $('.competitive-pagination').css('left', `calc( ${div_left}px - ${bullet_width}px )`)
            } else if (four_bullet - div_left - swiper.activeIndex*bullet_width > four_bullet) {
                $('.competitive-pagination').css('left', `calc( ${div_left}px + ${bullet_width}px )`)
            }
        }
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
            return (index + 1) >9 ? '<span class="' + className + '">' + (index + 1) + "</span>" : '<span class="' + className + '">0' + (index + 1) + "</span>"
        },
    },
    navigation: {
        nextEl: ".results-button-next",
        prevEl: ".results-button-prev",
    },
    on: {
        slideChange: function (swiper) {
            const bullet_width = Number($('.results-pagination span').css('width').replace('px','')) + Number($('.competitive-pagination').css('gap').replace('px',''))
            const div_left = Number($('.results-pagination').css('left').replace('px',''))
            const four_bullet = $('.results-pagination').width() - bullet_width
            if(((swiper.activeIndex-1)*bullet_width) > four_bullet) {
                $('.results-pagination').css('left', `calc( ${div_left}px - ${bullet_width}px )`)
            } else if (four_bullet - div_left - swiper.activeIndex*bullet_width > four_bullet) {
                $('.results-pagination').css('left', `calc( ${div_left}px + ${bullet_width}px )`)
            }
        }
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
            return (index + 1) >9 ? '<span class="' + className + '">' + (index + 1) + "</span>" : '<span class="' + className + '">0' + (index + 1) + "</span>"
        },
    },
    on: {
        slideChange: function (swiper) {
            const bullet_width = Number($('.service-pagination span').css('width').replace('px','')) + Number($('.competitive-pagination').css('gap').replace('px',''))
            const div_left = Number($('.service-pagination').css('left').replace('px',''))
            const four_bullet = $('.service-pagination').width() - bullet_width
            if(((swiper.activeIndex-1)*bullet_width) > four_bullet) {
                $('.service-pagination').css('left', `calc( ${div_left}px - ${bullet_width}px )`)
            } else if (four_bullet - div_left - swiper.activeIndex*bullet_width > four_bullet) {
                $('.service-pagination').css('left', `calc( ${div_left}px + ${bullet_width}px )`)
            }
        }
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
            return (index + 1) >9 ? '<span class="' + className + '">' + (index + 1) + "</span>" : '<span class="' + className + '">0' + (index + 1) + "</span>"
        },
    },
    on: {
        slideChange: function (swiper) {
            const bullet_width = Number($('.reviews-pagination span').css('width').replace('px','')) + Number($('.competitive-pagination').css('gap').replace('px',''))
            const div_left = Number($('.reviews-pagination').css('left').replace('px',''))
            const four_bullet = $('.reviews-pagination').width() - bullet_width
            if(((swiper.activeIndex-1)*bullet_width) > four_bullet) {
                $('.reviews-pagination').css('left', `calc( ${div_left}px - ${bullet_width}px )`)
            } else if (four_bullet - div_left - swiper.activeIndex*bullet_width > four_bullet) {
                $('.reviews-pagination').css('left', `calc( ${div_left}px + ${bullet_width}px )`)
            }
        }
    },
    navigation: {
        nextEl: ".reviews-button-next",
        prevEl: ".reviews-button-prev",
    },
});

// trap our-cases-swiper

var our_cases_swiper1 = new Swiper(".our-cases-swiper1", {
    pagination: {
        el: ".our-cases-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return (index + 1) >9 ? '<span class="' + className + '">' + (index + 1) + "</span>" : '<span class="' + className + '">0' + (index + 1) + "</span>"
        },
    },
    navigation: {
        nextEl: ".our-cases-button-next",
        prevEl: ".our-cases-button-prev",
    },
    on: {
        slideChange: function (swiper) {
            const bullet_width = Number($('.our-cases-pagination span').css('width').replace('px','')) + Number($('.our-cases-pagination').css('gap').replace('px',''))
            const div_left = Number($('.our-cases-pagination').css('left').replace('px',''))
            const four_bullet = $('.our-cases-pagination').width() - bullet_width
            if(((swiper.activeIndex-1)*bullet_width) > four_bullet) {
                $('.our-cases-pagination').css('left', `calc( ${div_left}px - ${bullet_width}px )`)
            } else if (four_bullet - div_left - swiper.activeIndex*bullet_width > four_bullet) {
                $('.our-cases-pagination').css('left', `calc( ${div_left}px + ${bullet_width}px )`)
            }
        }
    },
});

let our_cases_swiper1_text = 'Портал в сфере наркологии'

our_cases_swiper1.on('slideChange', function (e) {
    $('.our-cases-bottom__text').html(our_cases_swiper1_text+(our_cases_swiper1.activeIndex+1));
});