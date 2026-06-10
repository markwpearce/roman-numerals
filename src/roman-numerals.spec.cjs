/**
 * @file roman-numerals-test.js
 * @description Test suite for Roman numeral conversion logic.
 */

const { toRoman } = require('./roman-numerals.js');
const assert = require('assert');

/**
 * Suite: toRoman
 * Verifies that integers are correctly converted to their Roman numeral equivalents.
 */
describe('toRoman (converts numbers to Roman Numerals)', function () {
    it('should convert 0 to ', function () {
        assert.equal('', toRoman(0));
    });
    it('should convert 1 to I', function () {
        assert.equal('I', toRoman(1));
    });
    it('should convert 2 to II', function () {
        assert.equal('II', toRoman(2));
    });
    it('should convert 3 to III', function () {
        assert.equal('III', toRoman(3));
    });
    it('should convert 4 to IV', function () {
        assert.equal('IV', toRoman(4));
    });
    it('should convert 5 to V', function () {
        assert.equal('V', toRoman(5));
    });
    it('should convert 7 to VII', function () {
        assert.equal('VII', toRoman(7));
    });
    it('should convert 9 to IX', function () {
        assert.equal('IX', toRoman(9));
    });
    it('should convert 10 to X', function () {
        assert.equal('X', toRoman(10));
    });
    it('should convert 13 to XIII', function () {
        assert.equal('XIII', toRoman(13));
    });
    it('should convert 14 to XIV', function () {
        assert.equal('XIV', toRoman(14));
    });
    it('should convert 15 to XV', function () {
        assert.equal('XV', toRoman(15));
    });
    it('should convert 17 to XVII', function () {
        assert.equal('XVII', toRoman(17));
    });
    it('should convert 19 to XIX', function () {
        assert.equal('XIX', toRoman(19));
    });
    it('should convert 20 to XX', function () {
        assert.equal('XX', toRoman(20));
    });
    it('should convert 25 to XXV', function () {
        assert.equal('XXV', toRoman(25));
    });
    it('should convert 29 to XXIX', function () {
        assert.equal('XXIX', toRoman(29));
    });
    it('should convert 31 to XXXI', function () {
        assert.equal('XXXI', toRoman(31));
    });
    it('should convert 39 to XXXIX', function () {
        assert.equal('XXXIX', toRoman(39));
    });
    it('should convert 40 to XL', function () {
        assert.equal('XL', toRoman(40));
    });
    it('should convert 50 to L', function () {
        assert.equal('L', toRoman(50));
    });
    it('should convert 60 to LX', function () {
        assert.equal('LX', toRoman(60));
    });
    it('should convert 70 to LXX', function () {
        assert.equal('LXX', toRoman(70));
    });
    it('should convert 80 to LXXX', function () {
        assert.equal('LXXX', toRoman(80));
    });
    it('should convert 90 to XC', function () {
        assert.equal('XC', toRoman((90)));
    });
    it('should convert 99 to XCIX', function () {
        assert.equal('XCIX', toRoman((99)));
    });
    it('should convert 100 to C', function () {
        assert.equal('C', toRoman((100)));
    });
    it('should convert 101 to CI', function () {
        assert.equal('CI', toRoman((101)));
    });
    it('should convert 113 to CXIII', function () {
        assert.equal('CXIII', toRoman((113)));
    });
    it('should convert 200 to CC', function () {
        assert.equal('CC', toRoman((200)));
    });
    it('should convert 300 to CCC', function () {
        assert.equal('CCC', toRoman((300)));
    });
    it('should convert 400 to CD', function () {
        assert.equal('CD', toRoman((400)));
    });
    it('should convert 404 to CDIV', function () {
        assert.equal('CDIV', toRoman((404)));
    });
    it('should convert 500 to D', function () {
        assert.equal('D', toRoman((500)));
    });
    it('should convert 573 to DLXXIII', function () {
        assert.equal('DLXXIII', toRoman((573)));
    });
    it('should convert 600 to DC', function () {
        assert.equal('DC', toRoman((600)));
    });
    it('should convert 700 to DCC', function () {
        assert.equal('DCC', toRoman((700)));
    });
    it('should convert 777 to DCCLXXVII', function () {
        assert.equal('DCCLXXVII', toRoman((777)));
    });
    it('should convert 800 to DCCC', function () {
        assert.equal('DCCC', toRoman((800)));
    });
    it('should convert 900 to CM', function () {
        assert.equal('CM', toRoman((900)));
    });
    it('should convert (999) to CM', function () {
        assert.equal('CMXCIX', toRoman((999)));
    });
    it('should convert 65535 to L̅X̅V̅DXXXV', function () {
        assert.equal('L̅X̅V̅DXXXV', toRoman(65535));
    });
    it('should convert 4194304 to M̅V̅̅C̅X̅C̅MV̅CCCIV', function () {
        assert.equal('M̅V̅̅C̅X̅C̅MV̅CCCIV', toRoman(4194304));
    });
})
