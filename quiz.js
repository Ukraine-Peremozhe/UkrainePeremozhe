const extraAn = document.querySelectorAll('.extraAn');
const correct = document.querySelectorAll('.correct');
const Score = document.getElementById('Score');
const yourScore = document.getElementById('yourScore');
const inlineQP = document.querySelectorAll('.inlineQP');
const allQP = document.querySelectorAll('.allQP');
const correctQP = [];
const Q1 = document.getElementById('Q1');
const Q2 = document.getElementById('Q2');
const Q3 = document.getElementById('Q3');
const Q4 = document.getElementById('Q4');
const Q5 = document.getElementById('Q5');
const Q6 = document.getElementById('Q6');
const Q7 = document.getElementById('Q7');
const Q8 = document.getElementById('Q8');
const Q9 = document.getElementById('Q9');
const Q10 = document.getElementById('Q10');
const Q11 = document.getElementById('Q11');
const Q12 = document.getElementById('Q12');
const Q13 = document.getElementById('Q13');
const Q14 = document.getElementById('Q14');
const Q15 = document.getElementById('Q15');
const Q16 = document.getElementById('Q16');
const Q17 = document.getElementById('Q17');
const Q18 = document.getElementById('Q18');
const Q19 = document.getElementById('Q19');
const Q20 = document.getElementById('Q20');
const Q21 = document.getElementById('Q21');
const Q22 = document.getElementById('Q22');
const Q23 = document.getElementById('Q23');
const Q24 = document.getElementById('Q24');
const Q25 = document.getElementById('Q25');
const QP1 = document.getElementById('QP1');
const QP2 = document.getElementById('QP2');
const QP3 = document.getElementById('QP3');
const QP4 = document.getElementById('QP4');
const QP5 = document.getElementById('QP5');
const QP6 = document.getElementById('QP6');
const QP7 = document.getElementById('QP7');
const QP8 = document.getElementById('QP8');
const QP9 = document.getElementById('QP9');
const QP10 = document.getElementById('QP10');
const QP11 = document.getElementById('QP11');
const QP12 = document.getElementById('QP12');
const QP13 = document.getElementById('QP13');
const QP14 = document.getElementById('QP14');
const QP15 = document.getElementById('QP15');
const QP16 = document.getElementById('QP16');
const QP17 = document.getElementById('QP17');
const QP18 = document.getElementById('QP18');
const QP19 = document.getElementById('QP19');
const QP20 = document.getElementById('QP20');
const QP21 = document.getElementById('QP21');
const QP22 = document.getElementById('QP22');
const QP23 = document.getElementById('QP23');
const QP24 = document.getElementById('QP24');
const QP25 = document.getElementById('QP25');
const C1 = document.querySelector('.C1');
const C2 = document.querySelector('.C2');
const C3 = document.querySelector('.C3');
const C4 = document.querySelector('.C4');
const C5 = document.querySelector('.C5');
const C6 = document.querySelector('.C6');
const C7 = document.querySelector('.C7');
const C8 = document.querySelector('.C8');
const C9 = document.querySelector('.C9');
const C10 = document.querySelector('.C10');
const C11 = document.querySelector('.C11');
const C12 = document.querySelector('.C12');
const C13 = document.querySelector('.C13');
const C14 = document.querySelector('.C14');
const C15 = document.querySelector('.C15');
const C16 = document.querySelector('.C16');
const C17 = document.querySelector('.C17');
const C18 = document.querySelector('.C18');
const C19 = document.querySelector('.C19');
const C20 = document.querySelector('.C20');
const C21 = document.querySelector('.C21');
const C22 = document.querySelector('.C22');
const C23 = document.querySelector('.C23');
const C24 = document.querySelector('.C24');
const C25 = document.querySelector('.C25');
let points = 0;

for (i = 0; i < correct.length; i++) {
	correct[i].addEventListener('click', () => {
		points = points + 1;
		console.log(points);
	});
};

