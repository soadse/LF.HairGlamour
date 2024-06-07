var open = document.querySelector('#open')
var close = document.querySelector('#closee')
var pag02 = document.querySelector('.pag02')
var pag03 = document.querySelector('.pag03')


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
}
setTimeout(secoes, 5000)
