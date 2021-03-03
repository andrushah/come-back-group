// доступ до елементів
let progress = document.querySelectorAll(".progress");
let pr1 = progress[0];
let pr2 = progress[1];
let pr3 = progress[2];
let pr4 = progress[3];
let pr5 = progress[4];
let pr6 = progress[5];

let radius = pr1.r.baseVal.value;
// Довжина дуги кола = 2πr;
let circumference = radius * 2 * Math.PI;

pr1.style.strokeDasharray = circumference;
pr2.style.strokeDasharray = circumference;
pr3.style.strokeDasharray = circumference;
pr4.style.strokeDasharray = circumference;
pr5.style.strokeDasharray = circumference;
pr6.style.strokeDasharray = circumference;

function setProgress(pr, percent) {
    if(pr){
        pr.style.strokeDashoffset = circumference - (percent / 100) * circumference;
    }
}

let sec = 100/6;
setProgress(pr1, sec);
setProgress(pr2, sec*2);
setProgress(pr3, sec*3);
setProgress(pr4, sec*4);
setProgress(pr5, sec*5);
setProgress(pr6, sec*6);


