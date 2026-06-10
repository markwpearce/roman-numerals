/**
 * @file roman-numerals.js
 * @description Provides functionality to convert integers into Roman numerals.
 * Supports standard Roman numerals and large numbers using Unicode overlines.
 */

/**
 * @typedef {Object} RomanMap
 * @property {number} val - The integer value.
 * @property {string} sym - The corresponding Roman numeral symbol.
 */

/** @type {RomanMap[]} */
const ROMAN_MAP = [
    { val: 1000, sym: 'M' },
    { val: 900, sym: 'CM' },
    { val: 500, sym: 'D' },
    { val: 400, sym: 'CD' },
    { val: 100, sym: 'C' },
    { val: 90, sym: 'XC' },
    { val: 50, sym: 'L' },
    { val: 40, sym: 'XL' },
    { val: 10, sym: 'X' },
    { val: 9, sym: 'IX' },
    { val: 5, sym: 'V' },
    { val: 4, sym: 'IV' },
    { val: 1, sym: 'I' }
];

/**
 * Converts a number to its Roman numeral representation.
 * 
 * @param {number} num - The integer to convert.
 * @returns {string} The Roman numeral string.
 */
export function toRoman(num) {
    if (num <= 0) return '';

    let number = num;
    let magnitude = 0;
    let chunks = [];

    while (number > 0) {
        let currentPlace = number % 1000;
        let chunk = "";

        // Construct Roman numeral for the current 1000-base block
        let remaining = currentPlace;
        for (const { val, sym } of ROMAN_MAP) {
            while (remaining >= val) {
                chunk += sym;
                remaining -= val;
            }
        }

        // Apply overlines for values >= 1000
        if (magnitude > 0) {
            chunk = chunk.split('').map(c => c + '\u0305'.repeat(magnitude)).join('');
        }

        chunks.unshift(chunk);
        number = Math.floor(number / 1000);
        magnitude++;
    }

    return chunks.join('');
}

// Ensure CommonJS compatibility for test runner
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { toRoman };
}
