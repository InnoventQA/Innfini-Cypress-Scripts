describe('Home Screen Testing', function(){


    it('Buttons', function(){

        cy.viewport(1000, 880); 

        cy.login();

        //Check if home button clickable

        cy.xpath('//*[@id="root"]/div[3]/header/div/header/div/div/ul/li[1]').should('not.be.disabled');

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[1]/div/h1/div').click()

        //Check the search field takes entry 

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[1]/div/div/div/input').type('Welcome')
        .should('have.value', 'Welcome')
        .clear()

        //Check if all buttons of the home screen are clickable

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul').children()
        .each(($button)=>{
            cy.wrap($button).should('not.be.disabled');
            
        })
    })
});


describe('Dashboard', function(){



    it('DashBoard Functionality', function(){

        cy.HomeNavigator();

        //Check DashBoard Button
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[2]/li').should('not.be.disabled');

        //Dropdown button
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[2]/li').should('not.be.disabled')
        .click();

    })

    it('Dashboard_Dashboard Manager', function(){

       cy.HomeNavigator();

      //Dropdown button
      cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[2]/li').should('not.be.disabled')
      .click();

       cy.xpath("//li[normalize-space()='Dashboard Manager']").click();


        //Check if it is the Dashboard Manager
       cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[1]/span').should('contain','Dashboard Manager');

       //Checking search field
       cy.xpath('//*[@id="Dashboardname"]').type('Testing')
       .should('have.value', 'Testing')
       .clear();

       //Check owner field 

       cy.xpath('//*[@id="Owner"]').type('Testing')
       .should('have.value', 'Testing')
       .clear();


       //Checking if buttons are clickable 

       cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]').children()
       .each(($button)=>
       {
        cy.wrap($button).should('not.be.disabled');
       }
    
    )


       
    });


    it('Dashboard_New Dashboard', function(){

        cy.HomeNavigator();

      //Dropdown button
      cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[2]/li').should('not.be.disabled')
      .click();

       cy.xpath("//li[normalize-space()='Dashboard Manager']").click();

       //Click on New Dashboard 
       cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[2]').click();

       //Fill in the DashBoard Info 
       cy.xpath('//*[@id="name"]').type('Automation testing');
       cy.xpath('//*[@id="componentDescription"]').type('This dashboard is being created for automation purposes');


       //Checking Confirm and cancel button 

       cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div[2]').children()
       .each(($button)=>{
           cy.wrap($button).should('not.be.disabled');

    });

     //Confirm the dashboard 

     cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div[2]/button[2]').click();

     cy.xpath('//*[@id="styled-profile"]').should('be.visible');

     //Select template button 

     cy.xpath('//*[@id="styled-profile"]/div[1]/div[1]/div').should('not.be.disabled')
     .click();

     //Check the clickability of all templates 
     cy.xpath('//*[@id="styled-profile"]/div[1]/div[1]/ul').children()
    .each(($button) => {
        cy.wrap($button)
   .should('exist').and('not.be.disabled');
});
    

      //Choosing the bar template
      cy.xpath('//*[@id="styled-profile"]/div[1]/div[1]/ul/li[1]').click();

      //Add the bar chart template 
      cy.xpath('//*[@id="styled-profile"]/div[1]/div[2]/button').click();

      //Click Dropdown of data source 
      cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div/div[1]/div[2]/div/div[1]/div/div/div[1]/div/div[1]/div/div/div/span').click();
      cy.wait(5000);
      //Choose en element 
      cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div/div[1]/div[2]/div/div[1]/div/div/div[1]/div/div[1]/div/div/ul/li[1]').click();

      
      //Click Dropdown of data field 
      cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div/div[1]/div[2]/div/div[1]/div/div/div[1]/div/div[2]/div/div').click();

      //Choose Data Field 
      cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div/div[1]/div[2]/div/div[1]/div/div/div[1]/div/div[2]/div/div/ul/li[1]').click();

      //Click Dropdown of aggregation field 
      cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div/div[1]/div[2]/div/div[1]/div/div/div[1]/div/div[3]/div/div/div').click();

      //Choose Aggregation 
      cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div/div[1]/div[2]/div/div[1]/div/div/div[1]/div/div[3]/div/div/ul').click();

      //Click Add Property 
      cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div/div[1]/div[2]/div/div[1]/div/div/div[1]/div/div[4]/div/button/div').click();

      //Put in the component Name 
      cy.xpath('//*[@id="componentName"]').type('ADP-TESTING- BAR-CHART');

      //Click on drop down of interval 
     // cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div/div[1]/div[2]/div/div[1]/div/div/div[3]/div[2]/div/div').click();
      cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div/div[1]/div[2]/div/div[1]/div/div/div[3]/div[1]/div[2]/div/div').click()

      //Choose an interval 
     //cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div/div[1]/div[2]/div/div[1]/div/div/div[3]/div[2]/div/ul/li[2]').click();
      cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div/div[1]/div[2]/div/div[1]/div/div/div[3]/div[1]/div[2]/div/ul/li[2]').click();

      //Press confirm to add the dashboard 
      cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div/div[2]/button[2]').click();

      //Save the dashboard 
      cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div/div[2]/button[2]').click();

      cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]') // Replace with your actual selector
  .should('be.visible') // Assert the first entry is visible
  .should('contain','Automation testing'); // Replace with the expected text

  //view and pin button 
  cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]/td[5]/span/div/div/img[1]').scrollIntoView()
  .click({ force: true });

  cy.xpath('//*[@id="detail_dashboard"]/div[1]').should('be.visible');
  //Close
  cy.xpath('//*[@id="detail_dashboard"]/div[1]/div[1]/div/button[2]').click();

  //Edit button 
  cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]/td[5]/span/div/div/img[2]').scrollIntoView()
  .click({ force: true });

  //Edit name 
  cy.xpath('//*[@id="name"]').clear()
  .type('Automation testing 101');

  //Confirm the new name 
  cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div[2]/button[2]').scrollIntoView().click();

  //Save Dashboard 
  cy.xpath('//*[@id="add_user_modal"]/div/div[2]/div[2]/div[2]/form/div/div/div[2]/button[2]').scrollIntoView().click();

  //Delete Dashboard 
  cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]/td[5]/span/div/div/img[3]').scrollIntoView().click({ force: true });

  cy.xpath('//*[@id="add_report_modal"]/div/div[2]/button[2]').click()


});



});


describe('Reports', function(){



    it('Report functionality', function(){



       cy.HomeNavigator();
       
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[3]/li').click();

        //All buttons in report are clickable 
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[3]/li').children()
        .each(($button) => {

            cy.wrap($button)
        .should('exist').and('not.be.disabled') }
    
    )
        
    })




});