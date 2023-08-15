 class Base{

  public   Navigate(url:string) {
        cy.visit(url)
   }

  public  LocateElement(locator:string){
       return cy.get(locator)
       cy.wait(5000)
   }

  
  public  Click(locator:string){
     this.LocateElement(locator).click()
   }

   public Type(locator:string, text:string){
     this.LocateElement(locator).type(text)
   }

   public getText(locator:string){
     return this.LocateElement(locator).invoke('text')
   }

   public Wait(time:number){
      cy.wait(time)
   }
   
}



export default new Base();