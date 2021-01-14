import Planet from'./Planet';

function init(){
console.log('function init')
const size=Number(document.querySelector('h1').dataset.size)
const color=document.querySelector('h1').dataset.color
const speed=Number(document.querySelector('h1').dataset.speed)

new Planet ({
    size,
    color,
    speed,
})
}

document.addEventListener('DOMContentLoaded',init)