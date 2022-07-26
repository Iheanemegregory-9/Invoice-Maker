const itemName = document.querySelector('#item-name');
const itemPrice = document.querySelector('#item-price');
const itemCategory = document.querySelector('#item-category');
const itemDate = document.querySelector('#item-date');
const addNewEntry = document.querySelector("#addEntry");
const table = document.querySelector('#final-entries');

// let newEntry = '';

let createNewData = ()=>{
    addNewEntry.addEventListener('click', ()=>{
      let newEntry = document.createElement('tr');
        newEntry.innerHTML = `
            <td class="js-entries">1</td>
            <td class="js-entries">Itel Phone</td>
            <td class="js-entries">N80,000</td>
            <td class="js-entries">Electronics</td>
        
        `

        // console.log(newEntry)

        table.append(newEntry)
    })
}

createNewData()