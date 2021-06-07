let tl1 = gsap.timeline({onComplete: tl1End}),
    tl2 = gsap.timeline({onComplete: tl2End}),
    tl3 = gsap.timeline({onComplete: tl3End}),
    tl4 = gsap.timeline({onComplete: tl4End}),
    tl5 = gsap.timeline({onComplete: tl5End}),
    tl6 = gsap.timeline({onComplete: tl6End}),
    changeText = gsap.timeline(),
    tl1EndBoolean,
    tl2EndBoolean,
    tl3EndBoolean,
    tl4EndBoolean,
    tl5EndBoolean,
    tl6EndBoolean,
    hiBlockContent,
    loader = gsap.timeline({onComplete: someFunction}),
    workers = document.getElementById('workers'),
    scrollto = document.querySelector('.main_about'),
    src,
    staffArray = [
        {img: 'img/staff/Gurgen.jpg', name: 'Gurgen Gharibyan', position: 'CEO'},
        {img: 'img/staff/Lilit.png', name: 'Lilit Sargsyan', position: 'Operations Manager'},
        {img: 'img/staff/Hermine.JPG', name: 'Hermine Gevorgyan', position: 'Administrative Manager'},
        {img: 'img/staff/Meri.jpg', name: 'Mary Mardoyan', position: 'Marketing Manager'},
        {img: 'img/staff/GurgenPet.jpg', name: 'Gurgen Petrosyan', position: 'Lead Developer'},
        {img: 'img/staff/Ani.jpg', name: 'Ani Gevorgyan', position: 'Lead Developer'},
        {img: 'img/staff/Vazgen.jpg', name: 'Vazgen Galstyan', position: 'Lead Developer'},

        {img: 'img/staff/Qristine.jpg', name: 'Qristina Ajemyan', position: 'Lead Developer'},
        {img: 'img/staff/Armen.jpg', name: 'Armen Martirosyan', position: 'Frontend Developer'},
        {img: 'img/staff/Gayane.JPG', name: 'Gayane Poghosyan', position: 'Full Stack Developer'},
        {img: 'img/staff/Artur.jpg', name: 'Artur Davoyan', position: 'Backend Developer'},
        {img: 'img/staff/Mher.jpg', name: 'Mher Frangyan', position: 'Frontend Developer'},
        {img: 'img/staff/Larisa.jpg', name: 'Larisa Melkonyan', position: 'UI/UX Designer'},
        {img: 'img/staff/Mko.jpg', name: 'Mkrtich Ajemyan', position: 'Full Stack Developer'},

        {img: 'img/staff/Roza.jpg', name: 'Roza Petrosyan', position: 'Backend Developer'},
        {img: 'img/staff/Mels.jpg', name: 'Mels Saribekyan', position: 'Backend Developer'},
        {img: 'img/staff/Avetik.JPG', name: 'Avetik Mkhitaryan', position: 'Backend Developer'},
        {img: 'img/staff/Arshak.jpg', name: 'Arshak Gabrielyan', position: 'Backend Developer'},
        {img: 'img/staff/Sergey.jpg', name: 'Sergey Galstyan', position: 'CTO'},
        {img: 'img/staff/Hayk.jpg', name: 'Hayk Nazaryan', position: 'Backend Developer'},
        {img: 'img/staff/Hovo.jpg', name: 'Hovhannes Varosyan', position: 'Mobile Developer'},

        {img: 'img/staff/Shahe.jpg', name: 'Shahe Shahinyan', position: 'Mobile Developer'},
        {img: 'img/staff/Karen.jpg', name: 'Karen Gasparyan', position: 'Backend Developer'},
        {img: 'img/staff/yOU.png', name: 'LastName FirstName', position: 'Developer'},
    ],
    helloArray = [
        'բարև', 'Hallå', '今日は', 'שלום', 'Cześć', 'Bonjour', 'สวัสดี', 'Terve', '안녕', 'Привет',
        'Hej', 'Ahoj', '你好', 'Ciao', 'Hall', '¡Hola!', 'مرحبا', 'Hallo', 'नमस्ते', 'Hey. Hi.'
    ];
