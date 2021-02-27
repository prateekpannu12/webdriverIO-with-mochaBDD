const automationpractice = require('../pageobjects/automationpractice.page');

/*
	This is a BDD test using Mocha JavaScript framework
*/

describe('Navigating to product', function() {
  it('Should open desired url', function () {
    browser.debug();
	automationpractice.open();
	expect(browser).toHaveTitle('My Store');
    
  });

  it('Should select Women from the Menu', function () {
    automationpractice.selectWomen();
	expect(automationpractice.h2txt).toHaveTextContaining(
            'WOMEN ');
		
  });

   it('Should select Summer Dresses from the Menu', function () {
    automationpractice.selectWomen();
	automationpractice.selectSummerDressesLink();
	expect(automationpractice.h2txt).toHaveTextContaining(
            'SUMMER DRESSES ');
  });
  
  it('Should mouse over "Printed Summer Dress" and click "Quick view" button', function () {
	automationpractice.selectDressImg();
	automationpractice.selectQuickView();
	expect(automationpractice.QuickViewClose).toBeDisplayed();
  });
});

describe('Add to cart and continue', function() {

  it('Select "S" size from the drop down and click on "Add to Cart" button', function () {
	automationpractice.switchtoQuickViewFrame();
	automationpractice.selectDropDownS();
	automationpractice.selectAddToCart();
	expect(automationpractice.AddToCartSuccess).toHaveTextContaining(
            'Product successfully added to your shopping cart');
  });
  
  it('should Click on "Continue shopping" button', function () {
	automationpractice.selectContinueShopping();
  });

});