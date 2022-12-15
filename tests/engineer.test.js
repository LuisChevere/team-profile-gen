const Engineer = require('../lib/engineers')

test('creates engineer object', () => {
    const engineer = new Engineer('Luis', 34, 'hairchevere@gmail.com');

    expect(engineer.github).toEqual(expect.any(String));
})

test('gets engineer github', () => {
    const engineer = new Engineer('Luis', 34, 'hairchevere@gmail.com');

    expect(engineer.getGithub().toEqual(expect.stringContainer(engineer.github.toString())));

});
