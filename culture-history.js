function funktsiyaDva(ListyCulture) {
    ListyCulture.style.display = 'block';
}

const ListyCulture = document.getElementById('CultureListy').querySelectorAll('.topicsCulture');
const selection = document.getElementById('selection');
let randomSelection = Math.floor(Math.random() * ListyCulture.length);
let Dobroho = [];
Dobroho.push(ListyCulture[randomSelection]);
selection.replaceWith(ListyCulture[randomSelection]);
ListyCulture[randomSelection].style.margin = 'auto';

const razdvatry = document.querySelectorAll('.razdvatry');
const Learn = document.querySelectorAll('.Learn');

for (let i = 0; i < Learn.length; i++) {
    razdvatry[i].addEventListener('click', () => {
        Learn[i].style.display = 'none';
        TakDobre.style.opacity = '100%';
    });
};

document.getElementById('searchTopicc').addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.querySelector(".cultureTopicBtn").click();
    }
});

function buttonCode() {
    const searchTopicc = document.getElementById('searchTopicc').value.toUpperCase();
    const topiCContent = document.querySelector('.topiCContent');
    const topicsCulture = document.querySelectorAll('.topicsCulture');

    for(var i = 0; i < topicsCulture.length; i++) {
        let validName = topicsCulture[i]

            if(validName) {
                let namesValue = validName.textContent

                    if(namesValue.toUpperCase().indexOf(searchTopicc) > -1) {
                        topicsCulture[i].style.display = "";
                    } else {
                        topicsCulture[i].style.display = "none";
                        Dobroho.forEach(funktsiyaDva);
                    }
            }
    }
};

