const cart = document.querySelector('.cart__products');
const products = Array.from(document.querySelectorAll('.product'))

function addProduct(id, amount, img) {
    const cartProducts = Array.from(cart.querySelectorAll('.cart__product'));
    const product = cartProducts.find( elem => elem.getAttribute('data-id') == id);

    if (product) {
        const count = product.querySelector('.cart__product-count');
        count.textContent = +count.textContent + amount;
    } else {
        cart.innerHTML += `
            <div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${img}">
                <div class="cart__product-count">${amount}</div>
            </div>`;
    }
};

products.forEach( product => {
    const minus = product.querySelector('.product__quantity-control_dec');
    const plus = product.querySelector('.product__quantity-control_inc');
    const value = product.querySelector('.product__quantity-value');
    const img = product.querySelector('.product__image');
    const productAdd = product.querySelector('.product__add');
    
    minus.onclick = () => {if (+value.textContent > 1) --value.textContent};
    plus.onclick = () =>  ++value.textContent;
    productAdd.onclick = () => addProduct(product.getAttribute('data-id'), +value.textContent, img.src)
});