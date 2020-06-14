import $ from 'jquery'; 

export default function hoistingButton() {
    $(window).on('scroll', ()=> {
        if($(window).scrollTop() > 500) {
            $('.toTop-button').addClass('toTop-button__show');
        } else {
            $('.toTop-button').removeClass('toTop-button__show');
        }
    })
}