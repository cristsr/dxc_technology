const operaciones = (() => {

    const suma = arr => arr.reduce((prev, curr) => prev + curr);
    const resta = arr => arr.reduce((prev, curr) => prev - curr);
    const multiplicacion = arr => arr.reduce((prev, curr) => prev * curr);
    const division = arr => arr.reduce((prev, curr) => prev / curr);

    return arr => ({
        suma: suma(arr),
        resta: resta(arr),
        multiplicacion: multiplicacion(arr),
        division: division(arr)
    });

})();

module.exports = operaciones;
