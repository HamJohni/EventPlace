var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 7000,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        1024: {
            spaceBetween: 50,
        }
    }
})


$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

document.querySelector('.header__menu-enter').addEventListener('click', () => {
    document.querySelector('.menu__bar').classList.toggle('show')
    document.querySelector('.menu__bar-second').classList.remove('show')
})

document.querySelector('.menu__bar-link-enter').addEventListener('click', () => {
    document.querySelector('.menu__bar').classList.toggle('show')
    document.querySelector('.menu__bar-second').classList.toggle('show')
})

$(".various").fancybox({
    maxWidth    : 800,
    maxHeight   : 600,
    fitToView   : false,
    width       : '70%',
    height      : '70%',
    autoSize    : false,
    closeClick  : false,
    openEffect  : 'none',
    closeEffect : 'none'
});