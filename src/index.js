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

function decode(expr) {
    let ch_arr = [];
    for (let i = 0; i < expr.length; i += 10){
        ch_arr.push(expr.slice(i, i + 10));
    }
    let BINARY_TABLE = {}, binary_key;
    Object.keys(MORSE_TABLE).forEach(el => {
        binary_key = el;
        while(binary_key != (binary_key = binary_key.replace("-", "11"))) {}
        while(binary_key != (binary_key = binary_key.replace(".", "10"))) {}
        if(binary_key.length != 10) 
            BINARY_TABLE["0000000000".slice(-(10 - binary_key.length)) + binary_key] = MORSE_TABLE[el];
        else BINARY_TABLE[binary_key] = MORSE_TABLE[el];
    }) 
    BINARY_TABLE["**********"] = " ";
    let rez_arr = [];
    ch_arr.forEach(code =>{
        rez_arr.push(BINARY_TABLE[code]);
    });
    return rez_arr.join("");
}

module.exports = {
    decode
}