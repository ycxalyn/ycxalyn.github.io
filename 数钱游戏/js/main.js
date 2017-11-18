let start = document.querySelector(".start");
let ranks = document.querySelectorAll(".ranking");
let activities = document.querySelectorAll(".activity");
let prizes = document.querySelectorAll(".prize");
let used = document.querySelectorAll(".use");
let p1 = document.querySelector(".p1_mask");
let close = document.querySelector(".close");
let ranking = document.querySelector("#ranking");
let rules = document.querySelector("#rules");
let dprize = document.querySelector("#prize");
let uses = document.querySelector("#uses");
let rankingclose = document.querySelector("#ranking>.close");
let rulesclose = document.querySelector("#rules>.close");
let prizeclose = document.querySelector("#prize>.close");
let usesclose = document.querySelector("#uses>.close");
let btn = document.querySelector(".btn");
let p2 = document.querySelector(".p2");
let p = document.querySelector(".p1");
let p3 = document.querySelector(".p3");
let share_btn = document.querySelector(".share_btn");
let again_btn = document.querySelector(".again_btn");
let share = document.querySelector("#share");
//开始按钮
let hammerstart = new Hammer(start);
hammerstart.on("tap", function () {
    p1.style.display = "block";
});
//关闭个人信息弹窗
let hammerclose = new Hammer(close);
hammerclose.on("tap", function () {
    p1.style.display = "none";
});
//数钱榜
for (let rank of ranks) {
    let hammerrank = new Hammer(rank);
    hammerrank.on("tap", function () {
        ranking.style.display = "block";
    });
}
//关闭数钱榜弹窗
let hammerrankingclose = new Hammer(rankingclose);
hammerrankingclose.on("tap", function () {
    ranking.style.display = "none";
});
//活动规则
for (let activity of activities) {
    let hammeractivity = new Hammer(activity);
    hammeractivity.on("tap", function () {
        rules.style.display = "block";
    });
}
//关闭活动规则弹窗
let hammerrulesclose = new Hammer(rulesclose);
hammerrulesclose.on("tap", function () {
    rules.style.display = "none";
});
//  活动奖品
for (let prize of prizes) {
    let hammerprize = new Hammer(prize);
    hammerprize.on("tap", function () {
        dprize.style.display = "block";
    });
}
//关闭活动奖品弹窗
let hammerprizeclose = new Hammer(prizeclose);
hammerprizeclose.on("tap", function () {
    dprize.style.display = "none";
});
//奖券使用说明
for (let use of used) {
    let hammeruse = new Hammer(use);
    hammeruse.on("tap", function () {
        uses.style.display = "block";
    });
}
//关闭奖券使用说明弹窗
let hammerusesclose = new Hammer(usesclose);
hammerusesclose.on("tap", function () {
    uses.style.display = "none";
});
//提交并开始游戏
let hammerbtn = new Hammer(btn);
hammerbtn.on("tap", function () {
    p.style.display = "none";
    p2.style.display = "block";
});
//点击分享
let hammershareBtn = new Hammer(share_btn);
hammershareBtn.on("tap", function () {
    share.style.display = "block"
});
//点击隐藏分享
let hammershare = new Hammer(share);
hammershare.on("tap", function () {
    share.style.display = "none"
});
//点击再来一次
let hammeragain = new Hammer(again_btn);
hammeragain.on("tap", function () {
    p.style.display = "block";
    p3.style.display = "none";
});
//轮播
let i = 0;
let txt = document.querySelector(".txt");
let arr = ["img/p2_txt1.png", "img/p2_txt2.png", "img/p2_txt3.png"];
setTimeout(function step() {
    txt.src = `${arr[i % arr.length]}`;
    i++;
    setTimeout(step, 2500)
}, 2500);

//滑钱
let img = document.querySelector(".money_wrap>img");
var box = document.querySelector(".money_wrap");
let hammer = new Hammer(img);
hammer.get('pan').set({direction: Hammer.DIRECTION_ALL});
let isMove = true;
//时钟计时
let clock = document.querySelector(".clock");
let result_num = document.querySelector(".result_num");
let time_num = document.querySelectorAll(".time_num");
let min = 1;
let moneyNum = 0;
let time = 60;
let touch=false;
hammer.on("panup", function () {
    touch=true;
    if (!isMove) {
        return;
    }
    result_num.innerHTML = "";
    let newImg = document.createElement("img");
    newImg.src = "img/p2_qian.jpg";
    newImg.className = "img_animate";
    newImg.addEventListener("animationend", function () {
        box.removeChild(newImg);
    });
    box.appendChild(newImg);
    isMove = false;
    moneyNum++;
    result_num.innerHTML = '￥' + moneyNum;
    let moneyNumStr = String(moneyNum);
    for (var i = 0; i < moneyNumStr.length; i++) {
        time_num[time_num.length - i - 1].innerHTML = moneyNumStr[moneyNumStr.length - i - 1];
    }
    hammer.on("panend", function () {
        isMove = true;
    });
});
let cacl = setInterval(function begain() {
    if(touch) {
            time--;
            if (time < 0) {
                clearInterval(cacl);
                p2.style.display = "none";
                p3.style.display = "block";
                time = 60;
                cacl = setInterval(begain, 1000);
                touch=false;
                for(var num of time_num){
                    num.innerHTML=0;
                }
                moneyNum=0;
            }
        clock.innerHTML = time;
    }
}, 1000);