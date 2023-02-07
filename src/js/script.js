const itemList = document.getElementById('itemList');
const searchBar = document.getElementById('search');
const weaponList = document.getElementById('weaponList')
const armorList = document.getElementById('armorList')

let items = [];
let weapons = [];
let armors = [];

searchBar.addEventListener('input', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredItems = items.data.filter((item) => {
        return (
            item.name.toLowerCase().includes(searchString) ||
            item.type.toLowerCase().includes(searchString)
        );
    });

    const filteredWeapons = weapons.data.filter((weapon) => {
        return (
            weapon.name.toLowerCase().includes(searchString) ||
            weapon.category.toLowerCase().includes(searchString)
        )
    })

    const filteredBosses = armors.data.filter((armor) => {
        return (
            armor.name.toLowerCase().includes(searchString) ||
            armor.category.toLowerCase().includes(searchString)   
        )
    })

    displayItems(filteredItems);
    displayWeapons(filteredWeapons);
    displayArmors(filteredBosses);
});

 const loadItems = async () => {
     try {
         const res = await fetch('https://eldenring.fanapis.com/api/items?limit=100');
         items = await res.json();
        displayItems(items);
        console.log(items)
         console.log(items.data)
     } catch (err) {
         console.error(err);
     }
 };

 const loadWeapons = async () => {
    try {
        const res = await fetch('https://eldenring.fanapis.com/api/weapons?limit=100');
        weapons = await res.json();
       displayWeapons(weapons);
       console.log(weapons)
        console.log(weapons.data)
    } catch (err) {
        console.error(err);
    }
};

const loadArmors = async () => {
    try {
        const res = await fetch('https://eldenring.fanapis.com/api/armors?limit=100');
        armors = await res.json();
       displayWeapons(armors);
       console.log(armors)
        console.log(armors.data)
    } catch (err) {
        console.error(err);
    }
};
console.log(armors)



const displayItems = (items) => {
    const htmlString = Array.from(items).map((item) => {
            return `
            <li class="item">
                <h2>${item.name}</h2>
                <p>Type: ${item.type}</p>
                <img src="${item.image}"></img>
            </li>
        `;
        })
        .join('');
    itemList.innerHTML = htmlString;
    console.log(htmlString)
};

const displayWeapons = (weapons) => {
    const htmlString = Array.from(weapons).map((weapon) => {
            return `
            <li class="weapon">
                <h2>${weapon.name}</h2>
                <p>Category: ${weapon.category}</p>
                <img src="${weapon.image}"></img>
            </li>
        `;
        })
        .join('');
    weaponList.innerHTML = htmlString;
    console.log(weaponList)
};

const displayArmors = (armors) => {
    const htmlString = Array.from(armors).map((armor) => {
            return `
            <li class="armor">
                <h2>${armor.name}</h2>
                <p>Category: ${armor.category}</p>
                <img src="${armor.image}"></img>
            </li>
        `;
        })
        .join('');
    armorList.innerHTML = htmlString;
    console.log(armorList)
};



loadItems();
loadWeapons();
loadArmors();


const inputText = document.querySelector('#AddElement');
const myButton = document.querySelector('.add-btn');
const list = document.querySelector('.container .addElement-table-parent');
myButton.addEventListener('click', (e)=>{
  if(inputText.value != ""){
    e.preventDefault();
    let myLi = document.createElement('li');
    myLi.innerTEXT = inputText.value;
    myLi.appendChild(myLi);

    let mySpan = document.createElement('span');
    mySpan.innerTEXT = 'x'; 
    myLi.appendChild(mySpan);
    }
    let close = document.querySelectorAll('span');
    for(let i in close){
        close[i].addEventListener('click', ()=>{
            close[i].parentElement.style.opacity = 0;
            setTimeout(()=>{
                close[i].parentElement.style.display = 'none';
                close[i].parentElement.remove();
            }, 500);
        })
    }
    inputText.value = "";
});