// staffArrayView1 = [
//     {img:'img/staff/Gurgen.jpg', name:'Gurgen Gharibyan', position: 'CEO'},
//     {img:'img/staff/Lilit.png', name:'Lilit Sargsyan', position: 'Operations Manager'},
//     {img:'img/staff/Hermine.JPG', name:'Hermine Gevorgyan', position: 'Administrative Manager'},
//     {img:'img/staff/Meri.jpg', name:'Mary Mardoyan', position: 'Marketing Manager'},
//     {img:'img/staff/GurgenPet.jpg', name:'Gurgen Petrosyan', position: 'Lead Developer'},
//     {img:'img/staff/Ani.jpg', name:'Ani Gevorgyan', position: 'Lead Developer'},
//     {img:'img/staff/Vazgen.jpg', name:'Vazgen Galstyan', position: 'Lead Developer'},
// ],
// staffArrayView2 = [
//     {img:'img/staff/Qristine.jpg', name:'Qristina Ajemyan', position: 'Lead Developer'},
//     {img:'img/staff/Armen.jpg', name:'Armen Martirosyan', position: 'Frontend Developer'},
//     {img:'img/staff/Gayane.JPG', name:'Gayane Poghosyan', position: 'Full Stack Developer'},
//     {img:'img/staff/Artur.jpg', name:'Artur Davoyan', position: 'Backend Developer'},
//     {img:'img/staff/Mher.jpg', name:'Mher Frangyan', position: 'Frontend Developer'},
//     {img:'img/staff/Larisa.jpg', name:'Larisa Melkonyan', position: 'UI/UX Designer'},
//     {img:'img/staff/Mko.jpg', name:'Mkrtich Ajemyan', position: 'Full Stack Developer'},
// ],
// staffArrayView3 = [
//     {img:'img/staff/Roza.jpg', name:'Roza Petrosyan', position: 'Backend Developer'},
//     {img:'img/staff/Mels.jpg', name:'Mels Saribekyan', position: 'Backend Developer'},
//     {img:'img/staff/Avetik.JPG', name:'Avetik Mkhitaryan', position: 'Backend Developer'},
//     {img:'img/staff/Arshak.jpg', name:'Arshak Gabrielyan', position: 'Backend Developer'},
//     {img:'img/staff/Sergey.jpg', name:'Sergey Galstyan', position: 'CTO'},
//     {img:'img/staff/Hayk.jpg', name:'Hayk Nazaryan', position: 'Backend Developer'},
//     {img:'img/staff/Hovo.jpg', name:'Hovhannes Varosyan', position: 'Mobile Developer'},
// ],
// staffArrayView4 = [
//     {img:'img/staff/Shahe.jpg', name:'Shahe Shahinyan', position: 'Mobile Developer'},
//
// ];

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


function IteracionHtmlCodeView3(idx, item, y) {
    if (y) {
        workers.innerHTML += `<div class="col-6 worker_main worker_${y}_col">
                        <div class="worker  worker_${y}">
                        <div class="worket__about">
                          <h2 class="worker__name">${item.name}</h2>
                          <p class="worker__role">${item.position}</p>
                        </div>
                       <img src="${item.img}" alt="Worker Img" class="worker__photo worker__photo${y}">
                        </div>
                      </div>`
    } else {
        workers.innerHTML += `<div class="col-6 worker_main worker_${idx + 1}_col">
                        <div class="worker  worker_${idx + 1}">
                        <div class="worket__about">
                          <h2 class="worker__name">${item.name}</h2>
                          <p class="worker__role">${item.position}</p>
                        </div>
                       <img src="${item.img}" alt="Worker Img" class="worker__photo worker__photo${idx + 1}">
                        </div>
                      </div>`
    }

}

