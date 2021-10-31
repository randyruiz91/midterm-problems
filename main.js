function isEvenlyDivisible(x, y) {
  return x % y === 0;
}

function halfSquare(x) {
  return x * x / 2;
}

function isLong(string) {
  return string.length >= 15;
}

function exclaim(string) {
  let count = 0;

  for (i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letter === '!') {

    }
  }
}

function countWords(string) {
  let numberOfSpaces = 0

  for (i = 0; i < string.length; i++) {
    const letter = string[i];
    if (letter === ' ') {
      numberOfSpaces++;
    }
  }
  return numberOfSpaces;
}

function containsDigit(string) {
  const digits = '1234567890';
  let hasDigits = false

  for (i = 0; i < string.length; i++) {
    const letter = string[i];
    const isDigit = digits.includes(letter);
    if (isDigit) {
      return true
    }
  }
  return hasDigits;
}

function containsLowerCase(string) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  let hasLowerCase = false

  for (i = 0; i < string.length; i++) {
    const letter = string[i];
    const isLowerCase = lowerCaseLetters.includes(letter);
    if (isLowerCase) {
      return true;
    }
  }
  return hasLowerCase;
}

function containsUpperCase(string) {
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let hasUpperCase = false;

  for (i = 0; i < string.length; i++) {
    const letter = string[i];
    const isUpperCase = upperCaseLetters.includes(letter);
    if (isUpperCase) {
      return true;
    }
  }
  return hasUpperCase;
}

function containsNonAlphanumeric(string) {
  let hasAlphaNumberic = false;

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    const isNonAlphaNumeric = (
      !containsLowerCase(letter) &&
      !containsUpperCase(letter) &&
      !containsDigit(letter)
    );
    if (isNonAlphaNumeric) {
      hasAlphaNumberic = true;
    }
  }
  return hasAlphaNumberic;
}

function containsSpace(string) {
  let hasSpace = false;

  for (const letter of string) {
    if (letter === ' ') {
      hasSpace = true;
    }
  }
  return hasSpace;
}

function digits(number) {
  const output = [];

  const str = number.toString();
  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    if (!(character === '-' || character === '.')) {
      output.push(Number(character));
    }
  }
  return output;
}

function truncate(string) {
  if (string.length >= 15) {
    return string.slice(0, 8) + '...';
  } else {
    return string;
  }
}

function isValidPassword(string) {
  const isValid = (
    containsLowerCase(string) &&
    containsUpperCase(string) &&
    containsDigit(string) &&
    containsNonAlphanumeric(string) &&
    !containsSpace(string)
  );
  return isValid;
}

function onlyPunchy(titles) {
  const output = [];

  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];
    const exclaimed = exclaim(title);
    if (!isLong(exclaimed)) {
      output.push(exclaimed);
    }
  }
  return output;
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}