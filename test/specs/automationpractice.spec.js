import automationpractice   from '../pageobjects/automationpractice.page';
import assert       		from 'assert';

/*
	This is a BDD test using Mocha JavaScript framework
*/

describe('Navigating to product', function() {
  it('Should open desired url', function () {
    automationpractice.open();
	browser.debug();
    assert.equal(browser.getTitle(), 'My Store');
  });

  it('Should select Women from the Menu', function () {
    automationpractice.selectWomen();
	assert.equal(automationpractice.h2txt(), 'WOMEN ');	
  });

   it('Should select Summer Dresses from the Menu', function () {
    automationpractice.selectWomen();
	automationpractice.selectSummerDressesLink();
	assert.equal(automationpractice.h2txt(), 'SUMMER DRESSES ');
  });
  
  it('Should mouse over "Printed Summer Dress" and click "Quick view" button', function () {
	automationpractice.selectDressImg();
	automationpractice.selectQuickView();
	assert.equal(automationpractice.isQuickView(), true);
  });
});

describe('Add to cart and continue', function() {

  it('Select "S" size from the drop down and click on "Add to Cart" button', function () {
	automationpractice.switchtoQuickViewFrame();
	automationpractice.selectDropDownS();
	automationpractice.selectAddToCart();
	assert.equal(automationpractice.AddToCartSuccessTxt(), "Product successfully added to your shopping cart");
  });
  
  it('should Click on "Continue shopping" button', function () {
	automationpractice.selectContinueShopping();
  });

});