function onLoadViewContent() {
    carouselStaff = gsap.to('.carousel_staff', {opacity: 1, x: 0, duration: .5});
    staffArray.forEach((item, idx) => {
        if (window.innerWidth > 1160) {
            if (idx >= 7) {
                return;
            } else {
                if (idx < 3) {
                    IteracionHtmlCodeView1(idx, item);
                } else {
                    IteracionHtmlCodeView2(idx, item);
                }
            }
        } else if (window.innerWidth < 1160 && window.innerWidth > 850) {
            if (idx >= 5) {
                return;
            } else {
                if (idx < 2) {
                    IteracionHtmlCodeView3(idx, item);
                } else {
                    IteracionHtmlCodeView1(idx, item);
                }
            }
        } else if (window.innerWidth < 850) {
            console.log('window.innerWidth < 850')
            if (idx >= 4) {
                console.log(idx, 'trrrrrrrrrr')
                return;
            } else {
                if (idx < 4) {
                    IteracionHtmlCodeView3(idx, item);
                }
            }
        }
    });
    if (window.innerWidth > 1160) {
        tl1.from('.worker_1,  .worker__photo1', {opacity: 0, x: -200, duration: .4})
            .from('.worker_2, .worker__photo2', {opacity: 0, scaleX: 0.3, scaleY: 0.2, duration: .4})
            .from('.worker_3, .worker__photo3', {opacity: 0, y: 100, duration: .4},)
            .from('.worker_4, .worker__photo4', {opacity: 0, x: 200, duration: .4},)
            .from('.worker_5, .worker__photo5', {opacity: 0, y: -200, duration: .4},)
            .from('.worker_6, .worker__photo6', {opacity: 0, x: -200, duration: .5},)
            .from('.worker_7, .worker__photo7', {opacity: 0, y: -200, duration: .4},);
    } else if (window.innerWidth < 1160 && window.innerWidth > 850) {
        tl1.from('.worker_1,  .worker__photo1', {opacity: 0, x: -200, duration: .4})
            .from('.worker_2, .worker__photo2', {opacity: 0, scaleX: 0.3, scaleY: 0.2, duration: .4})
            .from('.worker_3, .worker__photo3', {opacity: 0, y: 100, duration: .4},)
            .from('.worker_4, .worker__photo4', {opacity: 0, x: 200, duration: .4},)
            .from('.worker_5, .worker__photo5', {opacity: 0, y: -200, duration: .4},);
    } else if (window.innerWidth < 850) {
        tl1.from('.worker_1,  .worker__photo1', {opacity: 0, x: -200, duration: .4})
            .from('.worker_2, .worker__photo2', {opacity: 0, scaleX: 0.3, scaleY: 0.2, duration: .4})
            .from('.worker_3, .worker__photo3', {opacity: 0, y: 100, duration: .4},)
            .from('.worker_4, .worker__photo4', {opacity: 0, x: 200, duration: .4},);
    }

}

if (window.innerWidth < 1160 && window.innerWidth > 850) {
    console.log('window.innerWidth < 1160 && window.innerWidth > 850')
}
// load page first animation function
onLoadViewContent();


