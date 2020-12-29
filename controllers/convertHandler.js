/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function (input) {
    if (!input.match(/\d/)) {
      return 1;
    } else {
      // Split input query
      const inputSplit = input.split('');

      // Get input number
      const regAlpha = /^[a-zA-Z]+$/;
      const inputNum = inputSplit.filter(num => !num.match(regAlpha)).join('');

      // Correct decimal and fraction

      if (isNaN(inputNum)) {
        return null;
      } else {
        return eval(inputNum);
      }
    }
  };

  this.getUnit = function (input) {
    // Split input query
    const inputSplit = input.split('');

    // Get input unit
    const regAlpha = /^[a-zA-Z]+$/;
    const inputUnit = inputSplit.filter(unit => unit.match(regAlpha)).join('');

    const metricArray = ['gal', 'L', 'lbs', 'kg', 'mi', 'km'];

    if (inputUnit === 'l') {
      return inputUnit.toUpperCase();
    } else if (metricArray.indexOf(inputUnit) < 1) {
      return undefined;
    } else {
      return inputUnit.toLowerCase();
    }

    // return inputUnit === 'l'
    //   ? inputUnit.toUpperCase()
    //   : inputUnit === 'L'
    //   ? inputUnit
    //   : inputUnit.toLowerCase();
  };

  this.getReturnUnit = function (initUnit) {
    if (initUnit === 'gal') {
      return 'L';
    } else if (initUnit === 'L') {
      return 'gal';
    } else if (initUnit === 'lbs') {
      return 'kg';
    } else if (initUnit === 'kg') {
      return 'lbs';
    } else if (initUnit === 'mi') {
      return 'km';
    } else if (initUnit === 'km') {
      return 'mi';
    }
  };

  this.spellOutUnit = function (unit) {
    if (unit === 'gal') {
      return 'gallon';
    } else if (unit === 'L') {
      return 'liter';
    } else if (unit === 'lbs') {
      return 'pound';
    } else if (unit === 'kg') {
      return 'kilogram';
    } else if (unit === 'mi') {
      return 'mile';
    } else if (unit === 'km') {
      return 'kilometer';
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let results;

    if (initUnit === 'gal') {
      results = initNum * galToL;
      return parseFloat(results.toFixed(5));
    } else if (initUnit === 'L') {
      results = initNum / galToL;
      return parseFloat(results.toFixed(5));
    } else if (initUnit === 'lbs') {
      results = initNum * lbsToKg;
      return parseFloat(results.toFixed(5));
    } else if (initUnit === 'kg') {
      results = initNum / lbsToKg;
      return parseFloat(results.toFixed(5));
    } else if (initUnit === 'mi') {
      results = initNum * miToKm;
      return parseFloat(results.toFixed(5));
    } else if (initUnit === 'km') {
      results = initNum / miToKm;
      return parseFloat(results.toFixed(5));
    }
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    const string = `${initNum} ${this.spellOutUnit(
      initUnit
    )}s converts to ${returnNum} ${this.spellOutUnit(returnUnit)}s`;

    return string;
  };
}

module.exports = ConvertHandler;
