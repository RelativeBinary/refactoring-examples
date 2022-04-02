const statement = require('./statement')
const invoices = require('../data/invoices.json')
const plays = require('../data/plays.json')

test('addes 1 + 2 to equal 3', () => {
    expect(statement(invoices[0],plays)).toBe("Statement for BigCo \nHamlet: $650.00 (55 seats)\nAs You Like It: $555.00 (35 seats)\nOthello: $500.00 (40 seats)\nAmount owed is $1,705.00\nYou earned 47 credits\n");
});