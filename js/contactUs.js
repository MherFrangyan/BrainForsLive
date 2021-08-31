let changeText = gsap.timeline(),
    helloArray = [
        'բարև', 'Hallå', '今日は', 'שלום', 'Cześć', 'Bonjour', 'สวัสดี', 'Terve', '안녕', 'Привет',
        'Hej', 'Ahoj', '你好', 'Ciao', 'Hall', '¡Hola!', 'مرحبا', 'Hallo', 'नमस्ते', 'Hey. Hi.'
    ];

if (location.pathname === "/BrainForsLive/contactUs.html") {
    var hiBlock = document.querySelector('.hi_content');
    let i = 0;
    let lastI = helloArray.length;
    setInterval(() => {
        changeText.from('.hi_content', {duration: .5, scale: 0, opacity: 0});
        hiBlock.innerHTML = helloArray[i];
        i++;
        if (i === lastI) {
            i = 0;
        }
    }, 2000);
}