const TakDobre = document.getElementById('TakDobre');
const culture1 = document.getElementById('culture1');
const Learn1 = document.getElementById('Learn1');
const culture2 = document.getElementById('culture2');
const Learn2 = document.getElementById('Learn2');
const culture3 = document.getElementById('culture3');
const Learn3 = document.getElementById('Learn3');
const culture4 = document.getElementById('culture4');
const Learn4 = document.getElementById('Learn4');
const culture5 = document.getElementById('culture5');
const Learn5 = document.getElementById('Learn5');
const culture6 = document.getElementById('culture6');
const Learn6 = document.getElementById('Learn6');
const culture7 = document.getElementById('culture7');
const Learn7 = document.getElementById('Learn7');
const culture8 = document.getElementById('culture8');
const Learn8 = document.getElementById('Learn8');
const culture9 = document.getElementById('culture9');
const Learn9 = document.getElementById('Learn9');
const culture10 = document.getElementById('culture10');
const Learn10 = document.getElementById('Learn10');
const culture11 = document.getElementById('culture11');
const Learn11 = document.getElementById('Learn11');
const culture12 = document.getElementById('culture12');
const Learn12 = document.getElementById('Learn12');
const culture13 = document.getElementById('culture13');
const Learn13 = document.getElementById('Learn13');
const culture14 = document.getElementById('culture14');
const Learn14 = document.getElementById('Learn14');
const culture15 = document.getElementById('culture15');
const Learn15 = document.getElementById('Learn15');
const culture16 = document.getElementById('culture16');
const Learn16 = document.getElementById('Learn16');
const culture17 = document.getElementById('culture17');
const Learn17 = document.getElementById('Learn17');
const culture18 = document.getElementById('culture18');
const Learn18 = document.getElementById('Learn18');
const culture19 = document.getElementById('culture19');
const Learn19 = document.getElementById('Learn19');
const culture20 = document.getElementById('culture20');
const Learn20 = document.getElementById('Learn20');
const culture21 = document.getElementById('culture21');
const Learn21 = document.getElementById('Learn21');
const culture22 = document.getElementById('culture22');
const Learn22 = document.getElementById('Learn22');
const culture23 = document.getElementById('culture23');
const Learn23 = document.getElementById('Learn23');
const culture24 = document.getElementById('culture24');
const Learn24 = document.getElementById('Learn24');
const culture25 = document.getElementById('culture25');
const Learn25 = document.getElementById('Learn25');
const culture26 = document.getElementById('culture26');
const Learn26 = document.getElementById('Learn26');
const culture27 = document.getElementById('culture27');
const Learn27 = document.getElementById('Learn27');
const culture28 = document.getElementById('culture28');
const Learn28 = document.getElementById('Learn28');
const culture29 = document.getElementById('culture29');
const Learn29 = document.getElementById('Learn29');
const culture30 = document.getElementById('culture30');
const Learn30 = document.getElementById('Learn30');
const culture31 = document.getElementById('culture31');
const Learn31 = document.getElementById('Learn31');
const culture32 = document.getElementById('culture32');
const Learn32 = document.getElementById('Learn32');
const culture33 = document.getElementById('culture33');
const Learn33 = document.getElementById('Learn33');
const culture34 = document.getElementById('culture34');
const Learn34 = document.getElementById('Learn34');
const culture35 = document.getElementById('culture35');
const Learn35 = document.getElementById('Learn35');
const culture36 = document.getElementById('culture36');
const Learn36 = document.getElementById('Learn36');
const culture37 = document.getElementById('culture37');
const Learn37 = document.getElementById('Learn37');
const culture38 = document.getElementById('culture38');
const Learn38 = document.getElementById('Learn38');
const culture39 = document.getElementById('culture39');
const Learn39 = document.getElementById('Learn39');
const culture40 = document.getElementById('culture40');
const Learn40 = document.getElementById('Learn40');
const culture41 = document.getElementById('culture41');
const Learn41 = document.getElementById('Learn41');
const culture42 = document.getElementById('culture42');
const Learn42 = document.getElementById('Learn42');
const culture43 = document.getElementById('culture43');
const Learn43 = document.getElementById('Learn43');
const culture44 = document.getElementById('culture44');
const Learn44 = document.getElementById('Learn44');
const culture45 = document.getElementById('culture45');
const Learn45 = document.getElementById('Learn45');
const culture46 = document.getElementById('culture46');
const Learn46 = document.getElementById('Learn46');
const culture47 = document.getElementById('culture47');
const Learn47 = document.getElementById('Learn47');
const culture48 = document.getElementById('culture48');
const Learn48 = document.getElementById('Learn48');
const culture49 = document.getElementById('culture49');
const Learn49 = document.getElementById('Learn49');
const culture50 = document.getElementById('culture50');
const Learn50 = document.getElementById('Learn50');
const culture51 = document.getElementById('culture51');
const Learn51 = document.getElementById('Learn51');
const culture52 = document.getElementById('culture52');
const Learn52 = document.getElementById('Learn52');
const culture53 = document.getElementById('culture53');
const Learn53 = document.getElementById('Learn53');
const culture54 = document.getElementById('culture54');
const Learn54 = document.getElementById('Learn54');
const culture55 = document.getElementById('culture55');
const Learn55 = document.getElementById('Learn55');
const culture56 = document.getElementById('culture56');
const Learn56 = document.getElementById('Learn56');
const culture57 = document.getElementById('culture57');
const Learn57 = document.getElementById('Learn57');
const culture58 = document.getElementById('culture58');
const Learn58 = document.getElementById('Learn58');
const culture59 = document.getElementById('culture59');
const Learn59 = document.getElementById('Learn59');
const culture60 = document.getElementById('culture60');
const Learn60 = document.getElementById('Learn60');
const culture61 = document.getElementById('culture61');
const Learn61 = document.getElementById('Learn61');
const culture62 = document.getElementById('culture62');
const Learn62 = document.getElementById('Learn62');
const culture63 = document.getElementById('culture63');
const Learn63 = document.getElementById('Learn63');
const culture64 = document.getElementById('culture64');
const Learn64 = document.getElementById('Learn64');
const culture65 = document.getElementById('culture65');
const Learn65 = document.getElementById('Learn65');
const culture66 = document.getElementById('culture66');
const Learn66 = document.getElementById('Learn66');
const culture67 = document.getElementById('culture67');
const Learn67 = document.getElementById('Learn67');
const culture68 = document.getElementById('culture68');
const Learn68 = document.getElementById('Learn68');
const culture69 = document.getElementById('culture69');
const Learn69 = document.getElementById('Learn69');
const culture70 = document.getElementById('culture70');
const Learn70 = document.getElementById('Learn70');
const culture71 = document.getElementById('culture71');
const Learn71 = document.getElementById('Learn71');
const culture72 = document.getElementById('culture72');
const Learn72 = document.getElementById('Learn72');
const culture73 = document.getElementById('culture73');
const Learn73 = document.getElementById('Learn73');
const culture74 = document.getElementById('culture74');
const Learn74 = document.getElementById('Learn74');
const culture75 = document.getElementById('culture75');
const Learn75 = document.getElementById('Learn75');
const culture76 = document.getElementById('culture76');
const Learn76 = document.getElementById('Learn76');
const culture77 = document.getElementById('culture77');
const Learn77 = document.getElementById('Learn77');
const culture78 = document.getElementById('culture78');
const Learn78 = document.getElementById('Learn78');
const culture79 = document.getElementById('culture79');
const Learn79 = document.getElementById('Learn79');
const culture80 = document.getElementById('culture80');
const Learn80 = document.getElementById('Learn80');
const Teper = document.querySelectorAll('.Learn');

