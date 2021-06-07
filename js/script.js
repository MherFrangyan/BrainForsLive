//scroll bar
document.addEventListener("DOMContentLoaded", function() {
    OverlayScrollbars(document.querySelectorAll("body"), { });
});

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// loader page anim start

function debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function () {
        var last = new Date().getTime() - timestamp;

        if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            }
        }
    };

    return function () {
        context = this;
        args = arguments;
        timestamp = new Date().getTime();
        var callNow = immediate && !timeout;
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }

        return result;
    };
}
// $(document).ready(function(){

//     var count = 0;
//     var counter = setInterval( () => {
//         if(count < 101){
//             if(count == 80){
//                 $('.img_content').addClass('animate__rotateIn ')
//             }
//             $('.count').text(count)
//             count++
//         }else{
//             clearInterval(counter)
//             $('.loading-custom-animation').addClass('hiden_loading-custom-animation')

//             var timeOut = setTimeout(()=>{
//                 console.log('.hiden_loading-custom-animation_none')
//                 $('.loading-custom-animation').addClass('hiden_loading-custom-animation_none')
//             },900)

//             setTimeout(()=>{
//                 $('.down_line').addClass('down_line_hide')
//                 setTimeout(()=>{
//                     $('.inside_bg_hide').addClass('inside_bg_show')
//                     setTimeout(()=>{
//                         $('.down_text').addClass('down_text_show')
//                         $('.scrolle_down').addClass('scrolle_down_show')
//                         $('.scroll_to').addClass('hover_scrolle')
//                     },400)
//                 },1500)
//             },80)
//         }

//     },30)
// });


// loader page anim end


// loader page code start
let count_loader = 0;
var video = document.getElementById("video_fullScreen");
function stopVideo(){
    video.pause();
    video.currentTime = 0;
}
let loader_interval = setInterval(() => {
    $('.count').text(count_loader);
    count_loader++
});

$(window).on('load', function (e) {
    clearInterval(loader_interval);
    setTimeout(() => {
        setInterval(() => {
            if (count_loader < 100) {
                count_loader++;
                $('.count').text(count_loader);
                $('.img_content').addClass('animate__rotateIn');
                if (count_loader === 100) {
                    setTimeout(() => {
                        $('.loading-custom-animation').addClass('hiden_loading-custom-animation')
                    }, 500)
                }
                return
            }
        });
        setTimeout(() => {
            $('.down_line').addClass('down_line_hide');
            video.play();
            setTimeout(() => {
                $('.inside_bg_hide').addClass('inside_bg_show');
                setTimeout(() => {
                    $('.down_text').addClass('down_text_show');
                    $('.scrolle_down').addClass('scrolle_down_show');
                    $('.scroll_to').addClass('hover_scrolle')
                }, 400)
            }, 1500)
        }, 800)
    }, 200);
});
// loader page code end


var count = 1;
var timeNext = null;
var timeoutNext = null;
var timeoutPrev = null;
var clickTimeout = null;

