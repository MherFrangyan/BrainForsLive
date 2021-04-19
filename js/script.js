// $('#loading-custom-animation').loading({
//     onStart: function(loading) {
//         console.log(loading)
//         // loading.settings.message ='xasdas'
//       loading.overlay.slideDown(400);
//     },
//     onStop: function(loading) {

//         loading.overlay.slideUp(400);
//     },
//     message:'<span>bhjgjhjhjh</span>'
    
//   });
//     var  count = 0;
//     setInterval(function() {
//     $('#loading-custom-animation').loading('toggle');
//         if( count < 101){
            
//         }
//   }, 5000);

$(document).ready(function(){

    var count = 0;
    var counter = setInterval( () => {
        if(count < 101){
            if(count == 80){
                $('.img_content').addClass('animate__rotateIn ')
            }
            $('.count').text(count)
            count++
        }else{
            clearInterval(counter)
            $('.loading-custom-animation').addClass('hiden_loading-custom-animation')

            var timeOut = setTimeout(()=>{
                console.log('.hiden_loading-custom-animation_none')
                $('.loading-custom-animation').addClass('hiden_loading-custom-animation_none')
            },900)

            setTimeout(()=>{
                $('.down_line').addClass('down_line_hide')
                setTimeout(()=>{
                    $('.inside_bg_hide').addClass('inside_bg_show')
                    setTimeout(()=>{
                        $('.down_text').addClass('down_text_show')
                        $('.scrolle_down').addClass('scrolle_down_show')
                        $('.scroll_to').addClass('hover_scrolle')
                    },400)
                },2500)
            },80)
        }
        
    },30)
   
  
});
function navheden() {
      
}

// window.addEventListener('wheel', event => {
//   console.log(event.target.id, 'i')
//     if(event.target.id === 'slide1'){
//         $('.nav-list').addClass('d-none')
//     }else if(event.target.id === 'slide5'){ 
//         $('.nav-list').removeClass('d-none') 
//     }
//     console.info(event.target.previousElementSibling)   
// })





// $(document).ready(function() {
  
//     var count = $('[class^="slide"]').size();
//     var lastScrollTop = 0;
//     var prev = count;
//     var curr = 1;
//     var now = 8;
//     var next = 2;
//     var finished = true;
  
//     $('.slide' + curr).css("left","0");
//     $('.slide' + curr).css("transform","scale(1)");
//     $('.slide').on('mousewheel DOMMouseScroll MozMousePixelScroll', function (e) {
//       if (finished) {
//         finished = false;
//         var delta = e.originalEvent.wheelDelta;
//         console.log(delta);
//         console.log(e)
//         if (delta < 0) {
//           $('[class^="slide"]').css("transition","all 0.5s ease, width 0s, height 0s");
//           $('.slide' + curr).css("transform","scale(.8)");
//           $('.slide' + curr).animate({
//               step: function(now,fx) {
//                 $(this).css('transform',"scale(."+now+")");
//               },
//               duration:'slow'
//           },'linear');
//           $('.slide' + curr).css("z-index","20");
//           $('.slide' + prev).css("z-index","10");
//           $('[class^="slide"]').css("transition","0s");
//           $('.slide' + next).css("left","100vw");
//           setTimeout(function() {
//             $('[class^="slide"]').css("transition","all .5s ease, width 0s, height 0s");
//             $('.slide' + next).css("left","0");
//             $('.slide' + next).css("transform","scale(1)");
//             $('.slide' + prev).css("-moz-transform","scale(1)");
//             $('.slide' + next).css("z-index","50");
//           },400);
//           setTimeout(function() {
//             curr++;
//             if (curr > count) curr = 1;
//             next++;
//             if (next > count) next = 1;
//             prev++;
//             if (prev > count) prev = 1;
//           },900);
//           if(this.id==='slide1') {
//             $('.nav-list').addClass('d-none')
//           } else if(this.id==='slide5') {
//             $('.nav-list').removeClass('d-none')
//           }
//         } else if (delta > 0) {
  
