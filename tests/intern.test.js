const Intern = require('../lib/interns');

Test('creates Intern object', () => {
    const intern = new Intern('Luis', 34, 'hairchevere@gmail.com', 'LuisChevere', 'UTSA');

    expect(intern.school).toEqual(expect.any(String));
})