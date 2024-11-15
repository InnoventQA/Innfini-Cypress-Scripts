describe('Header Count', function(){



    it('HeaderCount', function(){

        

        // Visit the login page
 cy.visit('http://139.59.151.223:5173/');

 // Enter the username
 cy.get('#username').type('root');

 // Enter the password
 cy.get('#password').type('Inn0vent!');

 // Click the login button
 cy.get("button[type='submit']").click();

 // Assert that the URL changes to the home page after successful login
 cy.url().should('eq', 'http://139.59.151.223:5173/home');

 } )

 


})