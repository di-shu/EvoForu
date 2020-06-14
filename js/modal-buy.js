const partCardButtons = document.querySelectorAll('.main__participation__card-button');
const partCardTitle = document.querySelectorAll( '.main__participation__card-status');
let modalTitle = document.querySelector('.modal__form-title');

export default function buyModal() {

    for(let i = 0; i<partCardButtons.length; i++){
        partCardButtons[i].addEventListener('click', function(){
            modalTitle.innerHTML = partCardTitle[i].innerHTML;
        })
    }

}