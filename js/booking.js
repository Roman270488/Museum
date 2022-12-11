let popup = document.querySelector('.popup');
let buttonOpen = document.querySelector('.tickets__button-buy');
let buttonClose = document.querySelector('.booking .booking__cross');

buttonOpen.addEventListener('click', function () {
    popupOpen(popup);
});

buttonClose.addEventListener('click', function () {
    popupClose(popup);
});
popup-open
popupOpen = (c) => {
    c.classList.add('popup-open');
    c.addEventListener('click', function (e) {
        if (!e.target.closest('.booking')) c.classList.remove('popup-open');
    });
}

popupClose = (c) => c.classList.remove('popup-open');
