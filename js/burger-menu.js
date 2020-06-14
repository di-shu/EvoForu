
export default function burgerMenu() {

    $('.header__burger-menu').on('click', () => {
        $('.header__nav-wrapper').addClass('show__menu');
    })

    $('.header__nav-close').on('click', () => {
        $('.header__nav-wrapper').removeClass('show__menu');
    })

}