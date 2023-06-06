const extClass = document.querySelectorAll('.extClass');
const extraA = document.querySelector('.extraA');
const continueDisplay = document.querySelectorAll('.continueDisplay');
const bodiesNINE = document.querySelectorAll('.bodiesNINE');
const continueSection = document.querySelectorAll('.continueSection');
const continuePage = document.querySelector('.continuePage');
const continuePageName = document.querySelector('.continuePageName');
const extraInline = document.querySelectorAll('.extraInline');
const razdvatry = document.querySelectorAll('.razdvatry');
const Learn = document.querySelectorAll('.Learn');
const thousandEighty = window.matchMedia("(max-width: 1080px)");

for (let i = 0; i < extClass.length; i++) {
    if (thousandEighty.matches) {
        extraA.style.width = '270px';
        extClass[i].style.width = '270px';
    };
};

for (let i = 0; i < extClass.length; i++) {
    extClass[i].addEventListener('mouseover', () => {
        extraA.style.transition = '1s';
        extraA.style.width = '80px';
        if (thousandEighty.matches) {
            extraA.style.width = '270px';
        };
    });
};

for (let i = 0; i < extClass.length; i++) {
    extClass[i].addEventListener('mouseout', () => {
        extraA.style.transition = '1s';
        extraA.style.width = '250px';
        if (thousandEighty.matches) {
            extraA.style.width = '270px';
        };
    });
};

for (let i = 0; i < continueDisplay.length; i++) {
    continueDisplay[i].addEventListener('click', () => {
        bodiesNINE[i].style.display = 'none';
        continueSection[i].style.display = 'none';
        continuePage.style.display = 'block';
        continuePageName.textContent = extraInline[i].textContent
    });
};

for (let i = 0; i < Learn.length; i++) {
    razdvatry[i].addEventListener('click', () => {
        Learn[i].style.display = 'none';
        TakDobre.style.opacity = '100%';
    });
};
