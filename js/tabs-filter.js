
export default function tabFilter() {
    let supportCard = document.querySelectorAll('.main__support-card');
    const buttons = document.querySelectorAll('.main__support-button');
    

    for(let i = 1; i<buttons.length;i++){
        buttons[i].addEventListener('click', ()=>{
            for(let k = 0; k < buttons.length; k++){
                if(buttons[k].classList.contains('header__button') &&buttons[k].classList.contains('main__support-button_active')) {
                    buttons[k].classList.remove('header__button');
                    buttons[k].classList.remove('main__support-button_active');
                }
            }
            buttons[i].classList.add('header__button');
            buttons[i].classList.add('main__support-button_active');
            for(let j = 0; j < supportCard.length; j++){
                if(buttons[i].id == supportCard[j].getAttribute('data-filter')) {
                    supportCard[j].style.display = 'block';
                }
                else {
                    supportCard[j].style.display = 'none';
                }
            }
        })

        buttons[0].addEventListener('click', ()=>{
            for(let k = 0; k < buttons.length; k++){
                if(buttons[k].classList.contains('header__button') &&buttons[k].classList.contains('main__support-button_active')) {
                    buttons[k].classList.remove('header__button');
                    buttons[k].classList.remove('main__support-button_active');
                }
            }
            buttons[0].classList.add('header__button');
            buttons[0].classList.add('main__support-button_active');
            for(let i = 0; i<supportCard.length; i++){
                supportCard[i].style.display = 'block';
            }
        })
    }
}
