
/*
 takes in a measurement in decimal inches and fractionalDenominator. The fractionalDenominator is 32 by default
  if it is not specified. The function returns an object that has the following values:

decimalInches - the same as the input 
fractionalInches - an object with these values: 
    wholeInches - The number of whole inches
    fractionalInchesNumerator - The numerator of the remaining fractional inch 
    fractionalInchesDenominator - 	The fractionalDenominator that was used (same as entered)
decimalFeetInches - An object with these values: 
    wholeFeet - The number of whole feet
	decimalInches - the number of inches left after subtracting the whole feet
	
fractionalFeetInches - An object with these values: 
    wholeFeet - The number of whole feet
	wholeInches - The number of whole inches after subtracting whole feet
    fractionalInchesNumerator - The numerator of the remaining fractional inch 
    fractionalInchesDenominator - 	The fractionalDenominator that was used (same as entered)

*/
function inchesToConvertedInches(decimalInches, fractionalDenominator = 32) {
  // Convert decimal inches to millimeters
  const millimeters = decimalInches * 25.4;

  // Calculate whole inches and fractional part
  const wholeInches = Math.floor(decimalInches);
  const fractionalInches = decimalInches - wholeInches;
  const fractionalInchesNumerator = Math.round(fractionalInches * fractionalDenominator);
  const fractionalInchesDenominator = fractionalDenominator;

  // Reduce the fraction to avoid large numerators (if applicable)
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  function simplifyFraction(numerator, denominator) {
    const divisor = gcd(numerator, denominator);
    return {
      numerator: numerator / divisor,
      denominator: denominator / divisor
    };
  }

  const simplifiedFraction = simplifyFraction(fractionalInchesNumerator, fractionalInchesDenominator);

  // Convert to feet and inches
  const wholeFeet = Math.floor(decimalInches / 12);
  const remainingInches = decimalInches - wholeFeet * 12;
  const wholeInchesAfterFeet = Math.floor(remainingInches);

  // Convert the remaining fractional inches after subtracting feet
  const fractionalInchesAfterFeet = remainingInches - wholeInchesAfterFeet;
  const fractionalInchesNumeratorAfterFeet = Math.round(fractionalInchesAfterFeet * fractionalDenominator);
  const simplifiedFractionAfterFeet = simplifyFraction(fractionalInchesNumeratorAfterFeet, fractionalInchesDenominator);

  return {
    decimalInches: decimalInches,
    fractionalInches: {
      wholeInches: wholeInches,
      fractionalInchesNumerator: simplifiedFraction.numerator,
      fractionalInchesDenominator: simplifiedFraction.denominator
    },
    decimalFeetInches: {
      wholeFeet: wholeFeet,
      decimalInches: remainingInches
    },
    fractionalFeetInches: {
      wholeFeet: wholeFeet,
      wholeInches: wholeInchesAfterFeet,
      fractionalInchesNumerator: simplifiedFractionAfterFeet.numerator,
      fractionalInchesDenominator: simplifiedFractionAfterFeet.denominator
    },
    millimeters: millimeters
  };
}

// Test cases
function testInchesToConvertedInches() {
  const testValues = [1.0, 0.5, 10.75, 1.76, 122.5, 23.625, 24.125, 89.375, 73.25];
  testValues.forEach(value => {
    console.log(`Test value: ${value}`);
    console.log(inchesToConvertedInches(value));
  });
}

testInchesToConvertedInches();

