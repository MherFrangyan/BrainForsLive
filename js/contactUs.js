let changeText = gsap.timeline(),
    navBarAnim = gsap.timeline(),
    iter = 0,
    helloArray = [
        'բարև', ' Hi', 'Привет', 'Привіт', '¡Hola!', 'Bonjour', 'สวัสดี',
        'مرحبا', 'سلام', 'Ciao', 'Hallo', '你好', 'Cześć', 'Terve',];

if (location.pathname === "/BrainForsLive/contactUs.html") {
    var hiBlock = document.querySelector('.hi_content');
    let i = 0;
    let lastI = helloArray.length;

    function loopFuncChangeText() {
        changeText.from('.hi_content', {duration: .5, scale: 0, opacity: 0});
        hiBlock.innerHTML = helloArray[i];
        i++;
        if (i === lastI) {
            i = 0;
        }
        setTimeout(() => {
            loopFuncChangeText()
        }, 1500)

    }

    loopFuncChangeText()

    // setInterval(() => {
    //     changeText.from('.hi_content', {duration: .5, scale: 0, opacity: 0});
    //     hiBlock.innerHTML = helloArray[i];
    //     i++;
    //     if (i === lastI) {
    //         i = 0;
    //     }
    // }, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
    $('.os-viewport').scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.nav-list').css('display', 'none');
            $('.nav-toggle').css('display', 'block');
            if (iter === 0) {
                iter++;
                navBarAnim.from('.nav-list', {opacity: 0, x: 100, duration: .3})
                    .from('.nav-toggle', {opacity: 0, x: 100, duration: .3});
            }
        } else {
            $('.nav-list').css('display', '');
            $('.nav-toggle').css('display', '');
            if (iter === 1) {
                iter--;
                navBarAnim.from('.nav-list', {opacity: 0, x: -100, duration: .3})
                    .from('.nav-toggle', {opacity: 0, x: 100, duration: .3});
            }
        }
    });
});

