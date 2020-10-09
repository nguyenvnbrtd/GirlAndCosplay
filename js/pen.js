var lastScrollTop = 0;
// Detect the scroll.
window.addEventListener("scroll",function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st <= 400) {
    // Downscroll code
    // console.log("\n\ngoing down V\n\n");
        document.getElementById("option--menu").classList.add("option--hide");
        document.getElementById("option--scrollToTop").classList.add("option--hide");
    } else {
    // Upscroll code
    // console.log("\n\ngoing up ^\n\n");
        document.getElementById("option--menu").classList.remove("option--hide");
        document.getElementById("option--scrollToTop").classList.remove("option--hide");
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

},
false);


