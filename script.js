
videoconAnimation();
loadingAnimation();
cursor();
locomotiveAnimation();
navbarAnimation();
stringAnimation();
lineAnimation();
OverallCursor()


function videoconAnimation(){
    var videocon = document.querySelector(".video-container");
var playbtn = document.querySelector(".play")
videocon.addEventListener("mouseenter",()=>{
   gsap.to(playbtn,{
    scale:1,
    opacity:1
   })
})

videocon.addEventListener("mouseleave",()=>{
    gsap.to(playbtn,{
     scale:0,
     opacity:0
    })
 })


 videocon.addEventListener("mousemove",(dets)=>{
    gsap.to(playbtn,{
     left:dets.x-100,
     top:dets.y-100,
    })
 })


}
function loadingAnimation(){
    gsap.from(".page1 h1",{
        opacity:0,
        y:100,
        duration:.9,
        delay:.5,
        stagger:.3
        
    })

    gsap.from(".page1 .video-container",{
        opacity:0,
        y:100,
        duration:.6,
        delay:1.3,
        scale:.8
        
    })
}
function cursor(){
    document.addEventListener("mousemove",(dets)=>{
        gsap.to(".cursor",{
            left:dets.x,
            top:dets.y
        })
    })
    
    
    
    document.querySelectorAll(".child").forEach(function (a){
        a.addEventListener("mouseenter",()=>{
            gsap.to(".cursor",{
                 transform: `translate(-50%,-50%) scale(1)`,
            });
        });
    
        a.addEventListener("mouseleave",()=>{
            gsap.to(".cursor",{
                 transform: `translate(-50%,-50%) scale(0)`,
            });
        });
    });
    
}
function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function navbarAnimation(){
    gsap.to(".nav-part1 img",{
        transform:'translateY(-100%)',
        scrollTrigger:{
            trigger:".page1",
            scroller:"#main",
            start:"top 0",
            end:"top -5%",
            scrub:true
        }
    })
    gsap.to(".nav-part2 .links",{
        transform:'translateY(-100%)',
        opacity:0,
        scrollTrigger:{
            trigger:".page1",
            scroller:"#main",
            start:"top 0",
            end:"top -5%",
            scrub:true
        }
    })
}
function stringAnimation(){
    var path = `M 150 100 Q 625 100 1100 100`
    var finalPath = `M 150 100 Q 625 100 1100 100`
    
    var string = document.querySelector(".string")
    
    string.addEventListener('mousemove',(dets)=>{
        path = `M 150 100 Q ${dets.x} ${dets.y} 1100 100`,
        gsap.to(".string svg path",{
            attr:{d:path},
            duration:0.2,
            ease:"power3.out" 
        })
    })
    
    string.addEventListener('mouseleave',()=>{
        gsap.to(".string svg path",{
            attr:{d:finalPath},
            
            ease:"power3.out",
            duration:2,
            ease:"elastic.out(1,0.1)" 
        })
    })
    
}

function lineAnimation(){
    window.addEventListener("wheel",(dets)=>{
        if (dets.deltaY>0) {
            gsap.to(".marque",{
                transform:'translateX(-200%)',
                duration:3,
                ease:"none",
                repeat:-1
            })
            gsap.to(".marque img",{
                rotate:180
            })
        } else {
            gsap.to(".marque",{
                transform:'translateX(0%)',
                duration:3,
                ease:"none",
                repeat:-1
            })
            gsap.to(".marque img",{
                rotate:0
            })
        }
    })
    
}

function OverallCursor(){
    var body = document.querySelector("body")
    var overallCursor = document.querySelector(".overallCursor")
    var video = document.querySelector(".page1")
    var images2 = document.querySelector(".page3")
    
    
    body.addEventListener("mousemove",(event)=>{
        gsap.to(overallCursor,{
           x:event.x,
           y:event.y,
           duration:.2
        })    
    })
    
    video.addEventListener("mouseenter",()=>{
         gsap.to(overallCursor,{
            opacity:0
         })
    })
    video.addEventListener("mouseleave",()=>{
        gsap.to(overallCursor,{
           opacity:1
        })
    })
    images2.addEventListener("mouseenter",()=>{
        gsap.to(overallCursor,{
           opacity:0
        })
    })
    images2.addEventListener("mouseleave",()=>{
       gsap.to(overallCursor,{
          opacity:1
       })
    })
}



