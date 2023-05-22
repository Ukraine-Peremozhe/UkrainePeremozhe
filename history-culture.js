document.getElementById('searchTopic').addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.querySelector(".historyTopicBtn").click();
    }
});

function buttonCode() {
    const searchTopic = document.getElementById('searchTopic').value.toUpperCase();
    const topicContent = document.querySelector('.topicContent');
    const topics = document.querySelectorAll('.topics');

    for(var i = 0; i < topics.length; i++) {
        let validName = topics[i]

            if(validName) {
                let namesValue = validName.textContent

                    if(namesValue.toUpperCase().indexOf(searchTopic) > -1) {
                        topics[i].style.display = "";
                    } else {
                        topics[i].style.display = "none";
                    }
            }
    }
};

const razdvatry = document.querySelectorAll('.razdvatry');
const Learn = document.querySelectorAll('.Learn');

for (let i = 0; i < Learn.length; i++) {
    razdvatry[i].addEventListener('click', () => {
        Learn[i].style.display = 'none';
        TakDobre.style.opacity = '100%';
    });
};

const TakDobre = document.getElementById('TakDobre');
const history1 = document.getElementById('history1');
const Learn1 = document.getElementById('Learn1');
const history2 = document.getElementById('history2');
const Learn2 = document.getElementById('Learn2');
const history3 = document.getElementById('history3');
const Learn3 = document.getElementById('Learn3');
const history4 = document.getElementById('history4');
const Learn4 = document.getElementById('Learn4');
const history5 = document.getElementById('history5');
const Learn5 = document.getElementById('Learn5');
const history6 = document.getElementById('history6');
const Learn6 = document.getElementById('Learn6');
const history7 = document.getElementById('history7');
const Learn7 = document.getElementById('Learn7');
const history8 = document.getElementById('history8');
const Learn8 = document.getElementById('Learn8');
const history9 = document.getElementById('history9');
const Learn9 = document.getElementById('Learn9');
const history11 = document.getElementById('history11');
const Learn11 = document.getElementById('Learn11');
const history12 = document.getElementById('history12');
const Learn12 = document.getElementById('Learn12');
const history13 = document.getElementById('history13');
const Learn13 = document.getElementById('Learn13');
const history14 = document.getElementById('history14');
const Learn14 = document.getElementById('Learn14');
const history15 = document.getElementById('history15');
const Learn15 = document.getElementById('Learn15');
const history16 = document.getElementById('history16');
const Learn16 = document.getElementById('Learn16');
const history18 = document.getElementById('history18');
const Learn18 = document.getElementById('Learn18');
const history19 = document.getElementById('history19');
const Learn19 = document.getElementById('Learn19');
const history20 = document.getElementById('history20');
const Learn20 = document.getElementById('Learn20');
const history21 = document.getElementById('history21');
const Learn21 = document.getElementById('Learn21');
const history22 = document.getElementById('history22');
const Learn22 = document.getElementById('Learn22');
const history23 = document.getElementById('history23');
const Learn23 = document.getElementById('Learn23');
const history25 = document.getElementById('history25');
const Learn25 = document.getElementById('Learn25');
const history26 = document.getElementById('history26');
const Learn26 = document.getElementById('Learn26');
const history27 = document.getElementById('history27');
const Learn27 = document.getElementById('Learn27');
const history28 = document.getElementById('history28');
const Learn28 = document.getElementById('Learn28');
const history29 = document.getElementById('history29');
const Learn29 = document.getElementById('Learn29');
const history30 = document.getElementById('history30');
const Learn30 = document.getElementById('Learn30');
const history31 = document.getElementById('history31');
const Learn31 = document.getElementById('Learn31');
const history32 = document.getElementById('history32');
const Learn32 = document.getElementById('Learn32');
const history33 = document.getElementById('history33');
const Learn33 = document.getElementById('Learn33');
const history34 = document.getElementById('history34');
const Learn34 = document.getElementById('Learn34');
const history35 = document.getElementById('history35');
const Learn35 = document.getElementById('Learn35');
const history36 = document.getElementById('history36');
const Learn36 = document.getElementById('Learn36');
const history37 = document.getElementById('history37');
const Learn37 = document.getElementById('Learn37');
const history38 = document.getElementById('history38');
const Learn38 = document.getElementById('Learn38');
const history39 = document.getElementById('history39');
const Learn39 = document.getElementById('Learn39');
const history40 = document.getElementById('history40');
const Learn40 = document.getElementById('Learn40');
const history41 = document.getElementById('history41');
const Learn41 = document.getElementById('Learn41');
const history42 = document.getElementById('history42');
const Learn42 = document.getElementById('Learn42');
const history43 = document.getElementById('history43');
const Learn43 = document.getElementById('Learn43');
const history44 = document.getElementById('history44');
const Learn44 = document.getElementById('Learn44');
const history45 = document.getElementById('history45');
const Learn45 = document.getElementById('Learn45');
const history46 = document.getElementById('history46');
const Learn46 = document.getElementById('Learn46');
const history47 = document.getElementById('history47');
const Learn47 = document.getElementById('Learn47');
const history48 = document.getElementById('history48');
const Learn48 = document.getElementById('Learn48');
const history49 = document.getElementById('history49');
const Learn49 = document.getElementById('Learn49');
const history50 = document.getElementById('history50');
const Learn50 = document.getElementById('Learn50');
const history51 = document.getElementById('history51');
const Learn51 = document.getElementById('Learn51');
const history52 = document.getElementById('history52');
const Learn52 = document.getElementById('Learn52');
const history53 = document.getElementById('history53');
const Learn53 = document.getElementById('Learn53');
const history54 = document.getElementById('history54');
const Learn54 = document.getElementById('Learn54');
const history55 = document.getElementById('history55');
const Learn55 = document.getElementById('Learn55');
const history56 = document.getElementById('history56');
const Learn56 = document.getElementById('Learn56');
const history57 = document.getElementById('history57');
const Learn57 = document.getElementById('Learn57');
const history58 = document.getElementById('history58');
const Learn58 = document.getElementById('Learn58');
const history59 = document.getElementById('history59');
const Learn59 = document.getElementById('Learn59');
const history60 = document.getElementById('history60');
const Learn60 = document.getElementById('Learn60');
const history61 = document.getElementById('history61');
const Learn61 = document.getElementById('Learn61');
const history62 = document.getElementById('history62');
const Learn62 = document.getElementById('Learn62');
const history63 = document.getElementById('history63');
const Learn63 = document.getElementById('Learn63');
const history64 = document.getElementById('history64');
const Learn64 = document.getElementById('Learn64');
const history65 = document.getElementById('history65');
const Learn65 = document.getElementById('Learn65');
const history66 = document.getElementById('history66');
const Learn66 = document.getElementById('Learn66');
const history67 = document.getElementById('history67');
const Learn67 = document.getElementById('Learn67');
const history68 = document.getElementById('history68');
const Learn68 = document.getElementById('Learn68');
const history69 = document.getElementById('history69');
const Learn69 = document.getElementById('Learn69');
const history70 = document.getElementById('history70');
const Learn70 = document.getElementById('Learn70');
const history71 = document.getElementById('history71');
const Learn71 = document.getElementById('Learn71');
const history72 = document.getElementById('history72');
const Learn72 = document.getElementById('Learn72');
const history73 = document.getElementById('history73');
const Learn73 = document.getElementById('Learn73');
const history74 = document.getElementById('history74');
const Learn74 = document.getElementById('Learn74');
const history75 = document.getElementById('history75');
const Learn75 = document.getElementById('Learn75');
const history76 = document.getElementById('history76');
const Learn76 = document.getElementById('Learn76');
const history77 = document.getElementById('history77');
const Learn77 = document.getElementById('Learn77');
const history78 = document.getElementById('history78');
const Learn78 = document.getElementById('Learn78');
const history79 = document.getElementById('history79');
const Learn79 = document.getElementById('Learn79');
const history80 = document.getElementById('history80');
const Learn80 = document.getElementById('Learn80');
const history81 = document.getElementById('history81');
const Learn81 = document.getElementById('Learn81');
const history82 = document.getElementById('history82');
const Learn82 = document.getElementById('Learn82');
const history83 = document.getElementById('history83');
const Learn83 = document.getElementById('Learn83');
const history84 = document.getElementById('history84');
const Learn84 = document.getElementById('Learn84');
const history85 = document.getElementById('history85');
const Learn85 = document.getElementById('Learn85');
const history86 = document.getElementById('history86');
const Learn86 = document.getElementById('Learn86');
const history87 = document.getElementById('history87');
const Learn87 = document.getElementById('Learn87');
const history88 = document.getElementById('history88');
const Learn88 = document.getElementById('Learn88');
const history89 = document.getElementById('history89');
const Learn89 = document.getElementById('Learn89');
const history90 = document.getElementById('history90');
const Learn90 = document.getElementById('Learn90');
const history91 = document.getElementById('history91');
const Learn91 = document.getElementById('Learn91');
const history92 = document.getElementById('history92');
const Learn92 = document.getElementById('Learn92');
const history93 = document.getElementById('history93');
const Learn93 = document.getElementById('Learn93');
const history94 = document.getElementById('history94');
const Learn94 = document.getElementById('Learn94');
const history95 = document.getElementById('history95');
const Learn95 = document.getElementById('Learn95');
const history96 = document.getElementById('history96');
const Learn96 = document.getElementById('Learn96');
const history97 = document.getElementById('history97');
const Learn97 = document.getElementById('Learn97');
const history98 = document.getElementById('history98');
const Learn98 = document.getElementById('Learn98');
const history99 = document.getElementById('history99');
const Learn99 = document.getElementById('Learn99');
const history100 = document.getElementById('history100');
const Learn100 = document.getElementById('Learn100');
const history101 = document.getElementById('history101');
const Learn101 = document.getElementById('Learn101');
const history102 = document.getElementById('history102');
const Learn102 = document.getElementById('Learn102');
const history103 = document.getElementById('history103');
const Learn103 = document.getElementById('Learn103');
const history104 = document.getElementById('history104');
const Learn104 = document.getElementById('Learn104');
const history105 = document.getElementById('history105');
const Learn105 = document.getElementById('Learn105');
const history106 = document.getElementById('history106');
const Learn106 = document.getElementById('Learn106');
const history107 = document.getElementById('history107');
const Learn107 = document.getElementById('Learn107');
const history108 = document.getElementById('history108');
const Learn108 = document.getElementById('Learn108');
const history109 = document.getElementById('history109');
const Learn109 = document.getElementById('Learn109');
const history110 = document.getElementById('history110');
const Learn110 = document.getElementById('Learn110');
const history111 = document.getElementById('history111');
const Learn111 = document.getElementById('Learn111');
const history112 = document.getElementById('history112');
const Learn112 = document.getElementById('Learn112');
const history113 = document.getElementById('history113');
const Learn113 = document.getElementById('Learn113');
const history114 = document.getElementById('history114');
const Learn114 = document.getElementById('Learn114');
const history115 = document.getElementById('history115');
const Learn115 = document.getElementById('Learn115');
const history116 = document.getElementById('history116');
const Learn116 = document.getElementById('Learn116');
const history117 = document.getElementById('history117');
const Learn117 = document.getElementById('Learn117');
const history118 = document.getElementById('history118');
const Learn118 = document.getElementById('Learn118');
const history119 = document.getElementById('history119');
const Learn119 = document.getElementById('Learn119');
const history120 = document.getElementById('history120');
const Learn120 = document.getElementById('Learn120');
const history121 = document.getElementById('history121');
const Learn121 = document.getElementById('Learn121');
const history122 = document.getElementById('history122');
const Learn122 = document.getElementById('Learn122');
const history123 = document.getElementById('history123');
const Learn123 = document.getElementById('Learn123');
const history124 = document.getElementById('history124');
const Learn124 = document.getElementById('Learn124');
const history125 = document.getElementById('history125');
const Learn125 = document.getElementById('Learn125');
const history126 = document.getElementById('history126');
const Learn126 = document.getElementById('Learn126');
const history127 = document.getElementById('history127');
const Learn127 = document.getElementById('Learn127');
const history128 = document.getElementById('history128');
const Learn128 = document.getElementById('Learn128');
const history129 = document.getElementById('history129');
const Learn129 = document.getElementById('Learn129');
const history130 = document.getElementById('history130');
const Learn130 = document.getElementById('Learn130');
const history131 = document.getElementById('history131');
const Learn131 = document.getElementById('Learn131');
const history132 = document.getElementById('history132');
const Learn132 = document.getElementById('Learn132');
const history133 = document.getElementById('history133');
const Learn133 = document.getElementById('Learn133');
const history134 = document.getElementById('history134');
const Learn134 = document.getElementById('Learn134');
const history135 = document.getElementById('history135');
const Learn135 = document.getElementById('Learn135');
const history136 = document.getElementById('history136');
const Learn136 = document.getElementById('Learn136');
const history137 = document.getElementById('history137');
const Learn137 = document.getElementById('Learn137');
const history138 = document.getElementById('history138');
const Learn138 = document.getElementById('Learn138');
const history139 = document.getElementById('history139');
const Learn139 = document.getElementById('Learn139');
const history140 = document.getElementById('history140');
const Learn140 = document.getElementById('Learn140');
const history141 = document.getElementById('history141');
const Learn141 = document.getElementById('Learn141');
const history142 = document.getElementById('history142');
const Learn142 = document.getElementById('Learn142');
const history143 = document.getElementById('history143');
const Learn143 = document.getElementById('Learn143');
const history144 = document.getElementById('history144');
const Learn144 = document.getElementById('Learn144');
const history145 = document.getElementById('history145');
const Learn145 = document.getElementById('Learn145');
const history146 = document.getElementById('history146');
const Learn146 = document.getElementById('Learn146');
const history147 = document.getElementById('history147');
const Learn147 = document.getElementById('Learn147');
const Teper = document.querySelectorAll('.Learn');

