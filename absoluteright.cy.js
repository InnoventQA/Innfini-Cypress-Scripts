

// Testing the top-right button after Login

describe('Testing topright menu', function() {


    // Case 1: All buttons and menu are visible


    it('Menu Appears', function() {
        // Visit the application login page
        cy.visit('http://139.59.151.223:5173/');

        // Enter the username into the username field
        cy.get('#username').type('root');

        // Enter the password into the password field
        cy.get('#password').type('Inn0vent!');

        // Click the login button to submit the credentials
        cy.get("button[type='submit']").click();

        // Click on the menu icon in the top right corner
        cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]').click();

        // Assert that the menu dropdown is visible
        cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]').should('be.visible');

        // Check that the menu contains exactly 5 items
        cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul')
          .children()
          .should('have.length', 5); // Assert that the number of children is 5

        // Assert that the Logout button is visible
        cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/div[3]').should('be.visible');
    });

    it('Buttons are clickable', function() {

        // Case 2, Check if they are clickable

        // Visit the application login page
        cy.visit('http://139.59.151.223:5173/');

        // Enter the username into the username field
        cy.get('#username').type('root');

        // Enter the password into the password field
        cy.get('#password').type('Inn0vent!');

        // Click the login button to submit the credentials
        cy.get("button[type='submit']").click();

        // Click on the menu icon in the top right corner
        cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]').click();

        // Check that the menu contains exactly 5 items
        cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul')
          .children()
          .should('have.length', 5) // Assert that the number of children is 5
          .each(($button) => {
              // For each button, assert that it is visible
              cy.wrap($button)
                .should('be.visible') // Assert the button is visible
                .should('not.be.disabled'); // Assert the button is not disabled
          });

        //check the logout button is clickable

        cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/div[3]').should('not.be.disabled')
    });



});

describe('User Settings', function()  {



    it('Functional testing_User Settings Button', function(){



        // Case 3, The User setting button

         // Visit the application login page
         cy.visit('http://139.59.151.223:5173/');

         // Enter the username into the username field
         cy.get('#username').type('root');
 
         // Enter the password into the password field
         cy.get('#password').type('Inn0vent!');
 
         // Click the login button to submit the credentials
         cy.get("button[type='submit']").click();
 
         // Click on the menu icon in the top right corner
         cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]').click();

         //Click on user settings

        cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[2]/a').click();

        cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul')
        .children()
        .should('have.length', 10)


    });

});

describe('User Settings_Password Button', function(){



    it('Password Button', function() {

        // Visit the application login page
        cy.visit('http://139.59.151.223:5173/');

        // Enter the username into the username field
        cy.get('#username').type('root');

        // Enter the password into the password field
        cy.get('#password').type('Inn0vent!');

        // Click the login button to submit the credentials
        cy.get("button[type='submit']").click();

        // Click on the menu icon in the top right corner
        cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]').click();

        //Click on user settings

       cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[2]/a').click();

       //Click on Password Button
      cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[2]/div[2]').click()

      //Click on Current Password and send current password 
      cy.get('#oldPassword').type('Inn0vent!')

      //Click on New Password and send password
      cy.get('#newPassword').type('HelloWorld1!')

      //Click on Confirm Password and send passowrd
      cy.get('#confirmPassword').type('HelloWorld1!')

      //Cilck Confirm to set password
      cy.get("button[type='submit']").click()

      cy.wait(3000)

      //Testing with new password

         // Visit the application login page
         cy.visit('http://139.59.151.223:5173/');

         cy.reload();


         // Enter the username into the username field
         cy.get('#username').type('root');
 
         // Enter the password into the password field
         cy.get('#password').type('HelloWorld1!');

        // Click the login button
        cy.get("button[type='submit']").click();

        //Verify Innfini is Logged in 

        cy.url().should('eq', 'http://139.59.151.223:5173/home')

   });

   it('Reseting Password to original', function(){



     // Visit the application login page
     cy.visit('http://139.59.151.223:5173/');

     // Enter the username into the username field
     cy.get('#username').type('root');

     // Enter the password into the password field
     cy.get('#password').type('HelloWorld1!');

     // Click the login button to submit the credentials
     cy.get("button[type='submit']").click();

     // Click on the menu icon in the top right corner
     cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]').click();

     //Click on user settings

    cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[2]/a').click();

    //Click on Password Button
   cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[2]/div[2]').click()

   //Click on Current Password and send current password 
   cy.get('#oldPassword').type('HelloWorld1!')

   //Click on New Password and send password
   cy.get('#newPassword').type('Inn0vent!')

   //Click on Confirm Password and send passowrd
   cy.get('#confirmPassword').type('Inn0vent!')

   //Cilck Confirm to set password
   cy.get("button[type='submit']").click()

   cy.wait(3000)

   //Testing with original password

      // Visit the application login page
      cy.visit('http://139.59.151.223:5173/');

      cy.reload();


      // Enter the username into the username field
      cy.get('#username').type('root');

      // Enter the password into the password field
      cy.get('#password').type('Inn0vent!');

     // Click the login button
     cy.get("button[type='submit']").click();

     //Verify Innfini is Logged in 

     cy.url().should('eq', 'http://139.59.151.223:5173/home')



   })
});


