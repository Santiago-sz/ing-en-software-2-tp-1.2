class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe(obs) {
        this.observers.push(obs);
    }

    unsubscribe(obs) {
        this.observers = this.observers.filter(e => e !== obs);
    }

    notifyObservers(obj) {
        this.observers.forEach(obs => {
            obs.update(obj);
        })
    }
}
module.exports = Subject;