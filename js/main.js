import "./about.js";
import "./why.js"
import "./testimonials.js"
import "./service.js"
import "./header.js"

import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/+esm";

document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });

    tl.from(".hero-label", {
        y: 24,
        opacity: 0,
        duration: 0.5
    })

        .from(".hero-line", {
            y: 60,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15
        }, "-=0.2")

        .from(".hero-description", {
            y: 20,
            opacity: 0,
            duration: 0.5
        }, "-=0.3")

        .from(".hero-tags span", {
            y: 15,
            opacity: 0,
            duration: 0.4,
            stagger: 0.08
        }, "-=0.2");
});

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".reveal").forEach((element) => {
    gsap.from(element, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
        },
    });
});