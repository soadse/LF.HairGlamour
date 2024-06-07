var open = document.querySelector('#open')
var close = document.querySelector('#closee')

function abrir(){
    open.style.display = 'none'
    close.style.display = 'flex'
}

function fechar(){
    open.style.display = 'flex'
    close.style.display = 'none'
}