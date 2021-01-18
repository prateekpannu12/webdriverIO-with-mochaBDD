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
  
  /**
   * define or overwrite page methods
   */

  open () {
      super.open('http://automationpractice.com/index.php')       //provide your additional URL if any. this will append to the baseUrl to form complete URL
      browser.pause(1000);
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
  
}

export default new automationpractice();