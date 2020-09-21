var booked = 0;
var ticketPrice = 70;
function saveSeats(){
    var noOfSeats = document.getElementById("tickets").value;
    localStorage.setItem("ticketsNo", noOfSeats);
}
var noOfSeats = localStorage.getItem("ticketsNo");
function bookSeat(seat) {
    var id = seat.id;
    if(document.getElementById(id).style.backgroundColor == 'rgb(199, 38, 38)'){
       
        document.getElementById(id).style.backgroundColor =  'rgb(214, 226, 228)';
       booked--;
    }
    else{
            if(booked==noOfSeats){
        alert("You have already selected "+ noOfSeats +" seats.");
        return;
    }
        document.getElementById(id).style.backgroundColor = 'rgb(199, 38, 38)';
        booked++;
    }
};
