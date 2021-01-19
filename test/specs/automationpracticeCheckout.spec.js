import automationpracticeCh	from '../pageobjects/automationpracticeCh';
import assert       			from 'assert';

/*
	This is a BDD test using Mocha JavaScript framework
*/

describe('Navigating to checkout', function() {
  
  it('Should open desired url', function () {
    automationpracticeCh.open();
	assert.equal(browser.getTitle(), 'Printed Summer Dress - My Store');
	automationpracticeCh.selectAddToCart();
	assert.equal(automationpracticeCh.AddToCartSuccessTxt(), "Product successfully added to your shopping cart");
	automationpracticeCh.selectContinueShopping();
  });
  
  it('Should Hover over to "Cart" section and click "Check Out" button', function (){
	  automationpracticeCh.selectShoppingCart();
  })
  
});