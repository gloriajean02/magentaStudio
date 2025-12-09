//Añadir esto para poder utilizarlo
gsap.registerPlugin(ScrollTrigger);

const formasTL = gsap.timeline({
    repeat: -1, //Se repite infinito
    yoyo: true,
    ease: "sine.inOut"  //LENTO, RÁPIDO, LENTO
});


//Lugares hacia donde se va a mover con el yoyó
formasTL.to("#forma-1", { y: 100, duration: 4 }, 0)
    .to("#forma-2", { y: 100, duration: 5 }, 0)
    .to("#forma-3", { rotation: 180, duration: 6 }, 0)
    .to("#forma-4", { rotation: 180, duration: 7 }, 0);

gsap.to(".forma", {
    yPercent: -200,  // Suben fuera del viewport
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false
    }
});


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
            scrub: 1,
            // markers: true
        },
        // Estado final recto
        borderRadius: "0",
        duration: 1
    });

const cardsTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#card-1",
        start: "top 100%",
        end: "bottom 80%",
        scrub: 1,
        markers: false
    }
});

cardsTl
    .from("#card-1", { scale: 0.5, opacity: 0, y: 100, duration: 0.5 }, 0)
    .from("#card-2", { scale: 0.5, opacity: 0, y: 100, duration: 0.5 }, "-=0.2")
    .from("#card-3", { scale: 0.5, opacity: 0, y: 100, duration: 0.5 }, "-=0.2")
    .from("#card-4", { scale: 0.5, opacity: 0, y: 100, duration: 0.5 }, "-=0.2");


gsap.fromTo(".cta-section",
    { backgroundColor: "var(--petrol)" },
    {
        backgroundColor: "var(--violet)",
        scrollTrigger: {
            trigger: ".cta-section",
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            markers: true
        }
    });


