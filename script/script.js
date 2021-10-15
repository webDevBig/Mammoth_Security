

var open_menu = document.querySelectorAll('.mobile_btn');
[].forEach.call(open_menu, function (el) {
    el.onclick = function (e) {
        document.querySelector(".main_menu").classList.toggle('mobile_menu_open');
        document.querySelector("body").classList.toggle('body')
    }
});
var close_menu = document.querySelectorAll('.close_menu');
[].forEach.call(close_menu, function (el) {
    el.onclick = function (e) {
        document.querySelector(".main_menu").classList.toggle('mobile_menu_open');
        document.querySelector("body").classList.toggle('body')
    }
});



document.querySelectorAll(".hoverable").forEach(
    box => eventListener(box))

function reveal(e, isEnter) {
    var element = document.getElementById("menu");
    if (isEnter) element.classList.add("active");
    else element.classList.remove("active");
    console.log('event', e.getBoundingClientRect())
}

function eventListener(box) {
    box.addEventListener("mouseenter", () => reveal(box, true))
    box.addEventListener("mouseleave", () => reveal(box, false))

    document.getElementById("menu").addEventListener("mouseenter", () => reveal(box, true));
    document.getElementById("menu").addEventListener("mouseleave", () => reveal(box, false));
}


document.querySelectorAll(".hoverable2").forEach(
    box => eventListener2(box))

function reveal2(e, isEnter) {
    var element = document.getElementById("menu2");
    if (isEnter) element.classList.add("active");
    else element.classList.remove("active");
    console.log('event', e.getBoundingClientRect())
}

function eventListener2(box) {
    box.addEventListener("mouseenter", () => reveal2(box, true))
    box.addEventListener("mouseleave", () => reveal2(box, false))

    document.getElementById("menu2").addEventListener("mouseenter", () => reveal2(box, true));
    document.getElementById("menu2").addEventListener("mouseleave", () => reveal2(box, false));
}


var open_sub_menu = document.querySelectorAll('.open_sub_menu');
[].forEach.call(open_sub_menu, function (el) {
    el.onclick = function (e) {
        el.parentElement.querySelector('.sub_menu').classList.toggle('sub_menu_open')
        el.classList.toggle('arrow_transform')
    }
});

//$('.open_sub_menu_security').click(function(){
//    $(this).find('.sub_menu').toggleClass('active')
//})
