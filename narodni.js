const extraList = document.querySelectorAll('.extraList');
const Krasa = document.querySelectorAll('.Krasa');
const selection = document.getElementById('selection');
let Listy = document.getElementById("Listy").querySelectorAll('.extraList');

for (let i = 0; i < extraList.length; i++) {
    extraList[i].addEventListener('mouseover', () => {
        extraList[i].style.borderColor = '#9F8170';
        Krasa[i].style.borderRightColor = '#9F8170';
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
button4.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn4.style.display = 'block';
});
button5.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn5.style.display = 'block';
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
button11.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn11.style.display = 'block';
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
button62.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn62.style.display = 'block';
});
button63.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn63.style.display = 'block';
});
button64.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn64.style.display = 'block';
});
button65.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn65.style.display = 'block';
});
button66.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn66.style.display = 'block';
});
button67.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn67.style.display = 'block';
});
button68.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn68.style.display = 'block';
});
button69.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn69.style.display = 'block';
});
button70.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn70.style.display = 'block';
});
button71.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn71.style.display = 'block';
});
button72.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn72.style.display = 'block';
});
button73.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn73.style.display = 'block';
});
button74.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn74.style.display = 'block';
});
button75.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn75.style.display = 'block';
});
button76.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn76.style.display = 'block';
});
button77.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn77.style.display = 'block';
});
button78.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn78.style.display = 'block';
});
button79.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn79.style.display = 'block';
});
button80.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn80.style.display = 'block';
});
button81.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn81.style.display = 'block';
});
button82.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn82.style.display = 'block';
});
button83.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn83.style.display = 'block';
});
button84.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn84.style.display = 'block';
});
button85.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn85.style.display = 'block';
});
button86.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn86.style.display = 'block';
});
button87.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn87.style.display = 'block';
});
button88.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn88.style.display = 'block';
});
button89.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn89.style.display = 'block';
});
button90.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn90.style.display = 'block';
});
button91.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn91.style.display = 'block';
});
button92.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn92.style.display = 'block';
});
button93.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn93.style.display = 'block';
});
button94.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn94.style.display = 'block';
});
button95.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn95.style.display = 'block';
});
button96.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn96.style.display = 'block';
});
button97.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn97.style.display = 'block';
});
button98.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn98.style.display = 'block';
});
button99.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn99.style.display = 'block';
});
button100.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn100.style.display = 'block';
});
button101.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn101.style.display = 'block';
});
button102.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn102.style.display = 'block';
});
button103.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn103.style.display = 'block';
});
button104.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn104.style.display = 'block';
});
button105.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn105.style.display = 'block';
});
button106.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn106.style.display = 'block';
});
button107.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn107.style.display = 'block';
});
button108.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn108.style.display = 'block';
});
button109.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn109.style.display = 'block';
});
button110.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn110.style.display = 'block';
});
button111.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn111.style.display = 'block';
});
button112.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn112.style.display = 'block';
});
button113.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn113.style.display = 'block';
});
button114.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn114.style.display = 'block';
});
button115.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn115.style.display = 'block';
});
