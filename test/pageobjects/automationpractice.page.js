import Page from './page';

class automationpractice extends Page  {
  /**
  * define elements
  */
  
  get WomenMenu()			{ return $('.sf-with-ul'); }
  get SummerDressesLink()	{ return $('.submenu-container').$('a*=Summer'); }
  get CatName()				{ return $('.cat-name'); }
  
  get DressImg()			{ return $('.last-line .product-container .left-block .product-image-container .product_img_link .img-responsive'); }
  get QuickViewButton()		{ return $('.quick-view-mobile'); }
  get QuickViewClose()		{ return $('.fancybox-close'); }
  
  get QuickViewFrame()		{ return $('.fancybox-iframe'); }
  get DropDownS()			{ return $('#group_1').$('option*=S'); }
  get AddToCart()			{ return $('span=Add to cart'); }
  get AddToCartSuccess()	{ return $('h2*=added'); }
  
  get ContinueShopping()	{ return $('.continue'); }
  get ShoppingCartLink()	{ return $('.shopping_cart a'); }
  
  /**
   * define or overwrite page methods
   */

  open () {
      super.open('http://automationpractice.com/')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(10000);
  }
  
  selectWomen () {
    this.WomenMenu.click();
	this.WomenMenu.moveTo();
  }

  selectSummerDressesLink () {
	this.SummerDressesLink.click();
  }
  
  selectDressImg () {
	this.DressImg.scrollIntoView();
	this.DressImg.moveTo();
  }
  
  isDressImg () {
    this.DressImg.waitForDisplayed(1000);
    return this.DressImg.isDisplayed();
  }
  
  selectQuickView () {
	this.QuickViewButton.scrollIntoView();
	this.QuickViewButton.moveTo();
    this.QuickViewButton.click();
  }
  
  isQuickView () {
    this.QuickViewClose.waitForDisplayed(1000);
    return this.QuickViewClose.isDisplayed();
  }
  
  h2txt () {
	return this.CatName.getText();
  }
  
  switchtoQuickViewFrame() {
	this.QuickViewFrame.waitForDisplayed(1000);
    browser.switchToFrame(this.QuickViewFrame);
  }
  
  selectDropDownS () {
	this.DropDownS.click();
  }
  
  selectAddToCart () {
	this.AddToCart.click();
  }
  
  selectShoppingCart () {
	this.ShoppingCartLink.moveTo();
  }
  
  selectContinueShopping () {
	this.ContinueShopping.click();
  }
  
  AddToCartSuccessTxt () {
	this.AddToCartSuccess.waitForDisplayed(1000);
	return this.AddToCartSuccess.getText();
  }
}

export default new automationpractice();