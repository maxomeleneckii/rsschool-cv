const button = document.querySelector('.burger-menu');
const burgerNav = document.querySelector('.burger-nav');
const body = document.querySelector('body');
const navItems = document.querySelectorAll('.burger-nav__list > li > a');
const linkItem = document.querySelectorAll('.burger-nav__list > li > a[href^="#"');
const topOffset = document.querySelector('.header').offsetHeight;

if (button) {
  button.addEventListener('click', function (e) {
    button.classList.toggle('active');
    burgerNav.classList.toggle('active');
    body.classList.toggle('block');
  });
}

navItems.forEach(i => {
  i.addEventListener('click', function (e) {
    button.classList.remove('active');
    burgerNav.classList.remove('active');
    body.classList.remove('block');
  });
});

linkItem.forEach(l => {
  l.addEventListener('click', function (e) {
    e.preventDefault();
    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});


console.log('Самооценка: \n\n 1. Вёрстка валидная + 10 \n - для проверки валидности вёрстки HTML использован сервис https: (//validator.w3.org/), высвечивается надпись (Document checking completed. No errors or warnings to show). \n - для проверки валидности вёрстки CSS использован сервис https: (//jigsaw.w3.org/css-validator/), высвечивается надпись (Поздравляем! Ошибок не обнаружено). \n\n 2. Вёрстка семантическая + 20 \n - в коде странице присутствуют следующие элементы: header, main, footer +5. \n - только один заголовок h1 +5. \n - элементы section +5. \n - заголовки h2 +5. \n\n 3. Для оформления СV используются css - стили + 10. \n\n 4. При уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали, а не сдвигается в сторону +10. \n\n 5. На странице СV присутствует изображение, пропорции изображения не искажены, у изображения есть атрибут alt +10. \n\n 6. Контакты для связи и перечень навыков оформлены в виде списка ul > li +10. \n\n 7. Содержание CV +30. \n - имя и фамилию, краткую информацию о себе +5. \n - контакты для связи +5. \n - перечень навыков +5. \n - пример кода +5. \n - перечень выполненных учебных проектов с указанием использованных навыков и ссылками на исходный код +5. \n - информацию об образовании и уровне английского +5. \n\n 8. CV выполнено на английском языке +10. \n\n Итого: 110 баллов.');