//           $('.slide' + curr).css("transition","all 0.5s ease, width 0s, height 0s");
//           $('.slide' + curr).css("transform","scale(.8)");
//           $('.slide' + curr).animate({
//               step: function(now,fx) {
//                 $(this).css('transform',"scale(."+now+")");
//               },
//               duration:'slow'
//           },'linear');
//           $('.slide' + curr).css("z-index","20");
//           $('.slide' + next).css("z-index","10");
//           $('[class^="slide"]').css("transition","0s");
//           $('.slide' + prev).css("left","-100vw");
//           setTimeout(function() {
            
//             $('[class^="slide"]').css("transition","all 0.5s ease, width 0s, height 0s");
//             $('.slide' + prev).css("left","0");
//             $('.slide' + prev).css("transform","scale(1)");
//             $('.slide' + prev).css("-moz-transform","scale(1)");
//             $('.slide' + prev).css("z-index","50");
//           },400);
//           setTimeout(function() {
//             curr--;
//             if (curr < 1) curr = count;
//             next--;
//             if (next < 1) next = count;
//             prev--;
//             if (prev < 1) prev = count;
//           },900);
//           console.log(this.id, 'this')
//           if(this.id==='slide1') {
//             $('.nav-list').addClass('d-none')
//           } else if(this.id==='slide2') {
//             $('.nav-list').removeClass('d-none')
//           }
//         }
  
//         setTimeout(function() {
//           finished = true;
//         },1100);
//       }

      
//     });

//   });

$('.home-page').on('mousewheel', (e)=> {
    clearInterval(timeNext)
 setTimeout(()=>{
        $('.down_text').removeClass('down_text_show')
        setTimeout(()=>{
            $('.inside_bg_hide').removeClass('inside_bg_show')
            setTimeout(()=>{
                $('.down_line').removeClass('down_line_hide')
                $('.scrolle_down').removeClass('scrolle_down_show')
                setTimeout(()=>{
                    $('.slide_block').removeClass('d-none');
                    $('.home_slide1 img').css('transform','translateY(1000px)');
                    $('.home_slide2 img').css('transform','translateY(-1000px)');
                    $('.nav-list').css('left','1000px');
                    $('.nav-toggle').css('right', '-50px')
                    setTimeout(()=>{
                            
                            $('.home-page').addClass("d-none");
                            $('.nav-list').addClass("d-none");
                            // document.addEventListener("mousewheel",GO);
                            // document.addEventListener("DOMMouseScroll",GO);
                            document.addEventListener("mousewheel",(e)=>{
                                if(e.target.id === 'box_slide5' && e.deltaY < 0){
                                    $('.nav-list').removeClass("d-none");
                                    $('.home-page').removeClass("d-none");
                                    setTimeout(()=> {
                                        $('.home_slide1 img').css('transform','translateY(0px)');
                                        $('.home_slide2 img').css('transform','translateY(0px)');
                                        $('.nav-list').css('left','0px');
                                        $('.nav-toggle').css('right', '-5000px')
                                    },200)
                                }
                            });
                    },1000);
                    
                    $('.mian_slider').css('transform', 'scale(1)')
                    $('.content_block1').css('bottom', '45%')
                    // console.log(count,'out')
                    timeNext = setInterval( ()=> {
                        // console.log(count,'in timeNext')
                        // console.log(objs.length,'in timeNext length')
                        if(count >= objs.length){
                            // console.log(objs.length,'in if length')
                            // console.log(count,'in if')
                            // console.log('timeNext Return')
                            clearInterval(timeNext)
                            return
                            
                        }
                        console.log('timeNext')
                            FunctionNext(window.innerWidth)
                        },5000)
                        
                },500)

            },1200)
        },500)
    },400)
    
   

})


