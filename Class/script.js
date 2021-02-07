import {Elements} from './Elements.js'
import {Data} from './Data.js'
import {Cart} from './Cart.js';
import {Product} from './Product.js';

const data = new Data();
const todaysDealList = [
    {quantity: 10, fullname: 'Haetae Bong Bong grape', id: 'bongbong', price: '$ 19.99', volume: '238ml', imgURL: 'https://gdimg.gmarket.co.kr/883932189/still/600?ver=0', imgHeight: '180px', description:'Kim likes it the most! don\'t know why this\'s so expensive in here though.'},
    {quantity: 10, fullname: 'Lotte Sack Sack Orenge', id: 'sacksack', price: '$ 24.59', volume: '238ml', imgURL: 'https://gdimg.gmarket.co.kr/1157944440/still/600?ver=1510146952', imgHeight: '150px', description:'Rim likes it the most! don\'t know why this\'s so expensive in here though.'},
    {quantity: 10, fullname: 'Sierra Mist Lemon lime soda', id: 'mist', price: '$ 4.59', volume: '7.5fl oz', imgURL: 'https://images-na.ssl-images-amazon.com/images/I/41KnZnbESYL.jpg', imgHeight: '140px', description:'Kim\'ll mad if it only left one can and found out Rim drunk others all...'},
    {quantity: 10, fullname: 'Fanta Orange Soda Fruit Flavored Soft Drink', id: 'fanta', price: '$ 2.10', volume: '7.5fl oz', imgURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe7TMYkry2PSul6hQ0G7x_pyEk5Xrebg0wFQ&usqp=CAU', imgHeight: '150px', description:'It was the most popular soda in your area!'}
]

for (const obj of todaysDealList) {
    new Product(data, Elements.getId('product'), obj)
    
}
new Cart(data)
