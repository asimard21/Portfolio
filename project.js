const descriptions = Array.from(document.getElementsByClassName('full-desc'));
const clickMe = Array.from(document.getElementsByClassName('clickMe'));


const desc1 = document.getElementById('projet1-description');
const desc2 = document.getElementById('projet2-description');
const desc3 = document.getElementById('projet3-description');
const desc4 = document.getElementById('projet4-description');

if (window.innerWidth > 1000) {
    desc1.onclick = () => {
        if (clickMe[0].style.display === 'none') {
            clickMe[0].style.display = 'block';
            descriptions[0].style.display = 'none';    
        } else {
            clickMe[0].style.display = 'none';
            descriptions[0].style.display = 'block';
        }
    }
    desc2.onclick = () => {
            if (clickMe[1].style.display === 'none') {
                clickMe[1].style.display = 'block';
                descriptions[1].style.display = 'none';    
            } else {
                clickMe[1].style.display = 'none';
                descriptions[1].style.display = 'block';
            }
    }
    desc3.onclick = () => {
        if (clickMe[2].style.display === 'none') {
            clickMe[2].style.display = 'block';
            descriptions[2].style.display = 'none';    
        } else {
            clickMe[2].style.display = 'none';
            descriptions[2].style.display = 'block';
        }
    }
    desc4.onclick = () => {
    
        if (clickMe[3].style.display === 'none') {
            clickMe[3].style.display = 'block';
            descriptions[3].style.display = 'none';    
        } else {
            clickMe[3].style.display = 'none';
            descriptions[3].style.display = 'block';
        }
    } 

}else {
    clickMe.forEach((element) => {
        element.style.display = 'none';
    })

    descriptions.forEach((element) => {
        element.style.display = 'block';
    }) 
}
