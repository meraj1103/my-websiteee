// Scroll fade-in for cards
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});
cards.forEach(card=>observer.observe(card));

// Mouse move parallax for stars
const stars = document.querySelector('.stars');
document.addEventListener('mousemove', e=>{
    const x = (e.clientX/window.innerWidth-0.5)*40;
    const y = (e.clientY/window.innerHeight-0.5)*40;
    stars.style.transform = `translate(${x}px,${y}px)`;
});
