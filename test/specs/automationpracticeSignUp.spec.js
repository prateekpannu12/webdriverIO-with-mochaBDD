const automationpracticeCh = require('../pageobjects/automationpracticeCh');
const automationpracticeSignUp = require('../pageobjects/automationpracticeSignUp');
const assert = require('assert');

/*
	This is a BDD test using Mocha JavaScript framework
*/

let inputs = [
    { 'postal' : '0000', 'phone' : '000000000', 'result' : "Postal code you've entered is invalid"},
	{ 'postal' : '000000', 'phone' : '00000000000', 'result' : "Postal code you've entered is invalid"}
]

describe('Navigating to desired state', function() {
  
	it('Should open to desired url', function () {
		automationpracticeCh.open();
		expect(browser).toHaveTitle('Printed Summer Dress - My Store');
	});
  
	it('Should add product to cart', function () {
		automationpracticeCh.selectAddToCart();
		expect(automationpracticeCh.AddToCartSuccess).toHaveTextContaining('Product successfully added to your shopping cart');
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
		expect(browser).toHaveTitle('Order - My Store');
	});
	
	it('Should Click Proceed to checkout button', function() {
		automationpracticeCh.selectProceedCheckOut();
		expect(automationpracticeCh.StepTwoCurrent).toBeDisplayed();
	});
});

describe('Should Create User Account', function() {	
	it('Should Enter email for signup and select gender', function() {
		automationpracticeSignUp.inputSn_EmailField('automationpractice0@automationpractice.com');
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
	
	it('Should Enter Address, City, and State', function() {
		automationpracticeSignUp.inputSn_Address();
		automationpracticeSignUp.inputSn_City();
		automationpracticeSignUp.selectSn_State();
	});
	
	inputs.forEach(({postal, phone, result }) => {
		it(`Should Enter '${ postal}' , '${ phone }' and Submit to validate '${ result}'`, function() {
			automationpracticeSignUp.inputSn_Postal(postal);
			automationpracticeSignUp.inputSn_Phone(phone);
			automationpracticeSignUp.selectSubmitAc();
			expect(automationpracticeSignUp.Sn_Alert).toHaveTextContaining(result);
		});
		
		it('Should confirm webpage is on step three', function() {
			expect(automationpracticeSignUp.StepThreeCurrent).toBeDisplayed();
		});
	});
	

});
	