function funktsiya(Teper) {
    Teper.style.display = 'none'; 
}

history1.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn1.style.display = 'block';
});

history2.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn2.style.display = 'block';
});
history3.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn3.style.display = 'block';
});
history4.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn4.style.display = 'block';
});
history5.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn5.style.display = 'block';
});
history6.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn6.style.display = 'block';
});
history7.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn7.style.display = 'block';
});
history8.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn8.style.display = 'block';
});
history9.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn9.style.display = 'block';
});
history11.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn11.style.display = 'block';
});
history12.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn12.style.display = 'block';
});
history13.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn13.style.display = 'block';
});
history14.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn14.style.display = 'block';
});
history15.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn15.style.display = 'block';
});
history16.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn16.style.display = 'block';
});
history18.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn18.style.display = 'block';
});
history19.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn19.style.display = 'block';
});
history20.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn20.style.display = 'block';
});
history21.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn21.style.display = 'block';
});
history22.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn22.style.display = 'block';
});
history23.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn23.style.display = 'block';
});
history25.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn25.style.display = 'block';
});
history26.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn26.style.display = 'block';
});
history27.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn27.style.display = 'block';
});
history28.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn28.style.display = 'block';
});
history29.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn29.style.display = 'block';
});
history30.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn30.style.display = 'block';
});
history31.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn31.style.display = 'block';
});
history32.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn32.style.display = 'block';
});
history33.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn33.style.display = 'block';
});
history34.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn34.style.display = 'block';
});
history35.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn35.style.display = 'block';
});
history36.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn36.style.display = 'block';
});
history37.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn37.style.display = 'block';
});
history38.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn38.style.display = 'block';
});
history39.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn39.style.display = 'block';
});
history40.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn40.style.display = 'block';
});
history41.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn41.style.display = 'block';
});
history42.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn42.style.display = 'block';
});
history43.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn43.style.display = 'block';
});
history44.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn44.style.display = 'block';
});
history45.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn45.style.display = 'block';
});
history46.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn46.style.display = 'block';
});
history47.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn47.style.display = 'block';
});
history48.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn48.style.display = 'block';
});
history49.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn49.style.display = 'block';
});
history50.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn50.style.display = 'block';
});
history51.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn51.style.display = 'block';
});
history52.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn52.style.display = 'block';
});
history53.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn53.style.display = 'block';
});
history54.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn54.style.display = 'block';
});
history55.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn55.style.display = 'block';
});
history56.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn56.style.display = 'block';
});
history57.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn57.style.display = 'block';
});
history58.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn58.style.display = 'block';
});
history59.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn59.style.display = 'block';
});
history60.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn60.style.display = 'block';
});
history61.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn61.style.display = 'block';
});
history62.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn62.style.display = 'block';
});
history63.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn63.style.display = 'block';
});
history64.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn64.style.display = 'block';
});
history65.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn65.style.display = 'block';
});
history66.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn66.style.display = 'block';
});
history67.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn67.style.display = 'block';
});
history68.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn68.style.display = 'block';
});
history69.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn69.style.display = 'block';
});
history70.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn70.style.display = 'block';
});
// history71.addEventListener('click', () => {
//     Teper.forEach(funktsiya);
//     TakDobre.style.opacity = '20%';
//     TakDobre.style.transition = '.2s';
//     Learn71.style.display = 'block';
// });
history72.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn72.style.display = 'block';
});
history73.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn73.style.display = 'block';
});
history74.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn74.style.display = 'block';
});
history75.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn75.style.display = 'block';
});
history76.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn76.style.display = 'block';
});
history77.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn77.style.display = 'block';
});
history78.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn78.style.display = 'block';
});
history79.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn79.style.display = 'block';
});
history80.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn80.style.display = 'block';
});
history81.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn81.style.display = 'block';
});
history82.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn82.style.display = 'block';
});
history83.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn83.style.display = 'block';
});
history84.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn84.style.display = 'block';
});
history85.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn85.style.display = 'block';
});
history86.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn86.style.display = 'block';
});
history87.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn87.style.display = 'block';
});
history88.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn88.style.display = 'block';
});
history89.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn89.style.display = 'block';
});
history90.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn90.style.display = 'block';
});
history91.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn91.style.display = 'block';
});
history92.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn92.style.display = 'block';
});
history93.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn93.style.display = 'block';
});
history94.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn94.style.display = 'block';
});
history95.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn95.style.display = 'block';
});
history96.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn96.style.display = 'block';
});
history97.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn97.style.display = 'block';
});
history98.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn98.style.display = 'block';
});
history99.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn99.style.display = 'block';
});
history100.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn100.style.display = 'block';
});
history101.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn101.style.display = 'block';
});
history102.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn102.style.display = 'block';
});
history103.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn103.style.display = 'block';
});
history104.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn104.style.display = 'block';
});
history105.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn105.style.display = 'block';
});
history106.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn106.style.display = 'block';
});
history107.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn107.style.display = 'block';
});
history108.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn108.style.display = 'block';
});
history109.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn109.style.display = 'block';
});
history110.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn110.style.display = 'block';
});
history111.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn111.style.display = 'block';
});
history112.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn112.style.display = 'block';
});
history113.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn113.style.display = 'block';
});
history114.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn114.style.display = 'block';
});
history115.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn115.style.display = 'block';
});
history116.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn116.style.display = 'block';
});
history117.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn117.style.display = 'block';
});
history118.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn118.style.display = 'block';
});
history119.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn119.style.display = 'block';
});
history120.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn120.style.display = 'block';
});
history121.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn121.style.display = 'block';
});
history122.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn122.style.display = 'block';
});
history123.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn123.style.display = 'block';
});
history124.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn124.style.display = 'block';
});
history125.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn125.style.display = 'block';
});
history126.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn126.style.display = 'block';
});
history127.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn127.style.display = 'block';
});
history128.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn128.style.display = 'block';
});
history129.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn129.style.display = 'block';
});
history130.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn130.style.display = 'block';
});
history131.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn131.style.display = 'block';
});
history132.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn132.style.display = 'block';
});
history133.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn133.style.display = 'block';
});
history134.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn134.style.display = 'block';
});
history135.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn135.style.display = 'block';
});
history136.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn136.style.display = 'block';
});
history137.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn137.style.display = 'block';
});
history138.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn138.style.display = 'block';
});
history139.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn139.style.display = 'block';
});
history140.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn140.style.display = 'block';
});
history141.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn141.style.display = 'block';
});
history142.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn142.style.display = 'block';
});
history143.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn143.style.display = 'block';
});
history144.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn144.style.display = 'block';
});
history145.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn145.style.display = 'block';
});
history146.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn146.style.display = 'block';
});
history147.addEventListener('click', () => {
    Teper.forEach(funktsiya);
    TakDobre.style.opacity = '20%';
    TakDobre.style.transition = '.2s';
    Learn147.style.display = 'block';
});