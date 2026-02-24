let count = 1
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


const cards = document.querySelector('.cards');
const nexrBtn = document.querySelector('.btn-next');
const prevBtn = document.querySelector('.btn-prev');

let = currentIndex = 0;

const cardWidht = 400;
nextBtn.addEventListener('click', () => {
     const totalCards = document.querySelectorAll('.card').length;
     
     if(currentIndex < totalCards -1){
        currentIndex++;
        cards.computedStyleMap.transform = `translateX(-${currentIndex * cardWidht}px)`;
     }    
})