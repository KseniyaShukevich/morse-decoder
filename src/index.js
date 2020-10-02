const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const space = '**********';

function decode(expr) {
    let result = '';
    let char = '';
    let code = '';

    for (let i = 0; i < expr.length; i++) {
        let morseChar = '';
        char = expr.slice(i, i + 10);
        i += 9;
        if (char === space) {
            result += ' ';
        } else {
            for (let j = 0; j < char.length; j++) {
                code = char.slice(j, j + 2);
                j++;
                if (code === '10') {
                    morseChar += '.';
                } else if (code === '11') {
                    morseChar += '-';
                }
            }
        }

        if (morseChar !== '') {
            result += MORSE_TABLE[morseChar];
        }
    }

    return result;
}

module.exports = {
    decode
}