const gallery = document.querySelector('.gallery-img')
const galleryIMG = document.getElementById('gallery-img')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')


const img = ['_1.jpg','_2.jpg','_3.jpg','_4.jpg']

let i = 0;
function nextImg() {
  if (i >= img.length) {
    i = 0
  }
  let imgSrc = 'img/gallery/gallery'
      
  imgSrc += img[i]
  galleryIMG.src = imgSrc
  imgSrc = 'img/gallery/gallery'

  i++
}
setInterval(nextImg, 3000)

prevBtn.onclick = () => {
  i--
  nextImg()
}
nextBtn.onclick = () => {
  i++
  nextImg()
}

// galleryIMG.onclick = () => {
//   galleryIMG.classList.toggle('opened')
// }

// BURGER

const headerBurger = document.querySelector('.header__burger')
const nav = document.querySelector('.nav')
const body = document.querySelector('body')

headerBurger.onclick = () => {
  nav.classList.toggle('activ')
  headerBurger.classList.toggle('activ')
}