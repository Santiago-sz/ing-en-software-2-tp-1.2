class IObserver {
    constructor() {
        if (this.notify === undefined) {
            throw new TypeError("Debe anular el método de notificación");
        }
    }

    notify(subject) {
        throw new TypeError("No llame al método abstracto de notificación desde Observer.");
    }
}

module.exports = IObserver;