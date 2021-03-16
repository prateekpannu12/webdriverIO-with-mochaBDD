const Page = require('./page');

class automationpracticeCh extends Page  {
  /**
  * define elements
  */
  
  get AddToCart()			{ return $('span=Add to cart'); }
  get AddToCartSuccess()	{ return $('h2*=added'); }
  
  get ShoppingCartLink()	{ return $('.shopping_cart a'); }
  get CartBlock()			{ return $('.cart_block'); }
  get Cartprices()			{ return $('.cart-prices'); }
  get CartOrder()			{ return $('#button_order_cart'); }
  get QvClose()				{ return $('#layer_cart').$('.cross'); }
  
  get ProceedCheckOut()		{ return $('.standard-checkout'); }
  get adrProceedCheckOut()	{ return $('[method="post"]').$('span*=Proceed'); }
  get StepOneCurrent()		{ return $('.step_current.first'); }
  get StepTwoCurrent()		{ return $('.step_current.second'); }
  get StepThreeCurrent()	{ return $('.step_current.third'); }
  get StepFourCurrent()		{ return $('.step_current.four'); }
  get StepLastCurrent()		{ return $('.step_current.last'); }
  
  get EmailField()			{ return $('#email'); }
  get PasswordField()		{ return $('#passwd'); }
  get login()				{ return $('#SubmitLogin'); }
  
  get TermsCheckBox()		{ return $('.checker'); }
  get Product()				{ return $('small*=SKU'); }
  get total_price()			{ return $('span*=$'); }
  
  /**
   * define or overwrite page methods
   */

  open () {
      super.open('index.php?id_product=6&controller=product')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
  }
  
  selectAddToCart () {
	this.AddToCart.click();
  }
  
  selectShoppingCart () {
	this.ShoppingCartLink.moveTo();
  }
  
  selectCartOrder () {
	this.ShoppingCartLink.waitForDisplayed(1000);
	this.ShoppingCartLink.moveTo();
	browser.pause(1000);
	this.CartOrder.click();
  }
  
  selectQvClose () {
	this.QvClose.click();
  }
  
  selectTermsCheckBox() {
	this.TermsCheckBox.waitForDisplayed(1000);
	this.TermsCheckBox.click();
  }
  
  selectProceedCheckOut () {
	this.ProceedCheckOut.waitForDisplayed(1000);
	this.ProceedCheckOut.click();
  }
  
  selectadrProceedCheckOut () {
	this.adrProceedCheckOut.waitForDisplayed(1000);
	this.adrProceedCheckOut.click();
  }
  
  whatIsProduct () {
	return this.Product.getText();
  }
  
  isTotalQuoted () {
	return this.total_price.isExisting();
  }
  
  isStepOneCurrent () {
	 this.StepOneCurrent.waitForDisplayed(1000);
	 return this.StepOneCurrent.isExisting();
  }
  
  isStepTwoCurrent () {
	 this.StepTwoCurrent.waitForDisplayed(1000);
	 return this.StepTwoCurrent.isExisting();
  }
  
  isStepThreeCurrent () {
	 this.StepThreeCurrent.waitForDisplayed(1000);
	 return this.StepThreeCurrent.isExisting();
  }
  
  isStepFourCurrent () {
	 this.StepFourCurrent.waitForDisplayed(1000);
	 return this.StepFourCurrent.isExisting();
  }
  
  isStepLastCurrent () {
	 this.StepLastCurrent.waitForDisplayed(1000);
	 return this.StepLastCurrent.isExisting();
  }
  
  inputEmailField () {
	 this.EmailField.setValue('automationpractice00000@automationpractice.com');
  }
  
  inputPasswordField () {
	 this.PasswordField.setValue('AutomationPractice000000');
  }
  
  selectLogin () {
	 this.login.click();
  }
}

module.export = new automationpracticeCh();