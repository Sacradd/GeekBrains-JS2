// Добавление товара метод ООП


// Ссылка на внешний файл json

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
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


 // fetch("tel.json")//fetch - это функция, которая выполняет ajax запрос и возвращает объект promice
 //            .then(text => text.json())//json - метод, который парсит json строку и возращает объект промиса
 //            .then(data => {
 //                let block = document.getElementById("data");
 //                block.insertAdjacentHTML('beforeend',`<p>${data.name} - ${data.tel}</p>`);
 //            })

class Basket {
   constructor(container='.basket-products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._getBasket()
            // .then(text => text.json())
            .then(data => {
                let block = document.getElementById("basket-products");
                block.insertAdjacentHTML('beforeend',`<p>В корзине ${data.countGoods} единицы товара на сумму ${data.amount}$. ${data.contents}</p>`);
                this.render();
            })
                
            }
        


    _getBasket(){
        return fetch(`${API}//getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new BasketItem(product);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend",item.render());
            //block.innerHTML += item.render();
        }
    }
}

class BasketItem {
    constructor(product,img='https://placehold.it/200x150'){
        this.title = product.product_name;
        this.id = product.id_product;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="basket-product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class = "desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                </div>
            </div>`
    }
}

window.onload = () => {
    document.getElementById("btn-cart").addEventListener('click', () => {
        let list = new Basket();
    })
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
 