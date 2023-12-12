const modal = document.querySelector('.mobile-nav')
const openModal = document.querySelector('.ham')
const closeModal = document.querySelector('.close')
const overlay = document.querySelector('.overlay')
const contains = modal.classList.contains('hidden')

openModal.addEventListener('click', ()=>{
    // modal.classList.toggle('hide')
    // overlay.classList.toggle('hide')
    modal.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
    if(modal.classList.contains('hidden')){
        openModal.src = `images/icon-hamburger.svg`
    }else{
        openModal.src = `images/icon-close.svg`
    }
})

// closeModal.addEventListener('click', ()=>{
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')
// })

overlay.addEventListener('click', ()=>{
    // modal.classList.toggle('hide')
    // overlay.classList.toggle('hide')
    modal.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
    if(modal.classList.contains('hidden')){
        openModal.src = `images/icon-hamburger.svg`
    }else{
        openModal.src = `images/icon-close.svg`
    }
})