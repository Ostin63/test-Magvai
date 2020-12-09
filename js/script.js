let textContainer = document.querySelector('.content');
let template = document.querySelector('#title-template').content;

// template.
async function main() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts?_start=' + clicks + '&_limit=6');
  let arr = await response.json();
  clicks += 6;
  arr.forEach(function (element) {
    let templateClone = template.cloneNode(true);
    templateClone.querySelector('.title').textContent +=
      ' ' + element.title;
    templateClone.querySelector('.body').textContent +=
      ' ' + element.body;
    textContainer.appendChild(templateClone);
  });
}
main();
let clicks = 0;
let button = document.querySelector('.button');
button.addEventListener('click', function () {
  textContainer.classList.remove('d-none');
  main();
});
