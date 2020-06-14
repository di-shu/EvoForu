

import $ from 'jquery';

export default function setHeader (){
    $('header').prepend(`
        <div class="background__texture"></div>
        <div class="header__main__container">
            <div class="header__container">
                <div class="header__socials">
                    <a href="#" class="header__social">
                        <img src="/images/facebook.png" >
                    </a>
                    <div class="header__social-rectangle"></div>
                    <a href="#" class="header__social header__social-phone">
                        <img src="/images/phone.png" >
                    </a>
                    <div class="header__social__number"> <span>(063) 738-40-20, </span><span>(097) 101-57-99</span> </div>
                </div>
            </div>
            <div class="header__container-borders">
                <div class="header__container  d-flex justify-content-between align-items-center header__container__mob">
<!--                    <a href="#" class="header__logo">-->
<!--                        <img class="header__logo-img" src="/images/logo.png" >-->
<!--                    </a>-->
                    <div class="header__burger-menu">
                        <span></span>
                    </div>
                    <div class="header__nav-wrapper">
                        <div class="header__nav-close">
                            <div class="close__rectangle"></div>
                            <div class="close__rectangle"></div>
                        </div>
                        <nav class="header__nav">
                            <a href="/pages/networking.html" class="header__nav-item">Нетворкинг</a>
                            <a href="#main__speaker-content" class="header__nav-item">Спикеры</a>
                            <a href="#main__participation__content" class="header__nav-item">Стоимость</a>
                            <a href="/pages/partners.html" class="header__nav-item">Партнёры</a>
                            <a href="#main__place__content-card" class="header__nav-item">Контакты</a>
                        </nav>
                    </div>
                    <a  href="tel: +380660974345" class="header__callback-button">
                        <?xml version="1.0" encoding="iso-8859-1"?>
                        <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve">
                        <g>
                            <g id="header__callback-button">
                                <path d="M353.188,252.052c-23.51,0-46.594-3.677-68.469-10.906c-10.719-3.656-23.896-0.302-30.438,6.417l-43.177,32.594
                                    c-50.073-26.729-80.917-57.563-107.281-107.26l31.635-42.052c8.219-8.208,11.167-20.198,7.635-31.448
                                    c-7.26-21.99-10.948-45.063-10.948-68.583C132.146,13.823,118.323,0,101.333,0H30.813C13.823,0,0,13.823,0,30.813
                                    C0,225.563,158.438,384,353.188,384c16.99,0,30.813-13.823,30.813-30.813v-70.323C384,265.875,370.177,252.052,353.188,252.052z"
                                    />
                            </g>
                        </g>
    
                        </svg>
    
                    </a>
                    <button class="header__button header__hide__button header__button-mr" type="button" data-target="#modalCallback" data-toggle="modal">Заказать звонок</button>
                </div>   
            </div>
    `);
}

