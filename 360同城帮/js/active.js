var lis=document.querySelectorAll(".side_show>ul>li");  //获取轮播图的每一个图片的父节点
var ban=document.querySelectorAll(".banner>ul>li");//获取指示器
var ul=document.querySelector(".side_show>ul");
var bul=document.querySelector(".banner>ul");
var tlis=document.querySelectorAll(".top>ul>li");
var btn=document.querySelector(".btn");
var blank=document.querySelector(".blank");
var close=document.querySelector(".close");
/*鼠标移入显示边框,移出消失*/
for(let li of tlis){
    li.onmouseover=function () {
        li.style.backgroundColor="rgb(244,244,244)";
    };
    li.onmouseout=function(){
        li.style.backgroundColor="";
    }
}
/*图片和指示器的初始化*/
init();
function init() {
    for(var i=0;i<lis.length;i++){
        if(i==0){
            lis[i].style.zIndex=1;
            ban[i].style.backgroundColor="rgb(51,51,51)";
        }else{
            lis[i].style.zIndex=0;
            ban[i].style.backgroundColor="";
        }
    }
}

/*让图片和指示器动起来*/
var i=0;
var a=setInterval(move,1800);
function move(){
    lis[i%5].style.zIndex=0;
    ban[i%5].style.backgroundColor="";
    lis[(i+1)%5].style.zIndex=1;
    ban[(i+1)%5].style.backgroundColor="rgb(51,51,51)";
    if(lis[i%5].style.zIndex==0){
        i++;
    }
};

/*清除当前样式*/
function remove() {
    for (let i = 0; i < ban.length; i++) {
        lis[i].style.zIndex = 0;
        ban[i].style.backgroundColor = "";
    }
}
/*点击指示器,跳转到相应的图片*/
function drop(){
    for(let i=0;i<ban.length;i++){
        ban[i].onclick=function(){
            remove();
            lis[i].style.zIndex=1;
            ban[i].style.backgroundColor="rgb(51,51,51)";
        }
    }
}

/*轮播图的鼠标移入暂停,移除播放事件*/
ul.onmouseover=function(){
    clearInterval(a);
    bul.onmouseover=function(){
        clearInterval(a);
    };
    drop();
};
ul.onmouseout=function () {
    a=setInterval(move,1800);
};


btn.onclick=function(){
    blank.style.display="block"
};
close.onclick=function(){
    blank.style.display="none";
};
close.onmouseover=function(){
    close.style.cursor="pointer";
}