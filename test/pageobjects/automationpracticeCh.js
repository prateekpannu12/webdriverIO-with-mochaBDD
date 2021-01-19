import Page from './page';

class automationpracticeCh extends Page  {
  /**
  * define elements
  */
  
  get AddToCart()			{ return $('span=Add to cart'); }
  get AddToCartSuccess()	{ return $('h2*=added'); }
  
  get ContinueShopping()	{ return $('.continue'); }
  get ShoppingCartLink()	{ return $('.shopping_cart a'); }
  
  /**
   * define or overwrite page methods
   */

  open () {
      super.open('http://automationpractice.com/index.php?id_product=6&controller=product')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
  }
  
  selectAddToCart () {
	this.AddToCart.click();
  }
  
  AddToCartSuccessTxt () {
	this.AddToCartSuccess.waitForDisplayed(1000);
	return this.AddToCartSuccess.getText();
  }
  
  selectShoppingCart () {
	this.ShoppingCartLink.moveTo();
  }
  
  selectContinueShopping () {
	this.ContinueShopping.click();
  }
  
}

export default new automationpracticeCh();