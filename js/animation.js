var anim = gsap.timeline({onComplete: animFinished}),
    navBarAnim = gsap.timeline(),
    navLink = document.querySelectorAll('.navigation_block .view_item'),
    itemLink = document.querySelectorAll('.view_item .nav-link'),
    tabPane = document.querySelectorAll('.tab-pane'),
    whatWeDo = document.querySelector('.what_we_do'),
    stopIteration = false,
    iter = 0,
    count = 1;
AOS.init({
    duration: 1000,
    delay: 100
});

document.addEventListener("DOMContentLoaded", function () {
    if (AOS) {
        $('.os-viewport').scroll(function () {
            AOS.refresh();
            if ($(this).scrollTop() > 100) {
                $('.nav-list').css('display', 'none');
                $('.nav-toggle').css('display', 'block');
                if (iter === 0) {
                    iter++;
                    navBarAnim.from('.nav-list', {opacity: 0, x: 100, duration: .3})
                        .from('.nav-toggle', {opacity: 0, x: 100, duration: .2});
                }
            } else {
                $('.nav-list').css('display', '');
                $('.nav-toggle').css('display', '');
                if (iter === 1) {
                    iter--;
                    navBarAnim.from('.nav-list', {opacity: 0, x: -100, duration: .3})
                        .from('.nav-toggle', {opacity: 0, x: 100, duration: .2});
                }
            }
        });
    }
});
var isActive = true;
whatWeDo.addEventListener("mousewheel", e => {

    if (stopIteration){
        if (e.deltaY > 0){
            if (count < itemLink.length){
                stopIteration = false;
                isActive = true;
                itemLink.forEach((el,idx) =>{
                    if (isActive){
                        if (el.className === 'nav-link active') {
                            itemLink[idx].className = 'nav-link';
                            itemLink[idx + 1].className = 'nav-link active';
                            tabPane[idx].className = 'tab-pane fade';
                            tabPane[idx + 1].className = 'tab-pane fade show active';
                            isActive = false;
                            count++;
                        }
                    }
                });
                animationFunc();
            }

        }else if (e.deltaY < 0){
            if (count > 1){
                stopIteration = false;
                isActive = true;
                itemLink.forEach((el,idx) =>{
                    if (isActive){
                        if (el.className === 'nav-link active') {
                            itemLink[idx].className = 'nav-link';
                            itemLink[idx - 1].className = 'nav-link active';
                            tabPane[idx].className = 'tab-pane fade';
                            tabPane[idx - 1].className = 'tab-pane fade show active';
                            isActive = false;
                            count--;
                        }
                    }
                });
                animationFunc();
            }
        }
    }

});

$('.navigation_block a').on('click', function (e) {
    e.preventDefault();
    animationFunc();
});
window.addEventListener('load', e => {

    if (document.title === 'What we do') {
        animationFunc();
    }
});

function animationFunc() {
    setTimeout(() => {
        navLink.forEach(el => {
            el.classList.add('disabled');
        });
    }, 200);
    anim.from('.project_name', {opacity: 0, y: -100, duration: .3})
        .from('.project_img', {opacity: 0, y: -500, ease: "power3", duration: .5})
        .from('.project_description', {opacity: 0, y: -100, duration: .4})
        .from('.board_line', {opacity: 0, x: -100, duration: .3})
        .from('.first_text', {opacity: 0, y: -100, duration: .2})
        .from('.second_text', {opacity: 0, y: -100, duration: .4});
}


function animFinished() {
    stopIteration = true;
    navLink.forEach(el => {
        el.classList.remove('disabled');
    });
}
