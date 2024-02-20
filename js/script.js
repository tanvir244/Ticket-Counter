


function seatBooking(elementId){
    // counting seat number 
    const currentTicket = ticketCount('ticket-count');
    const updateTicket = currentTicket + 1;
    // const setCountingSeat = seatCount.innerText = updateTicket;
    if(updateTicket <= 4){
        // counting seat number 
        const seatCount = document.getElementById('ticket-count');
        seatCount.innerText = updateTicket;

        // setting background color of selected seat
        setBackgroundColor(elementId);    
        // seat info daynamic table
        seatInfo(elementId.id);
        // seat left
        seatLeft();
        // total price
        totalPrice(updateTicket);
    }
}

// apply cupon 
const applyCupon = document.getElementById('apply');
applyCupon.addEventListener('click', grandTotalCalculation);

function seatInfo(seatNumber){
    const newRow = document.createElement('tr');

    // creating new seat 
    const newSeat =  document.createElement('th');
    newSeat.innerHTML = seatNumber;
    newRow.appendChild(newSeat);

    // creating seat status 
    const seatStatus =  document.createElement('th');
    seatStatus.innerHTML = 'Economy';
    newRow.appendChild(seatStatus);

    // creating ticket price 
    const ticketPrice =  document.createElement('th');
    ticketPrice.innerHTML = 550;
    newRow.appendChild(ticketPrice);

    const ticketList = document.getElementById('ticket-list');
    ticketList.appendChild(newRow);
}