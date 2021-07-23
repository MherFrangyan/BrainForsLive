var  Electricalview1 = document.querySelector('#Electricalview1'),
    Electricalview2 = document.querySelector('#Electricalview2'),
    Electricalview3 = document.querySelector('#Electricalview3'),
    Electricalview4 = document.querySelector('#Electricalview4');


document.querySelector('.portfolio_content').addEventListener('mousewheel', (event)=>{
    event.preventDefault();
    console.log(event.srcElement.id);
    console.log(event);
    switch (event.srcElement.id) {
        case 'Electricalview1':
            Electricalview2.scrollIntoView({behavior: "smooth", block: "start"});
            break;
        case 'Electricalview2':
            Electricalview3.scrollIntoView({behavior: "smooth", block: "start"});
            break;
        case 'Electricalview3':
            Electricalview4.scrollIntoView({behavior: "smooth", block: "start"});
            break;
        // case 'Electricalview4':
        //     Electricalview4.scrollIntoView({behavior: "smooth", block: "start"});
        //     break;
    }

});
// gracy scroll-i jamanak stugum e id-ov u ijecnum tvyal block-i vra
// urish tarberak gtnel ijecnelu hamar
