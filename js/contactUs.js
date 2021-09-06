let changeText = gsap.timeline(),
    helloArray = [
        'բարև', ' Hi' , 'Привет', 'Привіт', '¡Hola!', 'Bonjour' , 'สวัสดี',
        'مرحبا', 'سلام', 'Ciao', 'Hallo' , '你好' , 'Cześć', 'Terve',];

if (location.pathname === "/BrainForsLive/contactUs.html") {
    var hiBlock = document.querySelector('.hi_content');
    let i = 0;
    let lastI = helloArray.length;

    function loopFuncChangeText() {
        changeText.from('.hi_content', {duration: .5, scale: 0, opacity: 0});
        hiBlock.innerHTML = helloArray[i];
        i++;
        if (i === lastI){
            i = 0;
        }
        setTimeout(()=>{
            loopFuncChangeText()
        },1500)

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

