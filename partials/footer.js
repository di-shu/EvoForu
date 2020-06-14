import $ from 'jquery';

export default function setFooter(){
    $('footer').append(`<div class="footer__container">
    <div class="footer__sections__content">

        <div class="footer__sections__nav">
            <div class="footer__sections__content-title">Разделы</div>
            <div class="footer__sections-lists">
                <ul class="footer__sections-list">
                    <li class="footer__sections-list__item"><a href="#">Главная</a> </li>
                    <li class="footer__sections-list__item"><a href="#main__global-network">Нетворкинг</a></li>
                    <li class="footer__sections-list__item"><a href="#main__speaker-content">Спикеры</a></li>
                    <li class="footer__sections-list__item"><a href="#main__participation__content">Стоимость</a></li>
                    <li class="footer__sections-list__item"><a href="#main__support__content">Партнёры</a></li>
                    <li class="footer__sections-list__item"><a href="#main__place__content-card">Контакты</a></li>
                </ul>

                <ul class="footer__sections-list2">
                    <li class="footer__sections-list2__item"><a href="#">Карта сайта</a> </li>
                    <li class="footer__sections-list2__item"><a href="#">Политика конфиденциальности</a></li>
                    <li class="footer__sections-list2__item"><a href="#">Условия для участников</a></li>
                    <li class="footer__sections-list2__item"><a href="#">Условия возврата</a></li>
                    <li class="footer__sections-list2__item"><a href="#">Предупреждение о правах</a></li>
                    <li class="footer__sections-list2__item"><a href="#">Правила посещения</a></li>
                </ul>

            </div>
        </div>
        
        <div class="footer__sections__callback">
            <div class="footer__sections__callback-title">Орг. контакты</div>
            <div class="footer__sections__callback__tel">
                <img src="/images/phone.png" class="content-card__tel-img">
                <p class="content-card__text">+38 (063) 738-40-20</p>
            </div>
            <div class="footer__sections__callback__email">
                <img src="/images/mail.png" class="content-card__email-img">
                <p class="content-card__text">evoforum2020@gmail.com</p>
            </div>
            <a href="#"><img src="/images/facebook.png"></a>
        </div>
        <a href="#" class="toTop-button d-flex justify-content-center align-items-center"><img src="/images/arrow.png"></a>
    </div>
</div>
<div class="footer__bottom">
    <div class="footer__bottom-content">© 2020  Evolution Networking</div>
</div>`)
} 