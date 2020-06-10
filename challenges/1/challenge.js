/*
 * Somar os argumentos
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que some
 * todos os argumentos providos.
 *
 */

const sumArguments = (...args) => args.reduce((prevValue, currentValue) => prevValue + currentValue)

module.exports = sumArguments
