//Añadir esto para poder utilizarlo
gsap.registerPlugin(ScrollTrigger);

const formasTL = gsap.timeline({
    repeat: -1, //Se repite infinito
    yoyo: true,
    ease: "linear"  //ritmo constante
});


//Lugares hacia donde se va a mover con el yoyó
formasTL.to("#forma-1", { rotation: 180, y: 100, x: 90, duration: 9 }, 0)
    .to("#forma-2", { rotation: 180, y: -100, x: -100, duration: 10 }, 0)
    .to("#forma-3", { rotation: 180, y: -60, x: 100, duration: 11 }, 0)
    .to("#forma-4", { rotation: 180, y: -100, x: 100, duration: 12 }, 0);

gsap.to(".forma, .hero-content", {
    yPercent: -200,  // Suben fuera del viewport
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false
    }
});


gsap.to(".services", {
    borderRadius: "0",
    scrollTrigger: {
        trigger: ".services",
        start: "top",
        end: "top 20%",
        scrub: 1,
        markers: false
    },
    duration: 0.2
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
    .from("#card-2", { scale: 0.5, opacity: 0, y: 100, duration: 1 }, "0.5")
    .from("#card-3", { scale: 0.5, opacity: 0, y: 100, duration: 1 }, "0.8")
    .from("#card-4", { scale: 0.5, opacity: 0, y: 100, duration: 1 }, "1");


gsap.fromTo(".cta-content",
    { backgroundColor: "var(--petrol)" },
    {
        backgroundColor: "var(--violet)",
        scrollTrigger: {
            trigger: ".cta-content",
            start: "top 90%",
            end: "bottom 20%",
            scrub: 1,
            markers: false
        }
    });


gsap.to("#cta-button", {
    scale: 1.05,
    y: -3,
    repeat: -1,      // infinito
    yoyo: true,      // va y vuelve
    duration: 0.8,
    ease: "power1.inOut"
});

// FOOTER desde abajo
gsap.from(".footer", {
    opacity: 0,
    y: 120,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".footer",
        start: "top 150%",
        end: "top 95%",
        scrub: 1
    }
});

// TEXTOS HERO
gsap.from(".hero h1, .hero p", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
});

// TÍTULO SECCIÓN SERVICIOS
gsap.from(".services h2", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%",
        end: "top 60%",
        scrub: 1
    }
});


document.getElementById("cta-hero").addEventListener("click", () => {
    document.getElementById("cta").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("cta-button").addEventListener("click", () => {
    document.getElementById("contacto").classList.toggle("hidden");
    document.getElementById("cta-button").classList.toggle("hidden");
});

document.getElementById("cerrar").addEventListener("click", () => {
    document.getElementById("contacto").classList.toggle("hidden");
    document.getElementById("cta-button").classList.toggle("hidden");
});