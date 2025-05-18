function animateBars() {
    window.addEventListener('scroll', animateBars);
    window.addEventListener('load', animateBars);

    document.querySelectorAll('.side-bar a').forEach(link => {
        link.addEventListener('click', () => {
            hideSidebar();
        });
    });
}
    document.addEventListener('DOMContentLoaded', () => {
        const scrollBtn = document.getElementById('scrollTopBtn');
        window.onscroll = () => {
            if (scrollBtn) {
                scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
            }
        };
        if (scrollBtn) {
            scrollBtn.onclick = () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            };
        }
    });

    const sections = document.querySelectorAll('section, .qualifications, .skills');
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');

    function showSidebar() {
                const sidebar = document.querySelector('.side-bar')
                sidebar.style.display = 'flex'
            }
            function hideSidebar() {
                const sidebar = document.querySelector('.side-bar')
                sidebar.style.display = 'none'
            }

            window.onscroll = function () {
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function animateProgressBars() {
    const progressBars = document.querySelectorAll(".progress_bar");
    progressBars.forEach(bar => {
        const value = bar.getAttribute("value");
        if (isInViewport(bar)) {
            bar.querySelector(".progress_line").style.width = value;
        }
    });
}

window.addEventListener("scroll", animateProgressBars);
window.addEventListener("load", animateProgressBars);

const section = document.querySelectorAll("section, .qualifications, .skills, #achievements");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.1,
});