describe('User Setting_Time Zone Button', function(){



    it('Time Zone', function(){

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

         // Click on the menu icon in the top right corner
         cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]').click();

         //Click on user settings
       cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[2]/a').click();

        // Verify that the time zone button is clickable
        cy.xpath('/html/body/div[1]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[9]/div[2]/div').click();

        //Verify that the dropdown button is clickable 
        cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[1]/div/div/div').click();
       

       //Verify the dropdwon button shows a list of time zones
       cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[1]/div/ul').should('be.visible');

       //Verify all the zones are clickable
       cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[1]/div/ul')
       .children()
       .each(($button) =>{

        cy.wrap($button)
        .should('not.be.disabled')
       })

       //Verify the confirm button is clickable
       cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[1]/div/div/div').click();

       cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[2]/div/button').should('not.be.disabled');
        
})


});


describe('User Settings_Date Format Button', function(){



    it('Date Format', function(){


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

         // Click on the menu icon in the top right corner
         cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]').click();

         //Click on user settings
       cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[2]/a').click();

       //Verify that Date-Format button is clickable
       cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[10]/div[2]/div').click();

       //Verify the dropdown button works
       cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[1]/div/div/div').should('not.be.disabled');

       //Verify date format menu appears
       cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[1]/div/div/div').click();
       cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[1]/div/ul').should('be.visible');

       //Verify all the formats are clickable
       cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[1]/div/ul').should('be.visible')
       .each(($button) =>{

        cy.wrap($button)
        
        .should('not.be.disabled')
       })

       //Verify the confirm button works 
       cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[1]/div/div/div').click();
       cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[2]/div/button').should('not.be.disabled');

       cy.reload();



    })
});

describe('Platform Setting', function(){
  
    it('Platform Settings', function()
  {


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

// Click on the menu icon in the top right corner
cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]').click();

//Navigate to the Platform Settings button 
cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[3]').click();

// Assert that the menu is visible
cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul').should('be.visible');

//Assert that all buttons on it are clickable 
cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul')
.children()
.each(($button) => { 

  cy.wrap($button)
  .should('not.be.disabled')
}
)

  })


});


describe('Platform Setting_Language Button', function(){

it('LANGUAGE BUTTON CHANGES LANGUAGE', function(){

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

// Click on the menu icon in the top right corner
cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]').click();

//Navigate to the Platform Settings button 
cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[3]').click();

//Click on Language button
cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[1]/div[2]').click();

//Click on dropdown button 
cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[1]/div/div').click();

//Click on Arbaic 
cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[1]/div/ul/li[2]').click();

//Veriyf Cconfirm button works 
cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[2]/div/button').should('not.be.disabled')
.click();

//Verify language is changed 
cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/span').contains('مرحبًا بك في لوحة التحكم الخاصة بك');


});

it('Change language back', function(){

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

// Click on the menu icon in the top right corner
cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]').click();

//Navigate to the Platform Settings button 
cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[3]').click();

//Click on Language button
cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[1]/div[2]').click();

//Click on dropdown button 
cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[1]/div/div').click();

//Click on Arbaic 
cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[1]/div/ul/li[1]').click();

//Veriyf Cconfirm button works 
cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/form/div[2]/div/button')
.click();

cy.wait(3);

//Verify language is changed 
cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/span').contains('Welcome To Your Dashboard')

});
});


describe('Tenants Button', function(){

  it('Tenant Button Funtionality', function(){


    cy.login();

    // Click on the menu icon in the top right corner
    cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]').click();

    //Click on Tenants
    cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[4]').click();

    //Verify a list appears
    cy.xpath('//*[@id="tenantsTab-popup"]/div[2]/ul').should('be.visible');

    //Verify the tenant names are clickable
    cy.xpath('//*[@id="tenantsTab-popup"]/div[2]/ul').children()
    .each(($button)=>{

      cy.wrap($button)
      cy.should('not.be.disabled')

    })


  })

  it('Tenant button_Search Field', function(){



    cy.login();

    // Click on the menu icon in the top right corner
    cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]').click();

    //Click on Tenants
    cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[4]').click();

    //See if the input field for search works
    cy.xpath('//*[@id="serach"]')
    .should('be.visible')
    .focus()
    .type('Testing')
    .should('have.value', 'Testing');
  })
})

describe('About Button', function()
{

  it('Chcek About button', function(){

    cy.login();

   // Click on the menu icon in the top right corner
   cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]').click();

   //click on About button
   cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/ul/li[5]').click();

   //Verify the confirm button is clickable 
   cy.xpath('//*[@id="aboutTab-popup"]/div[2]/div[3]/div[3]/button').should('not.be.disabled');

  })

});

describe('Logout Button', function(){


  

  it('Logout Button', function(){

    cy.login();

    // Click on the menu icon in the top right corner
   cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]').click();

    cy.xpath('//*[@id="root"]/div[3]/header[1]/div/div[3]/div/div[3]/div[3]/a').should('not.be.disabled');


  })

  
})