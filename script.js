const body = document.querySelector('body');
const html = document.querySelector('html');
const color = document.querySelector('.color');
const job = document.querySelector('.jobs');
const jobWrapper = document.querySelector('.work-container');
const jobUx = document.querySelector('.work__ux');
const jobGd = document.querySelector('.work__gd');
const jobRet = document.querySelector('.work__ret');

function seuUp() {
    color.style.backgroundImage = 'radial-gradient(closest-side, #00acb5b6, #222831)'
    body.style.setProperty('backgroundColor', '#222831');
    jobUx.style.display = 'initial';
    jobGd.style.display = 'none';
    jobRet.style.display = 'none';
}

window.onload = function () {
    seuUp();
}

job.addEventListener('click', e => {
    const clicked = e.target.textContent;
    let currentJob = 'Ux';

    if (clicked === 'UI/UX Designer') {
        // jobWrapper.style.transform = 'translateX(0px)';
        // color.style.backgroundImage = 'radial-gradient(closest-side, var(--color-ux-1), var(--color-ux-2))'
        // body.style.backgroundColor = 'var(--color-ux-2)'
        jobUx.style.display = 'initial';
        jobGd.style.display = 'none';
        jobRet.style.display = 'none';
        currentJob = 'Ux';
    }
    if (clicked === 'Graphic Designer') {
        document.documentElement.style.setProperty("--color-1", "#00b518b6");
        // jobWrapper.style.transform = 'translateX(-1025px)';
        // color.style.backgroundImage = 'radial-gradient(closest-side, var(--color-gd-1), var(--color-gd-2))'
        // body.style.backgroundColor = 'var(--color-gd-2)'
        jobUx.style.display = 'none';
        jobGd.style.display = 'initial';
        jobRet.style.display = 'none';
        currentJob = 'Gd';
    }
    if (clicked === 'Retoucher') {
        // jobWrapper.style.transform = 'translateX(-2050px)';
        jobUx.style.display = 'none';
        // color.style.backgroundImage = 'radial-gradient(closest-side, var(--color-ret-1), var(--color-ret-2))'
        // body.style.backgroundColor = 'var(--color-ret-2)'
        jobGd.style.display = 'none';
        jobRet.style.display = 'initial';
        currentJob = 'Ret';
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