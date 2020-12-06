var numsquares=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.getElementById("reset");
var modeBtn=document.querySelectorAll(".mode");


for(var i=0;i<modeBtn.length;i++)
{
    modeBtn[i].addEventListener("click",function(){
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent==="EASY"?numsquares=3:numsquares=6;
        reset();
    });
}

function reset(){
    colors=generateRandomColors(numsquares);
    pickedColor=pickcolor();
    colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors";
    messageDisplay.textContent="";
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
        
    }
    h1.style.backgroundColor="steelblue";
}

resetButton.addEventListener("click",function(){
    reset();
});

colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor){
            messageDisplay.textContent="Correct!";
            colorchange(clickedColor);
            h1.style.backgroundColor=clickedColor;
            resetButton.textContent="PLAY AGAIN!?";
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again!";
        }
    });
}

function colorchange(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickcolor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomColors());
    }
    return arr;
}

function randomColors(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}