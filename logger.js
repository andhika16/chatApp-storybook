const EventEmmiter = require('events');


let url = 'http://moh-andhika.github.io/javascript-lanjutan';

class Logger extends EventEmmiter {


    log(message) {
        console.log(message);

        // raising event
        setTimeout(() => { this.emit('messageLogged', { id: 1, url }) }, 2000)


    }

}


module.exports = Logger;


class Called extends EventEmmiter {

    url = 'http://wikipedia/conflict-shuttle/space.com'

    call(m) {

        setTimeout(() => console.log(`Connected : ${m}`), 2000);


        this.emit('turnOn', { status: 'called', port: 8000 }, url);
    }


}



module.exports = Called;









