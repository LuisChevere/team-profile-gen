const Employee = require('../lib/employees')

test('creates employee object', () => {
    const employee = new Employee('Luis', 34, 'hairchevere@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});