$('.nav-toggle').on('click', ()=>{
    $('.min_menu_block').removeClass('d-none');
    $('.nav-list').removeClass('d-none');
    $('.nav-list').addClass("menu_list");
    $('.nav-list').css('display','block')
    $('.navbar-brand').addClass('d-none')
    $('.nav-toggle').addClass('d-none')


});
$('.close_menu').on('click', ()=> {
    $('.min_menu_block').addClass('d-none');
    $('.nav-list').removeClass("menu_list");
    $('.navbar-brand').removeClass('d-none');
    $('.nav-toggle').removeClass('d-none');
    $('.nav-list').addClass('d-none');
})

// var slides=document.querySelectorAll('.slide'),tl=new TimelineLite({paused:true});
// for(var i=slides.length;i--;){
//     var D=document.createElement('div'); D.className='Dot'; D.id='Dot'+i;
//     D.addEventListener('click',function(){ tl.seek(this.id).pause() });
//     document.getElementById('Dots').appendChild(D);
//     tl.add('Dot'+i)
    
//     if(i>0){
      
//       if(i!=slides.length){tl.addPause()}
//         tl.to(slides[i],0.5,{height:0,ease:Quint.easeOut})
//         .to(slides[i],0.7,{skale:0,xPercent:-100},'L'+i)
//         .from(slides[i-1],0.7,{width:0},'L'+i)
//         .to('#Dot'+i,0.7,{backgroundColor:'red'},'L'+i)
//         .set(slides[i],{zIndex:1-i}).set(slides[i-1],{zIndex:slides.length})
//         .from(slides[i-1],0.5,{scaleY:1,ease:Quint.easeIn})
//     };
// };
// function GO(e){
//   var SD=isNaN(e)?e.wheelDelta||-e.detail:e;
//   if(SD<0){tl.play()}else{tl.reverse()};
// };



var objs = [
    {
        name: 'slide_1',
        next: funcnext1,
        // prev: funcprev1,
        isActive: true,
        pagin:'pagin1',
        click: activeSlide1
    },
    {
        name: 'slide_2',
        next: funcnext2,
        prev: funcprev1,
        isActive: false,
        pagin:'pagin2',
        click: activeSlide2
    },
    {
        name: 'slide_3',
        next: funcnext3,
        prev: funcprev2,
        isActive: false,
        pagin:'pagin3',
        click: activeSlide3
    },
    {
        name: 'slide_4',
        // next: funcnext3,
        prev: funcprev3,
        isActive: false,
        pagin:'pagin4',
        click: activeSlide4
    }

]
var count = 1
var timeNext = null;
var timeoutNext = null;
var timeoutPrev = null;
var clickTimeout =null;

