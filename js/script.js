let goTopBtn = document.getElementById("goTopBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        goTopBtn.style.display = "flex";
    } else {
        goTopBtn.style.display = "none";
    }
}