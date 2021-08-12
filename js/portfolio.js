var projectMainBlock = document.querySelectorAll('.project_main_block'),
    clickScrolling = document.querySelector('.click_scrolling'),
    increment = 1;

document.querySelector('.page_content').addEventListener('mousewheel', (event)=>{
    event.preventDefault();
    if (event.deltaY > 0){
        console.log(projectMainBlock.length);
        console.log(increment);
        if (projectMainBlock.length > increment){
            projectMainBlock[increment].scrollIntoView({behavior: "smooth", block: "start"});
            increment++
        } else {
            return;
        }
    } else if (event.deltaY < 0){
        console.log(projectMainBlock.length);
        console.log(increment);

        if (projectMainBlock.length >= increment && increment > 1){
            increment--;
            console.log(increment);
            console.log(projectMainBlock[increment-2]);
            projectMainBlock[increment-1].scrollIntoView({behavior: "smooth", block: "start"});
        }else {
            return;
        }
    }
});

clickScrolling.addEventListener('click', ()=> {
    projectMainBlock[increment].scrollIntoView({behavior: "smooth", block: "start"});
    increment++;
    console.log('inc scroll click',increment)
});

if (projectMainBlock.length === increment){
        console.log('ascascascasc')
}
