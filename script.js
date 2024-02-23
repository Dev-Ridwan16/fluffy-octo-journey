// const carousel = document.querySelector('.carousel')
// const prevButton = document.querySelector('.prev')
// const nextButton = document.querySelector('.next')

// let currentIndex = 0

// prevButton.addEventListener('click', () => {
//   currentIndex = Math.max(currentIndex - 1, 0)
//   updateCarousel()
// })

// nextButton.addEventListener('click', () => {
//   currentIndex = Math.min(currentIndex + 1, carousel.children.length - 1)
//   updateCarousel()
// })

// function updateCarousel() {
//   const itemWidth = carousel.children[0].clientWidth
//   carousel.scrollTo({
//     left: currentIndex * itemWidth,
//     behavior: 'smooth',
//   })

//   if (currentIndex === 0) {
//     prevButton.disabled = true
//   } else {
//     prevButton.disabled = false
//   }

//   if (currentIndex === carousel.children.length - 1) {
//     nextButton.disabled = true
//   } else {
//     nextButton.disabled = false
//   }
// }

const carousel = document.querySelector('.carousel')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

let currentIndex = 0

prevButton.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0)
  updateCarousel()
})

nextButton.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, carousel.children.length - 1)
  updateCarousel()
})

function updateCarousel() {
  const itemWidth = carousel.children[0].clientWidth
  carousel.scrollTo({
    left: currentIndex * itemWidth,
    behavior: 'smooth',
  })

  if (currentIndex === 0) {
    prevButton.disabled = true
  } else {
    prevButton.disabled = false
  }

  if (currentIndex === carousel.children.length - 1) {
    nextButton.disabled = true
    // Scroll to the beginning
    setTimeout(() => {
      carousel.scrollTo({
        left: 0,
        behavior: 'smooth',
      })
      currentIndex = 0
      nextButton.disabled = false
    }, 1000) // Wait for 1 second before scrolling to the beginning
  } else {
    nextButton.disabled = false
  }
}