$('.scrolle_down .scrolle_down_icon').on('click', () => {

    setTimeout(() => {
        $('.down_text').removeClass('down_text_show');
        $('.scrolle_down').removeClass('scrolle_down_show');
        setTimeout(() => {
            $('.inside_bg_hide').removeClass('inside_bg_show');
            setTimeout(() => {

                $('.down_line').removeClass('down_line_hide');
                $('.scrolle_down').removeClass('scrolle_down_show');
                setTimeout(() => {
                    stopVideo();
                    $('.slide_block').removeClass('d-none');
                    $('#video_fullScreen').css('transform', 'translateY(-1000px)');
                    // $('.home_slide2 img').css('transform','translateY()');
                    $('.nav-list').css('left', '4000px');
                    $('.nav-toggle').css('right', '-50px');
                    setTimeout(() => {

                        $('.home-page').addClass("d-none");
                        $('.nav-list').addClass("d-none");
                        document.addEventListener("mousewheel", (e) => {
                            if (e.target.id === 'box_slide5' && e.deltaY < 0) {
                                $('.nav-list').removeClass("d-none");
                                $('.home-page').removeClass("d-none");
                                setTimeout(() => {
                                    stopVideo();
                                    $('#video_fullScreen').css('transform', 'translateY(-1000px)');
                                    // $('.home_slide2 img').css('transform','translateY(0px)');
                                    $('.nav-list').css('left', '0px');
                                    $('.nav-toggle').css('right', '-5000px')
                                }, 200)
                            }
                        });
                    }, 1000);

                    $('.mian_slider').css('transform', 'scale(1)');
                    $('.content_block1').css('bottom', '55%');
                    timeNext = setTimeout(() => {
                        $('.loader').addClass('d-none');
                        $('.ball').css('z-index', '0');
                        $('.loader1').removeClass('d-none');
                        $('.ball1').css('z-index', '-1');
                        setTimeout(() => {
                            funcnext1();
                            timeNext = null
                        }, 5000)
                    }, 2000)

                }, 500)

            }, 1200)
        }, 500)
    }, 400)


});
$('.home-page').on('mousewheel', debounce((e) => {
    console.log(e.originalEvent.deltaY);
    if (e.originalEvent.deltaY < 0) {
        return
    } else {
        $('.mian_slider').removeClass('main_slide1_more');
        setTimeout(() => {
            $('.down_text').removeClass('down_text_show');
            $('.scrolle_down').removeClass('scrolle_down_show');
            setTimeout(() => {
                $('.inside_bg_hide').removeClass('inside_bg_show');
                setTimeout(() => {
                    $('.down_line').removeClass('down_line_hide');
                    $('.scrolle_down').removeClass('scrolle_down_show');
                    setTimeout(() => {
                        stopVideo()
                        $('.slide_block').removeClass('d-none');
                        $('#video_fullScreen').css('transform', 'translateY(-1000px)');
                        // $('.home_slide2 img').css('transform','translateY(-1000px)');
                        $('.nav-list').css('left', '1000px');
                        $('.nav-toggle').css('right', '-50px');
                        setTimeout(() => {

                            $('.home-page').addClass("d-none");
                            $('.nav-list').addClass("d-none");
                            document.addEventListener("mousewheel", (e) => {
                                if (e.target.id === 'box_slide5' && e.deltaY < 0) {
                                    $('.nav-list').removeClass("d-none");
                                    $('.home-page').removeClass("d-none");
                                    setTimeout(() => {

                                        $('#video_fullScreen').css('transform', 'translateY(0px)');
                                        // $('.home_slide2 img').css('transform','translateY(0px)');
                                        $('.nav-list').css('left', '0px');
                                        $('.nav-toggle').css('right', '-5000px')
                                    }, 200)
                                }
                            });
                        }, 1000);

                        $('.mian_slider').css('transform', 'scale(1)');
                        $('.content_block1').css('bottom', '55%');
                        timeNext = setTimeout(() => {
                            $('.loader').addClass('d-none');
                            $('.ball').css('z-index', '0');
                            $('.loader1').removeClass('d-none');
                            $('.ball1').css('z-index', '-1');
                            setTimeout(() => {
                                funcnext1();
                                timeNext = null;
                            }, 5000)
                        }, 2000)

                    }, 500)

                }, 1200)
            }, 500)
        }, 400)
    }

},200));


$('.nav-toggle').on('click', () => {
    console.log('asdcasdcasdcac')
    $('.min_menu_block').removeClass('d-none');
    $('.nav-list').removeClass('d-none');
    $('.nav-list').addClass("menu_list");
    $('.nav-list').css('display', 'block');
    $('.navbar-brand').addClass('d-none');
    $('.nav-toggle').addClass('d-none')
});
$('.close_menu').on('click', () => {
    $('.min_menu_block').addClass('d-none');
    $('.nav-list').removeClass("menu_list");
    $('.navbar-brand').removeClass('d-none');
    $('.nav-toggle').removeClass('d-none');
    $('.nav-list').addClass('d-none');
});


// setTimeout block


// slide next function
function funcnext1() {
    if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
        clearTimeout(timeoutNext);
        clearTimeout(timeoutPrev);
        clearTimeout(clickTimeout);
        clearTimeout(timeNext)

    }
    $('.slide_1 .slide-overlay').addClass('d-none');
    $('.mian_slider').addClass('main_slide1_more');
    $('.loader').addClass('d-none');
    $('.ball1').css('z-index', '0');
    $('.main_slide1_more .content_block1').css('bottom', '200%');
    $('.scrolle_down_respons').addClass('more_color')

}

