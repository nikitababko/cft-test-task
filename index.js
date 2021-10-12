const divTable = document.querySelector('.div-table');
const input = document.getElementById('myInput');
const count = document.querySelector('.count');

const createTemplate = (user) => {
  return `
    <div class="div-table-row">
        <div class="col-block">
          <div>ID</div>
          <div class="div-table-col">${user.id}</div>
        </div>

        <div class="col-block">
          <div>Name</div>
          <div class="div-table-col">${user.name}</div>
        </div>

        <div class="col-block">
          <div>Username</div>
          <div class="div-table-col">${user.username}</div>
        </div>

        <div class="col-block">
          <div>Email</div>
          <div class="div-table-col">${user.email}</div>
        </div>

        <div class="col-block">
          <div>Address</div>
          <div class="div-table-col">${user.address.street}</div>
        </div>
    </div>
  `;
};

input.addEventListener('input', () => {
  fetchJSON();
  getData();
});

const getData = (arr) => {
  let newArr;
  let firstArr;
  if (arr) {
    firstArr = arr.filter((el) => {
      return el.id < 6;
    });

    newArr = firstArr.filter((el) => {
      return el.name.toLowerCase().includes(input.value.toLowerCase());
    });

    if (newArr.length > 0) {
      count.innerHTML = newArr.length;
      divTable.innerHTML = '';
      arr.forEach((el) => {
        divTable.innerHTML += createTemplate(el);
      });
    }

    if (newArr.length < 6) {
      count.innerHTML = newArr.length;
      divTable.innerHTML = '';
      newArr.forEach((el) => {
        divTable.innerHTML += createTemplate(el);
      });
    }

    if (newArr.length === 5) {
      count.innerHTML = ``;
    }

    if (newArr.length === 0) {
      count.innerHTML = `Ничего не найдено`;
    }
  }
};

const fetchJSON = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => getData(json));
};

document.addEventListener('DOMContentLoaded', () => {
  fetchJSON();
});
