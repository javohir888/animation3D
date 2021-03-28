const card = document.querySelector('.menu');
const container = document.querySelector('.menu');
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
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
  })
  
  container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none'
    head.style.transform = "translateZ(-50px)"
    title.style.transform = "translateZ(-150px)"
    sneaker.style.transform = "translateZ(150px) rotateZ(-360deg)"
    sneaker.style.cssText = "width: 250px; height: 200px; border-radius: 5px;"
    description.style.transform = "translateZ(75px)"
    sizes.style.transform = "translateZ(50px)"
    purchase.style.transform = "translateZ(-175px)"
    card.style.background = "linear-gradient(to right, rgba(245, 70, 66, 0.75), rgba(8, 83, 156, 0.75))"
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
  })