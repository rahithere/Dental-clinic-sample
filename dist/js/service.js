import services from "./servicesData.js";

const servicesList = document.querySelector("#services-list");
const serviceDetail = document.querySelector("#service-detail");

if (servicesList && serviceDetail) {

    let activeService = 0;

    function renderServices() {

        servicesList.innerHTML = services
            .map((service, index) => `
                <button
                    type="button"
                    data-service="${index}"
                    class="service-item group flex w-full items-center justify-between border-b border-black/10 px-5 py-6 text-left transition-all duration-300"
                >
                    <span class="flex items-center gap-4">

                        <span class="text-xs font-medium text-black/30">
                            0${index + 1}
                        </span>

                        <span class="service-name text-lg font-medium">
                            ${service.name}
                        </span>

                    </span>

                    <span class="service-arrow text-lg transition-transform duration-300">
                        →
                    </span>

                </button>
            `)
            .join("");

        updateActiveService();

        document.querySelectorAll(".service-item").forEach((item) => {

            item.addEventListener("click", () => {

                activeService = Number(item.dataset.service);

                updateActiveService();

            });

        });
    }


    function updateActiveService() {

        const service = services[activeService];

        document.querySelectorAll(".service-item").forEach((item, index) => {

            const arrow = item.querySelector(".service-arrow");

            if (index === activeService) {

                item.classList.add(
                    "rounded-2xl",
                    "bg-[#0F8B9D]",
                    "text-white",
                    "border-transparent"
                );

                item.classList.remove("text-black");

                arrow.classList.add("translate-x-1");

            } else {

                item.classList.remove(
                    "rounded-2xl",
                    "bg-[#0F8B9D]",
                    "text-white",
                    "border-transparent"
                );

                item.classList.add("text-black");

                arrow.classList.remove("translate-x-1");

            }

        });


        serviceDetail.innerHTML = `
            <div class="service-image-wrapper relative h-[300px] overflow-hidden sm:h-[380px] lg:h-[420px]">

                <img
                    src="${service.image}"
                    alt="${service.name}"
                    class="service-image h-full w-full object-cover"
                >

                <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                <span class="absolute bottom-6 left-6 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                    Dental Care
                </span>

            </div>

            <div class="p-7 sm:p-8 lg:p-10">

                <p class="mb-3 text-sm font-medium text-white/60">
                    0${activeService + 1}
                </p>

                <h3 class="text-2xl font-medium leading-tight sm:text-3xl">
                    ${service.name}
                </h3>

                <p class="mt-4 max-w-xl text-base leading-7 text-white/75">
                    ${service.description}
                </p>
            </div>
        `;

    }


    renderServices();
}