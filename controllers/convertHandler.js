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
      const slash = inputSplit.filter(d => d === '/');

      // Check if fraction first, then nan, then eval
      if (slash.length === 1) {
        return eval(inputNum);
      } else if (!isNaN(inputNum)) {
        return eval(inputNum);
      } else {
        return 'invalid number';
      }
    }
  };

  this.getUnit = function (input) {
    // Split input query
    const inputSplit = input.split('');

    // Get input unit
    const regAlpha = /^[a-zA-Z]+$/;
    const inputUnit = inputSplit.filter(unit => unit.match(regAlpha)).join('');

    const metricArray = [
      'gal',
      'l',
      'mi',
      'km',
      'lbs',
      'kg',
      'GAL',
      'L',
      'MI',
      'KM',
      'LBS',
      'KG',
    ];

    if (inputUnit === 'l' || inputUnit === 'L') {
      return inputUnit.toUpperCase();
    } else if (metricArray.indexOf(inputUnit) > -1) {
      return inputUnit.toLowerCase();
    } else {
      return 'invalid unit';
    }
  };

  this.getReturnUnit = function (initUnit) {
    if (initUnit === 'gal') {
      return 'L';
    } else if (initUnit === 'L' || initUnit === 'l') {
      return 'gal';
    } else if (initUnit === 'lbs') {
      return 'kg';
    } else if (initUnit === 'kg') {
      return 'lbs';
    } else if (initUnit === 'mi') {
      return 'km';
    } else if (initUnit === 'km') {
      return 'mi';
    } else {
      return 'error';
    }
  };

  this.spellOutUnit = function (initUnit) {
    if (initUnit === 'gal') {
      return 'gallon';
    } else if (initUnit === 'L' || initUnit === 'l') {
      return 'liter';
    } else if (initUnit === 'lbs') {
      return 'pound';
    } else if (initUnit === 'kg') {
      return 'kilogram';
    } else if (initUnit === 'mi') {
      return 'mile';
    } else if (initUnit === 'km') {
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
