'use strict'

// Создание элементов в цикле на JavaScript

// №1⊗jsPmMnLEC
// Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.
let elems = document.querySelector('#elem');

for (let i = 1; i <= 10; i++){
	let li = document.createElement('li');
	li.textContent = i;
	elems.appendChild(li);
}