// gsap animation variables
var tl1 = gsap.timeline({onComplete: endAnimationDecrement}),
    tl2 = gsap.timeline({onComplete: endAnimationIncrement}),
    clickAnimation = gsap.timeline({onComplete: clickAnimationFunc}),
    firstIteracion = gsap.timeline({onComplete: firstIteracionFunc});

//page variables
var projectName = document.querySelector('.project_name'),
    projectDescriptione = document.querySelector('.project_description'),
    carouselItem = document.querySelector('.carousel-inner'),
    sectionText = document.querySelectorAll('.section_text'),
    viewItem = document.querySelectorAll('.view_item'),
    clickDecrement = document.querySelector('.click_decrement'),
    clickIncriment = document.querySelector('.click_incriment'),
    projectData = [
        {
            title: 'High Security Spaces & Data Centers',
            content: 'Very of our title cannot be featured in this section due to the Security levels of the space. Mamans team is all background checked, and trained to provide the best product with the strictest deadlines and toughest of specifications.',
            img: ['./img/team1.svg', './img/team2.svg', './img/team3.svg', './img/2.jpg', './img/about-body.jpg', './img/about-header.jpg',],
            product: ['11', '22', '33']
        },
        {
            title: 'Hello Security Spaces & Data Abouts',
            content: 'Very of our title cannot be featured in this section due to the Security levels of the space. Mamans team is all background checked, and trained to provide the best product with the strictest deadlines and toughest of specifications.',
            img: ['./img/team1.svg', './img/team2.svg', './img/team3.svg', './img/2.jpg', './img/about-body.jpg', './img/about-header.jpg',],
            product: ['44', '55', '66']
        },
        {
            title: 'ttttt Security Spaces & Data Abouts',
            content: 'Very of our title cannot be featured in this section due to the Security levels of the space. Mamans team is all background checked, and trained to provide the best product with the strictest deadlines and toughest of specifications.',
            img: ['./img/team1.svg', './img/team2.svg', './img/team3.svg', './img/2.jpg', './img/about-body.jpg', './img/about-header.jpg',],
            product: ['77', '88', '99']
        },
        {
            title: 'bbbbbbbbb Security Spaces & Data Abouts',
            content: 'Very of our title cannot be featured in this section due to the Security levels of the space. Mamans team is all background checked, and trained to provide the best product with the strictest deadlines and toughest of specifications.',
            img: ['./img/team1.svg', './img/team2.svg', './img/team3.svg', './img/2.jpg', './img/about-body.jpg', './img/about-header.jpg',],
            product: ['01', '02', '03']
        },
        {
            title: 'ccccccc Security Spaces & Data Abouts',
            content: 'Very of our title cannot be featured in this section due to the Security levels of the space. Mamans team is all background checked, and trained to provide the best product with the strictest deadlines and toughest of specifications.',
            img: ['./img/team1.svg', './img/team2.svg', './img/team3.svg', './img/2.jpg', './img/about-body.jpg', './img/about-header.jpg',],
            product: ['04', '05', '06']
        },
    ];

// boolean variables stop scrolling
var isMoving = false,
    isMovingIncrement = false,
    iteracionValue = false,
    clickChangeContent = false,
    clickIconDecrementData = false,
    clickIconIncrementData = false;

// scroll events variables and function
var scrollTimeout,
    throttle = 1000;
var scrollEvent = function (event) {
    if (event.originalEvent.deltaY > 0) {

        if (viewItem[4].className === 'view_item active' || !isMoving || !isMovingIncrement) {
            return;
        } else {
            isMoving = false;
            isMovingIncrement = false;
            clickChangeContent = false;
            clickIconDecrementData = false;
            clickIconIncrementData = false;
            viewInitDecrement()
        }
    } else {

        if (viewItem[0].className === 'view_item active' || !isMovingIncrement || !isMoving) {
            return;
        } else {
            isMoving = false;
            isMovingIncrement = false;
            clickChangeContent = false;
            clickIconDecrementData = false;
            clickIconIncrementData = false;
            viewInitIncrement()
        }
    }
};