C1.addEventListener('click', () => {
	correctQP.push(QP1);
});
C2.addEventListener('click', () => {
	correctQP.push(QP2);
});
C3.addEventListener('click', () => {
	correctQP.push(QP3);
});
C4.addEventListener('click', () => {
	correctQP.push(QP4);
});
C5.addEventListener('click', () => {
	correctQP.push(QP5);
});
C6.addEventListener('click', () => {
	correctQP.push(QP6);
});
C7.addEventListener('click', () => {
	correctQP.push(QP7);
});
C8.addEventListener('click', () => {
	correctQP.push(QP8);
});
C9.addEventListener('click', () => {
	correctQP.push(QP9);
});
C10.addEventListener('click', () => {
	correctQP.push(QP10);
});
C11.addEventListener('click', () => {
	correctQP.push(QP11);
});
C12.addEventListener('click', () => {
	correctQP.push(QP12);
});
C13.addEventListener('click', () => {
	correctQP.push(QP13);
});
C14.addEventListener('click', () => {
	correctQP.push(QP14);
});
C15.addEventListener('click', () => {
	correctQP.push(QP15);
});
C16.addEventListener('click', () => {
	correctQP.push(QP16);
});
C17.addEventListener('click', () => {
	correctQP.push(QP17);
});
C18.addEventListener('click', () => {
	correctQP.push(QP18);
});
C19.addEventListener('click', () => {
	correctQP.push(QP19);
});
C20.addEventListener('click', () => {
	correctQP.push(QP20);
});
C21.addEventListener('click', () => {
	correctQP.push(QP21);
});
C22.addEventListener('click', () => {
	correctQP.push(QP22);
});
C23.addEventListener('click', () => {
	correctQP.push(QP23);
});
C24.addEventListener('click', () => {
	correctQP.push(QP24);
});
C25.addEventListener('click', () => {
	correctQP.push(QP25);
});

// Block elements //

