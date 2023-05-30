const openBtn =document.querySelector("#openBtn");
card=document.querySelector(".card");
closeBtn=document.querySelector(".closeBtn");
loginlink=document.querySelector(".loginLink")
registerlink=document.querySelector(".registerLink");
containerForm=document.querySelector(".container-form");


openBtn.addEventListener("click", ()=>{
    card.classList.add('show');
})
closeBtn.addEventListener("click", ()=>{
    card.classList.remove('show');
})

registerlink.addEventListener('click', (e)=>{
    e.preventDefault();
    containerForm.classList.add('active');
})

loginlink.addEventListener('click', (e)=>{
    e.preventDefault();
    containerForm.classList.remove('active');
})

//fun to generate bubble
const createBubble = () => {
    const section = document.querySelector('.bubble-background');
    const bubbleEl = document.createElement('span');
    bubbleEl.className = "bubble";
    const minSize = 30;
    const maxSize = 50;
    const size = Math.random() * (maxSize + 1 - minSize) + minSize;
    bubbleEl.style.width = `${size}px`;
    bubbleEl.style.height = `${size}px`;
    bubbleEl.style.left = Math.random() * innerWidth + 'px';
    section.appendChild(bubbleEl);
  }
  
  setInterval(createBubble, 600);
  
  