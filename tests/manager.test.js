const Manager = require('../lib/managers');

test('create Manager object', () => {
    const manager = new Manager('Luis', 34, 'hairchevere@gmail.com', 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
}) 

test('gets role of employee', () => {
    const manager = new Manager('Luis', 34, 'hairchevere@gmail.com');

    expect(manager.getRole().toEqual("Manager"));
})