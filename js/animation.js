var anim = gsap.timeline({onComplete: animFinished});
var navLink = document.querySelectorAll('.navigation_block .view_item');
AOS.init({
    duration: 1000,
    delay: 100
});
document.addEventListener("DOMContentLoaded", function() {
    if(AOS) {
        $('.os-viewport').scroll(function () { AOS.refresh(); });
    }
});

$('.navigation_block a').on('click', function (e) {
    e.preventDefault();
    animationFunc();
});
window.addEventListener('load',e=>{
    console.log(document.title);
    if (document.title === 'What we do'){
        animationFunc();
    }
});

function animationFunc() {
    setTimeout(()=>{
        navLink.forEach(el => {
            el.classList.add('disabled');
        });
    },200);
    anim.from('.project_name', {opacity: 0, y: -100, duration: .3})
        .from('.project_img', {opacity: 0, y: -500, ease: "power3", duration: .5})
        .from('.project_description', {opacity: 0, y: -100, duration: .4})
        .from('.board_line', {opacity: 0, x: -100, duration: .3})
        .from('.first_text', {opacity: 0, y: -100, duration: .2})
        .from('.second_text', {opacity: 0, y: -100, duration: .4});
}


function animFinished() {
    navLink.forEach(el => {
        el.classList.remove('disabled');
    });
}