function funcnext2() {
    if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
        clearTimeout(timeoutNext);
        clearTimeout(timeoutPrev);
        clearTimeout(clickTimeout);
        clearTimeout(timeNext)

    }
    $('.slide_2 .slide-overlay').addClass('d-none');
    $('.mian_slider').removeClass('main_slide1_more');
    $('.mian_slider').addClass('main_slide2_more');
    $('.loader').addClass('d-none');
    $('.ball2').css('z-index', '0');
    $('.content_block2').css('left', '-4000px');
    $('.scrolle_down_respons').addClass('more_color')

}

function funcnext3() {
    if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
        clearTimeout(timeoutNext);
        clearTimeout(timeoutPrev);
        clearTimeout(clickTimeout);
        clearTimeout(timeNext)

    }
    $('.loader').addClass('d-none');
    $('.ball3').css('z-index', '0');
    $('.slide_3 .slide-overlay').addClass('d-none');
    $('.mian_slider').removeClass('main_slide2_more');
    $('.mian_slider').addClass('main_slide3_more');
    $('.main_slide3_more .slide_3 .more_about_img').css('transform', 'scale(0.8)');
    $('.content_block3').css('transform', 'scale(0)');
    $('.scrolle_down_respons').addClass('more_color');
    setTimeout(() => {
        $('.main_slide3_more .slide_3 .more_about_img').css('left', '50%');
        setTimeout(() => {
            $('.main_slide3_more .slide_3 .more_about_img').css('transform', 'scale(1)')

        }, 800)
    }, 1000)
}

function funcnext4() {
    if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
        clearTimeout(timeoutNext);
        clearTimeout(timeoutPrev);
        clearTimeout(clickTimeout);
        clearTimeout(timeNext)
    }
    $('.scrolle_down_icon').addClass('d-none');
    $('.slide_4 .slide-overlay').addClass('d-none');
    $('.mian_slider').removeClass('main_slide3_more');
    $('.mian_slider').addClass('main_slide4_more');
    $('.loader').addClass('d-none');
    $('.ball4').css('z-index', '0');
    $('.content_block4').css('bottom', '-4500px')

}


// next scrolling
function funcprev1() {
    if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
        clearTimeout(timeoutNext);
        clearTimeout(timeoutPrev);
        clearTimeout(clickTimeout);
        clearTimeout(timeNext)
    }
    $('.slide_1 .slide-overlay').removeClass('d-none');
    $('.mian_slider').removeClass('main_slide1_more');
    $('.loader').addClass('d-none');
    $('.loader1').removeClass('d-none');
    $('.ball').css('z-index', '0');
    $('.ball1').css('z-index', '-1');
    $('.content_block1').css('bottom', '55%');
    $('.scrolle_down_respons').removeClass('more_color');
    timeoutPrev = setTimeout(() => {
        funcnext1();
        console.log('timeoutPrev, active slid1')
    }, 5000)

}

function funcprev2() {
    if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
        clearTimeout(timeoutNext);
        clearTimeout(timeoutPrev);
        clearTimeout(clickTimeout);
        clearTimeout(timeNext)
    }
    $('.slide_1 .slide-overlay').removeClass('d-none');
    $('.slide_2 .slide-overlay').removeClass('d-none');
    $('.mian_slider').removeClass('main_slide2_more');
    $('.loader').addClass('d-none');
    $('.loader2').removeClass('d-none');
    $('.ball').css('z-index', '0');
    $('.ball2').css('z-index', '-1');
    $('.content_block2').css('left', '20%');
    $('.scrolle_down_respons').removeClass('more_color');
    timeoutPrev = setTimeout(() => {
        funcnext2()
        console.log('timeoutPrev, active slid2')
    }, 5000)
}

