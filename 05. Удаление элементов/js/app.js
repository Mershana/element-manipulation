"use strict";

// Удаление элементов на JavaScript
/* Давайте теперь научимся удалять элементы. Для этого нужно использовать метод remove. Посмотрим на примере, как это делается. Пусть у нас есть абзацы:

<p>elem 1</p>
<p>elem 2</p>
<p>elem 3</p>
<p>elem 4</p>
<p>elem 5</p>
Давайте сделаем так, чтобы любой абзац удалялся по клику на нем:

let elems = document.querySelectorAll('p');

for (let elem of elems) {
	elem.addEventListener('click', function() {
		elem.remove();
	});
} */

/* №1⊗jsPmMnER
Дан следующий код:
<ul>
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>
Сделайте так, чтобы любая li удалялась по клику на нее. */
/* let li = document.querySelectorAll('li');

for (let elem of li){
	elem.addEventListener('click', function(){
		elem.remove();
	});
} */

/* №2⊗jsPmMnER
Дан следующий код:
<ul id="parent">
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>

<input type="submit" id="button">
Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent. */
/* let parent = document.querySelector("#parent");
let button = document.querySelector("#button");

button.addEventListener("click", function () {
	parent.removeChild(parent.lastElementChild); //удаляет последний элемент из списка
 }); */