import automationpracticeCh	from '../pageobjects/automationpracticeCh';
import assert       			from 'assert';

/*
	This is a BDD test using Mocha JavaScript framework
*/

describe('Navigating to desired state', function() {
  
	it('Should open to desired url', function () {
		automationpracticeCh.open();
		assert.equal(browser.getTitle(), 'Printed Summer Dress - My Store');
	});
  
	it('Should add product to cart', function () {
		automationpracticeCh.selectAddToCart();
		assert.equal(automationpracticeCh.AddToCartSuccessTxt(), "Product successfully added to your shopping cart");
	});
	
	it('Should go back to product', function () {
		automationpracticeCh.selectQvClose();
		assert.equal(automationpracticeCh.isQvClose(), false);
	});
});

describe('Navigating to checkout', function() {
	it('Should Hover over to "Cart" section and click "Check Out" button', function (){
		automationpracticeCh.selectShoppingCart();
		automationpracticeCh.selectCartOrder();
		assert.equal(browser.getTitle(), 'Order - My Store');
	});
	
	it('Should Click Proceed to checkout button', function() {
		automationpracticeCh.selectProceedCheckOut();
		assert.equal(automationpracticeCh.isStepTwoCurrent(), true);
	});
	
	it('Should Should Sign-in User', function() {
		automationpracticeCh.inputEmailField();
		automationpracticeCh.inputPasswordField();
		automationpracticeCh.selectLogin();
		assert.equal(automationpracticeCh.isStepThreeCurrent(), true);
	});
	it('Should Click Proceed to checkout button on Address tab', function() {
		automationpracticeCh.selectadrProceedCheckOut();
		assert.equal(automationpracticeCh.isStepFourCurrent(), true);
	});
	
	it('Agree to Terms of service and Click on Proceed to checkout button on Shipping tab', function() {
		automationpracticeCh.selectTermsCheckBox();
		automationpracticeCh.selectadrProceedCheckOut();
		assert.equal(automationpracticeCh.isStepLastCurrent(), true);
	});
	
	it('Confirm the correct order on Payment tab', function() {
		assert.equal(automationpracticeCh.whatIsProduct(), 'SKU : demo_6');
		assert.equal(automationpracticeCh.isTotalQuoted(), true);
		
	});
  
})