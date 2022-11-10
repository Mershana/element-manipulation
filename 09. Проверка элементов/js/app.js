'use strict'

// Проверка элементов в JavaScript
/* №1⊗jsPmMnECh
Дан элемент:

<div id="elem" class="www"></div>
Проверьте, является ли этот элемент элементом с классом www. */

/* let elems = document.querySelector('#elem');
console.log(elems.matches('div.www')); // true */

/* №2⊗jsPmMnECh
Дан элемент. Проверьте, является ли этот элемент абзацем. */
/* let div = document.querySelector('#elem');
console.log(div.matches('p')); */

/* №3⊗jsPmMnECh
Даны две переменные elem1 и elem2, содержащие два элемента:

<div id="elem1">
	<p id="elem2"></p>
</div>
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
Проверьте, является ли элемент из elem2 потомком элемента из elem1. */
// Метод contains
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');

let contains = elem1.contains(elem2);
console.log(contains); //true