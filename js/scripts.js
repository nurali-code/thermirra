$('.menu_btn').on('click', function () {
    $(this).toggleClass('is_active');
    $('.menu').toggleClass('is_active');
});

function hideModals() {
    $('.modal').fadeOut(200);
    $('body, .menu, .menu_btn, .modal').removeClass('is_active');
    $('.slick-initialized.slick-slider').slick('unslick');
};

$('.dropdown__btn').on('click', function () {
    var $dropdownContent = $('.dropdown-content');
    $dropdownContent.not($(this).next('.dropdown-content')).slideUp();
    $('.dropdown__btn').not(this).removeClass('is_active');
    $(this).toggleClass('is_active').next('.dropdown-content').slideToggle();
});

$('.filter-toggler').on('click', function () {
    $(this).toggleClass('is_active');
    $('.filter-content').slideToggle(300);
});
$('.filter_btn').on('click', function () {
    $(this).addClass('is_active').siblings().removeClass('is_active');
});


$(function () {
    function showModal(id) {
        $(id).fadeIn(300).addClass('is_active');
        $('body').addClass('is_active');
        $(id + ' .card-slider').slick({
            arrows: true,
            infinite: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            touchThreshold: 8,
            centerPadding: '0px',
            asNavFor: id + ' .card-nav',
            centerMode: true,
        });
        $(id + ' .card-nav').slick({
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
            asNavFor: id + ' .card-slider',
        });
        $(id + ' .more-slider').slick({
            arrows: true,
            infinite: false,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            touchThreshold: 8,
            centerPadding: '0px',
            responsive: [
                {
                    breakpoint: 960,
                    settings: { slidesToShow: 1 }
                }
            ]
        });
    }

    $('[data-modal]').on('click', function (e) {
        e.preventDefault(); hideModals();
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