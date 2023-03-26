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

function setUp() {
    // color.style.backgroundImage = 'radial-gradient(closest-side, #00acb5b6, #222831)'
    // body.style.setProperty('backgroundColor', '#222831');
    // jobUx.style.display = 'initial';
    // jobGd.style.display = 'none';
    // jobRet.style.display = 'none';
    // jobUx.style.opacity = '1';
    // jobGd.style.opacity = '0';
    // jobRet.style.opacity = '0';
    currentJob = 'Ux';
}

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

window.onload = function () {
    setUp();
}

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


// // FILTERS
// const filtersEl = document.querySelector('.filters');
// const projectEl1 = document.querySelector('.project:nth-child(1)');
// const projectEl2 = document.querySelector('.project:nth-child(2)');
// const projectEl3 = document.querySelector('.project:nth-child(3)');
// const projectEl4 = document.querySelector('.project:nth-child(4)');
// const projectEl5 = document.querySelector('.project:nth-child(5)');
// const projectEl6 = document.querySelector('.project:nth-child(6)');
// const htmlEl = document.querySelector('html');

// filtersEl.addEventListener('click', e => {
//     // remove fade
//     fadeEl.style.opacity = '0';

//     // make clicked button active
//     document.querySelector('.filter-btn--active').classList.remove('filter-btn--active');
//     e.target.classList.add('filter-btn--active');

//     // change image opacity
//     htmlEl.style.setProperty('-defalut--opacity', '0.4');
//     htmlEl.style.setProperty('-hover--opacity', '0.3');

//     // reorganize grid
//     const filterText = e.target.textContent;

//     if (filterText === 'All') {
//         projectEl1.style.opacity = '1';
//         projectEl1.style.transform = 'scale(1)';
//         projectEl2.style.opacity = '1';
//         projectEl2.style.transform = 'scale(1)';
//         projectEl3.style.opacity = '1';
//         projectEl3.style.transform = 'scale(1)';
//         projectEl4.style.opacity = '1';
//         projectEl4.style.transform = 'scale(1)';
//         projectEl5.style.opacity = '1';
//         projectEl5.style.transform = 'scale(1)';
//         projectEl6.style.opacity = '1';
//         projectEl6.style.transform = 'scale(1)';

//     } else if (filterText === 'Front end') {
//         projectEl1.style.opacity = '0';
//         projectEl1.style.transform = 'scale(0)';
//         projectEl2.style.opacity = '0';
//         projectEl2.style.transform = 'scale(0)';
//         projectEl5.style.opacity = '0';
//         projectEl5.style.transform = 'scale(0)';
//         projectEl6.style.opacity = '0';
//         projectEl6.style.transform = 'scale(0)';

//         projectEl3.style.transform = 'translateX(-650px)'
//         projectEl3.style.opacity = '1';
//         projectEl4.style.transform = 'translate(325px, -502px)'
//         projectEl4.style.opacity = '1';

//     } else if (filterText === 'Back end') {
//         projectEl1.style.opacity = '0';
//         projectEl1.style.transform = 'scale(0)';
//         projectEl2.style.opacity = '0';
//         projectEl2.style.transform = 'scale(0)';
//         projectEl3.style.opacity = '0';
//         projectEl3.style.transform = 'scale(0)';
//         projectEl4.style.opacity = '0';
//         projectEl4.style.transform = 'scale(0)';

//         projectEl5.style.transform = 'translate(-325px, -359px)'
//         projectEl5.style.opacity = '1';
//         projectEl6.style.transform = 'translate(-325px, -501px)'
//         projectEl6.style.opacity = '1';

//     } else if (filterText === 'Full stack') {
//         projectEl3.style.opacity = '0';
//         projectEl3.style.transform = 'scale(0)';
//         projectEl4.style.opacity = '0';
//         projectEl4.style.transform = 'scale(0)';
//         projectEl5.style.opacity = '0';
//         projectEl5.style.transform = 'scale(0)';
//         projectEl6.style.opacity = '0';
//         projectEl6.style.transform = 'scale(0)';

//         projectEl1.style.opacity = '1';
//         projectEl1.style.transform = 'scale(1)';
//         projectEl2.style.opacity = '1';
//         projectEl2.style.transform = 'scale(1)';
//     }
// });