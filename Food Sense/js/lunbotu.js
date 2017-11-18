let current=0;
let divs=document.querySelectorAll(".slides>div");
let lis=document.querySelectorAll(".nav>ul>li");
let as=document.querySelectorAll(".nav a");
let autoPlay=setInterval(play,4000);
let change=true;
function play() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.zIndex="";
        lis[i].style.backgroundColor="#EFF8F7";
        as[i].style.color='';
    }
    divs[(current+1)%divs.length].style.zIndex="1";
    current++;
    lis[current%divs.length].style.backgroundColor="#D9EFEC";
}
for(let i=0;i<lis.length;i++){
    lis[i].onclick=function(){
        clearInterval(play);
        current=i-1;
        play();
    };
}
for(let j=0;j<as.length;j++){
    as[j].onmouseover=function(){
        if(j!=(current%divs.length)){
            as[j].style.color="#EC6635";
        }
    };
    as[j].onmouseout=function () {
        as[j].style.color='';
    }
}