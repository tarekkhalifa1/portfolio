const tabLinks = document.getElementsByClassName('tab-links');
const contentTabs = document.getElementsByClassName('tab-contents');
function openTab(tabName) {
    for (let tabLink of tabLinks) {
        tabLink.classList.remove('active-link');
    }
    for (let contentTab of contentTabs) {
        contentTab.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabName).classList.add('active-tab');
}

const sideMenu = document.getElementById('sideMenu');
function openMenu() {
    sideMenu.style.right = "0";
}
function closeMenu() {
    sideMenu.style.right = "-200px";
}

const links = document.querySelectorAll('nav ul li a');
for (let link of links) {
    link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
    const href = this.getAttribute("href");
    if (href != 'index.html') {
        e.preventDefault();
        const offsetTop = document.querySelector(href).offsetTop;
        scroll({
            top: offsetTop,
        });
    }
}
let topBtn = document.getElementById("topBtn");
window.onscroll = function () { scrollFunction() };
topBtn.addEventListener('click', scrollToUp);
function scrollFunction() {
    if (document.documentElement.scrollTop > 180) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}
function scrollToUp() {
    scroll({
        top: 0,
    });
}