function funcprev3() {
    if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
        clearTimeout(timeoutNext);
        clearTimeout(timeoutPrev);
        clearTimeout(clickTimeout);
        clearTimeout(timeNext)
    }
    $('.slide_3 .slide-overlay').removeClass('d-none');
    $('.mian_slider').removeClass('main_slide3_more');
    $('.scrolle_down_respons').removeClass('more_color');

    setTimeout(() => {
        $('.content_block3').css('transform', 'scale(1)');
        $('.slide_3 .more_about_img').css('left', '0');
        setTimeout(() => {
            $('.loader').addClass('d-none');
            $('.loader3').removeClass('d-none');
            $('.ball').css('z-index', '0');
            $('.ball3').css('z-index', '-1')
        }, 500)
    }, 200);
    timeoutPrev = setTimeout(() => {
        funcnext3();
        console.log('timeoutPrev, active slid3')
    }, 5000)
}

function funcprev4() {
    if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
        clearTimeout(timeoutNext);
        clearTimeout(timeoutPrev);
        clearTimeout(clickTimeout);
        clearTimeout(timeNext)
    }
    $('.slide_4 .slide-overlay').removeClass('d-none');
    $('.content_block4').css('bottom', '55%');
    $('.mian_slider').removeClass('main_slide4_more');
    $('.loader').addClass('d-none');
    $('.loader4').removeClass('d-none');
    $('.ball').css('z-index', '0');
    $('.ball4').css('z-index', '-1');
    $('.scrolle_down_icon').removeClass('d-none');
    timeoutPrev = setTimeout(() => {
        funcnext4();
        console.log('timeoutPrev, active slid4')
    }, 5000)
}

// next scrolling end


// next view slide
function viewSlide1() {
    if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
        clearTimeout(timeoutNext);
        clearTimeout(timeoutPrev);
        clearTimeout(clickTimeout);
        clearTimeout(timeNext)
    }
    setTimeout(() => {
        $('.slider_content').css('transform', `translateX(${-innerWidth}px)`);
        $('.mian_slider').removeClass('main_slide1_more');
        $('.scrolle_down_respons').removeClass('more_color');
        setTimeout(() => {
            $('.content_block2').css('left', '20%')
        }, 400)
    }, 360);

    $('.pagin').removeClass('active');
    setTimeout(() => {
        $('.pagin_number').html("2/04");
        $('.slide_1 .slide-overlay').removeClass('d-none');
        $('.loader').addClass('d-none');
        $('.loader2').removeClass('d-none');
        $('.ball').css('z-index', '0');
        $('.ball2').css('z-index', '-1');
        $('.pagin').removeClass('active');
        $('.pagin2').addClass('active')
    }, 800);
    timeoutNext = setTimeout(() => {
        funcnext2();
        console.log('timeoutNext, active slid2')
    }, 5000)

}

function viewSlide2() {
    if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
        clearTimeout(timeoutNext);
        clearTimeout(timeoutPrev);
        clearTimeout(clickTimeout);
        clearTimeout(timeNext)
    }
    setTimeout(() => {
        $('.slide_2 .slide-overlay').removeClass('d-none');
        $('.scrolle_down_respons').removeClass('more_color');
        $('.slider_content').css('transform', `translateX(${-innerWidth * 2}px)`);
        $('.mian_slider').removeClass('main_slide2_more')
    }, 360);
    $('.pagin').removeClass('active');
    $('.content_block3').css('transform', 'scale(1)');

    setTimeout(() => {
        $('.pagin_number').html("3/04");
        $('.loader').addClass('d-none');
        $('.loader3').removeClass('d-none');
        $('.ball').css('z-index', '0');
        $('.ball3').css('z-index', '-1');
        $('.pagin').removeClass('active');
        $('.pagin3').addClass('active')
    }, 1000);
    timeoutNext = setTimeout(() => {
        funcnext3();
        console.log('timeoutNext, active slid3')
    }, 5000)
}

function viewSlide3() {
    if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
        clearTimeout(timeoutNext);
        clearTimeout(timeoutPrev);
        clearTimeout(clickTimeout);
        clearTimeout(timeNext)
    }
    setTimeout(() => {
        $('.pagin_number').html("4/04");
        $('.slide_3 .slide-overlay').removeClass('d-none');
        $('.scrolle_down_respons').removeClass('more_color');
        $('.slider_content').css('transform', `translateX(${-innerWidth * 3}px)`);
        $('.mian_slider').removeClass('main_slide3_more');
        $('.content_block4').css('bottom', '55%')
    }, 360)
    $('.pagin').removeClass('active');

    setTimeout(() => {
        $('.loader').addClass('d-none');
        $('.loader4').removeClass('d-none');
        $('.ball').css('z-index', '0');
        $('.ball4').css('z-index', '-1');
        $('.pagin').removeClass('active');
        $('.pagin4').addClass('active')

    }, 1000);
    timeoutNext = setTimeout(() => {
        funcnext4();
        console.log('timeoutNext, active slid4')
    }, 5000)
}

