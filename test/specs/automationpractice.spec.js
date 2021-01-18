import automationpractice   from '../pageobjects/automationpractice';
import assert       		from 'assert';

/*
	This is a BDD test using Mocha JavaScript framework
*/

describe('Navigating to product', function() {
  it('Should open desired url', function () {
    automationpractice.open();
    assert.equal(browser.getTitle(), 'My Store');
  });

  it('Should select Women from the Menu', function () {
    automationpractice.selectWomen();
	assert.equal(automationpractice.h2txt(), 'WOMEN ');	
  });

   it('Should select Summer Dresses from the Menu', function () {
    automationpractice.selectWomen()
	automationpractice.selectSummerDressesLink();
	assert.equal(automationpractice.h2txt(), 'SUMMER DRESSES ');
  });
});