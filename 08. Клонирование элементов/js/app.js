'use strict'

// Клонирование элементов на JavaScript
let elems = document.querySelector('#elems')
let input = document.querySelector('input');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	let clone = input.cloneNode(true);
	elems.appendChild(clone);
});