// next view slide end


// clicke active slide
function clickChangedSlide1() {
    if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
        clearTimeout(timeoutNext);
        clearTimeout(timeoutPrev);
        clearTimeout(clickTimeout);
        clearTimeout(timeNext)
    }
    clickTimeout = setTimeout(() => {
        funcnext1();
        console.log('clickTimeout, active slid1')
    }, 5000);
    $('.pagin_number').html("1/04");
    $('.scrolle_down_respons').removeClass('more_color');
    $('.scrolle_down_icon').removeClass('d-none');
    $('._slide .slide-overlay').removeClass('d-none');
    $('.mian_slider').removeClass('main_slide1_more');
    $('.mian_slider').removeClass('main_slide2_more');
    $('.mian_slider').removeClass('main_slide3_more');
    $('.mian_slider').removeClass('main_slide4_more');
    $('.slider_content').css('transform', `translateX(${0}px)`);
    $('.loader').addClass('d-none');
    $('.loader1').removeClass('d-none');
    $('.ball').css('z-index', '0');
    $('.ball1').css('z-index', '-1');
    $('.pagin').removeClass('active');
    $('.pagin1').addClass('active');
    $('.content_block1').css('bottom', '55%')
}

function clickChangedSlide2() {
    if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
        clearTimeout(timeoutNext);
        clearTimeout(timeoutNext);
        clearTimeout(timeoutPrev);
        clearTimeout(clickTimeout);
        clearTimeout(timeNext)
    }
    clickTimeout = setTimeout(() => {
        funcnext2();
        console.log('clickTimeout, active slid2')
    }, 5000);
    $('.pagin_number').html("2/04");
    $('.scrolle_down_respons').removeClass('more_color');
    $('.scrolle_down_icon').removeClass('d-none');
    $('._slide .slide-overlay').removeClass('d-none');
    $('.mian_slider').removeClass('main_slide1_more');
    $('.mian_slider').removeClass('main_slide2_more');
    $('.mian_slider').removeClass('main_slide3_more');
    $('.mian_slider').removeClass('main_slide4_more');
    $('.slider_content').css('transform', `translateX(${-innerWidth}px)`);
    $('.loader').addClass('d-none');
    $('.loader2').removeClass('d-none');
    $('.ball').css('z-index', '0');
    $('.ball2').css('z-index', '-1');
    $('.pagin').removeClass('active');
    $('.pagin2').addClass('active');
    setTimeout(() => {
        $('.content_block2').css('left', '20%');
    }, 400)
}

function clickChangedSlide3() {
    if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
        clearTimeout(timeoutNext);
        clearTimeout(timeoutPrev);
        clearTimeout(clickTimeout);
        clearTimeout(timeNext)
    }
    clickTimeout = setTimeout(() => {
        funcnext3();
        console.log('clickTimeout, active slid3')
    }, 5000);
    $('.pagin_number').html("3/04");
    $('.scrolle_down_respons').removeClass('more_color');
    $('.scrolle_down_icon').removeClass('d-none');
    $('._slide .slide-overlay').removeClass('d-none');
    $('.slide_3 .more_about_img').css('left', '0%');
    $('.mian_slider').removeClass('main_slide1_more');
    $('.mian_slider').removeClass('main_slide2_more');
    $('.mian_slider').removeClass('main_slide3_more');
    $('.mian_slider').removeClass('main_slide4_more');
    $('.slider_content').css('transform', `translateX(${-innerWidth * 2}px)`);
    $('.loader').addClass('d-none');
    $('.loader3').removeClass('d-none');
    $('.ball').css('z-index', '0');
    $('.ball3').css('z-index', '-1');
    $('.pagin').removeClass('active');
    $('.pagin3').addClass('active');
    $('.content_block3').css('transform', 'scale(1)')
}

