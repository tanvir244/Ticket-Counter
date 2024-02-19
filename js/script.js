

function seatBooking(elementId){
    setBackgroundColor(elementId);    
    seatInfo(elementId.id);
    console.log(0 + 1);
}
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