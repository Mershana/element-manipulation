'use strict'

// Смежная вставка элементов на JavaScript
/* Метод insertAdjacentElement
Метод insertAdjacentElement позволяет вставить элемент в любое место страницы. Чаще всего используется после создания элемента с помощью createElement.

Код вставляется относительно опорного элемента. Можно сделать вставку перед опорным элементом (способ вставки beforeBegin), после него (способ вставки afterEnd), а также в начало (способ вставки afterBegin) или в конец (способ вставки beforeEnd) опорного элемента.

Синтаксис
опорный элемент.insertAdjacentElement(способ вставки, код для вставки) */
/* Дан элемент:
<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Вставьте перед ним абзац с текстом '!!!'. */
/* let elems = document.querySelector('#elem');

let p = document.querySelector('p');
p.innerHTML = '!!!';
elems.insertAdjacentElement('beforeBegin', p); */

/* №2⊗jsPmMnIA
Дан элемент:
<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Вставьте после него абзац с текстом '!!!'. */

/* let elems = document.querySelector('#elem');
let p = document.createElement('p');
p.innerHTML = '!!!';
elems.insertAdjacentElement('afterEnd', p); */


/* №3⊗jsPmMnIA
Дан элемент:
<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Вставьте ему в начало абзац с текстом '!!!'. */
/* let elems = document.querySelector('#elem');
let p = document.createElement('p');
p.innerHTML = '!!!';
elems.insertAdjacentElement('afterbegin', p); */


// Пример . Способ beforeEnd
/* №4⊗jsPmMnIA
Дан элемент:
<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Вставьте ему в конец абзац с текстом '!!!'. */
/* let elems = document.querySelector('#elem');
let p = document.createElement('p');
p.innerHTML = '!!!';
elems.insertAdjacentElement('beforeend', p); */


// Смежная вставка тегов
/* №5⊗jsPmMnIA
Дан элемент:
<div id="elem" style="border: 1px solid red;">
	<p>text</p>
	<p>text</p>
	<p>text</p>
</div>
Дан элемент. Вставьте перед ним следующий тег:

<div class="www"><p>text</p><p>text</p><input></div> */

let elems = document.querySelector('#elem');
elems.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div>');
