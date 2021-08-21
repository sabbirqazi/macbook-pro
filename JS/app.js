/* declaration of bestprice */
const bestPrice = document.getElementById('best-price');
/* memory cost calculator start */
const memoryCost = document.getElementById('memory-cost');
function getMemoryCost(id, price){
    document.getElementById(id).addEventListener('click',function(){
        memoryCost.innerText = price;
        totalPrice();
        grandTotal.innerText = totalPrice();
    })
}
getMemoryCost('memory-8GB','0');
getMemoryCost('memory-16GB','180');
/* memory cost calculator end */

/* storage cost calculation function start */
const storageCost = document.getElementById('storage-cost');
function getStorageCost(id, price){
    document.getElementById(id).addEventListener('click',function(){
        storageCost.innerText = price;
        totalPrice();
        grandTotal.innerText = totalPrice();
    })
}
getStorageCost('storage-256GB', '0');
getStorageCost('storage-512GB', '100');
getStorageCost('storage-1TB', '180');
/* storage cost calculation function end */

/* delivery charge calculation function start */
const deliveryCharge = document.getElementById('delivery-cost');
function getDeliveryCost(id, price){
    document.getElementById(id).addEventListener('click',function(){
        deliveryCharge.innerText = price;
        totalPrice();
        grandTotal.innerText = totalPrice();
    })
}
getDeliveryCost('free-delivery', '0');
getDeliveryCost('charged-delivery', '20');
/* delivery charge calculation function end */

/* total price calculation function start*/
const totalCost = document.getElementById('total-cost');
function totalPrice(){
    const totalPriceAmount = parseInt(bestPrice.innerText) + parseInt(memoryCost.innerText) + parseInt(storageCost.innerText) + parseInt(deliveryCharge.innerText);
    totalCost.innerText = totalPriceAmount;
    return totalPriceAmount;
}
/* total price calculation function end*/

/* total cost after using promo code start */
const grandTotal = document.getElementById('grand-total');
const promoInput = document.getElementById('promo-code-input');
function getPromoCode(){ 
    const promoValue = promoInput.value;
    if(promoValue == 'stevekaku'){
        const promoCostAmount = (parseInt(grandTotal.innerText) * 20) / 100;
        grandTotal.innerText = parseInt(grandTotal.innerText) - promoCostAmount;
        promoInput.value = '';
    }else{
        alert('You Entered a Wrong Code,Please Enter The Correct Promo Code!!!')
    } 
    event.preventDefault();
}
/* total cost after using promo code end */