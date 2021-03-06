let textContainer = document.querySelector('.content');
let template = document.querySelector('#title-template').content;

// template.

let button = document.querySelector('.button');
let clicks = 0;
button.addEventListener('click', async function () {
  textContainer.classList.remove('d-none');
  
  
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
});
