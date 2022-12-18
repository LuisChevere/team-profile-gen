const Intern = require('../lib/interns');

Test('creates Intern object', () => {
    const intern = new Intern('Luis', 34, 'hairchevere@gmail.com', 'LuisChevere', 'UTSA');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Luis', 34, 'hairchevere@gmail.com', 'LuisChevere', 'UTSA');

    expect(intern.getSchool()).toEqual(expect.stringContainer(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Luis', 34, 'hairchevere@gmail.com', 'LuisChevere', 'UTSA');

    expect(intern.getRole()).toEqual("Intern");
})
