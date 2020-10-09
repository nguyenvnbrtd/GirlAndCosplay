var lastScrollTop = 0;


// Detect the scroll.
window.addEventListener("scroll",function () {
    
    let st = window.pageYOffset || document.documentElement.scrollTop;
    // for item hided before
    
    if(st >= 300){
        displayItem(4);
        displayItem(5);
        displayItem(6);
    }
    if(st >= 600){
        displayItem(7);
        displayItem(8);
        displayItem(9);
    }
    if(st >= 900){
        displayItem(10);
        displayItem(11);
        displayItem(12);
    }
    if(st >= 1200){
        displayItem(13);
        displayItem(14);
        displayItem(15);
    }

},
false);

