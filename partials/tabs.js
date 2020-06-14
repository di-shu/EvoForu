import $ from 'jquery';

export default function tabs () {
    $('.main__support__content').append(` <div class="main__support-buttons">
    <a  id="supportAll" class="main__support-button">Все</a>
    <a  id="supportPartners" class="header__button main__support-button main__support-button_active">Партнёры</a>
    <a  id="supportInformative" class="main__support-button">Информационные</a>
</div>
<div class="main__support-cards">
    <div class="main__support-card" data-filter="supportPartners"></div>
    <div class="main__support-card" data-filter="supportPartners"></div>
    <div class="main__support-card" data-filter="supportInformative"></div>
    <div class="main__support-card" data-filter="supportInformative"></div>
    <div class="main__support-card" data-filter="supportPartners"></div>
    <div class="main__support-card" data-filter="supportPartners"></div>
</div>`)
}