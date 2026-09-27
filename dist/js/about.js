import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/+esm";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const aboutSection = document.querySelector(".about-section");

if (aboutSection) {

    gsap.from(".about-section .about-visual", {
        y: 32,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
            trigger: aboutSection,
            start: "top 80%",
            once: true
        }
    });

    gsap.from(".about-section .about-content", {
        y: 32,
        opacity: 0,
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: aboutSection,
            start: "top 80%",
            once: true
        }
    });

    gsap.from(".about-section .about-stat", {
        y: 24,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-stats",
            start: "top 85%",
            once: true
        }
    });

    gsap.from(".about-section .about-main-image", {
        y: 28,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about-main-image",
            start: "top 85%",
            once: true
        }
    });
}