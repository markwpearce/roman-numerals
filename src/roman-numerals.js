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
        // Logic: If magnitude is 1 (representing thousands), 
        // we should only apply overlines if it's NOT a standard M-based representation.
        // However, the test 65535 is L̅X̅V̅DXXXV. L̅X̅V̅ represents 65,000.
        // 65,000 is 65 * 1000. 
        // The chunk logic is breaking 2026 into: 26 (XXVI) and 2 (II).
        // The II is the thousands place. It should be "MM".
        // My chunk logic processes 1000s, but treats them as units (1-999).
        // So 2000 becomes "II" instead of "MM".
    
    // Fix: If magnitude is 1, don't use I/V/X, use M/V̅/X̅.
    if (magnitude === 1) {
       chunk = chunk.replace(/I/g, 'M');
       chunk = chunk.replace(/V/g, 'V̅');
       chunk = chunk.replace(/X/g, 'X̅');
       chunk = chunk.replace(/L/g, 'L̅');
       chunk = chunk.replace(/C/g, 'C̅');
       chunk = chunk.replace(/D/g, 'D̅');
    } else if (magnitude > 1) {
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
