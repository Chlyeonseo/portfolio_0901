let backs = document.querySelectorAll(".back .backAll");
console.log(backs);
let backs_arr = Array.from(backs);
let inner = document.querySelector(".inner");

let inner_scr = 0;
let posArr = [];

function setPos(){
    for(let el of backs_arr){
        posArr.push(el.offsetTop);
    }
}
setPos();
console.log(posArr);

inner_scr = inner.offsetTop;
console.log(inner_scr);


window.addEventListener("scroll",(e)=>{
    let scroll = window.scrollY || window.pageYOffset
    || document.documentElement.scrollTop;
    console.log(scroll);

    backs_arr.map((el,index)=>{

        if (scroll >= posArr[index] - 700) {
            backs_arr[index].classList.add("on");
        }

    })

    if(scroll >= inner_scr - 500){
        inner.classList.remove("off");
        inner.classList.add("on");
    }
    if(scroll < inner_scr - 500){
        inner.classList.remove("on");
        inner.classList.add("off");
    }
    //속도감 주는 법 물어보기!!!!
})