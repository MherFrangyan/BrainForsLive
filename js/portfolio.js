var viewElectrical = document.querySelectorAll('.view_electrical'),
    viewHealth = document.querySelectorAll('.view_health'),
    viewBusiness = document.querySelectorAll('.view_business'),
    viewMedia = document.querySelectorAll('.view_media'),
    viewMarketing = document.querySelectorAll('.view_marketing'),
    viewFood = document.querySelectorAll('.view_food'),
    viewTravel = document.querySelectorAll('.view_travel'),
    viewGames = document.querySelectorAll('.view_games'),
    viewOther = document.querySelectorAll('.view_other'),
    navLink = document.querySelectorAll('.view_item'),
    electricalScrollDown = document.querySelector('.electrical-scroll_down'),
    electricalScrollUp = document.querySelector('.electrical-scroll_up'),
    healthScrollDown = document.querySelector('.health-scroll_down'),
    healthScrollUp = document.querySelector('.health-scroll_up'),
    businessScrollDown = document.querySelector('.business-scroll_down'),
    businessScrollUp = document.querySelector('.business-scroll_up'),
    mediaScrollDown = document.querySelector('.media-scroll_down'),
    mediaScrollUp = document.querySelector('.media-scroll_up'),
    marketingScrollDown = document.querySelector('.marketing-scroll_down'),
    marketingScrollUp = document.querySelector('.marketing-scroll_up'),
    foodScrollDown = document.querySelector('.food-scroll_down'),
    foodScrollUp = document.querySelector('.food-scroll_up'),
    travelScrollDown = document.querySelector('.travel-scroll_down'),
    travelScrollUp = document.querySelector('.travel-scroll_up'),
    gamesScrollDown = document.querySelector('.games-scroll_down'),
    gamesScrollUp = document.querySelector('.games-scroll_up'),
    otherScrollDown = document.querySelector('.other-scroll_down'),
    otherScrollUp = document.querySelector('.other-scroll_up'),
    incrementElectrical = 1,
    incrementHealth = 1,
    incrementBusiness = 1,
    incrementMedia = 1,
    incrementMarketing = 1,
    incrementTravel = 1,
    incrementGames = 1,
    incrementFood = 1,
    incrementOther = 1;


// electrical
document.querySelector('#v-electrical').addEventListener('mousewheel', (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        console.log(viewElectrical.length);
        console.log(incrementElectrical);
        if (viewElectrical.length > incrementElectrical) {
            viewElectrical[incrementElectrical].scrollIntoView({behavior: "smooth", block: "start"});
            incrementElectrical++;
            if (viewElectrical[incrementElectrical] === viewElectrical[viewElectrical.length]) {
                electricalScrollDown.classList.add('d-none');
                electricalScrollUp.classList.remove('d-none');
            }
        } else {
            return;
        }
    } else if (event.deltaY < 0) {

        if (viewElectrical.length >= incrementElectrical && incrementElectrical > 1) {
            setTimeout(() => {
                electricalScrollDown.classList.remove('d-none');
                electricalScrollUp.classList.add('d-none');
            }, 300);
            incrementElectrical--;
            viewElectrical[incrementElectrical - 1].scrollIntoView({behavior: "smooth", block: "start"});
        } else {
            return;
        }
    }
});

electricalScrollDown.addEventListener('click', () => {
    viewElectrical[incrementElectrical].scrollIntoView({behavior: "smooth", block: "start"});
    incrementElectrical++;
    if (viewElectrical[incrementElectrical] === viewElectrical[viewElectrical.length]) {
        electricalScrollDown.classList.add('d-none');
        electricalScrollUp.classList.remove('d-none');
    }
});

electricalScrollUp.addEventListener('click', () => {
    incrementElectrical = 1;
    viewElectrical[0].scrollIntoView({behavior: "smooth", block: "start"});
    setTimeout(() => {
        electricalScrollDown.classList.remove('d-none');
        electricalScrollUp.classList.add('d-none');
    }, 500)
});

// health

document.querySelector('#v-health').addEventListener('mousewheel', (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        if (viewHealth.length > incrementHealth) {
            viewHealth[incrementHealth].scrollIntoView({behavior: "smooth", block: "start"});
            incrementHealth++;
            if (viewHealth[incrementHealth] === viewHealth[viewHealth.length]) {
                healthScrollDown.classList.add('d-none');
                healthScrollUp.classList.remove('d-none');
            }
        } else {
            return;
        }
    } else if (event.deltaY < 0) {

        if (viewHealth.length >= incrementHealth && incrementHealth > 1) {
            setTimeout(() => {
                healthScrollDown.classList.remove('d-none');
                healthScrollUp.classList.add('d-none');
            }, 300);
            incrementHealth--;
            viewHealth[incrementHealth - 1].scrollIntoView({behavior: "smooth", block: "start"});
        } else {
            return;
        }
    }
});

