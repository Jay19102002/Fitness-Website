gsap.to(".about-left :nth-child(1)",{
    height:288,
    delay:0,
    opacity:1,
    duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".about-left :nth-child(1)",
        // markers:true,
        start:"top 70%",
       
    }
})
gsap.to(".about-left :nth-child(2)",{
    height:320,
    delay:0,
    opacity:1,
    duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".about-left :nth-child(2)",
        // markers:true,
        start:"top 95%",
       
    }
})
gsap.to(".about-left :nth-child(3)",{
    height:384,
    delay:0,
    opacity:1,
    duration:1,
    scrollTrigger:{
        scroller:"body",
        trigger:".about-left :nth-child(3)",
        // markers:true,
        start:"top 80%",
    }
})

gsap.from(".about-right ul li",{
    y:-100,
    opacity:0,
    stagger:0.3,
    scrollTrigger:{
        scroller:"body",
        trigger:".about-right ul li",
        // markers:true,
        start:"top 85%"
    }

})
gsap.to(".bg-fixed-1 h1",{
    y:400,
    scrollTrigger:{
        scroller:"body",
        trigger:".bg-fixed-1 h1",
        // markers:true,
        scrub:true,
        start:"top 95%"

    }
})
gsap.to(".bg-fixed-2 h1",{
    y:430,
    scrollTrigger:{
        scroller:"body",
        trigger:".bg-fixed-2 h1",
        // markers:true,
        scrub:true,
        start:"top 95%"

    }
})



gsap.to(".bg-fixed h1",{
    y:400,
    scrollTrigger:{
        scroller:"body",
        trigger:".bg-fixed h1",
        // markers:true,
        scrub:true,
        start:"top 95%"
    }
})


