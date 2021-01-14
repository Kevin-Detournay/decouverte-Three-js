import Planet from'./Planet';

function init(){
console.log('function init')
const size=Number(document.querySelector('h1').dataset.size)
const color=document.querySelector('h1').dataset.color
const speed=Number(document.querySelector('h1').dataset.speed)
const name=document.querySelector('h1').dataset.name

new Planet ({
    size,
    color,
    speed,
    name
})
}

document.addEventListener('DOMContentLoaded',init)