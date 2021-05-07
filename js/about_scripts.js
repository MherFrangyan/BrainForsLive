
    let tl1 = gsap.timeline({onComplete: tl1End}),
        tl2 = gsap.timeline({onComplete: tl2End}),
        tl3 = gsap.timeline({onComplete: tl3End}),
        tl1EndBoolean,
        tl2EndBoolean,
        tl3EndBoolean,
        loader = gsap.timeline({onComplete: someFunction}),
        workerPhoto = document.querySelectorAll('.worker'),
        src,
        staffArrayView1 = [
            'img/staff/Gurgen.jpg',
            'img/staff/Lilit.png',
            'img/staff/Hermine.JPG',
            'img/staff/Meri.jpg',
            'img/staff/GurgenPet.jpg',
            'img/staff/Ani.jpg',
            'img/staff/Vazgen.jpg',
        ],
        staffArrayView2 = [
            'img/staff/Qristine.jpg',
            'img/staff/Armen.jpg',
            'img/staff/Gayane.JPG',
            'img/staff/Artur.jpg',
            'img/staff/Mher.jpg',
            'img/staff/Larisa.jpg',
            'img/staff/Mko.jpg',
        ],
        staffArrayView3 = [
            'img/staff/Roza.jpg',
            'img/staff/Mels.jpg',
            'img/staff/Avetik.JPG',
            'img/staff/Arshak.jpg',
            'img/staff/Sergey.jpg',
            'img/staff/Hayk.jpg',
            'img/staff/Hovo.jpg',
        ];

    function onLoadView() {


            console.log(tl1EndBoolean,'tl1EndBoolean');
            console.log(tl2EndBoolean,'tl1EndBoolean');
            console.log(tl3EndBoolean,'tl1EndBoolean');
            carouselStaff = gsap.to('.carousel_staff', {opacity:1, x:0 ,duration: .5});
            $(".worker__photo").each( (idx, item) => {
                item.src = '';
                item.src = staffArrayView1[idx];

            });
            tl1.from('.worker_1,  .worker__photo1',{opacity: 0, x: -200, duration: .7})
                .from('.worker_2, .worker__photo2', {opacity: 0, scaleX:0.3, scaleY:0.2, duration: .7})
                .from('.worker_3, .worker__photo3', {opacity: 0, y: 100, duration: .7},)
                .from('.worker_4, .worker__photo4', {opacity: 0, x: 200, duration: .7},)
                .from('.worker_5, .worker__photo5', {opacity: 0, y: -200, duration: .7},)
                .from('.worker_6, .worker__photo6', {opacity: 0, x: -200, duration: .9},)
                .from('.worker_7, .worker__photo7', {opacity: 0, y: -200, duration: .7},);



    }
    onLoadView();


        function someFunction() {
            loader.kill();
            if (tl1EndBoolean){
                console.log('tl1End');

                $(".worker__photo").each( (idx, item) => {
                    item.src = '';
                    item.src = staffArrayView2[idx];

                });
                tl2.from('.worker_1,  .worker__photo1',{opacity: 0, scaleX:0.5, scaleY:0.5, duration: .7})
                    .from('.worker_2, .worker__photo2', {opacity: 0, x: 200, duration: .7} )
                    .from('.worker_3, .worker__photo3', {opacity: 0, y: -100, duration: .7}, )
                    .from('.worker_4, .worker__photo4', {opacity: 0, x: -200, duration: .7}, )
                    .from('.worker_5, .worker__photo5', {opacity: 0, y: 200, duration: .7}, )
                    .from('.worker_6, .worker__photo6', {opacity: 0, x: 300, duration: .9}, )
                    .from('.worker_7, .worker__photo7', {opacity: 0, y: -200, duration: .7}, );
                // loader.restart(5000);

            }else if(tl2EndBoolean) {
                console.log('tl2End');
                $(".worker__photo").each( (idx, item) => {
                    item.src = '';
                    item.src = staffArrayView3[idx];

                });
                    tl3.from('.worker_1,  .worker__photo1',{opacity: 0, scaleX:0.5, scaleY:0.5, duration: .7})
                        .from('.worker_2, .worker__photo2', {opacity: 0, x: 200, duration: .7} )
                        .from('.worker_3, .worker__photo3', {opacity: 0, y: -100, duration: .7}, )
                        .from('.worker_4, .worker__photo4', {opacity: 0, x: -200, duration: .7}, )
                        .from('.worker_5, .worker__photo5', {opacity: 0, y: 200, duration: .7}, )
                        .from('.worker_6, .worker__photo6', {opacity: 0, x: 300, duration: .9}, )
                        .from('.worker_7, .worker__photo7', {opacity: 0, y: -200, duration: .7}, );
                // loader.restart(5000);

            } else if (tl3EndBoolean) {
                console.log('tl3End');
                onLoadView();
            }
        }


        function tl1End() {
            console.log(tl1EndBoolean,'tl1EndBoolean');
            console.log(tl2EndBoolean,'tl1EndBoolean');
            console.log(tl3EndBoolean,'tl1EndBoolean');
            tl1EndBoolean = true;
            tl2EndBoolean = false;
            tl3EndBoolean = false;
            loader.to('.path',{opacity:1,strokeDasharray:'130, 150',duration:5,}).delay(2);
            console.log('duration',loader.duration())
        }
        function tl2End () {
            tl1EndBoolean = false;
            tl2EndBoolean = true;
            tl3EndBoolean = false;
            loader.to('.path',{opacity:1,strokeDasharray:'0, 150',duration:5,}).delay(2);
        }
        function tl3End () {
            tl1EndBoolean = false;
            tl2EndBoolean = false;
            tl3EndBoolean = true;
            loader.to('.path',{opacity:1,strokeDasharray:'130, 150',duration:5,}).delay(2);

        }

    //hover event img
    workerPhoto.forEach((data)=> {
        data.addEventListener('mouseenter', (e)=>{
            e.target.classList.add('worker__show');
            e.path[1].style.zIndex = '90';
            console.log(e.target.classList, 'e');
            loader.pause();
        });
    });

    workerPhoto.forEach((data)=> {
        data.addEventListener('mouseleave', (e)=> {
            e.target.classList.remove("worker__show");
            e.path[1].style.zIndex = '0';
            loader.play();
        })
    });

//restart slide
function restartSlide() {
    loader.restart();

    console.log('statrrr', loader.duration());
        onLoadView()
}
