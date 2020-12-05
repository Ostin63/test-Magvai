let textContainer = document.querySelector('.content');

// template.
let button = document.querySelector('.button');
button.addEventListener('click', function () {
  textContainer.classList.remove('d-none');
  let template = document.querySelector('#title-template').content;
  let arrayData = getJsonAsArray();
  arrayData.forEach(function (element) {
    let templateClone = template.cloneNode(true);
    templateClone.querySelector('.title > span').textContent +=
      ' ' + element.title;
    templateClone.querySelector('.body > span').textContent +=
      ' ' + element.body;
    textContainer.appendChild(templateClone);
  });
});
function getJsonAsArray() {
  return JSON.parse(`[
    {
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "age": "32",
      "email": "ivan@ivanov.ru",
      "phone": "+7(954)148-45-73",
      "body": "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "age": "24",
      "email": "katja@yandex.ru",
      "phone": "+7(956)172-12-23",
      "body": "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "age": "45",
      "email": "fedor@sidirov.ru",
      "phone": "+7(911)760-45-35",
      "body": "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "age": "19",
      "email": "stas@fedorov.ru",
      "phone": "+7(954)343-55-55",
      "body": "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "age": "28",
      "email": "evgeny@gmail.com",
      "phone": "+7(918)577-98-89",
      "body": "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "age": "22",
      "email": "elena@mail.ru",
      "phone": "+7(931)466-77-19",
      "body": "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"
    }
  ]`);
}