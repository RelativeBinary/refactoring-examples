const statement = require('./statement')
const invoices = require('../data/invoices.json')
const plays = require('../data/plays.json')

// probably not the nicest tests in the world
// only testing for correct calculation, as i'm 
// just trying to make sure numbers come back correctly 
// as the code is refactored
test('invoice 0 test', () => {
    expect(statement(invoices[0])).toBe("Statement for BigCo \nHamlet: $650.00 (55 seats)\nAs You Like It: $555.00 (35 seats)\nOthello: $500.00 (40 seats)\nAmount owed is $1,705.00\nYou earned 47 credits\n");
});

test('invoice 0 test', () => {
    expect(statement(invoices[1])).toBe("Statement for BigCo \nHamlet: $400.00 (1 seats)\nAs You Like It: $306.00 (2 seats)\nOthello: $400.00 (3 seats)\nAmount owed is $1,106.00\nYou earned 0 credits\n");
});