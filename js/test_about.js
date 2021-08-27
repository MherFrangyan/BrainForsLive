
var workersBlock =document.querySelector('.workers_block'),
    TwolastTag = document.querySelectorAll('.worker_content:nth-last-child(-n+2)'),
    mainAbout = document.querySelector('.main_about'),
    workerContent = document.querySelectorAll('.worker_content'),
    lastTag,
    scrollStop = false,
    iterationCount = 0,
    animationCount = 0,
    // staff = {
    //     1: [
    //         {img: 'img/staff/Gurgen.jpg', name: 'Gurgen Gharibyan', position: 'CEO'},
    //         {img: 'img/staff/Lilit.png', name: 'Lilit Sargsyan', position: 'Operations Manager'},
    //         {img: 'img/staff/Hermine.JPG', name: 'Hermine Gevorgyan', position: 'Administrative Manager'},
    //         {img: 'img/staff/Meri.jpg', name: 'Mary Mardoyan', position: 'Marketing Manager'},
    //         {img: 'img/staff/GurgenPet.jpg', name: 'Gurgen Petrosyan', position: 'Lead Developer'},
    //         {img: 'img/staff/Ani.jpg', name: 'Ani Gevorgyan', position: 'Lead Developer'},
    //         {img: 'img/staff/Vazgen.jpg', name: 'Vazgen Galstyan', position: 'Lead Developer'},
    //     ],
    //    2: [
    //        {img: 'img/staff/Gurgen.jpg', name: 'Gurgen Gharibyan', position: 'CEO'},
    //        {img: 'img/staff/Lilit.png', name: 'Lilit Sargsyan', position: 'Operations Manager'},
    //        {img: 'img/staff/Hermine.JPG', name: 'Hermine Gevorgyan', position: 'Administrative Manager'},
    //        {img: 'img/staff/Meri.jpg', name: 'Mary Mardoyan', position: 'Marketing Manager'},
    //        {img: 'img/staff/GurgenPet.jpg', name: 'Gurgen Petrosyan', position: 'Lead Developer'},
    //        {img: 'img/staff/Ani.jpg', name: 'Ani Gevorgyan', position: 'Lead Developer'},
    //        {img: 'img/staff/Vazgen.jpg', name: 'Vazgen Galstyan', position: 'Lead Developer'},
    //    ]
    // }
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
        {img: 'img/staff/Arshak.jpg', name: 'Arshak Gabrielyan', position: 'Backend Developer'},
        {img: 'img/staff/Sergey.jpg', name: 'Sergey Galstyan', position: 'CTO'},
        {img: 'img/staff/Hayk.jpg', name: 'Hayk Nazaryan', position: 'Backend Developer'},
        {img: 'img/staff/Hovo.jpg', name: 'Hovhannes Varosyan', position: 'Mobile Developer'},
        {img: 'img/staff/Roza.jpg', name: 'Roza Petrosyan', position: 'Backend Developer'},
    ];
    var animation1 = gsap.timeline({onComplete: ScrollAnimationFunc});
    var animation2 = gsap.timeline({onComplete: ScrollAnimationFunc2});



 function addClass(){
     var classNumber = 1;
     workerContent.forEach((el,idx)=>{
         if (workerContent.length <= 4) {
             workerContent[idx].classList = 'worker_content';
         } else {
             workerContent[idx].classList = 'worker_content';
             if (workerContent.length-3 <= idx){
                 workerContent[idx].classList = `worker_content workers_content_change_${classNumber++}`
             }else {
                 return;
             }
         }

     });
 }

changeContentDecrement();
 function changeContentDecrement() {
     scrollStop = false;

     workerContent.forEach((el) => {
         console.log(staffArray[iterationCount].img);
         el.querySelector('.worker_img').src = staffArray[iterationCount].img;
         el.querySelector('.worker_about .worker__name').innerHTML = staffArray[iterationCount].name;
         el.querySelector('.worker_about .worker__role').innerHTML = staffArray[iterationCount].position;
         iterationCount++;
         animation1.from(el.querySelector('.worker_img'), {opacity: 0, x:200, y: 200, duration: .4});
     });
     console.log( iterationCount,'changeContentDecrement')

     // workerContent.forEach(elem => {
     //     animation1.from(elem, {opacity: 0, x:-200, y: -200, duration: .4});
     // });

 }

function changeContentIncrement() {
    scrollStop = false;
    console.log(workerContent.length);
    console.log(iterationCount,'iterationCount');

    workerContent.forEach(el => {
        iterationCount--;
        console.log(staffArray[iterationCount].img);
        el.querySelector('.worker_img').src = staffArray[iterationCount].img;
        el.querySelector('.worker_about .worker__name').innerHTML = staffArray[iterationCount].name;
        el.querySelector('.worker_about .worker__role').innerHTML = staffArray[iterationCount].position;
        animation2.from(el.querySelector('.worker_img'), {opacity: 0, x:200, y: 200, duration: .4});

    });
    console.log( iterationCount,'changeContentIncrement')

}

mainAbout.addEventListener('mousewheel', e => {

    e.preventDefault();
    if (scrollStop){
        if (e.deltaY > 0) {
            if(staffArray.length <= iterationCount){
                console.log('max');
                return;
            } else {
                changeContentDecrement()

            }

        } else if (e.deltaY < 0) {
            if (iterationCount !== 0){
                changeContentIncrement()
            } else {
                return;
            }

        }
    } else {
        console.log('stopppp')
    }


});


const mediaQueryLg = window.matchMedia('(min-width: 992px) ');
const mediaQueryMd = window.matchMedia('(max-width: 992px) and (min-width: 767px)');
const mediaQuerySm = window.matchMedia('(max-width: 767px)');


 function handleTabletChange(e) {
     if (e.matches && e.media === '(min-width: 992px)') {
            console.log('(min-width: 992px)');
         TwolastTag.forEach( el => {
             workersBlock.appendChild(el)
         });
         workerContent = document.querySelectorAll('.worker_content')

     } else if (e.matches && e.media === '(max-width: 992px) and (min-width: 767px)'){
         console.log('(max-width: 992px)');
         if (workerContent.length <= 4){
             lastTag.forEach( el => {
                 workersBlock.appendChild(el)
             });
         } else {
             TwolastTag.forEach(el => {
                 workersBlock.removeChild(el);
             });
         }
         workerContent = document.querySelectorAll('.worker_content')
     } else if (e.matches && e.media === '(max-width: 767px)'){
         console.log(workerContent);
         if (workerContent.length <= 5){
             lastTag = document.querySelectorAll('.worker_content:last-child');
         } else {
             lastTag = document.querySelectorAll('.worker_content:nth-last-child(-n+3)');
         }
         lastTag.forEach(el => {
             workersBlock.removeChild(el);
         });
         workerContent = document.querySelectorAll('.worker_content')
     }

     addClass();

 }
 mediaQueryMd.addListener(handleTabletChange);
 handleTabletChange(mediaQueryMd);

 mediaQueryLg.addListener(handleTabletChange);
 handleTabletChange(mediaQueryLg);

mediaQuerySm.addListener(handleTabletChange);
 handleTabletChange(mediaQuerySm);


function ScrollAnimationFunc() {
    setTimeout(()=>{
        scrollStop = true;
    },500);
    console.log('saxasxasxsx')
}


function ScrollAnimationFunc2() {
    setTimeout(()=>{
        scrollStop = true;
    },500);
    console.log('saxasxasxsx22222222')
}
