const extraList = document.querySelectorAll('.extraList');
const Krasa = document.querySelectorAll('.Krasa');
const selection = document.getElementById('selection');
let Listy = document.getElementById("Listy").querySelectorAll('.extraList');

for (let i = 0; i < extraList.length; i++) {
    extraList[i].addEventListener('mouseover', () => {
        extraList[i].style.borderColor = 'lightblue';
        Krasa[i].style.borderRightColor = 'lightblue';
    });
};
for (let i = 0; i < extraList.length; i++) {
    extraList[i].addEventListener('mouseout', () => {
        extraList[i].style.borderColor = 'black';
        Krasa[i].style.borderRightColor = 'black';
    });
};

// Daily Topic

function funktsiyaDva(Listy) {
    Listy.style.display = 'block';
}

let randomSelection = Math.floor(Math.random() * Listy.length);
let Dobroho = [];
Dobroho.push(Listy[randomSelection]);
selection.replaceWith(Listy[randomSelection]);
Listy[randomSelection].style.margin = 'auto';
Listy[randomSelection].style.marginTop = '2rem';

// Search Bar for Extra Sections

document.querySelector('.extraSearchTopics').addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("buttonSearch").click();
    }
});

function buttonCode() {
    const extraSearchTopics = document.querySelector('.extraSearchTopics').value.toUpperCase();
    const Listy = document.querySelector('.Listy');
    const extraList = document.querySelectorAll('.extraList');

    for(var i = 0; i < extraList.length; i++) {
        let validName = extraList[i]

            if(validName) {
                let namesValue = validName.textContent

                    if(namesValue.toUpperCase().indexOf(extraSearchTopics) > -1) {
                        extraList[i].style.display = "";
                    } else {
                        extraList[i].style.display = "none";
                        Dobroho.forEach(funktsiyaDva);
                    }
            }
    }
};

// Sources

const TakDobre = document.getElementById('TakDobre');
const button1 = document.getElementById('button1');
const Learn1 = document.getElementById('Learn1');
const button2 = document.getElementById('button2');
const Learn2 = document.getElementById('Learn2');
const button3 = document.getElementById('button3');
const Learn3 = document.getElementById('Learn3');
const button4 = document.getElementById('button4');
const Learn4 = document.getElementById('Learn4');
const button5 = document.getElementById('button5');
const Learn5 = document.getElementById('Learn5');
const button6 = document.getElementById('button6');
const Learn6 = document.getElementById('Learn6');
const button7 = document.getElementById('button7');
const Learn7 = document.getElementById('Learn7');
const button8 = document.getElementById('button8');
const Learn8 = document.getElementById('Learn8');
const button9 = document.getElementById('button9');
const Learn9 = document.getElementById('Learn9');
const button10 = document.getElementById('button10');
const Learn10 = document.getElementById('Learn10');
const button11 = document.getElementById('button11');
const Learn11 = document.getElementById('Learn11');
const button12 = document.getElementById('button12');
const Learn12 = document.getElementById('Learn12');
const button13 = document.getElementById('button13');
const Learn13 = document.getElementById('Learn13');
const button14 = document.getElementById('button14');
const Learn14 = document.getElementById('Learn14');
const button15 = document.getElementById('button15');
const Learn15 = document.getElementById('Learn15');
const button16 = document.getElementById('button16');
const Learn16 = document.getElementById('Learn16');
const button17 = document.getElementById('button17');
const Learn17 = document.getElementById('Learn17');
const button18 = document.getElementById('button18');
const Learn18 = document.getElementById('Learn18');
const button19 = document.getElementById('button19');
const Learn19 = document.getElementById('Learn19');
const button20 = document.getElementById('button20');
const Learn20 = document.getElementById('Learn20');
const button21 = document.getElementById('button21');
const Learn21 = document.getElementById('Learn21');
const button22 = document.getElementById('button22');
const Learn22 = document.getElementById('Learn22');
const button23 = document.getElementById('button23');
const Learn23 = document.getElementById('Learn23');
const button24 = document.getElementById('button24');
const Learn24 = document.getElementById('Learn24');
const button25 = document.getElementById('button25');
const Learn25 = document.getElementById('Learn25');
const button26 = document.getElementById('button26');
const Learn26 = document.getElementById('Learn26');
const button27 = document.getElementById('button27');
const Learn27 = document.getElementById('Learn27');
const button28 = document.getElementById('button28');
const Learn28 = document.getElementById('Learn28');
const button29 = document.getElementById('button29');
const Learn29 = document.getElementById('Learn29');
const button30 = document.getElementById('button30');
const Learn30 = document.getElementById('Learn30');
const button31 = document.getElementById('button31');
const Learn31 = document.getElementById('Learn31');
const button32 = document.getElementById('button32');
const Learn32 = document.getElementById('Learn32');
const button33 = document.getElementById('button33');
const Learn33 = document.getElementById('Learn33');
const button34 = document.getElementById('button34');
const Learn34 = document.getElementById('Learn34');
const button35 = document.getElementById('button35');
const Learn35 = document.getElementById('Learn35');
const button36 = document.getElementById('button36');
const Learn36 = document.getElementById('Learn36');
const button37 = document.getElementById('button37');
const Learn37 = document.getElementById('Learn37');
const button38 = document.getElementById('button38');
const Learn38 = document.getElementById('Learn38');
const button39 = document.getElementById('button39');
const Learn39 = document.getElementById('Learn39');
const button40 = document.getElementById('button40');
const Learn40 = document.getElementById('Learn40');
const button41 = document.getElementById('button41');
const Learn41 = document.getElementById('Learn41');
const button42 = document.getElementById('button42');
const Learn42 = document.getElementById('Learn42');
const button43 = document.getElementById('button43');
const Learn43 = document.getElementById('Learn43');
const button44 = document.getElementById('button44');
const Learn44 = document.getElementById('Learn44');
const button45 = document.getElementById('button45');
const Learn45 = document.getElementById('Learn45');
const button46 = document.getElementById('button46');
const Learn46 = document.getElementById('Learn46');
const button47 = document.getElementById('button47');
const Learn47 = document.getElementById('Learn47');
const button48 = document.getElementById('button48');
const Learn48 = document.getElementById('Learn48');
const button49 = document.getElementById('button49');
const Learn49 = document.getElementById('Learn49');
const button50 = document.getElementById('button50');
const Learn50 = document.getElementById('Learn50');
const Teper = document.querySelectorAll('.Learn');

