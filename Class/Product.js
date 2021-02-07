import {Elements} from './Elements.js'

class Product {
    constructor(data, parent, obj) {
        this._data = data
        this._parent = parent
        this._obj = obj
         // Add <div>, <img>, <button>, <div> <h4>title</h4> <h5>size</h5> </div>, <p>description</p>, and <h3>price</h3>
         const div1 = Elements.append(this._parent, Elements.div('card'))
         const div2 = Elements.append(div1, Elements.div('rowSpaceBtw'))
         div2.style['height'] = '170px'
         Elements.append(div2, Elements.img(this._obj.imgURL, this._obj.imgHeight, 'selfFlexEnd'))
         const addBtn = Elements.append(div2, Elements.btn(this._obj.id, '+', 'add button selfFlexEnd'))
         addBtn.onclick = this._List
         const div3 = Elements.append(div1, Elements.div('rowSpaceBtw'))
         Elements.append(div3, Elements.tag('h4', this._obj.fullname, 'className'))
         Elements.append(div3, Elements.tag('h5', this._obj.volume, 'grey'))
         Elements.append(div1, Elements.tag('p', this._obj.description, 'description'))
         Elements.append(div1, Elements.tag('h3', this._obj.price, 'price'))
    }
    _List = e => {
        this._data.cart.push(e.target.id)
        Elements.getId('select').style.display = "inline"
        Elements.append(Elements.getId('MyList'), Elements.li(e.target.id[0].toUpperCase() + e.target.id.substring(1)))
        console.log(this._data.cart)
    }
}

export {Product};