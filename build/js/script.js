let textContainer=document.querySelector(".content"),button=document.querySelector(".button");function getJsonAsArray(){return JSON.parse('[\n    {\n      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",\n      "age": "32",\n      "email": "ivan@ivanov.ru",\n      "phone": "+7(954)148-45-73",\n      "body": "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"\n    },\n    {\n      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",\n      "age": "24",\n      "email": "katja@yandex.ru",\n      "phone": "+7(956)172-12-23",\n      "body": "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"\n    },\n    {\n      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",\n      "age": "45",\n      "email": "fedor@sidirov.ru",\n      "phone": "+7(911)760-45-35",\n      "body": "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"\n    },\n    {\n      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",\n      "age": "19",\n      "email": "stas@fedorov.ru",\n      "phone": "+7(954)343-55-55",\n      "body": "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"\n    },\n    {\n      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",\n      "age": "28",\n      "email": "evgeny@gmail.com",\n      "phone": "+7(918)577-98-89",\n      "body": "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"\n    },\n    {\n      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",\n      "age": "22",\n      "email": "elena@mail.ru",\n      "phone": "+7(931)466-77-19",\n      "body": "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"\n    }\n  ]')}button.addEventListener("click",(function(){textContainer.classList.remove("d-none");let e=document.querySelector("#title-template").content;getJsonAsArray().forEach((function(t){let n=e.cloneNode(!0);n.querySelector(".title > span").textContent+=" "+t.title,n.querySelector(".body > span").textContent+=" "+t.body,textContainer.appendChild(n)}))}));