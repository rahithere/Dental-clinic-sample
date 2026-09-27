import testimonials from "./testimonialsData.js";

import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/+esm";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.13.0/ScrollTrigger.js";



gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector("#testimonials-container");

if (container) {

    container.innerHTML = testimonials
        .map((testimonial, index) => {

            const stars = "★".repeat(testimonial.rating);

            return `
                <article
                    class="testimonial-card group rounded-3xl border border-black/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                >

                    <div class="flex items-center justify-between">

                        <span class="text-sm tracking-[0.15em] text-[#0F8B9D]">
                            ${stars}
                        </span>

                        <span class="text-xs font-medium text-black/30">
                            0${index + 1}
                        </span>

                    </div>


                    <p class="mt-7 min-h-[120px] text-base font-medium leading-7 text-black/75">
                        "${testimonial.text}"
                    </p>


                    <div class="mt-8 flex items-center gap-3">

                        <div
                            class="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F7FA] text-sm font-medium text-[#0F8B9D]"
                        >
                            ${testimonial.name
                    .split(" ")
                    .map(name => name[0])
                    .join("")
                    .slice(0, 2)}
                        </div>

                        <div>
                            <p class="text-sm font-medium">
                                ${testimonial.name}
                            </p>

                            <p class="mt-1 text-xs text-black/45">
                                ${testimonial.role}
                            </p>
                        </div>

                    </div>

                </article>
            `;
        })
        .join("");
}
