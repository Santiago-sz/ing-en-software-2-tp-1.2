const Subject = require('./Subject');

class ItemSubject extends Subject {
    constructor() {
        super();
        this.items = [];
    }
    notify(item) {
        this.items.push(item);
        this.notifyObservers(this); // Asegúrate de pasar el objeto correcto a los observadores
    }
}
module.exports = ItemSubject;