// loader timeline onComplete function
function someFunction() {
    $(".path").css({'strokeDasharray': '0, 150', 'opacity': '0'});

    loader.kill();
    if (tl1EndBoolean) {
        workers.innerHTML = '';
        console.log('tl1End');
        let x = 0, y = 0, z = 0;
        staffArray.forEach((item, idx) => {
            if (window.innerWidth > 1160) {
                if (idx < 7 || idx >= 14) {
                    console.log('mecc 666');
                    return;
                } else {
                    x++;
                    if (idx < 10) {
                        IteracionHtmlCodeView1(idx, item, x);

                    } else {
                        IteracionHtmlCodeView2(idx, item, x);
                    }
                }
            } else if (window.innerWidth < 1160 && window.innerWidth > 850) {
                if (idx < 5 || idx >= 10) {
                    console.log('mecc 55');
                    return;
                } else {
                    y++;
                    if (idx < 7) {
                        IteracionHtmlCodeView3(idx, item, y);
                    } else {
                        IteracionHtmlCodeView1(idx, item, y)
                    }
                }
            } else if (window.innerWidth < 850) {

                if (idx < 4 || idx >= 8) {
                    console.log(idx, 'statr');
                    return;
                } else {
                    console.log(idx, 'treuuu');
                    z++;
                    if (idx < 8) {
                        IteracionHtmlCodeView3(idx, item, z);
                    }
                }
            }
        });
        if (window.innerWidth > 1160) {
            tl2.from('.worker_1,  .worker__photo1', {opacity: 0, scaleX: 0.5, scaleY: 0.5, duration: .4})
                .from('.worker_2, .worker__photo2', {opacity: 0, x: 200, duration: .4})
                .from('.worker_3, .worker__photo3', {opacity: 0, y: -100, duration: .4},)
                .from('.worker_4, .worker__photo4', {opacity: 0, x: -200, duration: .4},)
                .from('.worker_5, .worker__photo5', {opacity: 0, y: 200, duration: .4},)
                .from('.worker_6, .worker__photo6', {opacity: 0, x: 300, duration: .5},)
                .from('.worker_7, .worker__photo7', {opacity: 0, y: -200, duration: .4},);
        } else if (window.innerWidth < 1160 && window.innerWidth > 850) {
            tl2.from('.worker_1,  .worker__photo1', {opacity: 0, scaleX: 0.5, scaleY: 0.5, duration: .4})
                .from('.worker_2, .worker__photo2', {opacity: 0, x: 200, duration: .4})
                .from('.worker_3, .worker__photo3', {opacity: 0, y: -100, duration: .4},)
                .from('.worker_4, .worker__photo4', {opacity: 0, x: -200, duration: .4},)
                .from('.worker_5, .worker__photo5', {opacity: 0, y: 200, duration: .4},);
        } else if (window.innerWidth < 850) {
            tl2.from('.worker_1,  .worker__photo1', {opacity: 0, x: -200, duration: .4})
                .from('.worker_2, .worker__photo2', {opacity: 0, scaleX: 0.3, scaleY: 0.2, duration: .4})
                .from('.worker_3, .worker__photo3', {opacity: 0, y: 100, duration: .4},)
                .from('.worker_4, .worker__photo4', {opacity: 0, x: 200, duration: .4},);
        }
    } else if (tl2EndBoolean) {
        workers.innerHTML = '';
        console.log('tl2End');
        let x = 0, y = 0, z = 0;
        staffArray.forEach((item, idx) => {
            if (window.innerWidth > 1160) {
                if (idx < 14 || idx >= 21) {
                    console.log('mecc 666');
                    return;
                } else {
                    x++;
                    if (idx < 17) {
                        IteracionHtmlCodeView1(idx, item, x);
                    } else {
                        IteracionHtmlCodeView2(idx, item, x);
                    }
                }
            } else if (window.innerWidth < 1160 && window.innerWidth > 850) {
                if (idx < 10 || idx >= 15) {
                    console.log('mecc 55');
                    return;
                } else {
                    y++;
                    if (idx < 12) {
                        IteracionHtmlCodeView3(idx, item, y);
                    } else {
                        IteracionHtmlCodeView1(idx, item, y);
                    }
                }
            } else if (window.innerWidth < 850) {
                if (idx < 8 || idx >= 12) {
                    return;
                } else {
                    z++;
                    if (idx < 12) {
                        IteracionHtmlCodeView3(idx, item, z);
                    }
                }
            }
        });
        if (window.innerWidth > 1160) {
            tl3.from('.worker_1,  .worker__photo1', {opacity: 0, scaleX: 0.5, scaleY: 0.5, duration: .4})
                .from('.worker_2, .worker__photo2', {opacity: 0, x: 200, duration: .4})
                .from('.worker_3, .worker__photo3', {opacity: 0, y: -100, duration: .4},)
                .from('.worker_4, .worker__photo4', {opacity: 0, x: -200, duration: .4},)
                .from('.worker_5, .worker__photo5', {opacity: 0, y: 200, duration: .4},)
                .from('.worker_6, .worker__photo6', {opacity: 0, x: 300, duration: .5},)
                .from('.worker_7, .worker__photo7', {opacity: 0, y: -200, duration: .4},);
        } else if (window.innerWidth < 1160 && window.innerWidth > 850) {
            tl3.from('.worker_1,  .worker__photo1', {opacity: 0, scaleX: 0.5, scaleY: 0.5, duration: .4})
                .from('.worker_2, .worker__photo2', {opacity: 0, x: 200, duration: .4})
                .from('.worker_3, .worker__photo3', {opacity: 0, y: -100, duration: .4},)
                .from('.worker_4, .worker__photo4', {opacity: 0, x: -200, duration: .4},)
                .from('.worker_5, .worker__photo5', {opacity: 0, y: 200, duration: .4},)
        } else if (window.innerWidth < 850) {
            tl3.from('.worker_1,  .worker__photo1', {opacity: 0, x: -200, duration: .4})
                .from('.worker_2, .worker__photo2', {opacity: 0, scaleX: 0.3, scaleY: 0.2, duration: .4})
                .from('.worker_3, .worker__photo3', {opacity: 0, y: 100, duration: .4},)
                .from('.worker_4, .worker__photo4', {opacity: 0, x: 200, duration: .4},);
        }

    } else if (tl3EndBoolean) {
        workers.innerHTML = '';
        console.log('tl3End');
        let x = 0, y = 0, z = 0;
        staffArray.forEach((item, idx) => {
            if (window.innerWidth > 1160) {
                if (idx < 21 || idx >= 26) {
                    console.log('mecc 666');
                    return;
                } else {
                    x++;
                    if (idx < 24) {
                        IteracionHtmlCodeView1(idx, item, x);
                    } else {
                        IteracionHtmlCodeView2(idx, item, x);
                    }
                }
            } else if (window.innerWidth < 1160 && window.innerWidth > 850) {
                if (idx < 15 || idx >= 20) {
                    console.log('mecc 55');
                    return;
                } else {
                    y++;
                    if (idx < 17) {
                        IteracionHtmlCodeView3(idx, item, y);
                    } else {
                        IteracionHtmlCodeView1(idx, item, y);
                    }
                }
            } else if (window.innerWidth < 850) {
                if (idx < 12 || idx >= 16) {
                    return;
                } else {
                    z++;
                    if (idx < 16) {
                        IteracionHtmlCodeView3(idx, item, z);
                    }
                }
            }
        });

        // gsap media
        if (window.innerWidth > 1160) {
            tl4.from('.worker_1,  .worker__photo1', {opacity: 0, scaleX: 0.5, scaleY: 0.5, duration: .4})
                .from('.worker_2, .worker__photo2', {opacity: 0, x: 200, duration: .4})
                .from('.worker_3, .worker__photo3', {opacity: 0, y: -100, duration: .4},)
            // .from('.worker_4, .worker__photo4', {opacity: 0, x: -200, duration: .4},)
            // .from('.worker_5, .worker__photo5', {opacity: 0, y: 200, duration: .4},)
            // .from('.worker_6, .worker__photo6', {opacity: 0, x: 300, duration: .5},)
            // .from('.worker_7, .worker__photo7', {opacity: 0, y: -200, duration: .4},);
        } else if (window.innerWidth < 1160 && window.innerWidth > 850) {
            tl4.from('.worker_1,  .worker__photo1', {opacity: 0, scaleX: 0.5, scaleY: 0.5, duration: .4})
                .from('.worker_2, .worker__photo2', {opacity: 0, x: 200, duration: .4})
                .from('.worker_3, .worker__photo3', {opacity: 0, y: -100, duration: .4},)
                .from('.worker_4, .worker__photo4', {opacity: 0, x: -200, duration: .4},)
                .from('.worker_5, .worker__photo5', {opacity: 0, y: 200, duration: .4},)
        } else if (window.innerWidth < 850) {
            tl4.from('.worker_1,  .worker__photo1', {opacity: 0, x: -200, duration: .4})
                .from('.worker_2, .worker__photo2', {opacity: 0, scaleX: 0.3, scaleY: 0.2, duration: .4})
                .from('.worker_3, .worker__photo3', {opacity: 0, y: 100, duration: .4},)
                .from('.worker_4, .worker__photo4', {opacity: 0, x: 200, duration: .4},);
        }
    } else if (tl4EndBoolean) {
        workers.innerHTML = '';
        console.log('tl4End');
        if (window.innerWidth > 1160) {
            onLoadViewContent();
        } else if (window.innerWidth < 1160 && window.innerWidth > 850) {
            let y = 0;
            staffArray.forEach((item, idx) => {
                if (idx < 20 || idx >= 25) {
                    console.log('mecc 55');
                    return;
                } else {
                    y++;
                    if (idx < 22) {
                        IteracionHtmlCodeView3(idx, item, y);
                    } else {
                        IteracionHtmlCodeView1(idx, item, y);
                    }
                }
            });
            tl5.from('.worker_1,  .worker__photo1', {opacity: 0, scaleX: 0.5, scaleY: 0.5, duration: .7})
                .from('.worker_2, .worker__photo2', {opacity: 0, x: 200, duration: .7})
                .from('.worker_3, .worker__photo3', {opacity: 0, x: 200, duration: .7})
                .from('.worker_4, .worker__photo4', {opacity: 0, x: 200, duration: .7});
        } else if (window.innerWidth < 850) {
            let z = 0;
            staffArray.forEach((item, idx) => {
                if (idx < 16 || idx >= 20) {
                    return;
                } else {
                    z++;
                    if (idx < 20) {
                        IteracionHtmlCodeView3(idx, item, z);
                    }
                }
            });
            tl5.from('.worker_1,  .worker__photo1', {opacity: 0, x: -200, duration: .4})
                .from('.worker_2, .worker__photo2', {opacity: 0, scaleX: 0.3, scaleY: 0.2, duration: .4})
                .from('.worker_3, .worker__photo3', {opacity: 0, y: 100, duration: .4},)
                .from('.worker_4, .worker__photo4', {opacity: 0, x: 200, duration: .4},);
        }

    } else if (tl5EndBoolean) {
        workers.innerHTML = '';
        console.log('tl5End');
        if (window.innerWidth > 850) {
            onLoadViewContent();
        } else if (window.innerWidth < 850) {
            let z = 0;
            staffArray.forEach((item, idx) => {
                if (idx < 20 || idx >= 24) {
                    return;
                } else {
                    z++;
                    if (idx < 24) {
                        IteracionHtmlCodeView3(idx, item, z);
                    }
                }
            });
            tl6.from('.worker_1,  .worker__photo1', {opacity: 0, x: -200, duration: .4})
                .from('.worker_2, .worker__photo2', {opacity: 0, scaleX: 0.3, scaleY: 0.2, duration: .4})
                .from('.worker_3, .worker__photo3', {opacity: 0, scaleX: 0.3, scaleY: 0.2, duration: .4})
                .from('.worker_4, .worker__photo4', {opacity: 0, scaleX: 0.3, scaleY: 0.2, duration: .4});
        }

    } else if (tl6EndBoolean) {
        workers.innerHTML = '';
        console.log('tl6End');
        onLoadViewContent();
    }

}

