'use strict'

// Создание и вставка элементов на JavaScript

/* Сейчас мы с вами научимся создавать новые DOM элементы через JavaScript, а затем добавлять их на страницу. Для этого предназначен метод createElement. Параметром этого метода следует передавать имя тега, который должен быть создан.

Если записать результат работы createElement в переменную, то в этой переменной будет такой элемент, как будто бы мы получили его через querySelector.

Единственное отличие - наш элемент не будет размещен на странице. А так мы можем менять ему текст, атрибуты, навешивать обработчики событий и в конце концов разместить его на странице.

Для размещения нового элемента на странице применяется метод appendChild. Этот метод следует применять к тому элементу, в который мы хотим поместить наш элемент. А параметром метода следует передавать наш новый элемент, созданный ранее через createElement.

Посмотрим на практическом примере. Пусть у нас есть див, а в нем - несколько абзацев:

<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
</div>
Давайте создадим абзац, установим ему текст и поместим на страницу в конец блока #parent:

let parent = document.querySelector('#parent');

let p = document.createElement('p');
p.textContent = '!';

parent.appendChild(p);
Результат выполнения кода:

<div id="parent">
	<p>1</p>
	<p>2</p>
	<p>3</p>
	<p>!</p>
</div> */


/* №1⊗jsPmMnCIE
Дан ol:
<ol id="elem"></ol>
Вставьте ему в конец li с текстом 'item'. */
/* let elems = document.querySelector('#elem');
let li = document.createElement('li');
li.textContent = 'item';

elems.appendChild(li);
console.log(elems); */

/* №2⊗jsPmMnCIE
Дан ol и кнопка:
<ol id="elem"></ol>
<button id="button">click me</button>
Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'. */
/* let elems = document.querySelector('#elem');
let button = document.querySelector('#button');

button.addEventListener('click', function(){
	let li = document.createElement('li');
	li.textContent = 'item';
	elems.appendChild(li);
	console.log(elems);
}); */


