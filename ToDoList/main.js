const input = document.querySelector('#text1') // Текстовое поле
const button = document.querySelector('#button1') // Кнопка добавления
const button2 = document.querySelector('#button2') // Кнопка очистки
const list = document.querySelector('#list1') // Список 1
const list2 = document.querySelector('#list2') // Список 2


function addList (){ //Функция добовления в список

    if ( input.value === ''){
        alert('Заполните поле') // Вывод сообщение, если поле не заполнено
    } else {
        let liLast = document.createElement('li') // Добавляем элемент списка
        liLast.innerHTML = input.value // Заносим данные в элемент списка
        list.append(liLast) // Вывод в конце списка данных из текстовго поля
        input.value = '' // Очистка текстовго поля
    }

}

function clean() { // Функция очистки списка
    const clean = document.getElementById("list1") // Поиск ul по id
    clean.innerHTML = '' // Очистка li
    input.value = '' // Очистка текстовго поля
}


