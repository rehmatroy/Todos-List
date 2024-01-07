
const addbtn = document.querySelector('#addbtn')
const removebtn = document.querySelector('#removebtn')
const foodlist = document.querySelector('#foodlist')


addbtn.addEventListener('click', () => {
    const listitem = document.querySelector('li')
    const listitemtext = document.createTextNode('Contact');

    listitem.append(listitemtext);
    foodlist.appendChild(listitem);
})


removebtn.addEventListener('click', () => {
    const removeitem = document.querySelector('li:nth-child(2)');

    foodlist.removeChild(removeitem)
})