healthScrollDown.addEventListener('click', () => {
    viewHealth[incrementHealth].scrollIntoView({behavior: "smooth", block: "start"});
    incrementHealth++;
    if (viewHealth[incrementHealth] === viewHealth[viewHealth.length]) {
        healthScrollDown.classList.add('d-none');
        healthScrollUp.classList.remove('d-none');
    }
});

healthScrollUp.addEventListener('click', () => {
    incrementHealth = 1;
    viewHealth[0].scrollIntoView({behavior: "smooth", block: "start"});
    setTimeout(() => {
        healthScrollDown.classList.remove('d-none');
        healthScrollUp.classList.add('d-none');
    }, 500)
});


// business-automation

document.querySelector('#v-business-automation').addEventListener('mousewheel', (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        if (viewBusiness.length > incrementBusiness) {
            viewBusiness[incrementBusiness].scrollIntoView({behavior: "smooth", block: "start"});
            incrementBusiness++;
            if (viewBusiness[incrementBusiness] === viewBusiness[viewBusiness.length]) {

                businessScrollDown.classList.add('d-none');
                businessScrollUp.classList.remove('d-none');
            }
        } else {
            return;
        }
    } else if (event.deltaY < 0) {

        if (viewBusiness.length >= incrementBusiness && incrementBusiness > 1) {
            setTimeout(() => {
                businessScrollDown.classList.remove('d-none');
                businessScrollUp.classList.add('d-none');
            }, 300);
            incrementBusiness--;
            viewBusiness[incrementBusiness - 1].scrollIntoView({behavior: "smooth", block: "start"});
        } else {
            return;
        }
    }
});

businessScrollDown.addEventListener('click', () => {
    viewBusiness[incrementBusiness].scrollIntoView({behavior: "smooth", block: "start"});
    incrementBusiness++;
    console.log('inc scroll click', incrementBusiness);
    if (viewBusiness[incrementBusiness] === viewBusiness[viewBusiness.length]) {
        businessScrollDown.classList.add('d-none');
        businessScrollUp.classList.remove('d-none');
    }
});

businessScrollUp.addEventListener('click', () => {
    incrementBusiness = 1;
    viewBusiness[0].scrollIntoView({behavior: "smooth", block: "start"});
    setTimeout(() => {
        businessScrollDown.classList.remove('d-none');
        businessScrollUp.classList.add('d-none');
    }, 500)
});


// media

document.querySelector('#v-media').addEventListener('mousewheel', (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        if (viewMedia.length > incrementMedia) {
            viewMedia[incrementMedia].scrollIntoView({behavior: "smooth", block: "start"});
            incrementMedia++;
            if (viewMedia[incrementMedia] === viewMedia[viewMedia.length]) {

                mediaScrollDown.classList.add('d-none');
                mediaScrollUp.classList.remove('d-none');
            }
        } else {
            return;
        }
    } else if (event.deltaY < 0) {

        if (viewMedia.length >= incrementMedia && incrementMedia > 1) {
            setTimeout(() => {
                mediaScrollDown.classList.remove('d-none');
                mediaScrollUp.classList.add('d-none');
            }, 300);
            incrementMedia--;
            viewMedia[incrementMedia - 1].scrollIntoView({behavior: "smooth", block: "start"});
        } else {
            return;
        }
    }
});

mediaScrollDown.addEventListener('click', () => {
    viewMedia[incrementMedia].scrollIntoView({behavior: "smooth", block: "start"});
    incrementMedia++;

    if (viewMedia[incrementMedia] === viewMedia[viewMedia.length]) {
        mediaScrollDown.classList.add('d-none');
        mediaScrollUp.classList.remove('d-none');
    }
});

mediaScrollUp.addEventListener('click', () => {
    incrementMedia = 1;
    viewMedia[0].scrollIntoView({behavior: "smooth", block: "start"});
    setTimeout(() => {
        mediaScrollDown.classList.remove('d-none');
        mediaScrollUp.classList.add('d-none');
    }, 500)
});


// marketing

