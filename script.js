const body = document.querySelector('body');
const html = document.querySelector('html');
const color = document.querySelector('.color');
const colorUX = document.querySelector('.color_ux');
const colorGd = document.querySelector('.color_gd');
const colorRet = document.querySelector('.color_ret');
const job = document.querySelector('.text--jobs');
const jobWrapper = document.querySelector('.work-container');
const jobUx = document.querySelector('.work__ux');
const jobGd = document.querySelector('.work__gd');
const jobRet = document.querySelector('.work__ret');
const accent = document.querySelector('.u-accent')

// function setUp() {
// color.style.backgroundImage = 'radial-gradient(closest-side, #00acb5b6, #222831)'
// body.style.setProperty('backgroundColor', '#222831');
// jobUx.style.display = 'initial';
// jobGd.style.display = 'none';
// jobRet.style.display = 'none';
// jobUx.style.opacity = '1';
// jobGd.style.opacity = '0';
// jobRet.style.opacity = '0';
// currentJob = 'Ux';
// }

function viewUx() {
    jobUx.classList.remove('work--gone-left');
    jobUx.classList.remove('work--gone-right');
    jobGd.classList.remove('work--gone-left');
    jobGd.classList.add('work--gone-right');
    jobRet.classList.remove('work--gone-left');
    jobRet.classList.add('work--gone-right');
    colorUX.classList.add('color_visible');
    colorGd.classList.remove('color_visible');
    colorRet.classList.remove('color_visible');
    body.classList.add('body-color_ux');
    body.classList.remove('body-color_gd');
    body.classList.remove('body-color_ret');
    accent.style.setProperty('color', 'var(--color-ux)');
    color.style.setProperty('top', '-570px')
    color.style.setProperty('left', '15%')
    currentJob = 'Ux';
}

function viewGd() {
    jobUx.classList.add('work--gone-left');
    jobUx.classList.remove('work--gone-right');
    jobGd.classList.remove('work--gone-left');
    jobGd.classList.remove('work--gone-right');
    jobRet.classList.remove('work--gone-left');
    jobRet.classList.add('work--gone-right');
    colorUX.classList.remove('color_visible');
    colorGd.classList.add('color_visible');
    colorRet.classList.remove('color_visible');
    body.classList.remove('body-color_ux');
    body.classList.add('body-color_gd');
    body.classList.remove('body-color_ret');
    accent.style.setProperty('color', 'var(--color-gd)');
    color.style.setProperty('top', '-150px')
    color.style.setProperty('left', '35%')
    currentJob = 'Gd';
}

function viewRet() {
    jobUx.classList.add('work--gone-left');
    jobUx.classList.remove('work--gone-right');
    jobGd.classList.add('work--gone-left');
    jobGd.classList.remove('work--gone-right');
    jobRet.classList.remove('work--gone-left');
    jobRet.classList.remove('work--gone-right');
    colorUX.classList.remove('color_visible');
    colorGd.classList.remove('color_visible');
    colorRet.classList.add('color_visible');
    body.classList.remove('body-color_ux');
    body.classList.remove('body-color_gd');
    body.classList.add('body-color_ret');
    accent.style.setProperty('color', 'var(--color-ret)');
    color.style.setProperty('top', '-320px')
    color.style.setProperty('left', '-5%')
    currentJob = 'Ret';
}

// window.onload = function () {
//     setUp();
// }

if (job) {
    job.addEventListener('click', e => {
        const clicked = e.target.textContent;

        if (clicked === 'UI/UX Designer') {
            viewUx();
        }
        if (clicked === 'Graphic Designer') {
            viewGd();
        }
        if (clicked === 'Retoucher') {
            viewRet();
        }
    })
}



document.querySelectorAll(".article-gallery img").forEach(img => {
    img.onclick = () => {
        document.querySelector(".gallery-viewer").style.display = "block";
        document.querySelector(".gallery-viewer img").src = img.getAttribute("src");
    }
})

document.querySelector(".gallery-viewer span").onclick = () => {
    document.querySelector(".gallery-viewer").style.display = "none";
}