import {Elements} from './Elements.js'

class Cart {
    constructor(data) {
        this._data = data;
        const btn = Elements.insertBefore(Elements.getId('cart'), Elements.btn('select', 'Select', 'button'), Elements.getId('MyList'))
        btn.onclick = this._Check
        btn.style.display = "none"
    }
    _Check = e => {
        console.log(this._data, e)
        Elements.removeChildren(Elements.getId('MyList'))
        for (let item of this._data.cart) Elements.append(Elements.getId('MyList'), Elements.checkbox(item[0].toUpperCase()+ item.substring(1)))
        Elements.getId('MyList').style.paddingLeft = '2px'
        Elements.getId('select').textContent = 'Remove'
        Elements.getId('select').id = 'remove'
        Elements.getId('remove').onclick = this._Remove;
    }
    _Remove = e => {
        for (const item of document.querySelectorAll('.input')) {
            item.checked && this._data.cart.splice(this._data.cart.indexOf(item), 1)
        }
        Elements.removeChildren(Elements.getId('MyList'))
        for (let item of this._data.cart) Elements.append(Elements.getId('MyList'), Elements.li(item[0].toUpperCase() + item.substring(1)))
        Elements.getId('MyList').style.paddingLeft = '22px'
        Elements.getId('remove').textContent = 'Select'
        Elements.getId('remove').id = 'select'
        Elements.getId('select').onclick = this._Check;
    }
}
 
export {Cart};

