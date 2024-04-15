const IObserver = require('./IObserver');

class ListObserver extends IObserver {
    update(subject) {
        console.log("Observador de lista");
        subject.items.forEach(e => console.log(e));
    }
}

module.exports = ListObserver;
