const card = document.querySelector('.menu');
const container = document.querySelector('.ctn');
const title = document.querySelector('.yuz');
const sneaker = document.querySelector('.inside img');
const purchase = document.querySelector('.btns');
const description = document.querySelector('.numbers');
const sizes = document.querySelector('.bio');
const head = document.querySelector('.head')

container.addEventListener('mousemove', (e) => {
    // console.log(e.pageX, e.pageY);
    // let xAxis = window.innerWidth / 2 - e.pageX
    // let yAxis = window.innerWidth / 2 - e.pageY
    let xAxis = (window.innerWidth / 2 - e.pageX) / 8
    let yAxis = (window.innerHeight / 2 - e.pageY) / 8
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
  })
  
  container.addEventListener('mouseenter', (e) => {
    card.style.cssText = "color: white;"
    card.style.transition = 'none'
    head.style.transform = "translateZ(50px)"
    title.style.transform = "translateZ(150px)"
    sneaker.style.transform = "translateZ(250px) rotateZ(-360deg)"
    sneaker.style.cssText = "width: 400px; height: 300px; border-radius: 5px;"
    description.style.transform = "translateZ(125px)"
    sizes.style.transform = "translateZ(100px)"
    purchase.style.transform = "translateZ(75px)"
    card.style.background = "black"
  })
  
  container.addEventListener('mouseleave', (e) => {
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform = "translateZ(0px)"
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)"
    description.style.transform = "translateZ(0px)"
    sizes.style.transform = "translateZ(0px)"
    purchase.style.transform = "translateZ(0px)"
    card.style.background = "none"
    sneaker.style.cssText = "width: 80px; height: 80px; border-radius: 50%;"
    card.style.cssText = "color: black;"
  });






  let gulim = document.querySelector(".gulim");
   
  gulim.addEventListener('mouseover', () => {
      gulim.style.cssText = "width: 800px; height: 600px; border-radius: 10px;"
  });

  gulim.addEventListener('mouseleave', () => {
      gulim.style.cssText = "width: 50px; height: 50px; border-radius: 50%;"
  })