// tl1 timeline onComplete function
function tl1End() {
    hoverEvent();
    console.log(tl1EndBoolean, 'tl1EndBoolean');
    console.log(tl2EndBoolean, 'tl1EndBoolean');
    console.log(tl3EndBoolean, 'tl1EndBoolean');
    tl1EndBoolean = true;
    tl2EndBoolean = false;
    tl3EndBoolean = false;
    tl4EndBoolean = false;
    tl5EndBoolean = false;
    tl6EndBoolean = false;
    loader.fromTo('.path', {opacity: 0, strokeDasharray: '0, 150', duration: 4,}, {
        opacity: 1,
        strokeDasharray: '130, 150',
        duration: 5,
    }).delay(1);
}

// tl2 timeline onComplete function
function tl2End() {

    console.log('end');
    hoverEvent();
    tl1EndBoolean = false;
    tl2EndBoolean = true;
    tl3EndBoolean = false;
    tl4EndBoolean = false;
    tl5EndBoolean = false;
    tl6EndBoolean = false;
    loader.fromTo('.path', {opacity: 0, strokeDasharray: '0, 150', duration: 4,}, {
        opacity: 1,
        strokeDasharray: '130, 150',
        duration: 5,
    }).delay(1);
}

// tl3 timeline onComplete function
function tl3End() {
    hoverEvent();
    tl1EndBoolean = false;
    tl2EndBoolean = false;
    tl3EndBoolean = true;
    tl4EndBoolean = false;
    tl5EndBoolean = false;
    tl6EndBoolean = false;
    loader.fromTo('.path', {opacity: 0, strokeDasharray: '0, 150', duration: 4,}, {
        opacity: 1,
        strokeDasharray: '130, 150',
        duration: 5,
    }).delay(1);
}