function clickChangedSlide4() {
    if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
        clearTimeout(timeoutNext);
        clearTimeout(timeoutPrev);
        clearTimeout(clickTimeout);
        clearTimeout(timeNext)
    }
    clickTimeout = setTimeout(() => {
        funcnext4();
        console.log('clickTimeout, active slid4')
    }, 5000);
    $('.pagin_number').html("4/04");
    $('.scrolle_down_respons').removeClass('more_color');
    $('.scrolle_down_icon').removeClass('d-none');
    $('._slide .slide-overlay').removeClass('d-none');
    $('.mian_slider').removeClass('main_slide1_more');
    $('.mian_slider').removeClass('main_slide2_more');
    $('.mian_slider').removeClass('main_slide3_more');
    $('.mian_slider').removeClass('main_slide4_more');
    $('.slider_content').css('transform', `translateX(${-innerWidth * 3}px)`)
    $('.loader').addClass('d-none');
    $('.loader4').removeClass('d-none');
    $('.ball').css('z-index', '0');
    $('.ball4').css('z-index', '-1');
    $('.pagin').removeClass('active');
    $('.pagin4').addClass('active');
    setTimeout(() => {
        $('.content_block4').css('bottom', '55%')
    }, 360)
}

// maous weel slide 1
$('.mian_slider .slide_1 .slide-overlay, .mian_slider .slide_1 .content_block').on("wheel",debounce((e) => {
    if (e.originalEvent.deltaY > 0) {
        funcnext1()
    } else {
        if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
            clearTimeout(timeoutNext);
            clearTimeout(timeoutPrev);
            clearTimeout(clickTimeout);
            clearTimeout(timeNext)
        }
        $('.home-page').removeClass("d-none");
        $('.nav-list').removeClass("d-none");
        setTimeout(() => {
            video.play();
            $('.nav-list').css('left', '0px');
            $('.nav-toggle').css('right', '-5000px');
            $('#video_fullScreen').css('transform', 'translateY(0px)');
            // $('.home_slide2 img').css('transform','translateY(0px)');
            setTimeout(() => {
                setTimeout(() => {
                    $('.down_line').addClass('down_line_hide');
                    setTimeout(() => {
                        $('.inside_bg_hide').addClass('inside_bg_show');
                        setTimeout(() => {
                            $('.down_text').addClass('down_text_show');
                            $('.scrolle_down').addClass('scrolle_down_show')
                        }, 400)
                    }, 1500)
                }, 1)
            }, 2)
        }, 200)
    }
    return
},200));


// maous weel slide 1 next to slide 2
$('.mian_slider .slide_1 .more_about_block, .mian_slider .slide_1 .more_about_img').on("wheel", debounce((e) => {

    if (e.originalEvent.deltaY > 0) {
        viewSlide1()
    } else {
        funcprev1()
    }
},200));

// maous weel slide 2
$('.mian_slider .slide_2 .slide-overlay, .mian_slider .slide_2 .content_block').on("wheel", debounce((e) => {
    console.log('slide2')
    if (e.originalEvent.deltaY > 0) {
        funcnext2()
    } else {
        if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
            clearTimeout(timeoutNext)
            clearTimeout(timeoutPrev)
            clearTimeout(clickTimeout)
            clearTimeout(timeNext)
        }
        setTimeout(() => {
            $('.slide_2 .slide-overlay').removeClass('d-none')
            $('.loader').addClass('d-none')
            $('.ball').css('z-index', '0')
            $('.pagin').removeClass('active')
            $('.slider_content').css('transform', `translateX(${0}px)`)
            $('.content_block1').css('bottom', '55%')
            $('.content_block2').css('left', '4000px')
        }, 360)
        setTimeout(() => {
            $('.pagin_number').html("1/04")
            $('.loader').addClass('d-none')
            $('.loader1').removeClass('d-none')
            $('.ball').css('z-index', '0')
            $('.ball1').css('z-index', '-1')
            $('.pagin').removeClass('active')
            $('.pagin1').addClass('active')
        }, 1000)
        timeoutPrev = setTimeout(() => {
            funcnext1()
            console.log('timePreve, active slid2')
        }, 5000)
    }

},200));

// maous weel slide 2 next to slide 3
$('.mian_slider .slide_2 .more_about_block, .mian_slider .slide_2 .more_about_img').on("wheel", debounce((e) => {
    if (e.originalEvent.deltaY > 0) {
        viewSlide2()
    } else {
        funcprev2()
    }

},200));