function funktsiya(Teper) {
    Teper.style.display = 'none'; 
}

button1.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn1.style.display = 'block';
});

button2.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn2.style.display = 'block';
});
button3.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn3.style.display = 'block';
});
button6.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn6.style.display = 'block';
});
button7.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn7.style.display = 'block';
});
button8.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn8.style.display = 'block';
});
button9.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn9.style.display = 'block';
});
button10.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn10.style.display = 'block';
});
button12.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn12.style.display = 'block';
});
button13.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn13.style.display = 'block';
});
button14.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn14.style.display = 'block';
});
button15.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn15.style.display = 'block';
});
button16.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn16.style.display = 'block';
});
button17.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn17.style.display = 'block';
});
button18.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn18.style.display = 'block';
});
button19.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn19.style.display = 'block';
});
button20.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn20.style.display = 'block';
});
button21.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn21.style.display = 'block';
});
button22.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn22.style.display = 'block';
});
button23.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn23.style.display = 'block';
});
button24.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn24.style.display = 'block';
});
button25.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn25.style.display = 'block';
});
button26.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn26.style.display = 'block';
});
button27.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn27.style.display = 'block';
});
button28.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn28.style.display = 'block';
});
button29.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn29.style.display = 'block';
});
button30.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn30.style.display = 'block';
});
button31.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn31.style.display = 'block';
});
button32.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn32.style.display = 'block';
});
button33.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn33.style.display = 'block';
});
button34.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn34.style.display = 'block';
});
button35.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn35.style.display = 'block';
});
button36.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn36.style.display = 'block';
});
button37.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn37.style.display = 'block';
});
button38.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn38.style.display = 'block';
});
button39.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn39.style.display = 'block';
});
button40.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn40.style.display = 'block';
});
button41.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn41.style.display = 'block';
});
button42.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn42.style.display = 'block';
});
button43.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn43.style.display = 'block';
});
button44.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn44.style.display = 'block';
});
button45.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn45.style.display = 'block';
});
button46.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn46.style.display = 'block';
});
button47.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn47.style.display = 'block';
});
button48.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn48.style.display = 'block';
});
button49.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn49.style.display = 'block';
});
button50.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn50.style.display = 'block';
});
button51.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn51.style.display = 'block';
});
button52.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn52.style.display = 'block';
});
button53.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn53.style.display = 'block';
});
button54.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn54.style.display = 'block';
});
button55.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn55.style.display = 'block';
});
button56.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn56.style.display = 'block';
});
button57.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn57.style.display = 'block';
});
button58.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn58.style.display = 'block';
});
button59.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn59.style.display = 'block';
});
button60.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn60.style.display = 'block';
});
button61.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn61.style.display = 'block';
});
