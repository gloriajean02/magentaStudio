//Añadir esto para poder utilizarlo
gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".services", 
{
    // Estado inicial ovalado
    borderRadius: "50% 50% 0 0 / 300px 300px 0 0",
},
{
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%",
        end: "bottom 100%",
        scrub: 1.5,
        markers: true
    },
    // Estado final recto
    borderRadius: "0",
    duration: 2
});