// PRELOADER----------------

const loader = document.getElementById('preloader');

window.addEventListener('load', () => {
    setTimeout(() => {
        loader.style.opacity = '0';
    }, 1700);

    setTimeout(() => {
        loader.style.display = 'none';
    }, 2000);
});

// To Top Button -----------------

const toTop = document.getElementById('top');

window.addEventListener('scroll', ()=> {
    if (window.scrollY > 500) {
        toTop.style.transform = `translateX(1vmax)`;
    }
    else{
        toTop.style.transform = `translateX(12vmax)`;
    }
})


toTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
})

// DOWNLOAD FILE -------------

const link = document.getElementById('download');

link.addEventListener('click', () => {
    link.href = "./services/download.html";
    link.download = "download.html";
})