function tl4End() {
    hoverEvent();
    tl1EndBoolean = false;
    tl2EndBoolean = false;
    tl3EndBoolean = false;
    tl4EndBoolean = true;
    tl5EndBoolean = false;
    tl6EndBoolean = false;
    loader.fromTo('.path', {opacity: 0, strokeDasharray: '0, 150', duration: 4,}, {
        opacity: 1,
        strokeDasharray: '130, 150',
        duration: 5,
    }).delay(1);
}

function tl5End() {
    hoverEvent();
    tl1EndBoolean = false;
    tl2EndBoolean = false;
    tl3EndBoolean = false;
    tl4EndBoolean = false;
    tl5EndBoolean = true;
    tl6EndBoolean = false;
    loader.fromTo('.path', {opacity: 0, strokeDasharray: '0, 150', duration: 4,}, {
        opacity: 1,
        strokeDasharray: '130, 150',
        duration: 5,
    }).delay(1);
}

function tl6End() {
    hoverEvent();
    tl1EndBoolean = false;
    tl2EndBoolean = false;
    tl3EndBoolean = false;
    tl4EndBoolean = false;
    tl5EndBoolean = false;
    tl6EndBoolean = true;
    loader.fromTo('.path', {opacity: 0, strokeDasharray: '0, 150', duration: 4,}, {
        opacity: 1,
        strokeDasharray: '130, 150',
        duration: 5,
    }).delay(1);
}

