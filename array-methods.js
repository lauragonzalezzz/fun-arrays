var dataset = require('./dataset.json').bankBalances;

/*
  create an array with accounts from bankBalances that are
  greater than 100000.00
  assign the resulting array to `hundredThousandairs`
*/
var hundredThousandairs = dataset.filter(function(balance) {
  if (Number(balance.amount) > 100000.00) {
    return true;
  }
});



/*
  set a new key for each object in bankBalances named `rounded`
  the value of this key will be the `amount` rounded to the nearest dollar
  example 
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
  assign the resulting array to `roundedDollar`
*/
var roundedDollar = dataset.map(function(account) {
    return {
      amount : account.amount,
      state : account.state,
      rounded : Math.round(account.amount)
    }
})

/*
  set a the `amount` value for each object in bankBalances
  to the value of `amount` rounded to the nearest 10 cents
  example 
    {
      "amount": 134758.4,
      "state": "HI"
    }
  assign the resulting array to `roundedDime`
*/
var roundedDime = dataset.map(function(account) {
  return {
    amount : Number(Math.round(account.amount * 10)/10),
    state : account.state
  }
});

// set sumOfBankBalances to the sum of all amounts in bankBalances

var sumOfBankBalances = dataset.reduce(function(prev, account) {
  return Math.round(prev *10)/10 + Math.round((account.amount)*10)/10;
}, 0);

/*
  set sumOfInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  in each of the following states
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */
var correctStates = dataset.filter(function(account) {
  if (account.state === 'WI' ||
  account.state === 'IL' ||
  account.state === 'WY' ||
  account.state === 'OH' ||
  account.state === 'GA' ||
  account.state === 'DE') {
  return account;
  }
});

var sumOfInterests = correctStates.reduce(function(prev, account) {
  total = Math.round(prev + (account.amount * .189));
  return total;

}, 0);

/*
  set sumOfHighInterests to the sum of the 18.9% interest
  for all amounts in bankBalances
  where the amount of the sum of interests in that state is
    greater than 50,000
  in every state except
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  the result should be rounded to the nearest cent
 */

var myStates = dataset.filter(function(account) {
  if (account.state !== 'WI' ||
  account.state !== 'IL' ||
  account.state !== 'WY' ||
  account.state !== 'OH' ||
  account.state !== 'GA' ||
  account.state !== 'DE') {
  return account;
  }
});

var addInterests = myStates.map(function(account) {
  total = Math.round(account.amount) + (account.amount * .189);

  return {
    amount : account.amount,
    state : account.state,
    interest : total
  }
});

var stateObj = {
  WI : 0
}

addInterests.forEach(function(account) {
  if (stateObj.hasOwnProperty(account.state)) {
    stateObj.state += 
  }
})

var sumOfHighInterests = null;

/*
  aggregate the sum of bankBalance amounts
  grouped by state
  set stateSums to be a hash table
    where the key is the two letter state abbreviation
    and the value is the sum of all amounts from that state
      the value must be rounded to the nearest cent
 */
var stateSums = null;

/*
  set lowerSumStates to an array containing
  only the two letter state abbreviation of each state 
  where the sum of amounts in the state is
    less than 1,000,000
 */
var lowerSumStates = null;

/*
  set higherStateSums to be the sum of 
    all amounts of every state
    where the sum of amounts in the state is
      greater than 1,000,000
 */
var higherStateSums = null;

/*
  set areStatesInHigherStateSum to be true if
    all of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
 */
var areStatesInHigherStateSum = null;

/*
  set anyStatesInHigherStateSum to be true if
    any of these states have a sum of account values
      greater than 2,550,000
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  false otherwise
 */
var anyStatesInHigherStateSum = null;


module.exports = {
  hundredThousandairs : hundredThousandairs,
  roundedDollar : roundedDollar,
  roundedDime : roundedDime,
  sumOfBankBalances : sumOfBankBalances,
  sumOfInterests : sumOfInterests,
  sumOfHighInterests : sumOfHighInterests,
  stateSums : stateSums,
  lowerSumStates : lowerSumStates,
  higherStateSums : higherStateSums,
  areStatesInHigherStateSum : areStatesInHigherStateSum,
  anyStatesInHigherStateSum : anyStatesInHigherStateSum
};