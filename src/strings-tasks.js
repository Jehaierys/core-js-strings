/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */

function getStringLength(value = '') {
  return typeof value === 'string' ? value.length : 0;
}

function isString(value = null) {
  if (value === null || value === undefined) {
    return false;
  }
  if (typeof value === 'object') {
    return Object.prototype.toString.call(value) === '[object String]';
  }
  return typeof value === 'string';
}

function concatenateStrings(value1, value2) {
  return value1.concat(value2);
}

function getFirstChar(value) {
  return value.length > 0 ? value.charAt(0) : '';
}

function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

function removeLeadingWhitespaces(value) {
  return value.trimStart();
}

function removeTrailingWhitespaces(value) {
  return value.trimEnd();
}

function repeatString(str, times) {
  return times > 0 ? str.repeat(times) : '';
}

function removeFirstOccurrences(str, value) {
  const position = str.indexOf(value);
  if (position === -1) {
    return str;
  }
  return (
    str.substring(0, position) +
    str.substring(position + value.length, str.length)
  );
}

function removeLastOccurrences(/* str, value */) {
  throw new Error('Not implemented');
}

function sumOfCodes(str) {
  if (typeof str !== 'string') {
    return 0;
  }
  let i = str.length - 1;
  let sum = 0;
  while (i >= 0) {
    sum += str.charCodeAt(i);
    i -= 1;
  }
  return sum;
}

function startsWith(str, substr) {
  return str.startsWith(substr);
}

function endsWith(str, substr) {
  return str.endsWith(substr);
}

/**
 * Returns a time string in the "mm:ss" format.
 *
 * @param {number} minutes - The number of minutes (non-negative integer).
 * @param {number} seconds - The number of seconds (non-negative integer).
 * @return {string} - The time string in the "mm:ss" format.
 *
 * @example
 *   formatTime(5, 30) => "05:30"
 *   formatTime(1, 15) => "01:15"
 *   formatTime(0, 45) => "00:45"
 *   formatTime(0, 0) => "00:00"
 */
function formatTime(minutes, seconds) {
  if (minutes > 9 && seconds > 9) {
    return String.padStart(minutes, seconds);
  }
  return 'gvtfd';
}

function reverseString(str) {
  let result = '';
  let i = str.length - 1;
  while (i >= 0) {
    result += str.charAt(i);
    i -= 1;
  }
  return result;
}

function orderAlphabetically(str) {
  if (str.length < 2) {
    return str;
  }
  const arr = str.split('');
  let shallWeDoItAgain = true;
  let i = 1;
  let mediator;
  while (shallWeDoItAgain) {
    shallWeDoItAgain = false;
    i = 1;
    while (i < arr.length) {
      if (arr[i].charCodeAt(0) < arr[i - 1].charCodeAt(0)) {
        mediator = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = mediator;
        shallWeDoItAgain = true;
      }
      i += 1;
    }
  }
  return arr.join('');
}

function containsSubstring(str, substring) {
  return str.includes(substring);
}

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  let i = 0;
  let quantity = 0;
  const string = str.toLowerCase();
  while (i < string.length) {
    if (vowels.includes(string.charAt(i))) {
      quantity += 1;
    }
    i += 1;
  }
  return quantity;
}

function isPalindrome(str) {
  const string = str.toLowerCase().replace(/[^a-z]/g, '');
  const mid = Math.trunc(string.length / 2);
  let i = 0;
  while (i <= mid) {
    if (string.charAt(i) !== string.charAt(string.length - i - 1)) {
      return false;
    }
    i += 1;
  }
  return true;
}

function findLongestWord(sentence) {
  const arr = sentence.split(' ');
  let max = 0;
  let result = '';
  arr.forEach((elem) => {
    if (elem.length > max) {
      max = elem.length;
      result = elem;
    }
  });
  return result;
}

function reverseWords(str) {
  const arr = str.split(' ');
  let i = 0;
  while (i < arr.length) {
    arr[i] = arr[i].split('').reverse().join('');
    i += 1;
  }
  return arr.join(' ');
}

function invertCase(str) {
  let i = 0;
  let result = '';
  while (i < str.length) {
    if (str.charCodeAt(i) > 95) {
      result += str.charAt(i).toUpperCase();
    } else {
      result += str.charAt(i).toLowerCase();
    }
    i += 1;
  }
  return result;
}

function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
  return value.substring(value.indexOf(', ') + 2, value.length - 1);
}

function unbracketTag(str) {
  return str.substring(str.indexOf('<') + 1, str.indexOf('>'));
}

/**
 * Extracts e-mails from single string with e-mails list delimited by semicolons
 *
 * @param {string} str - The input string.
 * @return {array} - The list of e-mails extracted from the string.
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  return str
    .split(';')
    .filter((elem) => elem.length !== 0)
    .forEach((elem) => {
      if (elem === ';') {
        elem.substring(1);
      }
    });
}

/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str - The input string.
 * @return {string} - The ROT13 encoded string.
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(/* str */) {
  throw new Error('Not implemented');
}

/**
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 */
function getCardId(value) {
  const arr = [
    'A♣',
    '2♣',
    '3♣',
    '4♣',
    '5♣',
    '6♣',
    '7♣',
    '8♣',
    '9♣',
    '10♣',
    'J♣',
    'Q♣',
    'K♣',
    'A♦',
    '2♦',
    '3♦',
    '4♦',
    '5♦',
    '6♦',
    '7♦',
    '8♦',
    '9♦',
    '10♦',
    'J♦',
    'Q♦',
    'K♦',
    'A♥',
    '2♥',
    '3♥',
    '4♥',
    '5♥',
    '6♥',
    '7♥',
    '8♥',
    '9♥',
    '10♥',
    'J♥',
    'Q♥',
    'K♥',
    'A♠',
    '2♠',
    '3♠',
    '4♠',
    '5♠',
    '6♠',
    '7♠',
    '8♠',
    '9♠',
    '10♠',
    'J♠',
    'Q♠',
    'K♠',
  ];
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      return i;
    }
    i += 1;
  }
  return -1;
}

module.exports = {
  getStringLength,
  isString,
  concatenateStrings,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  removeLeadingWhitespaces,
  removeTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  removeLastOccurrences,
  sumOfCodes,
  endsWith,
  startsWith,
  formatTime,
  reverseString,
  countVowels,
  orderAlphabetically,
  containsSubstring,
  isPalindrome,
  findLongestWord,
  reverseWords,
  invertCase,
  getStringFromTemplate,
  extractNameFromTemplate,
  extractEmails,
  unbracketTag,
  encodeToRot13,
  getCardId,
};
