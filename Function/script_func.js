function getValue(event) {
    return appendTextEl(event.target.id)
}
function change2BtnStatus() {
    if (document.getElementById('select')) {
        document.getElementById('select').textContent = 'Remove'
        document.getElementById('select').id = 'remove'
        document.getElementById('remove').onclick = check4CheckedStatus;
    } else {
        let shopping_list = [];
        for (const item of document.querySelectorAll('.checkbox')) shopping_list.push(item.lastChild.textContent)
        while(document.querySelector('.checkbox')) { ulEl.removeChild(ulEl.firstChild) };
        document.getElementById('remove').parentElement.removeChild(document.getElementById('remove'));
        for (let text of shopping_list) appendTextEl(text)
        ulEl.style['paddingLeft'] = '22px'
    }
}
function check4CheckedStatus() {
    for (const item of document.querySelectorAll('.input')) {
        if (item.checked) item.parentElement.parentElement.removeChild(item.parentElement);
    }
    change2BtnStatus()
}
function change2Checkbox() {
    let shopping_list = [];
    for (const child of ulEl.childNodes) shopping_list.push(child.textContent);
    while(document.querySelector('.items')) { ulEl.removeChild(ulEl.firstChild) };
    for (let item of shopping_list) {
        const div = document.createElement('div')
        const inputEl = document.createElement('input')
        inputEl.type = 'checkbox'
        inputEl.className = 'input'
        inputEl.name = `input-${item}`
        const labelEl = document.createElement('label')
        labelEl.for = `input-${item}`
        labelEl.textContent = item;  
        div.className = 'checkbox'      
        div.appendChild(inputEl)
        div.appendChild(labelEl)
        ulEl.style['paddingLeft'] = '2px'
        ulEl.appendChild(div)
    }
    change2BtnStatus()
}
function appendTextEl(text) {
    const liEl = document.createElement('li');
    liEl.textContent = text
    liEl.className = 'items' 
    ulEl.appendChild(liEl)
    checkUpdate();
    return ulEl;
}
function checkUpdate() {
    if (ulEl.firstChild && document.getElementsByClassName('items').length < 2) {
        const btn = document.createElement('button')
        btn.textContent = 'Select'
        btn.id = 'select'
        btn.onclick = change2Checkbox;
        container.insertBefore(btn, ulEl)
    }
}
