'use strict'

// Вставка элементов в начало или в конец на JavaScript

/* №1⊗jsPmMnIBA
Дан ul:
<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>
Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'. */
/* 
let elems = document.querySelector('#elem');

let li1 = document.createElement('li');
li1.innerHTML = 'start';
elems.prepend(li1);

let li2 = document.createElement('li');
li2.innerHTML = 'finish'
elems.append(li2); */

/* Изучите теорию по следующим ссылкам:
insertBefore */
/* №2⊗jsPmMnIBA
Дан элемент #elem:
<ul id="parent">
	<li>text</li>
	<li>text</li>
	<li id="elem">text</li>
	<li>text</li>
	<li>text</li>
</ul>
Вставьте перед этим элементом элемент с текстом 'new'. */
/* let parent = document.querySelector('#parent');
let elems = document.querySelector('#elem');

let li = document.createElement('li');
li.innerHTML = 'new';
parent.insertBefore(li, elems); */
/* console.log(parent) */

/* №3⊗jsPmMnIBA
Модифицируйте предыдущую задачу так, чтобы клик на вставленный элемент приводил к тому, что в конец его текста будет добавляться '!'.
 */

/* let parent = document.querySelector('#parent');
let elems = document.querySelector('#elem');

let li = document.createElement('li');
li.innerHTML = 'new';
parent.insertBefore(li, elems);

li.addEventListener('click', function(){
	li.textContent += '!'
}); */
