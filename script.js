var scrollTopButton = document.getElementById("scrollTopBtn");
var collapseButton = document.querySelector(".collapse");
var footerContent = document.querySelector(".footer-content");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function toggleFooterContent() {
    footerContent.classList.toggle("collapsed");
}

collapseButton.addEventListener("click", toggleFooterContent);


