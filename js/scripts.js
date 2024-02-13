$('.menu_btn').on('click', function () {
    $(this).toggleClass('is_active');
    $('.menu').toggleClass('is_active');
});

function hideModals() {
    $('.modal').fadeOut(200);
    $('body, .menu, .menu_btn').removeClass('is_active');
    $('.slick-initialized.slick-slider').slick('unslick');
};

$(function () {
    function showModal(id) {
        $(id).fadeIn(300); $('body').addClass('is_active');
    }

    $('[data-modal]').on('click', function (e) {
        e.preventDefault(); hideModals();
        $('.card-slider').slick({
            arrows: true,
            infinite: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            touchThreshold: 8,
            centerPadding: '0px',
            asNavFor: '.card-nav',
            centerMode: true,
        });
        $('.card-nav').slick({
            arrows: false,
            infinite: false,
            swipeToSlide: () => {
                $('.card-nav-slide').lenght >= 5 ? ret = true : ret = false;
                return ret;
            },
            dots: false,
            slidesToShow: 8,
            slidesToScroll: 8,
            variableWidth: true,
            focusOnSelect: true,
            asNavFor: '.card-slider',
        });
        $('.more-slider').slick({
            arrows: true,
            infinite: false,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            touchThreshold: 8,
            centerPadding: '0px',
            asNavFor: '.card-nav',
            responsive: [
                {
                    breakpoint: 960,
                    settings: { slidesToShow: 1 }
                }
            ]
        });
        showModal('#' + $(this).attr("data-modal"));
    });

    $('.modal-close').on('click', () => { hideModals(); });

    $(document).on('click', function (e) {
        if (!(($(e.target).parents('.modal-content').length) ||
            ($(e.target).parents('.item').length) ||
            ($(e.target).parents('.fancybox-container').length) ||
            ($(e.target).parents('.menu').length) ||
            ($(e.target).hasClass('menu')) ||
            ($(e.target).hasClass('btn')) ||
            ($(e.target).hasClass('menu_btn')) ||
            ($(e.target).hasClass('modal-content'))
        )) { hideModals(); }
    });
});