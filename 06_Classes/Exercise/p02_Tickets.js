function tickets(tickets, comparableParam) {

    class Ticket {

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let ticketsArr = [];

    for (let ticketInput of tickets) {
        let [destination, price, status] = ticketInput.split('|');
        let ticket = new Ticket(destination, price, status);
        ticketsArr.push(ticket);
    }

        switch (comparableParam) {
            case 'destination':
                return ticketsArr.sort((a, b) => a.destination.localeCompare(b.destination));
            case 'price':
                return ticketsArr.sort((a, b) => a.price - b.price);
            case 'status':
                return ticketsArr.sort((a, b) => a.status.localeCompare(b.status));
        }
}

// console.log(tickets(
//     ['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'destination'
// ));


