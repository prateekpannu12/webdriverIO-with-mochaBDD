import Page from './page';

class automationpractice extends Page  {
  /**
  * define elements
  */
  
  get WomenMenu()			{ return $('.sf-with-ul'); }
  get SummerDressesLink()	{ return $('.submenu-container').$('a*=Summer'); }
  get QuickViewButton()		{ return $('.quick-view'); }
  get CatName()				{ return $('.cat-name'); }
  
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
  
  selectQuickView () {
    this.QuickViewButton.click();
  }
  
  h2txt () {
	return this.CatName.getText();
  }
  
}

export default new automationpractice();