function funktsiya(Teper) {
    Teper.style.display = 'none'; 
}

culture1.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn1.style.display = 'block';
});

culture2.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn2.style.display = 'block';
});
culture3.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn3.style.display = 'block';
});
culture4.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn4.style.display = 'block';
});
culture5.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn5.style.display = 'block';
});
culture6.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn6.style.display = 'block';
});
culture8.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn8.style.display = 'block';
});
culture10.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn10.style.display = 'block';
});
culture11.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn11.style.display = 'block';
});
culture12.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn12.style.display = 'block';
});
culture13.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn13.style.display = 'block';
});
culture14.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn14.style.display = 'block';
});
culture15.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn15.style.display = 'block';
});
culture16.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn16.style.display = 'block';
});
culture18.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn18.style.display = 'block';
});
culture19.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn19.style.display = 'block';
});
culture20.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn20.style.display = 'block';
});
culture21.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn21.style.display = 'block';
});
culture22.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn22.style.display = 'block';
});
culture26.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn26.style.display = 'block';
});
culture27.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn27.style.display = 'block';
});
culture28.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn28.style.display = 'block';
});
culture29.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn29.style.display = 'block';
});
culture30.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn30.style.display = 'block';
});
culture31.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn31.style.display = 'block';
});
culture32.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn32.style.display = 'block';
});
culture33.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn33.style.display = 'block';
});
culture34.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn34.style.display = 'block';
});
culture35.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn35.style.display = 'block';
});
culture36.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn36.style.display = 'block';
});
culture37.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn37.style.display = 'block';
});
culture38.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn38.style.display = 'block';
});
culture39.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn39.style.display = 'block';
});
culture40.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn40.style.display = 'block';
});
culture41.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn41.style.display = 'block';
});
culture42.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn42.style.display = 'block';
});
culture43.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn43.style.display = 'block';
});
culture44.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn44.style.display = 'block';
});
culture45.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn45.style.display = 'block';
});
culture46.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn46.style.display = 'block';
});
culture47.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn47.style.display = 'block';
});
culture48.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn48.style.display = 'block';
});
culture49.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn49.style.display = 'block';
});
culture50.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn50.style.display = 'block';
});
culture51.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn51.style.display = 'block';
});
culture52.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn52.style.display = 'block';
});
culture53.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn53.style.display = 'block';
});
culture54.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn54.style.display = 'block';
});
culture55.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn55.style.display = 'block';
});
culture56.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn56.style.display = 'block';
});
culture57.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn57.style.display = 'block';
});
culture58.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn58.style.display = 'block';
});
culture59.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn59.style.display = 'block';
});
culture60.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn60.style.display = 'block';
});
culture61.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn61.style.display = 'block';
});
culture62.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn62.style.display = 'block';
});
culture63.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn63.style.display = 'block';
});
culture64.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn64.style.display = 'block';
});
culture65.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn65.style.display = 'block';
});
culture66.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn66.style.display = 'block';
});
culture67.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn67.style.display = 'block';
});
culture68.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn68.style.display = 'block';
});
culture69.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn69.style.display = 'block';
});
culture70.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn70.style.display = 'block';
});
culture71.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn71.style.display = 'block';
});
culture72.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn72.style.display = 'block';
});
culture73.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn73.style.display = 'block';
});
culture74.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn74.style.display = 'block';
});
culture75.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn75.style.display = 'block';
});
culture76.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn76.style.display = 'block';
});
culture77.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn77.style.display = 'block';
});
culture78.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn78.style.display = 'block';
});