document.querySelector('#v-marketing').addEventListener('mousewheel', (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        if (viewMarketing.length > incrementMarketing) {
            viewMarketing[incrementMarketing].scrollIntoView({behavior: "smooth", block: "start"});
            incrementMarketing++;
            if (viewMarketing[incrementMarketing] === viewMarketing[viewMarketing.length]) {

                marketingScrollDown.classList.add('d-none');
                marketingScrollUp.classList.remove('d-none');
            }
        } else {
            return;
        }
    } else if (event.deltaY < 0) {

        if (viewMarketing.length >= incrementMarketing && incrementMarketing > 1) {
            setTimeout(() => {
                marketingScrollDown.classList.remove('d-none');
                marketingScrollUp.classList.add('d-none');
            }, 300);
            incrementMarketing--;
            viewMarketing[incrementMarketing - 1].scrollIntoView({behavior: "smooth", block: "start"});
        } else {
            return;
        }
    }
});

marketingScrollDown.addEventListener('click', () => {
    viewMarketing[incrementMarketing].scrollIntoView({behavior: "smooth", block: "start"});
    incrementMarketing++;
    if (viewMarketing[incrementMarketing] === viewMarketing[viewMarketing.length]) {
        marketingScrollDown.classList.add('d-none');
        marketingScrollUp.classList.remove('d-none');
    }
});

marketingScrollUp.addEventListener('click', () => {
    incrementMarketing = 1;
    viewMarketing[0].scrollIntoView({behavior: "smooth", block: "start"});
    setTimeout(() => {
        marketingScrollDown.classList.remove('d-none');
        marketingScrollUp.classList.add('d-none');
    }, 500)
});

// food

document.querySelector('#v-food-beverages').addEventListener('mousewheel', (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        if (viewFood.length > incrementFood) {
            viewFood[incrementFood].scrollIntoView({behavior: "smooth", block: "start"});
            incrementFood++;
            if (viewFood[incrementFood] === viewFood[viewFood.length]) {

                foodScrollDown.classList.add('d-none');
                foodScrollUp.classList.remove('d-none');
            }
        } else {
            return;
        }
    } else if (event.deltaY < 0) {

        if (viewFood.length >= incrementFood && incrementFood > 1) {
            setTimeout(() => {
                foodScrollDown.classList.remove('d-none');
                foodScrollUp.classList.add('d-none');
            }, 300);
            incrementFood--;
            viewFood[incrementFood - 1].scrollIntoView({behavior: "smooth", block: "start"});
        } else {
            return;
        }
    }
});

foodScrollDown.addEventListener('click', () => {
    viewFood[incrementFood].scrollIntoView({behavior: "smooth", block: "start"});
    incrementFood++;
    if (viewFood[incrementFood] === viewFood[viewFood.length]) {
        foodScrollDown.classList.add('d-none');
        foodScrollUp.classList.remove('d-none');
    }
});

foodScrollUp.addEventListener('click', () => {
    incrementFood = 1;
    viewFood[0].scrollIntoView({behavior: "smooth", block: "start"});
    setTimeout(() => {
        foodScrollDown.classList.remove('d-none');
        foodScrollUp.classList.add('d-none');
    }, 500)
});


// travel

document.querySelector('#v-travel').addEventListener('mousewheel', (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        if (viewTravel.length > incrementTravel) {
            viewTravel[incrementTravel].scrollIntoView({behavior: "smooth", block: "start"});
            incrementTravel++;
            if (viewTravel[incrementTravel] === viewTravel[viewTravel.length]) {

                travelScrollDown.classList.add('d-none');
                travelScrollUp.classList.remove('d-none');
            }
        } else {
            return;
        }
    } else if (event.deltaY < 0) {

        if (viewTravel.length >= incrementTravel && incrementTravel > 1) {
            setTimeout(() => {
                travelScrollDown.classList.remove('d-none');
                travelScrollUp.classList.add('d-none');
            }, 300);
            incrementTravel--;
            viewTravel[incrementTravel - 1].scrollIntoView({behavior: "smooth", block: "start"});
        } else {
            return;
        }
    }
});

travelScrollDown.addEventListener('click', () => {
    viewTravel[incrementTravel].scrollIntoView({behavior: "smooth", block: "start"});
    incrementTravel++;
    if (viewTravel[incrementTravel] === viewTravel[viewTravel.length]) {
        travelScrollDown.classList.add('d-none');
        travelScrollUp.classList.remove('d-none');
    }
});

travelScrollUp.addEventListener('click', () => {
    incrementTravel = 1;
    viewTravel[0].scrollIntoView({behavior: "smooth", block: "start"});
    setTimeout(() => {
        travelScrollDown.classList.remove('d-none');
        travelScrollUp.classList.add('d-none');
    }, 500)
});

// games

