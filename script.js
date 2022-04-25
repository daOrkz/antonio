const gallery = document.querySelector('.gallery-img')
const galleryIMG = document.getElementById('gallery-img')

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