//hover event img
function hoverEvent() {
    workerPhoto = document.querySelectorAll('.worker'),
        workerPhoto.forEach((data) => {

            data.addEventListener('mouseenter', (e) => {
                e.target.classList.add('worker__show');
                e.path[1].style.zIndex = '90';
                console.log(e.target.classList, 'e');
                loader.pause();
            });
        });

    workerPhoto.forEach((data) => {
        data.addEventListener('mouseleave', (e) => {
            e.target.classList.remove("worker__show");
            e.path[1].style.zIndex = '0';
            loader.play();
        })
    });
}


//iteracion function
function IteracionHtmlCodeView1(idx, item, y) {
    if (y) {
        workers.innerHTML += `<div class="col-4 worker_main worker_${y}_col">
                        <div class="worker  worker_${y}">
                        <div class="worket__about">
                          <h2 class="worker__name">${item.name}</h2>
                          <p class="worker__role">${item.position}</p>
                        </div>
                       <img src="${item.img}" alt="Worker Img" class="worker__photo worker__photo${y}">
                        </div>
                      </div>`
    } else {
        workers.innerHTML += `<div class="col-4 worker_main worker_${idx + 1}_col">
                        <div class="worker  worker_${idx + 1}">
                        <div class="worket__about">
                          <h2 class="worker__name">${item.name}</h2>
                          <p class="worker__role">${item.position}</p>
                        </div>
                       <img src="${item.img}" alt="Worker Img" class="worker__photo worker__photo${idx + 1}">
                        </div>
                      </div>`
    }

}

function IteracionHtmlCodeView2(idx, item, y) {
    if (y) {
        workers.innerHTML += `<div class="col-3 worker_main worker_${y}_col">
                        <div class="worker  worker_${y} ">
                        <div class="worket__about">
                          <h2 class="worker__name">${item.name}</h2>
                          <p class="worker__role">${item.position}</p>
                        </div>
                       <img src="${item.img}" alt="Worker Img" class="worker__photo worker__photo${y}">
                        </div>
                      </div>`
    } else {
        workers.innerHTML += `<div class="col-3 worker_main worker_${idx + 1}_col">
                        <div class="worker  worker_${idx + 1} ">
                        <div class="worket__about">
                          <h2 class="worker__name">${item.name}</h2>
                          <p class="worker__role">${item.position}</p>
                        </div>
                       <img src="${item.img}" alt="Worker Img" class="worker__photo worker__photo${idx + 1}">
                        </div>
                      </div>`
    }

}


//restart slide
function restartSlide() {
    loader.restart();
    console.log('statrrr', loader.duration());
    onLoadView()
}
