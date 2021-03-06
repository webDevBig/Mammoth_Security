var open_sub_menu = document.querySelectorAll('.open_sub_menu');
[].forEach.call(open_sub_menu, function (el) {
    el.onclick = function (e) {
        el.parentElement.querySelector('.mobile_sub_menu_box').classList.toggle('mobile_sub_menu_box_open')
        el.querySelector('.mobile_arrow').classList.toggle('arrow_transform')
        el.classList.toggle('active')
    }
});

var open_sub_sub_menu = document.querySelectorAll('.open_sub_sub_menu');
[].forEach.call(open_sub_sub_menu, function (el) {
    el.onclick = function (e) {
        el.parentElement.querySelector('.sub_menu').classList.toggle('sub_menu_open')
        el.querySelector('.mobile_arrow').classList.toggle('arrow_transform')

        el.classList.toggle('active')
    }
});



var applied = false;
let elem = document.getElementById("header");
var open_menu = document.querySelectorAll('.mobile_btn');
[].forEach.call(open_menu, function (el) {
    el.onclick = function (e) {
        let coords = elem.getBoundingClientRect();


        if (!applied) {

            document.querySelector(".line_nav_bottom").classList.toggle('open')
            document.querySelector("body").classList.toggle('body')

            el.classList.toggle('active')

            document.querySelector(".line_nav_bottom").style.transform = "translate3d(0," + coords.bottom + "px, 0"

            document.querySelector("nav.main_menu").style.height = "calc(100vh - " + coords.bottom + "px )"


            applied = true;

        } else { // and second click 

            document.querySelector(".line_nav_bottom").classList.toggle('open')
            document.querySelector("body").classList.toggle('body')

            el.classList.toggle('active')

            document.querySelector(".line_nav_bottom").style.transform = "translate3d(0, -120%, 0"

            applied = false;

        }
    }
});

//open  menu

document.querySelectorAll(".menu_item").forEach(
    box => eventListener(box))

function reveal(e, isEnter) {
    var element = document.getElementById("opened_menu_box");
    if (isEnter) element.classList.add("active");
    else element.classList.remove("active");

    console.log('event', e.getBoundingClientRect())
}

function eventListener(box) {
    box.addEventListener("mouseenter", () => reveal(box, true))
    box.addEventListener("mouseleave", () => reveal(box, false))


    document.getElementById("opened_menu_box").addEventListener("mouseenter", () => reveal(box, true));
    document.getElementById("opened_menu_box").addEventListener("mouseleave", () => reveal(box, false));
}


//open Security Cameras menu
document.querySelectorAll(".menu_item1").forEach(
    box1 => eventListener1(box1))

function reveal1(e, isEnter) {
    var element = document.getElementById("security_camera_menu");
    if (isEnter) element.classList.add("active");
    else element.classList.remove("active");
    console.log('event', e.getBoundingClientRect())
}

function eventListener1(box1) {
    box1.addEventListener("mouseenter", () => reveal1(box1, true))
    box1.addEventListener("mouseleave", () => reveal1(box1, false))
    document.getElementById("security_camera_menu").addEventListener("mouseenter", () => reveal1(box1, true));
    document.getElementById("security_camera_menu").addEventListener("mouseleave", () => reveal1(box1, false));
}


//open Access Control menu
document.querySelectorAll(".menu_item2").forEach(
    box2 => eventListener2(box2))

function reveal2(e, isEnter) {
    var element = document.getElementById("access_Control_menu");
    if (isEnter) element.classList.add("active");
    else element.classList.remove("active");
    console.log('event', e.getBoundingClientRect())
}

function eventListener2(box2) {
    box2.addEventListener("mouseenter", () => reveal2(box2, true))
    box2.addEventListener("mouseleave", () => reveal2(box2, false))

    document.getElementById("access_Control_menu").addEventListener("mouseenter", () => reveal2(box2, true));
    document.getElementById("access_Control_menu").addEventListener("mouseleave", () => reveal2(box2, false));
}



//open Structured Cabling menu
document.querySelectorAll(".menu_item3").forEach(
    box3 => eventListener3(box3))

function reveal3(e, isEnter) {
    var element = document.getElementById("structured_Cabling_menu");
    if (isEnter) element.classList.add("active");
    else element.classList.remove("active");
    //    console.log('event', e.getBoundingClientRect())
}

function eventListener3(box3) {
    box3.addEventListener("mouseenter", () => reveal3(box3, true))
    box3.addEventListener("mouseleave", () => reveal3(box3, false))
    document.getElementById("structured_Cabling_menu").addEventListener("mouseenter", () => reveal3(box3, true));
    document.getElementById("structured_Cabling_menu").addEventListener("mouseleave", () => reveal3(box3, false));
}



//open burglar Alarm menu
document.querySelectorAll(".menu_item4").forEach(
    box4 => eventListener4(box4))


function reveal4(e, isEnter) {
    var element = document.getElementById("burglar_Alarm_menu");
    if (isEnter) element.classList.add("active");
    else element.classList.remove("active");
    console.log('event', e.getBoundingClientRect())
}

function eventListener4(box4) {
    box4.addEventListener("mouseenter", () => reveal4(box4, true))
    box4.addEventListener("mouseleave", () => reveal4(box4, false))
    document.getElementById("burglar_Alarm_menu").addEventListener("mouseenter", () => reveal4(box4, true));
    document.getElementById("burglar_Alarm_menu").addEventListener("mouseleave", () => reveal4(box4, false));
}

//open fire Alarm menu
document.querySelectorAll(".menu_item5").forEach(
    box5 => eventListener5(box5))

function reveal5(e, isEnter) {
    var element = document.getElementById("fire_Alarm_menu");
    if (isEnter) element.classList.add("active");
    else element.classList.remove("active");
    console.log('event', e.getBoundingClientRect())
}

function eventListener5(box5) {
    box5.addEventListener("mouseenter", () => reveal5(box5, true))
    box5.addEventListener("mouseleave", () => reveal5(box5, false))
    document.getElementById("fire_Alarm_menu").addEventListener("mouseenter", () => reveal5(box5, true));
    document.getElementById("fire_Alarm_menu").addEventListener("mouseleave", () => reveal5(box5, false));
}

$('.security_cameras_link').click(function () {
    document.location.href = "security_access_page.html";
})


var choose_category = document.querySelectorAll('.category');
[].forEach.call(choose_category, function (el) {
    el.onclick = function (e) {
       
        el.classList.toggle('active')
    }
});
