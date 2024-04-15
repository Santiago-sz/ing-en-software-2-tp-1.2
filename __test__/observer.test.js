const Subject = require('../src/Subject');
const ItemSubject = require('../src/ItemSubject');
const IObserver = require('../src/IObserver');
const ListObserver = require('../src/ListObserver');

describe('ItemSubject', () => {
    let itemSubject;
    let listObserver;

    beforeEach(() => {
        itemSubject = new ItemSubject();
        listObserver = new ListObserver(); // Crear una instancia de la clase concreta que implementa la interfaz IObserver
    });

    test('notify() debería agregar un ítem a la lista y notificar al observador', () => {
        // Suscribe el observador
        itemSubject.subscribe(listObserver);

        // Mock de la función notify del observador
        listObserver.update = jest.fn(); // Utilizar la función update definida en la clase concreta que implementa la interfaz IObserver

        // Notifica un nuevo ítem
        const newItem = "Nuevo ítem";
        itemSubject.notify(newItem);

        // Verifica si el ítem fue agregado a la lista
        expect(itemSubject.items).toContain(newItem);

        // Verifica si el observador fue notificado
        expect(listObserver.update).toHaveBeenCalledWith(itemSubject);
    });
});