// first iteracion block
$(window).on('load', () => {
    projectName.innerHTML = projectData[0].title;
    projectDescriptione.innerHTML = projectData[0].content;
    projectData[0].img.forEach((imgCarousel, index) => {
        carouselItem.innerHTML += `<div class="carousel-item ${index === 0 ? 'active' : ''}">
                  <div class="carousel_fon"></div>
                  <img class="d-block " src="${imgCarousel}" alt="First slide">
                </div>`
    });
    sectionText.forEach((element, idx) => {
        element.innerHTML = projectData[0].product[idx];
    });

    firstIteracion.from('.project_name', {opacity: 0, y: -100, duration: .4})
        .from('.project_description', {opacity: 0, y: -100, duration: .4})
        .from('.carousel-item', {opacity: 0, y: -500, duration: .2})
        .from('.count1', {opacity: 0, y: -100, duration: .1})
        .from('.count2', {opacity: 0, y: -100, duration: .3})
        .from('.count3', {opacity: 0, y: -100, duration: .5})
});


//scroll events for change content
$('.project_main').on('mousewheel', event => {

    if (!scrollTimeout) {
        scrollTimeout = setTimeout(function () {
            scrollEvent(event);
            scrollTimeout = null;
            return
        }, throttle);
    }
    console.log('native scroll');

});

// scroll Decrement function
function viewInitDecrement() {
    if (viewItem[3].className === 'view_item active') {
        clickDecrement.className = 'click_scroll click_decrement d-none';
        clickIncriment.className = 'click_scroll click_incriment d-flex';
    }
    let y;
    for (let i = 0; i <= viewItem.length - 1; i++) {
        if (viewItem[i].className === 'view_item active') {
            viewItem[i].className = 'view_item';
            y = i + 1;
            viewItem[i + 1].className = 'view_item active';
            break;
        }
    }

    projectName.innerHTML = projectData[y].title;
    projectDescriptione.innerHTML = projectData[y].content;
    carouselItem.innerHTML = '';
    projectData[y].img.forEach((imgCarousel, index) => {
        carouselItem.innerHTML += `<div class="carousel-item ${index === 0 ? 'active' : ''}">
                  <div class="carousel_fon"></div>
                  <img class="d-block " src="${imgCarousel}" alt="First slide">
                </div>`
    });
    sectionText.forEach((element, idx) => {
        element.innerHTML = projectData[y].product[idx];
    });

    // gsap animation block
    tl1.from('.project_name', {opacity: 0, y: -100, duration: .4})
        .from('.project_description', {opacity: 0, y: -100, duration: .4})
        .from('.carousel-item', {opacity: 0, y: -500, duration: .2})
        .from('.count1', {opacity: 0, y: -100, duration: .1})
        .from('.count2', {opacity: 0, y: -100, duration: .3})
        .from('.count3', {opacity: 0, y: -100, duration: .5})

    // if (iteracionValue) {
    //     iteracionValue = false;
    //     projectName.innerHTML = projectData[y].title;
    //     projectDescriptione.innerHTML = projectData[y].content;
    //     projectData[y].img.forEach((imgCarousel, index )=>{
    //         carouselItem.innerHTML += `<div class="carousel-item ${index === 0 ? 'active': ''}">
    //           <div class="carousel_fon"></div>
    //           <img class="d-block " src="${imgCarousel}" alt="First slide">
    //         </div>`
    //     });
    //     sectionText.forEach((element, idx) => {
    //         element.innerHTML = projectData[y].product[idx];
    //     });
    //
    //     tl1.from('.project_name', {opacity: 0, y: -100, duration: .4})
    //         .from('.project_description', {opacity: 0, y: -100, duration: .4})
    //         .from('.carousel-item', {opacity: 0, y: -500, duration: .2})
    //         .from('.count1', {opacity:0,y:-100, duration:.1})
    //         .from('.count2', {opacity:0,y:-100, duration:.3})
    //         .from('.count3', {opacity:0,y:-100, duration:.5})
    // } else {
    //     return;
    // }

}

