const itemName = document.querySelector('#item-name');
const itemPrice = document.querySelector('#item-price');
const itemCategory = document.querySelector('#item-category');
const itemDate = document.querySelector('#item-date');
const addNewEntry = document.querySelector("#addEntry");
const table = document.querySelector('#final-entries');
let invoiceDate = document.querySelector("#invoiceDate");
let snNumber = 0;

// let newEntry = '';

let createNewData = ()=>{
    addNewEntry.addEventListener('click', ()=>{
      let newEntry = document.createElement('tr');
        newEntry.innerHTML = `
            <td class="js-entries">${snNumber++}</td>
            <td class="js-entries">${itemName.value}</td>
            <td class="js-entries">₦ ${itemPrice.value}</td>
            <td class="js-entries">${itemCategory.value}</td>
        
        `

        invoiceDate.innerText = itemDate.value;

        // console.log(newEntry)

        table.append(newEntry)
    })
}

createNewData()