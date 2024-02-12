$('.menu_btn').on('click', function () {
    $(this).toggleClass('is_active');
    $('.menu').toggleClass('is_active');
});

function hideModals() {
    $('.modal').fadeOut(300);
    $('body, .menu, .menu_btn').removeClass('is_active');
};

$(function () {
    function showModal(id) {
        $(id).fadeIn(300);
        $('body').addClass('is_active');
    }

    $('[data-modal]').on('click', function (e) {
        e.preventDefault();
        showModal('#' + $(this).attr("data-modal"));
    });

    $('.modal-close').on('click', () => {
        hideModals();
    });

    $(document).on('click', function (e) {
        if (!(
            ($(e.target).parents('.modal-content').length) ||
            ($(e.target).parents('.item').length) ||
            ($(e.target).parents('.fancybox-container').length) ||
            ($(e.target).parents('.menu').length) ||
            ($(e.target).hasClass('menu')) ||
            ($(e.target).hasClass('btn')) ||
            ($(e.target).hasClass('menu_btn')) ||
            ($(e.target).hasClass('modal-content'))
        )) {
            hideModals();
        }
    });
});