document.querySelector('#v-games').addEventListener('mousewheel', (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        if (viewGames.length > incrementGames) {
            viewGames[incrementGames].scrollIntoView({behavior: "smooth", block: "start"});
            incrementGames++;
            if (viewGames[incrementGames] === viewGames[viewGames.length]) {
                gamesScrollDown.classList.add('d-none');
                gamesScrollUp.classList.remove('d-none');
            }
        } else {
            return;
        }
    } else if (event.deltaY < 0) {
        if (viewGames.length >= incrementGames && incrementGames > 1) {
            setTimeout(() => {
                gamesScrollDown.classList.remove('d-none');
                gamesScrollUp.classList.add('d-none');
            }, 300);
            incrementGames--;
            viewGames[incrementGames - 1].scrollIntoView({behavior: "smooth", block: "start"});
        } else {
            return;
        }
    }
});

gamesScrollDown.addEventListener('click', () => {
    viewGames[incrementGames].scrollIntoView({behavior: "smooth", block: "start"});
    incrementGames++;
    if (viewGames[incrementGames] === viewGames[viewGames.length]) {
        gamesScrollDown.classList.add('d-none');
        gamesScrollUp.classList.remove('d-none');
    }
});

gamesScrollUp.addEventListener('click', () => {
    incrementGames = 1;
    viewGames[0].scrollIntoView({behavior: "smooth", block: "start"});
    setTimeout(() => {
        gamesScrollDown.classList.remove('d-none');
        gamesScrollUp.classList.add('d-none');
    }, 500)
});


// other

document.querySelector('#v-other').addEventListener('mousewheel', (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
        if (viewOther.length > incrementOther) {
            viewOther[incrementOther].scrollIntoView({behavior: "smooth", block: "start"});
            incrementOther++;
            if (viewOther[incrementOther] === viewOther[viewOther.length]) {
                otherScrollDown.classList.add('d-none');
                otherScrollUp.classList.remove('d-none');
            }
        } else {
            return;
        }
    } else if (event.deltaY < 0) {
        if (viewOther.length >= incrementOther && incrementOther > 1) {
            setTimeout(() => {
                otherScrollDown.classList.remove('d-none');
                otherScrollUp.classList.add('d-none');
            }, 300);
            incrementOther--;
            viewOther[incrementOther - 1].scrollIntoView({behavior: "smooth", block: "start"});
        } else {
            return;
        }
    }
});

otherScrollDown.addEventListener('click', () => {
    viewOther[incrementOther].scrollIntoView({behavior: "smooth", block: "start"});
    incrementOther++;
    if (viewOther[incrementOther] === viewOther[viewOther.length]) {
        otherScrollDown.classList.add('d-none');
        otherScrollUp.classList.remove('d-none');
    }
});

otherScrollUp.addEventListener('click', () => {
    incrementOther = 1;
    viewOther[0].scrollIntoView({behavior: "smooth", block: "start"});
    setTimeout(() => {
        otherScrollDown.classList.remove('d-none');
        otherScrollUp.classList.add('d-none');
    }, 500)
});


// click scroll to top
navLink.forEach(el => {
    el.addEventListener('click', (e) => {
        scrollInstance.scroll(0);
        switch (e.srcElement.id) {
            case 'electrical':
                incrementElectrical = 1;
                electricalScrollDown.classList.remove('d-none');
                electricalScrollUp.classList.add('d-none');
                break;

            case 'health':
                incrementHealth = 1;
                healthScrollDown.classList.remove('d-none');
                healthScrollUp.classList.add('d-none');
                break;

            case 'business-automation':
                incrementBusiness = 1;
                businessScrollDown.classList.remove('d-none');
                businessScrollUp.classList.add('d-none');
                break;

            case 'marketing':
                incrementMarketing = 1;
                marketingScrollDown.classList.remove('d-none');
                marketingScrollUp.classList.add('d-none');
                break;

            case 'media':
                incrementMedia = 1;
                mediaScrollDown.classList.remove('d-none');
                mediaScrollUp.classList.add('d-none');
                break;

            case 'food-beverages':
                incrementFood = 1;
                foodScrollDown.classList.remove('d-none');
                foodScrollUp.classList.add('d-none');
                break;

            case 'travel':
                incrementTravel = 1;
                travelScrollDown.classList.remove('d-none');
                travelScrollUp.classList.add('d-none');
                break;

            case 'games':
                incrementGames = 1;
                gamesScrollDown.classList.remove('d-none');
                gamesScrollUp.classList.add('d-none');
                break;

            case 'other':
                incrementOther = 1;
                otherScrollDown.classList.remove('d-none');
                otherScrollUp.classList.add('d-none');
                break;
        }
    });
})

