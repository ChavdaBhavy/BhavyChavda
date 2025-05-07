document.getElementById("load-more").addEventListener("click", function () {
    let projectsContainer = document.getElementById("projects-container");

    let moreProjects = [
        {
            image: "https://chavdabhavy.github.io/BhavyChavda/assets/images/adscoms.webp",
            title: "ADS Come",
            desc: "Outdoor Advertising Agency",
            link: "#",
            info: "This is My College Project. Developed a dynamic web application using ASP.NET with HTML, CSS, and JavaScript, powered by MySQL Server for backend data management"
        },
        {
            image: "https://chavdabhavy.github.io/BhavyChavda/assets/images/Ever-Take.webp",
            title: "Ever Take",
            desc: "Online Workers Booking System",
            link: "#",
            info: "Developed a custom WordPress website using PHP, HTML, CSS, and JavaScript, with phpMyAdmin for database management."
        },
        {
            image: "https://chavdabhavy.github.io/BhavyChavda/assets/images/Moneys-Magazine-Middle-East-Leadership.webp",
            title: "moneysmagazine",
            desc: "Finance Magazine",
            link: "https://moneysmagazine.me/",
            info: "Added and managed posts while enhancing the design of Money's Magazine using WordPress, Elementor, HTML, and CSS for a visually appealing layout."
        },
        {
            image: "https://chavdabhavy.github.io/BhavyChavda/assets/images/ny-elizabeth.webp",
            title: "nyelizabeth",
            desc: "Luxury Brand",
            link: "https://beta.nyelizabeth.com/",
            info: "Implemented custom filters, product data scraping, and custom plugins, while also removing viruses to enhance site functionality and security."
        },
        {
            image: "https://chavdabhavy.github.io/BhavyChavda/assets/images/rothsibank.webp",
            title: "rothsibank",
            desc: "Banking Solution",
            link: "https://rothsibank.com/market-insights/green-energy-investment-opportunities-in-malaysia/",
            info: "Designed a custom single post page with a dynamic Slick Slider, developed a custom plugin, and dynamically fetched post data for an enhanced user experience."
        },
        {
            image: "https://chavdabhavy.github.io/BhavyChavda/assets/images/secondworld.webp",
            title: "secondworld",
            desc: "Gaming Platform",
            link: "https://secondworld.ch/",
            info: "Designed multiple site pages and developed a popup that dynamically fetches location-based links for a seamless user experience."
        },
        {
            image: "https://chavdabhavy.github.io/BhavyChavda/assets/images/Vox-Residence.webp",
            title: "kerjaya",
            desc: "Real Estate",
            link: "https://kerjaya.best121.com/our-businesses/vox-residence-sentul-2/",
            info: "Designed a custom single post page, dynamically fetched data, and developed a custom repeater plugin for flexible content management.s"
        },
        
    ];

    moreProjects.forEach(project => {
        let div = document.createElement("div");
        div.classList.add("col-md-4", "project-card");
        div.innerHTML = `
            <a href="${project.link}">
                <img src="${project.image}" alt="${project.title}">
                <h4>${project.title}</h4>
                <p class="project-title">${project.desc}</p>
                <p class="project-info">${project.info}</p>
            </a>
        `;
        projectsContainer.appendChild(div);
    });

    this.style.display = "none"; // Hide the button after loading more projects
});


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(
        ".profile-img img, .my-name, .job-title, .c1, .st1, .aboutme-sec, .c2, .st2, .sk1, .sk3, .sk5, .sk7, .sk9, .sk2, .sk4, .sk6, .sk8, .sk10, .c3, .st3, .experience, .c4, .st4, .project-card, .c5, .st5, .contact-title, .contact-info"
    );

    elements.forEach(el => {
        el.style.opacity = "0"; // Hide elements initially
    });

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.animation = `bounceInLeft 1s ease-in-out forwards`;
                    entry.target.style.animationDelay = `${index * 0.2}s`;
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );

    elements.forEach((el) => {
        observer.observe(el);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-nav .nav-link, .navbar-nav .nav-item");

    menuItems.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateX(100px)";

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateX(0)";
                        entry.target.style.animation = `bounceInRight 0.8s ease-in-out forwards`;
                        entry.target.style.animationDelay = `${index * 0.2}s`; // Delays each item
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(item);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu-nav a");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});
