var box = document.getElementById("content");
var boxColors = ["red", "grey", "green", "pink", "peru", "cornflowerblue", "brown", "orange"];
var textColors = ["white", "black", "yellow", "grey", "green", "white", "white", "white"];
var time = 0;

function changeColors(){
    if(time >= boxColors.length){
        time = 0;
    }
    box.style.background = boxColors[time];
    box.style.color = textColors[time];
    time++;
};
setInterval(changeColors, 3000);
