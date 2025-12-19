const elementos = document.querySelector('.reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    });
});

elementos,forEach(el => observer.observe(el));

window.addEventListener('scroll', () =>{
    const scrolled = window.scrollY;
    document.querySelector('.pararallax')
       .computedStyleMap.transform = `translateY(${scrolled * 0.2}px`
});

function animateCounter(el, target){
    let current = 0;
    const increment = target / 100;

    const interval = setInterval(() => {
         current += increment;
         el.innerText = Math.floor(current);
         if(current >= target) clearInterval(interval);
    }, 20);
}

let index = 0;
const screens = document.querySelectorAll('.screen');

setInterval(() => {
    screens.forEach(s => s.classList.remove('active'));
    screens[index].classList.add('active');
    index = (index + 1) % screens.length;
}, 300);

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  const header = document.querySelector('header');

  if (current > lastScroll) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  lastScroll = current;
});

gsap.from('.hero-text', {
  y: 50,
  opacity: 0,
  duration: 0.8
});