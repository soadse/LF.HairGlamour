var open = document.querySelector('#open')
var close = document.querySelector('#closee')
var pag02 = document.querySelector('.pag02')
var pag03 = document.querySelector('.pag03')
var pag04 = document.querySelector('.pag04')
var last = document.querySelectorAll('.hidden')


var myOb = new IntersectionObserver ( (teste) => {
    teste.forEach( (teste) => {
        if(teste.isIntersecting){
            teste.target.classList.add('show')
        } else {
            teste.target.classList.remove('show')
        }
    })
})
last.forEach( (last) => myOb.observe(last))

function abrir(){
    open.style.display = 'none'
    close.style.display = 'flex'
}

function fechar(){
    open.style.display = 'flex'
    close.style.display = 'none'
}

function secoes(){
    pag02.style.display = 'block'
    pag03.style.display = 'block'
    pag04.style.display = 'flex'
}
setTimeout(secoes, 5000)
