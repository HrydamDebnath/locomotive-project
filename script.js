function loading() {
    var tl = gsap.timeline();

    tl.to("#yellow1", {
        top: "-100%",
        duration: 0.7,
        delay: 0.5,
        ease: "expo.out"
    });

    tl.from("#yellow2", {
        top: "100%",
        delay:3,
        duration: 0.7,
        ease: "expo.out"
    }, "-=0.5");

    tl.to("#loader h1", {
        duration: 0.7,
        color: "black"
    }, "-=0.5");

    tl.to("#loader", {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            document.querySelector("#loader").style.display = "none";

            // Initialize Locomotive Scroll after loader animation
            const scroll = new LocomotiveScroll({
                el: document.querySelector('#main'),
                smooth: true
            });
        }
    });

    // ⬇ show WORKS nav AFTER loader 
    tl.to("#nav",{
        opacity:1,
        duration:1,
        ease:"power2.out"
    });
}

loading();

var elems = document.querySelectorAll(".elem");
var page = document.querySelector("#page2");

elems.forEach(function(ele){
    ele.addEventListener("mouseenter", function(){
        var bgimg = ele.getAttribute("data-img");
        page.style.backgroundImage = `url(${bgimg})`;
    });
});

