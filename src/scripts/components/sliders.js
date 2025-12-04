import Swiper from 'swiper';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';

export function slidersPromo() {
    document.querySelectorAll('.promo__swiper').forEach((el) => {
        const slidesCount = el.querySelectorAll('.swiper-slide').length;

        new Swiper(el, {
            modules: [Navigation, EffectFade, Autoplay],
            loop: true,
            loopedSlides: slidesCount,
            slidesPerView: 1,
            effect: "fade",
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            speed: 800,
        });
    });
}

export function slidersStatsCard() {
    document.querySelectorAll('.stats-card__swiper').forEach((el) => {
        new Swiper(el, {
            breakpoints: {
                320: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                    allowTouchMove: true,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    allowTouchMove: false,
                }
            },
        });
    });
}

export function slidersAboutFounder() {
    document.querySelectorAll('.about-founder__swiper').forEach((el) => {
        new Swiper(el, {
            modules: [Navigation],
            loop: true,
            spaceBetween: 20,

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    centeredSlides: true,
                },
                768: {
                    slidesPerView: 2.2,

                },
                992: {
                    slidesPerView: 4,
                }
            },
            navigation: {
                prevEl: ".about-founder__swiper-button--prev",
                nextEl: ".about-founder__swiper-button--next"
            }
        });
    });
}


export function slidersOurServices() {
    const initBreakpoint = 576.98;

    document.querySelectorAll('.our-services__swiper').forEach((el) => {
        let swiperInstance = null;

        function initSwiper() {
            if (window.innerWidth <= initBreakpoint && !swiperInstance) {
                swiperInstance = new Swiper(el, {
                    spaceBetween: 20,
                    slidesPerView: 1.3,
                });
            } else if (window.innerWidth > initBreakpoint && swiperInstance) {
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }
        }

        initSwiper();

        window.addEventListener('resize', initSwiper);
    });
}


export function slidersPricing() {
    document.querySelectorAll('.pricing__swiper').forEach((el) => {
        new Swiper(el, {
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                    allowTouchMove: true,
                },

                576: {
                    slidesPerView: 1.8,
                    spaceBetween: 10,
                    allowTouchMove: true,
                },
                700: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                    allowTouchMove: true,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    allowTouchMove: false,
                }
            },
        });
    });
}


export function slidersReviews() {
    document.querySelectorAll('.reviews__swiper').forEach((el) => {
        new Swiper(el, {
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    allowTouchMove: true,
                },
                768: {
                    slidesPerView: 2.01,
                    spaceBetween: 10,
                    allowTouchMove: true,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    allowTouchMove: true,
                }
            },
        });
    });
}
