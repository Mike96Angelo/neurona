/**
 * @name neuron.js
 * @author Michaelangelo Jong
 */

// Includes
var Generator = require('generate-js');

// Generator
var Neuron = Generator.generate(
    /**
     * Neuron.
     */
    function Neuron() {

    }
);

// Prototype
Neuron.definePrototype({
    /**
     * Sets the value *this* neuron's output terminal to `value` or calculates it from the values on its input terminals.
     * @param  {Number} value Optional value to set on *this* neuron's output terminal.
     * @return {Number}       Value of *this* neuron's output terminal.
     */
    activate: function activate(value) {

    },

    /**
     * Project or connects *this* neuron to `neuron` as an input terminal.
     * @param  {Neuron} neuron A Neuron.
     * @return {Connection}    The connection channel between *this* neuron and `neuron`.
     */
    preject: function preject(neuron) {

    },
    /**
     * Propagates error through the network to adjust connection weights to decrease total net error.
     * @param  {Number} expectedValue The expected output value for network training.
     */
    propagate: function propagate(expectedValue) {

    },
});

// Export
module.exports = Neuron;
