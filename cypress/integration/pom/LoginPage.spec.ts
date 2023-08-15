import Base from './Base.cy';


class LoginPage  {
//locators
public  RegisterOptionLocator = '[width="77"] > a';
public  url = "https://demo.guru99.com/test/newtours/index.php"
public HomePageLocator='[width="273"][valign="top"] > :nth-child(1) > img'
  
public Navegar(){
    Base.Navigate(this.url);
    
}

public ClickRegisterOption(): void {
    Base.LocateElement(this.RegisterOptionLocator);
    Base.Click(this.RegisterOptionLocator);
}

public ValidateHomePage(){
 if (Base.LocateElement(this.HomePageLocator).should('be.visible')) {
    cy.log('We are in the Home Page')
 } else {
    cy.log('We are not in the Home Oage')    
 }
}


public ValidateRegisterOptionVisible() {
    if (Base.LocateElement(this.RegisterOptionLocator).should('be.visible')) {
        cy.log('The'+ Base.getText(this.RegisterOptionLocator) + 'is visible')
    } else {
        cy.log('The Register Option is not visible');
        
    }
}
 

}
export default  new LoginPage ();