function FunctionNext(width){
    if (count >= objs.length) {
        return
    }

    let activeSlide = objs.findIndex(el=>el.isActive===true);
   
    if(objs[activeSlide].isActive === true){
        $(`.${objs[activeSlide].name}`).removeClass('active')
        $(`.${objs[activeSlide+1].name}`).addClass('active')
        $(`.${objs[activeSlide].pagin}`).removeClass('active')
        $(`.${objs[activeSlide+1].pagin}`).addClass('active')
        $(`.${objs[activeSlide].pagin} .ball`).css('z-index','0')
        $(`.${objs[activeSlide].pagin} .loader`).addClass('d-none');

        
        $(`.${objs[activeSlide+1].pagin} .ball`).css('z-index','-1');
        $(`.${objs[activeSlide+1].pagin} .loader`).removeClass('d-none');
        clearInterval(timeNext)
        if(timeoutPrev || timeoutNext || clickTimeout) {
            clearTimeout(timeoutNext)
            clearTimeout(timeoutPrev)
            clearTimeout(clickTimeout)

        }
        
        timeoutNext = setTimeout(()=>{
            console.log('timeoutNext')
            FunctionNext(window.innerWidth)
        },5000)

      
    }
    objs[activeSlide].isActive = !objs[activeSlide].isActive
    objs[activeSlide+1].isActive = !objs[activeSlide].isActive
    objs[activeSlide].next(width)
    count++
    
}
function FunctionPrev(width){
    if(count == length+1){
        $('.home-page').removeClass("d-none");
        $('.nav-list').removeClass("d-none");
        clearInterval(timeNext)
        clearTimeout(timeoutNext)
        clearTimeout(timeoutPrev)
        clearTimeout(clickTimeout)
        setTimeout(()=>{
            $('.nav-list').css('left','0px');
            $('.nav-toggle').css('right', '-5000px')
            $('.home_slide1 img').css('transform','translateY(0px)');
            $('.home_slide2 img').css('transform','translateY(0px)');
            setTimeout(()=>{
                setTimeout(()=>{
                    $('.down_line').addClass('down_line_hide')
                    setTimeout(()=>{
                        $('.inside_bg_hide').addClass('inside_bg_show')
                        setTimeout(()=>{
                            $('.down_text').addClass('down_text_show')
                            $('.scrolle_down').addClass('scrolle_down_show')
                        },400)
                    },2500)
                },1)
            },2)
        },200)
        return
        
    }
    clearInterval(timeNext)
    let activeSlidePrev = objs.findIndex(el=>el.isActive===true);
    if(objs[activeSlidePrev].isActive === true){
        // console.log(objs[activeSlidePrev])
        $(`.${objs[activeSlidePrev].name}`).removeClass('active')
        $(`.${objs[activeSlidePrev-1].name}`).addClass('active')
        $(`.${objs[activeSlidePrev].pagin}`).removeClass('active')
        $(`.${objs[activeSlidePrev-1].pagin}`).addClass('active')
        $(`.${objs[activeSlidePrev-1].pagin} .ball`).css('z-index','-1')
        $(`.${objs[activeSlidePrev-1].pagin} .loader`).removeClass('d-none')
        $(`.${objs[activeSlidePrev].pagin} .ball`).css('z-index','0')
        $(`.${objs[activeSlidePrev].pagin} .loader`).addClass('d-none')
        clearInterval(timeNext)
        if(timeoutPrev || timeoutNext || clickTimeout) {
            clearTimeout(timeoutNext)
            clearTimeout(timeoutPrev)
            clearTimeout(clickTimeout)

        }
        

        timeoutPrev = setTimeout(()=>{
            console.log('timeoutPrev')
            FunctionNext(window.innerWidth)
        },5000)
     }
    objs[activeSlidePrev].isActive = !objs[activeSlidePrev].isActive
    objs[activeSlidePrev-1].isActive = !objs[activeSlidePrev].isActive
    objs[activeSlidePrev].prev(width)
    count--
  
    
}

// slide next to click
function clickChangedSlide(className){
    console.log('before',objs)
    let findeClassName = objs.find(pagin => pagin.pagin === className);
    let activeSlide = objs.find(el=>el.isActive === true);
    findeClassName.isActive = !findeClassName.isActive1
    activeSlide.isActive = !activeSlide.isActive

    $(`.pagin.active .ball`).css('z-index','0')
    $(`.pagin.active .loader`).addClass('d-none')

    $('.pagin.active').removeClass('active')
    $('._slide.active').removeClass('active')
    $(`.${findeClassName.pagin} .ball`).css('z-index','-1')
    $(`.${findeClassName.pagin} .loader`).removeClass('d-none')
    $(`.${findeClassName.pagin}`).addClass('active')
    $(`.${findeClassName.name}`).addClass('active')
    clearInterval(timeNext)
    findeClassName.click(window.innerWidth)

    
    if(timeoutPrev || timeoutNext || clickTimeout) {
        clearTimeout(timeoutNext)
        clearTimeout(timeoutPrev)
        clearTimeout(clickTimeout)

    }
    clickTimeout = setTimeout(()=> {
        console.log(clickTimeout)
        FunctionNext(window.innerWidth)
    },5000)

}

