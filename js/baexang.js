const btnPick1 = document.querySelector('.arts')
const btnPick2 = document.querySelector('.photos')
const art = document.querySelector('.art')
const photo = document.querySelector('.photo')

btnPick2.onclick = function() {
    photo.classList.add('on')
}
btnPick1.onclick = function() {
    photo.classList.remove('on')
}