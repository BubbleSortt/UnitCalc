$(document).ready(function () {

  let isComplexCalc = document.querySelector('main').dataset.complexCalc

  if (isComplexCalc) {
    let allAddPersonalButton = document.querySelectorAll('button[data-new-personal="true"]');
    console.log(allAddPersonalButton);

    allAddPersonalButton.forEach(button => {
      button.addEventListener('click', addPersonal)
    })
  }

  function addPersonal(evt) {
    evt.preventDefault()
    console.log('work')
    let whichPersonal = evt.target.dataset.personal

    switch (whichPersonal) {
      case 'marketing':
        addMarketingPersonal('marketing');
        initializeSelect2();
        addPersonalAddButton('marketing');
        removeNewPersonalButton('marketing');
        break;
      case 'additional-spending':
        addAdditionalSpending('additional-spending');
        initializeSelect2();
        addPersonalAddButton('additional-spending');
        removeNewPersonalButton('additional-spending');
        break;
      case 'clerking':
        addClerkingPersonal('clerking');
        initializeSelect2();
        addPersonalAddButton('clerking');
        removeNewPersonalButton('clerking');
        break;
      case 'dev':
        addDevPersonal('dev');
        initializeSelect2();
        addPersonalAddButton('dev');
        removeNewPersonalButton('dev');
        break;
      case 'management':
        addManagementPersonal('management');
        initializeSelect2();
        addPersonalAddButton('management');
        removeNewPersonalButton('management');
        break;
      case 'support':
        addSupportPersonal('support');
        initializeSelect2();
        addPersonalAddButton('support');
        removeNewPersonalButton('support');
        break;
    }

  }

  function initializeSelect2() {
    $('.main-form__select').select2({
      minimumResultsForSearch: Infinity,
      width: '100%'
    });
  }

  function removePersonal(evt) {
    evt.preventDefault();
    evt.target.parentNode.remove();
    const whichTable = evt.target.dataset.removePersonal;
    const table = document.querySelector(`div[data-table='${whichTable}']`);
    const allRows = table.querySelectorAll('div[data-table-row="true"]');
    if (allRows.length === 0) {
      const oldButton = table.querySelector(`button[data-personal='${whichTable}']`)
      oldButton.remove();
      const newRow = document.createElement('div');
      newRow.classList.add('main-form__new-row');
      newRow.setAttribute('data-new-row', 'true');
      newRow.insertAdjacentHTML('afterbegin', `
                    <button data-new-personal="true" data-personal="${whichTable}">+</button>
                     <span> Нажмите и добавьте сотрудника</span>
    `)
      table.append(newRow);
      setTimeout(() => {
        const newButton = newRow.querySelector(`button[data-personal="${whichTable}"]`)
        newButton.addEventListener('click', addPersonal)

      }, 100)
    }
    console.log(allRows);
  }

  function removeNewPersonalButton(where) {
    const table = document.querySelector(`div[data-table='${where}']`);
    const tableRow = table.querySelector('div[data-new-row="true"]');
    if (tableRow) {
      tableRow.remove()
    }
  }


  function addPersonalAddButton(where) {
    const table = document.querySelector(`div[data-table='${where}']`);
    const isButton = table.querySelector(`button[data-new-personal='true']`)
    if (isButton) {
      const addButton = document.createElement('button');
      addButton.innerHTML = '+';
      addButton.classList.add('main-form__add-row');
      addButton.setAttribute('data-personal', `${where}`)
      table.append(addButton)
      setTimeout(() => {
        addButton.addEventListener('click', addPersonal)
      }, 100)
    }

  }

  function addMarketingPersonal(where) {
    const table = document.querySelector(`div[data-table="${where}"]`);
    const row = document.createElement('div');
    row.classList.add('main-form__table-row');
    row.setAttribute('data-table-row', 'true');
    row.insertAdjacentHTML('afterbegin', `
              <div class="main-form__select-wrap">
                  <select class="main-form__select" name="">
                      <option value="">Таргетолог</option>
                      <option value="">Маркетолог</option>
                      <option value="">Дизайнер</option>
                      <option value="">Копирайтер</option>
                      <option value="">ПО и сервисы</option>
                  </select>
              </div>
              <div class="main-form__input-wrap">
                  <input class="main-form__input" type="text" placeholder="р. 25 000">
                  <span class="main-form__input-info">Зарплата специалиста </span>
              </div>
              <button class="main-form__row-remove" data-remove-personal="marketing">-</button>
    `)
    table.append(row)
    setTimeout(() => {
      const removeButton = table.querySelectorAll('button[data-remove-personal="marketing"]');
      removeButton.forEach(button => {
        button.addEventListener('click', removePersonal)
      })
      console.log(removeButton)

    }, 100)
  }

  function addAdditionalSpending(where) {
    const table = document.querySelector(`div[data-table="${where}"]`);
    const row = document.createElement('div');
    row.classList.add('main-form__table-row');
    row.setAttribute('data-table-row', 'true');
    row.insertAdjacentHTML('afterbegin', `
              <div class="main-form__select-wrap">
                                <select class="main-form__select" name="">
                                    <option value="">СМС</option>
                                    <option value="">Email</option>
                                </select>
                            </div>
                            <div class="main-form__input-wrap">
                                <input class="main-form__input" type="text" placeholder="р. 25 000">
                                <span class="main-form__input-info">Зарплата специалиста </span>
                            </div>
                            <button class="main-form__row-remove" data-remove-personal="additional-spending">-</button>
    `)
    table.append(row)
    setTimeout(() => {
      const removeButton = table.querySelectorAll('button[data-remove-personal="additional-spending"]');
      removeButton.forEach(button => {
        button.addEventListener('click', removePersonal)
      })
      console.log(removeButton)

    }, 100)
  }

  function addClerkingPersonal(where) {
    const table = document.querySelector(`div[data-table="${where}"]`);
    const row = document.createElement('div');
    row.classList.add('main-form__table-row');
    row.setAttribute('data-table-row', 'true');
    row.insertAdjacentHTML('afterbegin', `
              <div class="main-form__select-wrap">
                                <select class="main-form__select" name="">
                                    <option value="">ПО и сервисы</option>
                                    <option value="">Бухгалтер</option>
                                    <option value="">Помощник бухгалтера</option>
                                </select>
                            </div>
                            <div class="main-form__input-wrap">
                                <input class="main-form__input" type="text" placeholder="р. 25 000">
                                <span class="main-form__input-info">Зарплата специалиста </span>
                            </div>
                            <button class="main-form__row-remove" data-remove-personal="clerking">-</button>
    `)
    table.append(row)
    setTimeout(() => {
      const removeButton = table.querySelectorAll('button[data-remove-personal="clerking"]');
      removeButton.forEach(button => {
        button.addEventListener('click', removePersonal)
      })
      console.log(removeButton)

    }, 100)

  }

  function addDevPersonal(where) {
    const table = document.querySelector(`div[data-table="${where}"]`);
    const row = document.createElement('div');
    row.classList.add('main-form__table-row');
    row.setAttribute('data-table-row', 'true');
    row.insertAdjacentHTML('afterbegin', `
              <div class="main-form__select-wrap">
                                <select class="main-form__select" name="">
                                    <option value="">Разработчик Android</option>
                                    <option value="">Разработчик iOS</option>
                                    <option value="">Senior backend</option>
                                    <option value="">Middle backend</option>
                                    <option value="">Senior frontend</option>
                                    <option value="">Senior UX/UI designer</option>
                                </select>
                            </div>
                            <div class="main-form__input-wrap">
                                <input class="main-form__input" type="text" placeholder="р. 25 000">
                                <span class="main-form__input-info">Зарплата специалиста </span>
                            </div>
                            <button class="main-form__row-remove" data-remove-personal="dev">-</button>
    `)
    table.append(row)
    setTimeout(() => {
      const removeButton = table.querySelectorAll('button[data-remove-personal="dev"]');
      removeButton.forEach(button => {
        button.addEventListener('click', removePersonal)
      })
      console.log(removeButton)

    }, 100)
  }

  function addManagementPersonal(where) {
    const table = document.querySelector(`div[data-table="${where}"]`);
    const row = document.createElement('div');
    row.classList.add('main-form__table-row');
    row.setAttribute('data-table-row', 'true');
    row.insertAdjacentHTML('afterbegin', `
              <div class="main-form__select-wrap">
                                <select class="main-form__select" name="">
                                    <option value="">CEO</option>
                                    <option value="">Юрист</option>
                                    <option value="">Переводчик</option>
                                    <option value="">Прочие сотрудники</option>
                                </select>
                            </div>
                            <div class="main-form__input-wrap">
                                <input class="main-form__input" type="text" placeholder="р. 25 000">
                                <span class="main-form__input-info">Зарплата специалиста </span>
                            </div>
                            <button class="main-form__row-remove" data-remove-personal="management">-</button>
    `)
    table.append(row)
    setTimeout(() => {
      const removeButton = table.querySelectorAll('button[data-remove-personal="management"]');
      removeButton.forEach(button => {
        button.addEventListener('click', removePersonal)
      })
      console.log(removeButton)

    }, 100)
  }

  function addSupportPersonal(where) {
    const table = document.querySelector(`div[data-table="${where}"]`);
    const row = document.createElement('div');
    row.classList.add('main-form__table-row');
    row.setAttribute('data-table-row', 'true');
    row.insertAdjacentHTML('afterbegin', `
              <div class="main-form__select-wrap">
                                <select class="main-form__select" name="">
                                    <option value="">DevOps</option>
                                    <option value="">Senior data base administrator</option>
                                    <option value="">Администратор Linux</option>
                                    <option value="">Prodact Manager</option>
                                    <option value="">Тестировщик</option>
                                    <option value="">Аналитик</option>
                                    <option value="">Аренда серверов, хостинг</option>
                                </select>
                            </div>
                            <div class="main-form__input-wrap">
                                <input class="main-form__input" type="text" placeholder="р. 25 000">
                                <span class="main-form__input-info">Зарплата специалиста </span>
                            </div>
                            <button class="main-form__row-remove" data-remove-personal="support">-</button>
    `)
    table.append(row)
    setTimeout(() => {
      const removeButton = table.querySelectorAll('button[data-remove-personal="support"]');
      removeButton.forEach(button => {
        button.addEventListener('click', removePersonal)
      })
      console.log(removeButton)

    }, 100)
  }


});