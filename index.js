// Поиск осуществляется по имени

const divTable = document.querySelector('.div-table');
const divTableCol = document.querySelectorAll('.div-table .div-table-col');
const input = document.getElementById('myInput');

const createTemplate = (user) => {
  return `
    <div class="div-table-row">
      <div class="div-table-col">${user.id}</div>
      <div class="div-table-col">${user.name}</div>
      <div class="div-table-col">${user.username}</div>
      <div class="div-table-col">${user.email}</div>
      <div class="div-table-col">${user.address.street}</div>
    </div>
  `;
};

input.addEventListener('input', () => {
  getData();
});

const getData = (arr) => {
  let newArr = arr.filter((el) =>
    el.name.toLowerCase().includes(input.value.toLowerCase())
  );

  if (arr.length > 0) {
    divTable.innerHTML = '';
    arr.forEach((el) => {
      divTable.innerHTML += createTemplate(el);
    });
  }

  if (newArr.length < 10) {
    divTable.innerHTML = '';
    newArr.forEach((el) => {
      divTable.innerHTML += createTemplate(el);
    });
  }

  if (newArr.length === 0) {
    divTable.innerHTML = `<h1>Ничего не найдено!</h1>`;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => getData(json));
});

// Search
input.addEventListener('input', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => getData(json));
});

/**
 * TODO: Сделать делегирование событий, если нужно
 * TODO: Закомменитровать строки(возможно)
 */

// for (let i = 0; i < 6; i++) {
//   if (divTableCol[i].textContent.includes(input.value)) {
//     divTableCol[i].style.color = 'red';
//   } else {
//     divTableCol[i].style.color = '';
//   }
// }
