
let textContainer = document.querySelector('.content');
let template = document.querySelector('#title-template').content;

// template.

let button = document.querySelector('.button');
button.addEventListener('click', function () {
  textContainer.classList.remove('d-none');
  async function main() {

    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let arr = await response.json();
    arr.forEach(function (element) {

      let templateClone = template.cloneNode(true);
      templateClone.querySelector('.title > span').textContent +=
        ' ' + element.title;
      templateClone.querySelector('.body > span').textContent +=
        ' ' + element.body;
      textContainer.appendChild(templateClone);
    });
  }
  main();
});