for(i = 0; i < extraAn.length; i++) {
	extraAn[i].addEventListener('click', () => {
		if (window.getComputedStyle(Q1).display === "block") {
            Q1.style.display = 'none';
            Q2.style.display = 'block';
            QP1.style.background = 'rgb(255,255,255)';
            QP1.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP2.style.background = 'rgb(255,183,98)';
            QP2.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q2).display === "block") {
            Q2.style.display = 'none';
            Q3.style.display = 'block';
            QP2.style.background = 'rgb(255,255,255)';
            QP2.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP3.style.background = 'rgb(255,183,98)';
            QP3.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q3).display === "block") {
            Q3.style.display = 'none';
            Q4.style.display = 'block';
            QP3.style.background = 'rgb(255,255,255)';
            QP3.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP4.style.background = 'rgb(255,183,98)';
            QP4.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q4).display === "block") {
            Q4.style.display = 'none';
            Q5.style.display = 'block';
            QP4.style.background = 'rgb(255,255,255)';
            QP4.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP5.style.background = 'rgb(255,183,98)';
            QP5.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q5).display === "block") {
            Q5.style.display = 'none';
            Q6.style.display = 'block';
            QP5.style.background = 'rgb(255,255,255)';
            QP5.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP6.style.background = 'rgb(255,183,98)';
            QP6.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q6).display === "block") {
            Q6.style.display = 'none';
            Q7.style.display = 'block';
            QP6.style.background = 'rgb(255,255,255)';
            QP6.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP7.style.background = 'rgb(255,183,98)';
            QP7.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q7).display === "block") {
            Q7.style.display = 'none';
            Q8.style.display = 'block';
            QP7.style.background = 'rgb(255,255,255)';
            QP7.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP8.style.background = 'rgb(255,183,98)';
            QP8.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q8).display === "block") {
            Q8.style.display = 'none';
            Q9.style.display = 'block';
            QP8.style.background = 'rgb(255,255,255)';
            QP8.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP9.style.background = 'rgb(255,183,98)';
            QP9.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q9).display === "block") {
            Q9.style.display = 'none';
            Q10.style.display = 'block';
            QP9.style.background = 'rgb(255,255,255)';
            QP9.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP10.style.background = 'rgb(255,183,98)';
            QP10.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q10).display === "block") {
            Q10.style.display = 'none';
            Q11.style.display = 'block';
            QP10.style.background = 'rgb(255,255,255)';
            QP10.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP11.style.background = 'rgb(255,183,98)';
            QP11.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q11).display === "block") {
            Q11.style.display = 'none';
            Q12.style.display = 'block';
            QP11.style.background = 'rgb(255,255,255)';
            QP11.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP12.style.background = 'rgb(255,183,98)';
            QP12.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q12).display === "block") {
            Q12.style.display = 'none';
            Q13.style.display = 'block';
            QP12.style.background = 'rgb(255,255,255)';
            QP12.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP13.style.background = 'rgb(255,183,98)';
            QP13.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q13).display === "block") {
            Q13.style.display = 'none';
            Q14.style.display = 'block';
            QP13.style.background = 'rgb(255,255,255)';
            QP13.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP14.style.background = 'rgb(255,183,98)';
            QP14.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q14).display === "block") {
            Q14.style.display = 'none';
            Q15.style.display = 'block';
            QP14.style.background = 'rgb(255,255,255)';
            QP14.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP15.style.background = 'rgb(255,183,98)';
            QP15.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q15).display === "block") {
            Q15.style.display = 'none';
            Q16.style.display = 'block';
            QP15.style.background = 'rgb(255,255,255)';
            QP15.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP16.style.background = 'rgb(255,183,98)';
            QP16.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q16).display === "block") {
            Q16.style.display = 'none';
            Q17.style.display = 'block';
            QP16.style.background = 'rgb(255,255,255)';
            QP16.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP17.style.background = 'rgb(255,183,98)';
            QP17.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q17).display === "block") {
            Q17.style.display = 'none';
            Q18.style.display = 'block';
            QP17.style.background = 'rgb(255,255,255)';
            QP17.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP18.style.background = 'rgb(255,183,98)';
            QP18.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q18).display === "block") {
            Q18.style.display = 'none';
            Q19.style.display = 'block';
            QP18.style.background = 'rgb(255,255,255)';
            QP18.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP19.style.background = 'rgb(255,183,98)';
            QP19.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q19).display === "block") {
            Q19.style.display = 'none';
            Q20.style.display = 'block';
            QP19.style.background = 'rgb(255,255,255)';
            QP19.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP20.style.background = 'rgb(255,183,98)';
            QP20.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q20).display === "block") {
            Q20.style.display = 'none';
            Q21.style.display = 'block';
            QP20.style.background = 'rgb(255,255,255)';
            QP20.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP21.style.background = 'rgb(255,183,98)';
            QP21.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q21).display === "block") {
            Q21.style.display = 'none';
            Q22.style.display = 'block';
            QP21.style.background = 'rgb(255,255,255)';
            QP21.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP22.style.background = 'rgb(255,183,98)';
            QP22.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q22).display === "block") {
            Q22.style.display = 'none';
            Q23.style.display = 'block';
            QP22.style.background = 'rgb(255,255,255)';
            QP22.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP23.style.background = 'rgb(255,183,98)';
            QP23.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q23).display === "block") {
            Q23.style.display = 'none';
            Q24.style.display = 'block';
            QP23.style.background = 'rgb(255,255,255)';
            QP23.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP24.style.background = 'rgb(255,183,98)';
            QP24.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q24).display === "block") {
            Q24.style.display = 'none';
            Q25.style.display = 'block';
            QP24.style.background = 'rgb(255,255,255)';
            QP24.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            QP25.style.background = 'rgb(255,183,98)';
            QP25.style.background = 'radial-gradient(circle, rgba(255,183,98,1) 0%, rgba(255,147,0,1) 100%)';
        } else
        if (window.getComputedStyle(Q25).display === "block") {
            Q25.style.display = 'none';
            Score.style.display = 'block';
            QP25.style.background = 'rgb(255,255,255)';
            QP25.style.background = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(218,230,230,1) 100%)';
            yourScore.textContent = `${(points/25*100).toFixed(0)}%`;
                for (i = 0; i < extraAn.length; i++) {
                	if (!correctQP.includes(inlineQP[i])) {
                		inlineQP[i].style.background = 'rgb(255,132,114)';
                		inlineQP[i].style.background = 'radial-gradient(circle, rgba(255,132,114,1) 0%, rgba(191,46,21,1) 100%)';
                	} else
                	    correctQP.forEach(colorGreen)
                        function colorGreen(item) {
                    	    item.style.background = 'rgb(151,255,131)';
            	            item.style.background = 'radial-gradient(circle, rgba(151,255,131,1) 0%, rgba(127,222,39,1) 100%)';
                        }
                };
                
        };
	});
};