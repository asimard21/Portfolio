const desc1 = document.getElementById('projet1-description');
const desc2 = document.getElementById('projet2-description');
const desc3 = document.getElementById('projet3-description');
const desc4 = document.getElementById('projet4-description');

const img1 = document.getElementById('projet1-image');
const img2 = document.getElementById('projet2-image');
const img3 = document.getElementById('projet3-image');
const img4 = document.getElementById('projet4-image');



img1.onclick = () => {
    if (window.innerWidth > 600) {
        if (desc1.style.visibility === 'visible') {
            desc1.style.visibility = 'hidden';
        } else {
            desc1.style.visibility = 'visible';
        }
    }
}

img2.onclick = () => {
    if (window.innerWidth > 600) {
        if (desc2.style.visibility === 'visible') {
            desc2.style.visibility = 'hidden';
        } else {
            desc2.style.visibility = 'visible';
        }
    }
}

img3.onclick = () => {
    if (window.innerWidth > 600) {
        if (desc3.style.visibility === 'visible') {
            desc3.style.visibility = 'hidden';
        } else {
            desc3.style.visibility = 'visible';
        }
    }
}

img4.onclick = () => {
    if (window.innerWidth > 600) {
        if (desc4.style.visibility === 'visible') {
            desc4.style.visibility = 'hidden';
        } else {
            desc4.style.visibility = 'visible';
        }
    }
   
}

