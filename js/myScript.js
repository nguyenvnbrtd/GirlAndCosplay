const maxItem = 20;
var slideIndex = 1;
var previous = 1;
var first = 1
var totalPicture = 0;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > 4) {slideIndex = 1}
    if (n <= 0) {slideIndex = 4}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    try{
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }catch{}
}
// reset the slides and add new, reset target page, n is the index of folder image,
function resetSlide(n){
    //reset loading-page
    loading_img();

    n = parseInt(document.getElementById("item--"+n).style.backgroundImage.split('/')[1]);

    document.getElementById("popup__open").href = "watch.html?x="+n+"&index=1";

    resetImg(1, n);
    resetImg(2, n);
    resetImg(3, n);
    resetImg(4, n);

    
}
// change an img, n is the index of images, m is index of folders
function resetImg(n, m){
    document.getElementById("slide--"+n).src = "album/"+ m +"/"+ n +".jpg";
}
/*
function addSlideImage(n, m){
    var image = document.createElement('img'); 
    image.src = "./album/" + n + "/" + m + ".jpg";
    document.getElementById("slide--"+m).appendChild(image);
}

// same thing, but 4 slides
function addSlide(n){
    addSlideImage(n,1);
    addSlideImage(n,2);
    addSlideImage(n,3);
    addSlideImage(n,4);
}

// clear slides
// m is the index of images
function clearSlideImage(m){
    var image = document.getElementById("slide--"+m);
    image.removeChild(image.children[0]);
}

// clear 4 slides
function clearSlide(n){
    if(previous != n){
        clearSlideImage(1);
        clearSlideImage(2);
        clearSlideImage(3);
        clearSlideImage(4);
    }
}

*/
//display notify
function notify__add(){
    document.getElementById("notify--add").classList.add("notify--show");
    try{
        document.getElementById("notify--remove").classList.remove("notify--show");    
    }catch{}
}
function notify__remove(){
    document.getElementById("notify--remove").classList.add("notify--show");
    document.getElementById("notify--add").classList.remove("notify--show");
}
//exit popup by go to ##
function keyDown(event) {
    var x = event.key;
    if(x == "Escape"){
        document.getElementById("exit-popup").click();
    }
    else if(x == "ArrowRight"){
        plusSlides(1);
    }
    else if(x == "ArrowLeft"){
        plusSlides(-1);
    }
}
//show search when you click the icon
function showSearchBox(){
    var x = document.getElementById("menu-search-box");
    if(x.style.display == "inline-block"){x.style.display = "none";}
    else{x.style.display = "inline-block"}
}
//show action when you click the icon
function showActionBox(){
    var x = document.getElementById("menu-action-box");
    if(x.style.display == "inline-block"){x.style.display = "none";}
    else{x.style.display = "inline-block"}
}
//load background of a item, m/1 is "../" or not
function loadItem(n){
    var m = maxItem-(n-1)*15;

    for(x = 1; x <= 15; x++)
        loadAnItem(x,m+1-x);
    
}

function loadItemHome(){
    loadAnItem(1,1);
    loadAnItem(2,2);
    loadAnItem(3,3);
    loadAnItem(4,4);
    

    loadAnItem(5,maxItem);
    loadAnItem(6,maxItem-1);
    loadAnItem(7,maxItem-2);
    loadAnItem(8,maxItem-3);
    loadAnItem(9,maxItem-4);
    loadAnItem(10,maxItem-5);
    loadAnItem(11,maxItem-6);
    loadAnItem(12,maxItem-7);
    loadAnItem(13,maxItem-8);
}

// n is the index of item in html file 
// m is the index of album
function loadAnItem(n,m){
    try{
        document.getElementById("item--"+n).style.backgroundImage = "url('album/"+m+"/about.jpg')";
    }catch{}
}

// display an item, n is the index of item in html file 
function displayItem(n){
    try{
        var item = document.getElementById("item--"+n);
        if(parseInt(item.style.backgroundImage.split('/')[1]) > 0){
            item.style.display ="inline-block";
        }  
    }catch{}
}
//show item in home
function showItemHome(){
    for(x = 5; x <= 13; x++)
       displayItem(x);
    
}
//get parameter from url watch.html?x=123&aaa=12
function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
//show album with url parameter
function showAlbum(i){
    var n = parseInt(getURLParameter("x"));
    i = (i-1)*50;

    for(x = 1; x <=50 ; x++){
        showImage(n,x+i,x);
    }
    showAlbumSub();
}
//n is the index of album, i is the index of image, m is the index of element in html file
function showImage(n, i, m){
    document.getElementById("img--"+m).src = "./album/"+n+"/"+i+".jpg";
}

function showAlbumSub(){
    var arr = [];
    var x = 1; 
    while(x <= 8){
        var random = Math.floor((Math.random() * maxItem) + 1);
        
        if(!arr.includes(random)){
            arr.push(random);
            loadAnItem(x, random);
            x++;
        }
    }

    for(x = 0; x <= 8; x++)
        displayItem(x);
        
}

// scroll to top
function scrollToTop(n){
    document.documentElement.scrollTop = n;
}
// chose number
function showListAlbum(){
    var n = parseInt(getURLParameter('index'));

    var allPage = parseInt(maxItem/15)+1;
    var next = n+1;
    var before = n-1;

    loadItem(n);
    displayItem(1);
    displayItem(2);
    displayItem(3);

    if(before<=0){
        before=1;
    }
    if(next>=allPage){
        next=allPage;
    }

    for(x = 4; x > allPage; x--){
        document.getElementById("number-index--"+(x+2)).style.display = "none";
    }

    document.getElementById("number-index--"+(n+2)).classList.add("number-index--chosen");
    document.getElementById("number-index--2").href = "album.html?index="+before;
    document.getElementById("number-index--7").href = "album.html?index="+next;
    document.getElementById("number-index--8").href = "album.html?index="+allPage;
    
}

//page of album
function showListPicture(){

    var current = getURLParameter('x');
    var n = parseInt(getURLParameter('index'));
    var next = n+1;
    var before = n-1;

    showAlbum(n);

    if(before <= 0){
        before = 1;
    }
    if(next > 4){
        next = 4;
    }
	

    document.getElementById("number-index--"+(n+2)).classList.add("number-index--chosen");

    document.getElementById("number-index--1").href = "watch.html?x="+current+"&index=1";
    document.getElementById("number-index--2").href = "watch.html?x="+current+"&index="+before;
    document.getElementById("number-index--3").href = "watch.html?x="+current+"&index=1";
    document.getElementById("number-index--4").href = "watch.html?x="+current+"&index=2";
    document.getElementById("number-index--5").href = "watch.html?x="+current+"&index=3";
    document.getElementById("number-index--6").href = "watch.html?x="+current+"&index=4";
    document.getElementById("number-index--7").href = "watch.html?x="+current+"&index="+next;
    document.getElementById("number-index--8").href = "watch.html?x="+current+"&index=4";
    

}

// how many picture of this album
function getPictureNum(n){
    if(totalPicture==0){
        totalPicture = (50*(parseInt(getURLParameter('index'))-1))+n-1;
    }
    
}

//set it up
function loading_img(){
    document.getElementById("loading-slide").style.display = "flex";
}

//loaded image

function loaded_img(){
    document.getElementById("loading-slide").style.display = "none";
}


