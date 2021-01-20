import automationpracticeCh		from '../pageobjects/automationpracticeCh';
import automationpracticeSignUp	from '../pageobjects/automationpracticeSignUp';
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
});

describe('Should Create User Account', function() {	
	it('Should Enter email for signup and select gender', function() {
		automationpracticeSignUp.inputSn_EmailField();
		automationpracticeSignUp.selectSn_Submit();
		automationpracticeSignUp.selectSn_Gender();
	});
	
	it('Should Enter First and Last name along with passwd', function() {	
		automationpracticeSignUp.inputSn_Firstname();
		automationpracticeSignUp.inputSn_Lastname();
		automationpracticeSignUp.inputSn_Password();
	});
	
	it('Should Select Day, Month and Year', function() {
		automationpracticeSignUp.selectSn_Days();
		automationpracticeSignUp.selectSn_Months();
		automationpracticeSignUp.selectSn_Years();
	});
	
	it('Should Enter Address, City, State, Postal and Phone', function() {
		automationpracticeSignUp.inputSn_Address();
		automationpracticeSignUp.inputSn_City();
		automationpracticeSignUp.selectSn_State();
		automationpracticeSignUp.inputSn_Postal();
		automationpracticeSignUp.inputSn_Phone();
	});
	
	it('Should Submit account for registration', function() {
		automationpracticeSignUp.selectSubmitAc();
		assert.equal(automationpracticeCh.isStepThreeCurrent(), true);
	});
});
	