// maous weel slide 3
$('.mian_slider .slide_3 .slide-overlay, .mian_slider .slide_3 .content_block').on("wheel", debounce((e) => {
    if (e.originalEvent.deltaY > 0) {
        funcnext3()
    } else {
        if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
            clearTimeout(timeoutNext);
            clearTimeout(timeoutPrev);
            clearTimeout(clickTimeout);
            clearTimeout(timeNext)
        }
        setTimeout(() => {
            $('.slide_3 .slide-overlay').removeClass('d-none');
            $('.loader').addClass('d-none');
            $('.ball').css('z-index', '0');
            $('.pagin').removeClass('active');
            $('.slider_content').css('transform', `translateX(${-innerWidth}px)`);
            $('.content_block2').css('left', '20%');
            $('.content_block3').css('transform', 'scale(0)')
        }, 360);
        setTimeout(() => {
            $('.pagin_number').html("2/04");
            $('.loader').addClass('d-none');
            $('.loader2').removeClass('d-none');
            $('.ball').css('z-index', '0');
            $('.ball2').css('z-index', '-1');
            $('.pagin').removeClass('active');
            $('.pagin2').addClass('active');
        }, 1000);
        timeoutPrev = setTimeout(() => {
            funcnext2();
            console.log('timePreve, active slid3')
        }, 5000)
    }


},200));

// maous weel slide 3 next to slide 4
$('.mian_slider .slide_3 .more_about_block, .mian_slider .slide_3 .more_about_img').on("wheel", debounce((e) => {
    if (e.originalEvent.deltaY > 0) {
        viewSlide3()
    } else {
        funcprev3()
    }
},200));

// maous weel slide 4
$('.mian_slider .slide_4 .slide-overlay, .mian_slider .slide_4 .content_block').on("wheel", debounce((e) => {
    if (e.originalEvent.deltaY > 0) {
        funcnext4()
    } else {
        if (timeoutPrev || timeoutNext || clickTimeout || timeNext) {
            clearTimeout(timeoutNext);
            clearTimeout(timeoutPrev);
            clearTimeout(clickTimeout);
            clearTimeout(timeNext)
        }
        $('.slide_3 .more_about_img').removeAttr('style');
        setTimeout(() => {
            $('.slide_3 .slide-overlay').removeClass('d-none');
            $('.loader4').addClass('d-none');
            $('.ball4').css('z-index', '0');
            $('.pagin4').removeClass('active');
            $('.slider_content').css('transform', `translateX(${-innerWidth * 2}px)`);
            $('.content_block3').css('transform', 'scale(1)')
        }, 360)
        setTimeout(() => {
            $('.pagin_number').html("3/04");
            $('.loader').addClass('d-none');
            $('.loader3').removeClass('d-none');
            $('.ball').css('z-index', '0');
            $('.ball3').css('z-index', '-1');
            $('.pagin').removeClass('active');
            $('.pagin3').addClass('active')
        }, 1000);
        timeoutPrev = setTimeout(() => {
            funcnext3();
            console.log('timePreve, active slid4')
        }, 5000)
    }
},200));

$('.mian_slider .slide_4 .more_about_block, .mian_slider .slide_4 .more_about_img').on("wheel", debounce((e) => {
    if (e.originalEvent.deltaY > 0) {
        return
    } else {
        funcprev4()
    }
},200));

$('#scrolldown1').on('click', function (e) {
    if (e.currentTarget.parentElement.className === 'scrolle_down_respons more_color') {
        viewSlide1()
    } else {
        funcnext1()
    }
});

$('#scrolldown2').on('click', function (e) {
    if (e.currentTarget.parentElement.className === 'scrolle_down_respons more_color') {
        viewSlide2()
    } else {
        funcnext2()
    }
});

$('#scrolldown3').on('click', function (e) {
    if (e.currentTarget.parentElement.className === 'scrolle_down_respons more_color') {
        viewSlide3()
    } else {
        funcnext3()
    }
});

$('#scrolldown4').on('click', function (e) {
    if (e.currentTarget.parentElement.className === 'scrolle_down_respons more_color') {
        return
    } else {
        funcnext4()
    }
});