// scroll Increment function
function viewInitIncrement() {
    if (viewItem[1].className === 'view_item active') {
        clickDecrement.className = 'click_scroll click_decrement d-flex';
        clickIncriment.className = 'click_scroll click_incriment d-none';
    }
    let y;
    for (let i = 4; i <= viewItem.length - 1; i--) {
        if (viewItem[i].className === 'view_item active') {
            viewItem[i].className = 'view_item';
            y = i;
            viewItem[i - 1].className = 'view_item active';
            break;
        }
    }

    projectName.innerHTML = projectData[y - 1].title;
    projectDescriptione.innerHTML = projectData[y - 1].content;
    carouselItem.innerHTML = '';
    projectData[y - 1].img.forEach((imgCarousel, index) => {
        carouselItem.innerHTML += `<div class="carousel-item ${index === 0 ? 'active' : ''}">
                  <div class="carousel_fon"></div>
                  <img class="d-block " src="${imgCarousel}" alt="First slide">
                </div>`
    });
    sectionText.forEach((element, idx) => {
        element.innerHTML = projectData[y - 1].product[idx];
    });

    // gsap animation block
    tl2.from('.project_name', {opacity: 0, y: 100, duration: .4})
        .from('.project_description', {opacity: 0, y: 100, duration: .4})
        .from('.carousel-item', {opacity: 0, y: 500, duration: .2})
        .from('.count1', {opacity: 0, y: 100, duration: .1})
        .from('.count2', {opacity: 0, y: 100, duration: .3})
        .from('.count3', {opacity: 0, y: 100, duration: .5})

}


// on complete function end animation first Iteracion view firstIteracion
function firstIteracionFunc() {
    setTimeout(() => {
        // iteracionValue = true;
        isMoving = true;
        isMovingIncrement = true;
        clickChangeContent = true;
        clickIconDecrementData = true;
        clickIconIncrementData = true;
    }, 300);

}

// on complete function end animation Decrement for tl1
function endAnimationDecrement() {
    setTimeout(() => {
        // iteracionValue = true;
        isMoving = true;
        isMovingIncrement = true;
        clickChangeContent = true;
        clickIconDecrementData = true;
        clickIconIncrementData = true;
    }, 300);
}

// on complete function end animation Increment for tl2
function endAnimationIncrement() {
    setTimeout(() => {
        // iteracionValue = true;
        isMoving = true;
        isMovingIncrement = true;
        clickChangeContent = true;
        clickIconDecrementData = true;
        clickIconIncrementData = true;
    }, 300);
}
// on complete function end animation click for clickAnimation
function clickAnimationFunc() {
    setTimeout(() => {
        // iteracionValue = true;
        isMoving = true;
        isMovingIncrement = true;
        clickChangeContent = true;
        clickIconDecrementData = true;
        clickIconIncrementData = true;
    }, 300);
}

// click change content data block
viewItem.forEach((link, num) => {
    num = num + 1;
    link.addEventListener('click', () => {

        if (clickChangeContent){
            clickIconDecrementData = false;
            clickChangeContent = false;
            isMoving = false;
            isMovingIncrement = false;
            console.log(link);
            console.log(num);
            viewItem.forEach(el => {
                el.className = 'view_item';
            });
            link.className = 'view_item active';
            projectName.innerHTML = projectData[num - 1].title;
            projectDescriptione.innerHTML = projectData[num - 1].content;
            carouselItem.innerHTML = '';
            projectData[num - 1].img.forEach((imgCarousel, index) => {
                carouselItem.innerHTML += `<div class="carousel-item ${index === 0 ? 'active' : ''}">
                  <div class="carousel_fon"></div>
                  <img class="d-block " src="${imgCarousel}" alt="First slide">
                </div>`
            });
            sectionText.forEach((element, idx) => {
                element.innerHTML = projectData[num - 1].product[idx];
            });

            //gsap animation block
            clickAnimation.from('.project_name', {opacity: 0, y: -100, duration: .4})
                .from('.project_description', {opacity: 0, y: 100, duration: .4})
                .from('.carousel-item', {opacity: 0, y: 500, duration: .2})
                .from('.count1', {opacity: 0, y: 100, duration: .1})
                .from('.count2', {opacity: 0, y: 100, duration: .3})
                .from('.count3', {opacity: 0, y: 100, duration: .5})
        } else {
            return;
        }

    })
});

//click icon to scroll top
clickDecrement.addEventListener('click', () => {
    if (clickIconDecrementData){
        clickIconIncrementData = false;
        clickIconDecrementData = false;
        clickChangeContent = false;
        isMoving = false;
        isMovingIncrement = false;
        viewInitDecrement()
    } else {
        return;
    }

});

//click icon to scroll down
clickIncriment.addEventListener('click', () => {
    if (clickIconIncrementData) {
        clickIconIncrementData = false;
        clickIconDecrementData = false;
        clickChangeContent = false;
        isMoving = false;
        isMovingIncrement = false;
        viewInitIncrement()
    } else {
        return;
    }
});
