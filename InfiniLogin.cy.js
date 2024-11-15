describe('Infini Login', function() {

    // Test Case 1: Verify successful login
    it('Successful LoginIn Check', function() {
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
    });

    // Test Case 2: Verify validation message when username is empty
    it('Validation Check_ Empty Username field', function() {
        // Visit the login page
        cy.visit('http://139.59.151.223:5173/');

        // Enter the password without entering a username
        cy.get('#password').type('Inn0vent!');

        // Click the login button
        cy.get("button[type='submit']").click();

        // Assert that the validation message for empty username is displayed
        cy.xpath("//div[normalize-space()='Username is required']").should('contain.text', 'Username is required');
    });

    // Test Case 3: Verify validation message when password is empty
    it('Validation Check_ Empty Password Field', function() {
        // Visit the login page
        cy.visit('http://139.59.151.223:5173/');

        // Enter the username without entering a password
        cy.get('#username').type('root');

        // Click the login button
        cy.get("button[type='submit']").click();

        // Assert that the validation message for empty password is displayed
        cy.xpath("//div[normalize-space()='Password is required']").should('contain.text', 'Password is required');
    });

    // Test Case 4: Verify validation messages when both fields are empty
    it('Validation Check_ Empty Fields', function() {
        // Visit the login page
        cy.visit('http://139.59.151.223:5173/');

        // Click the login button without entering any credentials
        cy.get("button[type='submit']").click();

        // Assert that the validation message for empty username is displayed
        cy.xpath("//div[normalize-space()='Username is required']").should('contain.text', 'Username is required');

        // Assert that the validation message for empty password is displayed
        cy.xpath("//div[normalize-space()='Password is required']").should('contain.text', 'Password is required');
    });

    // Test Case 5: Verify validation message when an invalid username is entered
    it('Validation Check_Invalid Username', function() {
        // Visit the login page
        cy.visit('http://139.59.151.223:5173/');

        // Enter an invalid username
        cy.get('#username').type('rot');

        // Enter the password
        cy.get('#password').type('Inn0vent!');

        // Click the login button
        cy.get("button[type='submit']").click();

        // Assert that the validation message for invalid login is displayed
        cy.xpath('//*[@id="root"]/div[3]/div[2]/div/div[2]/div/div[1]/form/div[2]/div')
          .should('contain.text', 'Username and/or password incorrect.');
    });

    // Test Case 6: Verify validation message when an invalid password is entered
    it('Validation Check_Invalid Password', function() {
        // Visit the login page
        cy.visit('http://139.59.151.223:5173/');

        // Enter the valid username
        cy.get('#username').type('root');

        // Enter an invalid password
        cy.get('#password').type('Inn0vent');

        // Click the login button
        cy.get("button[type='submit']").click();

        // Assert that the validation message for invalid login is displayed
        cy.xpath('//*[@id="root"]/div[3]/div[2]/div/div[2]/div/div[1]/form/div[2]/div')
          .should('contain.text', 'Username and/or password incorrect.');
    });

});
