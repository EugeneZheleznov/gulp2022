// ============================================================================================
// ============================================== Mobile Menu
// ============================================================================================

let unlock = true; // Нужна для отслеживания положения меню открыто/закрыто
let overlay = document.querySelector(".overlay"); // блок затемнения экрана
let iconMenu = document.querySelector(".mob__icon-menu"); // иконка меню 

if (iconMenu != null) {
	let delay = 500; // пауза, чтобы не кликали слишком часто
	let menuBody = document.querySelector(".mobile__wrap");  
	 
	// При клике по иконке меню, мы добавляем классы CSS которые
	// делают наше меню видимым
	iconMenu.addEventListener("click", function (e) {
		if (unlock) { 
			iconMenu.classList.toggle("active");
			menuBody.classList.toggle("active");
			overlay.classList.toggle("active"); 
		}
	});

	// При клике по затемненной области overlay, закрываем меню
	// удаляя все добавленные классы CSS
	overlay.addEventListener("click", function (e) {  
			iconMenu.classList.remove("active");
			menuBody.classList.remove("active");
			overlay.classList.remove("active"); 
	});

	// При клике по ссылкам меню, закрываем меню
	// удаляя все добавленные классы CSS
	menuBody.addEventListener("click", function (e) { 
		if (e.target.tagName === "A") {
			iconMenu.classList.remove("active");
			menuBody.classList.remove("active");
			overlay.classList.remove("active"); 
		}   
	});
}; 
 
// ============================================================================================
// ============================================== Рандомное число от 0 до 8
// ============================================================================================

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}
 
 
// ============================================================================================
// ============================================== Открытие модальных окон
// ============================================================================================

// SLIDE_LINK = document.querySelectorAll('класс элемента')

// const searchSlideLink = () => { 

// 	SLIDE_LINK.forEach(function(item){
// 		/* Назначаем каждой кнопке обработчик клика */
// 		item.addEventListener('click', function(e) {

// 		/* Предотвращаем стандартное действие элемента. Так как кнопку разные
// 			люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
// 			Нужно подстраховаться. */
// 		e.preventDefault();

// 		/* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
// 			и будем искать модальное окно с таким же атрибутом. */
// 			let modalId = this.getAttribute('data-modal')
// 			let modalElem = document.querySelector('.modal__item[data-modal="' + modalId + '"]')


// 		/* После того как нашли нужное модальное окно, добавим классы
// 			подложке и окну чтобы показать их. */
// 		modalElem.classList.add('active'); // добавляем активный класс чтобы отобразилось мод.окно
// 		overlay.classList.add('active'); // добавляем активный класс чтобы отобразился overlay
// 		doc.classList.add('lock'); // Убираем скролл страницы у тега html , overflow: hidden
// 		}); // end click

// 	});

// }


// ============================================================================================
// ============================================== Закрытие модальных окон
// ============================================================================================


// Как и выше только с кнопкой закрыть, на модальных окнах
// const CLOSE_MODAL = document.querySelectorAll('.close__btn');

// CLOSE_MODAL.forEach(function(elemClose){

// 	/* Назначаем каждой кнопке обработчик клика */
// 	elemClose.addEventListener('click', function(e) {

// 	   	/* Предотвращаем стандартное действие элемента. Так как кнопку разные
// 		  люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
// 		  Нужно подстраховаться. */
// 	   	e.preventDefault();

// 	   	/* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
// 		  и будем искать модальное окно с таким же атрибутом. */
// 	   	let modalId = this.getAttribute('data-modal')
// 	   	let modalElem = document.querySelector('.modal__item[data-modal="' + modalId + '"]')


// 	   	/* После того как нашли нужное модальное окно, удалим классы
// 		  подложке и окну чтобы скрыть их. */
// 	   	modalElem.classList.remove('active'); 
// 	   	overlay.classList.remove('active');  
// 		doc.classList.remove('lock'); // удаляем класс и можно скролить
// 	}); // end click
 
// });


 
// ============================================================================================
// ============================================== Закрываем модальное окно и overlay (тёмный слой), по клику на затемненную область overlay
// ============================================================================================

 
const MODAL_ITEMS = document.querySelectorAll('.modal__item') // получаем коллекцию всех модальных окон

// по клику на overlay
overlay.addEventListener("click", function (e) {   
	
	// проходимся по коллекции модальных окон, циклом for of, и убираем у каждого класс active,
	// наверняка есть более лаконичное решение, но хз
	for(elem of MODAL_ITEMS ) {
		elem.classList.remove('active'); 
	}
});
 