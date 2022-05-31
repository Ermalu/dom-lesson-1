//! DOM - Document Object Model
//? селекторы get...
// let btn = document.getElementById('btn')
// console.log(btn);
// let blocks = document.getElementsByClassName('blocks')
// console.log(blocks);

// let blocks = document.getElementsByTagName('div')
// console.log(blocks);

// let inp = document.getElementsByName('phone')
// console.log(inp);

//? селекторы  querySelectors

// let btn = document.querySelector('#btn');
// let blocks = document.querySelectorAll('.blocks')
// let blocks2 = document.querySelectorAll('div')
// let inp = document.querySelectorAll('[name="phone"]')
// console.log(btn, blocks, blocks2, inp);

// let container = document.getElementById('container')
// // console.log(container);
// container.innerText = 'Hello DOM!'
// container.innerHTML = '<h1>Hello DOMik!</h1>'
// container.style.backgroundColor = 'red'
// container.style.fontSize = '15px'
// container.style.color = 'white'

// document.body.style.backgroundColor = 'black'


// let container = document.getElementById('container')
// for(let i = 0; i <= 10; i++){
//     let blocks = document.createElement('div')
//     blocks.style.width = '100px'
//     blocks.style.height = '100px'
//     blocks.style.backgroundColor = 'green'
//     blocks.style.margin = '10px'
//     container.append(blocks)
// }
// container.style.display = 'flex'

// console.log(container.firstChild, container.lastChild);
// console.log(container.firstChild.previousElementSibling);
// console.log(container.firstChild.nextElementSibling);

// console.log(getComputedStyle(container).color);

// let blocks1 = document.querySelectorAll('.blocks')
// //! NodeList - static - один раз обрашяеться к элементам и больще не следить за ними

// let blocks2 = document.getElementsByClassName('blocks')

// //!TMLCollection - dinamic - постоянно следит за элементами и видит изменения 
// blocks1[0].remove()
// console.log(blocks1);
// console.log(blocks2);

// let inp = document.getElementById('inp')
// // console.log(inp);
// inp.setAttribute('placeholder', 'text...')
// inp.classList.add('new-class')
// inp.classList.add('new-class-2')
// inp.classList.remove('new-class')
// inp.classList.toggle('new-class-3')
// console.log(inp);