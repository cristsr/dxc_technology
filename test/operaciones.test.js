const operaciones = require('../services/operaciones-service');

test(`
operaciones [1, 2, 3] retorna {
    suma: 6,
    resta: -4,
    multiplicacion: 6,
    division: 0.16666666666666666
}
`, () => {
    expect(operaciones([1, 2, 3])).toStrictEqual({
        suma: 6,
        resta: -4,
        multiplicacion: 6,
        division: 0.16666666666666666
    });
});
