import $ from 'jquery';

export default function addModal() {
    $('body').append(`<div class="modal fade" id="modalBuy" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">


        <form class="modalCallbackForm" name="callback">
            <div class="modal__form-title">Название пакета</div>
            <div class="modal__form-inputs">
                <input type="text" class="modal__form-input" name="fullname" placeholder="Имя, Фамилия">
                <input type="text" class="modal__form-input" name="email" placeholder="Email">
                <input type="text" class="modal__form-input" name="phone" placeholder="Телефон">
            </div>
            <div class="modal__form-agreement">
                <img class="agreement-checkbox" src="./images/checkbox.png" alt="">
                <div class="agreement-text">«Ознакомлен(а) с правилами, политикой конфиденциальности и даю согласие на получение предложений от партнёров мероприятия!»</div>
            </div>
            <button type="submit" class="modal__form-button">Оплатить</button>
        </form>
           
      </div>
    </div>
  </div>

  <div class="modal fade" id="modalCallback" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">


        <form class="modalCallbackForm" name="callback">
            <div class="modal__form-title">Обратная связь</div>
            <div class="modal__form-inputs">
                <input type="text" class="modal__form-input" name="fullname" placeholder="Имя, Фамилия">
                <input type="text" class="modal__form-input" name="email" placeholder="Email">
                <input type="text" class="modal__form-input" name="phone" placeholder="Телефон">
            </div>
            <div class="modal__form-agreement">
                <img class="agreement-checkbox" src="/images/checkbox.png" alt="">
                <div class="agreement-text">«Ознакомлен(а) с правилами, политикой конфиденциальности и даю согласие на получение предложений от партнёров мероприятия!»</div>
            </div>
            <button type="submit" class="modal__form-button">Отправить</button>
        </form>
           
      </div>
    </div>
  </div>
`)
}