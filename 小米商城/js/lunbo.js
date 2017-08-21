 var menu=document.querySelector(".menu_right");
    var imgs=document.querySelectorAll(".menu_right img");
    var lis=document.querySelectorAll("ol li");
    var left=document.querySelector(".menuMiddle_left");
    var right=document.querySelector(".menuMiddle_right");
    for(let i=0;i<imgs.length;i++){
        if(i==0){
            imgs[i].style.zIndex=1;
        }else{
            imgs[i].style.zIndex=0;
        }
    }
    menu.onmouseover=function(){
        clearInterval(a);
    };
    menu.onmouseout=function(){
        a=setInterval(step,1500);
    };
    var time=1000;
    var i=0;
    var b;
    var a=setInterval(step,1500);
    function step() {
        lis[i%6].style.backgroundColor="";
        imgs[i % 6].style.zIndex=0;
        imgs[(i + 1) % 6].style.zIndex= 1;
        if (imgs[i % 6].style.zIndex == 0) {
            i++;
            time = 1500;
        }
        lis[i%6].style.backgroundColor="#EFE8DE";
    }
    for(let i=0;i<lis.length;i++){
        lis[i].onmouseover=function () {
           for(let i=0;i<lis.length;i++){
               lis[i].style.backgroundColor="";
               imgs[i].style.zIndex="";
           }
           lis[i].style.backgroundColor="#EFE8DE";
            imgs[i].style.zIndex=1;
            clearInterval(a);
            clearInterval(b);
        };
        lis[i].onmouseout=function (){
            let index=i;
            b=setInterval(function () {
                lis[index%6].style.backgroundColor="";
                imgs[index%6].style.zIndex="";
                index++;
                lis[index%6].style.backgroundColor="#EFE8DE";
                imgs[index%6].style.zIndex=1;
            },2000);
        }
    }