import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/+esm";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const whySection = document.querySelector(".why-section");

if (whySection) {

    gsap.from(".why-heading", {
        y: 32,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
            trigger: whySection,
            start: "top 80%",
            once: true
        }
    });

    gsap.from(".why-card", {
        y: 32,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power3.out",
    });
}