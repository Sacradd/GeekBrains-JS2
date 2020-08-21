// Добавление товара метод ООП


// Ссылка на внешний файл json

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';



class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];//массив товаров c добавлением фото
        this._getProducts()
            .then(data => {
                this.goods = [...data];
                this.render()
            });
        //this._fetchProducts();
        // this.render();//вывод товаров на страницу
        // this.calcAllGoods();
    }
    // _fetchProducts(){
    //     this.goods = [
    //         {id: 1, title: 'Notebook', price: 2000},
    //         {id: 2, title: 'Mouse', price: 20},
    //         {id: 3, title: 'Keyboard', price: 200},
    //         {id: 4, title: 'Gamepad', price: 50},
    //     ];
    // }

    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend",item.render());
            //block.innerHTML += item.render();
        }
    }

	 calcAllGoods() {
        let totalPrice = 0;
        this.goods.forEach((good) => {
            if(good.price !== undefined) {
                totalPrice += good.price;
            }
        });
        let totalGoodsAnswer = "Все товары на сумму $" + totalPrice;
        document.querySelector('.goods-total').innerHTML = totalGoodsAnswer;
    }
}

class ProductItem{
    constructor(product,img='https://placehold.it/200x150'){
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class = "desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductList();


class Basket {
    constructor() {

    }

    // метод для очистки корзины
    clearAll() {

    }

    //метод подсчета суммы купленных товаров
    total(){

    }
}

class BasketItem {
    constructor() {

    }

    //удаляет один элемент из корзины
    deleteItem(){

    }
} 

// const products = [
//     {id: 1, title: 'Notebook', price: 2000},
//     {id: 2, title: 'Mouse', price: 20},
//     {id: 3, title: 'Keyboard', price: 200},
//     {id: 4, title: 'Gamepad', price: 50},
// ];
// //Функция для формирования верстки каждого товара
// const renderProduct = (product, img='https://placehold.it/200x150') => {
//     return `<div class="product-item">
//                 <img src="${img}">
//                 <h3>${product.title}</h3>
//                 <p>${product.price}</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// };
// const renderPage = list => {
//     document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
// };

// renderPage(products);
 