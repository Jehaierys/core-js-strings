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

function removeLastOccurrences(str, value) {
  return str.indexOf(value) === -1
    ? str
    : str
        .substring(0, str.lastIndexOf(value))
        .concat(str.substring(str.lastIndexOf(value) + value.length));
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

function formatTime(minutes, seconds) {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0'
  )}`;
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

function extractEmails(str) {
  return str.split(';');
}

function encodeToRot13(str) {
  const nice = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const notNice = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  let result = '';
  str.split('').forEach((char) => {
    if (nice.indexOf(char) === -1) {
      result += char;
    } else {
      result += notNice.charAt(nice.indexOf(char));
    }
  });
  return result;
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
