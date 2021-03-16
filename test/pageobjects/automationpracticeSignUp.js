import Page from './page';

class automationpracticeSignUp extends Page  {
  /**
  * define elements
  */
  
  get Sn_EmailField()		{return $('#email_create'); }
  get Sn_Submit()			{return $('#SubmitCreate'); }
  get Sn_Gender()			{return $('#id_gender1'); }
  get Sn_Firstname()		{return $('#customer_firstname'); }
  get Sn_Lastname()			{return $('#customer_lastname'); }
  get Sn_Password()			{return $('#passwd'); }
  get Sn_Days()				{return $('#days').$('[value="2"]'); }
  get Sn_Months()			{return $('#months').$('[value="1"]'); }
  get Sn_Years()			{return $('#years').$('[value="2021"]'); }
  get Sn_Address()			{return $('#address1'); }
  get Sn_City()				{return $('#city'); }
  get Sn_State()			{return $('#id_state').$('[value="1"]'); }
  get Sn_Postal()			{return $('#postcode'); }
  get Sn_Phone()			{return $('#phone_mobile'); }
  get Sn_SubmitAc()			{return $('#submitAccount'); }

  
  /**
   * define or overwrite page methods
   */

  inputSn_EmailField (newemailtoregister) {
	this.Sn_EmailField.setValue(newemailtoregister);
  }
  selectSn_Submit () {
	this.Sn_Submit.click();
  }
  selectSn_Gender () {
	this.Sn_Gender.click();
  }
  
  inputSn_Firstname () {
	this.Sn_Firstname.setValue('Automation');
  }
  inputSn_Lastname () {
	this.Sn_Lastname.setValue('Practice');
  }
  inputSn_Password () {
	this.Sn_Password.setValue('AutomationPractice000000');
  }
  
  selectSn_Days () {
	this.Sn_Days.click();
  }
  selectSn_Months () {
	this.Sn_Months.click();
  }
  selectSn_Years () {
	this.Sn_Years.click();
  }
  
  inputSn_Address () {
	this.Sn_Address.setValue('000 Automation Practice');
  }
  inputSn_City () {
	this.Sn_City.setValue('Automation');
  }
  
  selectSn_State () {
	this.Sn_State.click();
  }
  
  inputSn_Postal () {
	this.Sn_Postal.setValue('00000');
  }
  
  inputSn_Phone () {
	this.Sn_Phone.setValue('000000000');
  }
  
  selectSubmitAc () {
	this.Sn_SubmitAc.click();
  }

};

export default new automationpracticeSignUp();