
function setBackgroundColor(elementId){
    elementId.classList.add('bg-green-500');
}
function ticketCount(elementId){
    const element = document.getElementById(elementId);
    const stringValue = element.innerText;
    const numberValue = parseInt(stringValue);
    return numberValue;
}
function seatLeft(){
    const seatLeft = document.getElementById('seat-left');
    const stringValue = seatLeft.innerText;
    const numberValue = parseInt(stringValue);
    seatLeft.innerText = numberValue - 1;
}
function totalPrice(value){
    const totalPrice = 550 * value;
    const elementTotalPrice = document.getElementById('total-price');
    elementTotalPrice.innerText = totalPrice;
}
function grandTotal(discount){
    const elementTotalPrice = document.getElementById('total-price');
    const innerTotalPrice = elementTotalPrice.innerText;
    const grandTotal = (innerTotalPrice * discount) / 100;
}
function grandTotalCalculation(){
    // ==== get grant total element 
    const elementGrandTotal = document.getElementById('grand-total');
    let grandTotal = elementGrandTotal.innerText;
    // ==== get total price element
    const elementTotal = document.getElementById('total-price');
    let totalString = elementTotal.innerText;
    let total = parseInt(totalString);

    // ==== get 15% & 20% off cupon
    const elementNew15 = document.getElementById('off15');
    const new15 = elementNew15.innerText;
    const elementNew20 = document.getElementById('off20');
    const new20 = elementNew20.innerText;
    // ==== input cupon
    const elementInputCupon = document.getElementById('input-cupon');
    const inputCuopn = elementInputCupon.value;

    if(inputCuopn === new15){
        const grandTotalCal = total - ((total * 15) / 100);
        grandTotal = Math.round(grandTotalCal);
        elementGrandTotal.innerText = grandTotal;
    }
    else if(inputCuopn === new20){
        const grandTotalCal = total - ((total * 20) / 100);
        grandTotal = Math.round(grandTotalCal);
        elementGrandTotal.innerText = grandTotal;
    }
    else if(inputCuopn === ''){
        alert('Please give your cupon!');
    }
    else{
        alert('Your cupon is not valid!');
    }
}