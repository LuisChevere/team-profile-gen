const Engineer = require('../lib/engineers')

test('creates engineer object', () => {
    const engineer = new Engineer('Luis', 34, 'hairchevere@gmail.com');

    expect(engineer.github).toEqual(expect.any(String));
})