// slide next to interlvar code 

   
   



// if($('.mian_slider').css('transform', 'scale(1)')){
//     console.log('hello')
// }
$('.mian_slider').on("mousewheel", (e) => {
    if(e.originalEvent.deltaY > 0){
    FunctionNext(window.innerWidth)
    clearInterval(timeNext)
    
}else{
    FunctionPrev(window.innerWidth)
    clearInterval(timeNext)
}
})




// slide next function

function funcnext1(width){
    $('.slide_1').css('transform','scale(0.8)')
    $('.content_block1').css('bottom', '2000px')
    setTimeout(()=> {
        $('.slider_content').css('transform',`translateX(${-width}px)`)  
        setTimeout(()=>{
            $('.slide_1').css('transform','scale(1)')
            $('.content_block2').css('left', '20%')
        },400)
    },360)
    
    
}
function funcnext2(width){
    $('.slide_2').css('transform','scale(0.8)')
    $('.content_block2').css('left', '-2000px')
    setTimeout(()=> {
            $('.slider_content').css('transform',`translateX(${-width *2}px)`)
            setTimeout(()=>{
                $('.slide_2').css('transform','scale(1)')
                $('.content_block3').css('transform', 'scale(1)')
            },400)

    },350)
    
}
function funcnext3(width){
    $('.slide_3').css('transform','scale(0.8)')
    $('.content_block3').css('transform', 'scale(0)')
    setTimeout(()=> {
          $('.slider_content').css('transform',`translateX(${-width*3}px)`)
        setTimeout(()=>{
            $('.slide_3').css('transform','scale(1)')
            $('.content_block4').css('transform', 'rotate(0deg)')
            
        },400)
    },350)
}

// slide prev function
function funcprev3(width) {
    $('.slide_4').css('transform','scale(0.8)')
    $('.content_block4').css('transform', 'rotate(360deg)')
    setTimeout(()=>{
        $('.slider_content').css('transform',`translateX(${-width*2}px)`)
        $('.slide_4').css('transform','scale(1)')
        setTimeout(()=> {
            $('.slide_3').css('transform','scale(1)')
            $('.content_block3').css('transform', 'scale(1)')
        },400) 
    },350)
}

function funcprev2(width) {
    $('.slide_3').css('transform','scale(0.8)')
    $('.content_block3').css('transform', 'scale(0)')
    setTimeout(()=>{
        $('.slider_content').css('transform',`translateX(${-width}px)`)
        $('.slide_3').css('transform','scale(1)')
        setTimeout(()=> {
            $('.slide_2').css('transform','scale(1)')
            $('.content_block2').css('left', '20%')
        },400) 
        
    },350)
}

function funcprev1(width) {
    $('.slide_2').css('transform','scale(0.8)')
    $('.content_block2').css('left', '2000px')
    setTimeout(()=>{
        $('.slider_content').css('transform',`translateX(${0}px)`)
        $('.slide_2').css('transform','scale(1)')
        setTimeout(()=> {
            $('.slide_1').css('transform','scale(1)')
            $('.content_block1').css('bottom', '45%')
        },400) 

    },350)
}

// clicke active slide
function activeSlide1(width){
    count = 1
    $('.slider_content').css('transform',`translateX(${0}px)`)  
    $('.slide_1').css('transform','scale(1)')

   
}

function activeSlide2(width){
    count = 2
    $('.slider_content').css('transform',`translateX(${-width}px)`)
    $('.slide_2').css('transform','scale(1)')
 
}

function activeSlide3(width){
    count = 3
    $('.slider_content').css('transform',`translateX(${-width*2}px)`)
    $('.slide_3').css('transform','scale(1)')

}

function activeSlide4(width){
    count = 4
    $('.slider_content').css('transform',`translateX(${-width*3}px)`)
    $('.slide_4').css('transform','scale(1)')
}