const Manager = require('../lib/managers');

test('create Manager object', () => {
    const manager = new Manager('Luis', 34, 'hairchevere@gmail.com', 'LuisChevere', 4);

    expect(manager.officeNumber).toEqual(expect.any(Number));
}) 