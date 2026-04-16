let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function() {
     nextImage();
},2000);

function nextImage() {
    count++;
    if(count > 3) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}


document.addEventListener("DOMContentLoaded", () => {

    const wrapper = document.querySelector('.cards-wrapper');
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');

    let scrollAmount = 0;
    const step = 400;

    function pararAnimacao() {
        wrapper.style.animation = 'none';
    }

    function voltarAnimacao() {
        setTimeout(() => {
            wrapper.style.animation = 'scrollCards 60s linear infinite';
        }, 2000);
    }

    btnRight.addEventListener('click', () => {
        pararAnimacao();
        scrollAmount -= step;
        wrapper.style.transform = `translateX(${scrollAmount}px)`;
        voltarAnimacao();
    });

    btnLeft.addEventListener('click', () => {
        pararAnimacao();
        scrollAmount += step;
        wrapper.style.transform = `translateX(${scrollAmount}px)`;
        voltarAnimacao();
    });

});