//
class Elements {
    static getId(id) {
        return document.getElementById(id)
    }
    // static getTags(tag) {
    //     let nodes = [];
    //     for (const el of document.querySelectorAll(tag)) {
    //         nodes.push(el)
    //     }
    //     return nodes
    // }
    static div(className) {
        const el = document.createElement('div')
        if (className != null) el.className = className
        return el
    }
    static img(imgURL, imgHeight, className) {
        const el = document.createElement('img')
        el.src = imgURL
        el.className = className
        el.style['height'] = imgHeight
        return el
    }
    static tag(tag, content, className) {
        const el = document.createElement(tag)
        if (content != 'content') el.textContent = content
        if (className != 'className') el.className = className
        return el
    }
    static li(txt) {
        // console.log(`Creates <li>${txt}</li>`)
        const el = document.createElement('li')
        el.textContent = txt
        el.id = txt
        return el
    }
    static btn(id, content, className) {
        // console.log(`Creates <button>${id}</button>`)
        const el = document.createElement('button')
        el.textContent = content
        if (className != 'className') el.className = className
        el.id = id
        return el
    }
    static checkbox(label) {
        // console.log('Creates <div>, <input>, <label>')
        const divEl = document.createElement('checkbox')
        const inputEl = document.createElement('input')
        inputEl.type = 'checkbox'
        inputEl.className = 'input'
        inputEl.name = `input-${label}`
        const labelEl = document.createElement('label')
        labelEl.for = `input-${label}`
        labelEl.textContent = label;
        divEl.style.display = "block"
        divEl.appendChild(inputEl)
        divEl.appendChild(labelEl)
        return divEl
    }
    static append(parent, child) {
        return parent.appendChild(child)
    }
    static insertBefore(parent, target, child) {
        return parent.insertBefore(target, child)
    }
    static removeChildren(parent) {
        while(parent.firstChild) parent.removeChild(parent.firstChild);
    }
}

export {Elements};