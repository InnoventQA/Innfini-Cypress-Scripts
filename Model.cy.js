describe('Model', function() {
 
    // SECTION 1: Basic Model Functionality
    it('Model Basic functionality', function() {
        cy.ModelNavigator();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]').should('be.visible');
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav').children().each(($button)=>{
            cy.wrap($button).should('not.be.disabled')
        });
    });
   
    // SECTION 2: Sites Basic Functionality
    it('Sites Basic Functionality', function() {
        cy.ModelNavigator();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[1]/li').click();// click on Sites
        cy.xpath('//*[@id="Name"]').click(); // Click on Name field
        cy.xpath('//*[@id="Code"]').click(); // Click on Code Field
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[1]').click(); // Click on Run Button
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[3]').click(); // Click on Refresh Button
        cy.wait(1000);
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table').should('be.visible'); // Table should be visible
    });
   
    // SECTION 3: Add New Site
    it('Add New Site', function() {
        cy.ModelNavigator();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[1]/li').click(); // Click on Sites
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[2]').click(); // Click on "+Add Site"
        cy.xpath('//*[@id="name"]').click().type('new testing site'); // Ensure the "Site Name" field is clicable & enter "new testing site" into the field
        cy.xpath('//*[@id="file_input"]').attachFile('RAKC.jpg'); // Upload image and Reference it
   
        // Click on the Draw Site button
      cy.xpath('//*[@id="add_store_modal"]/div/form/div/div[2]/div/div/div[2]/div/div[2]/div/div[1]/button/button')
      .should('exist')
      .click({ force: true });
   
       // Wait and click on canvas
      cy.xpath('//*[@id="add_store_modal"]/div/form/div/div[2]/div/div/div[2]/div/div[4]/canvas')
      .should('be.visible')
      .click(100, 100); // Click at x:100, y:100 position
   
      cy.wait(5000); // Wait for coordinates to populate
   
     // Get and verify latitude value is populated
      cy.xpath('//*[@id="originLongitude"]') // latitude xpath
      .scrollIntoView()  // scroll element into view
      .should('be.visible')
   
    // Get and verify longitude value is populated  
     cy.xpath('//*[@id="originLatitude"]') // longitude xpath
     .scrollIntoView()  // scroll element into view
      .should('be.visible')
   
      // 1. First click "Select Option"
      cy.xpath('//*[@id="add_store_modal"]/div/form/div/div[2]/div/div/div[1]/div/div[5]/div[1]/div/div')
      .click();
     
      // 2. Then click "Active" from dropdown
      cy.xpath('//*[@id="add_store_modal"]/div/form/div/div[2]/div/div/div[1]/div/div[5]/div[1]/div/ul/li[1]').scrollIntoView()
          .click();
   
         
          // Type site code
          cy.xpath('//*[@id="code"]').click().type('0900');
     
          // Click Add Site
          cy.xpath('//*[@id="add_store_modal"]/div/form/div/div[3]/div/div/button[2]').click(); // can't add becuase site is not drwan.
   
          cy.ModelNavigator();
          cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table').should('be.visible'); // Table should be visible
          cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table/parent::div').scrollTo('right', { ensureScrollable: false }).xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]/td[6]/span/div/div/img[2]').click({ force: true });
          cy.xpath('//*[@id="add_report_modal"]/div/div[2]/button[1]').click();
      });
   
   
  });


describe('Zone Module', function(){

    it('Zone Basic Functionality', function(){

        cy.ModelNavigator();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[2]/li').click(); //Zone Button
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]').children()
        .each(($button)=>{
            cy.wrap($button).should('not.be.disabled')
        }); //Verify all the buttons are clickable 

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]').should('be.visible');
    })
    


    it('Add zone', function(){

        cy.ModelNavigator();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[2]/li').click(); //Zone Button
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[2]').click(); //Add zone
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div').should('be.visible');// Add zone screen

        //Adding Zone
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[1]/div/div/div/div/span').click(); //Selecting Site
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[1]/div/div/div/ul/li[5]').click(); 
        cy.xpath('//*[@id="name"]').click(); //Naming Zone
        cy.xpath('//*[@id="name"]').type('Automation Zone'); 
        cy.wait(1000);
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[2]/div/input[1]').click(); //Longitude
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[2]/div/input[1]').type('14.9'); 
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[2]/div/input[2]').click(); //Latitudex
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[2]/div/input[2]').type('15.7'); 
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[2]/div/button').click(); //Add Log Lat

        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[2]/div[1]/input[1]').click().type('14'); // 2 Longtitude
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[2]/div[1]/input[2]').click().type('14.1'); //2 Latitude
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[2]/div[1]/button').click(); //Add Long Lat 2

        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[2]/div[1]/input[1]').click().type('13'); //3 Longtitude
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[2]/div[1]/input[2]').click().type('17.1'); //3 Latitude
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[2]/div[1]/button').click(); //Add Long Lat 3

        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[2]/div[1]/input[1]').click().type('18'); //4 Longtitude
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[2]/div[1]/input[2]').click().type('20.1'); //4 Latitude
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[2]/div[1]/button').click(); //Add Long Lat 4

        cy.xpath('//*[@id="file_input"]').scrollIntoView().attachFile('RAKC.jpg'); //Attaching file 
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[5]/div/div[2]/div').click(); //Color
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[5]/div/div[2]/ul/li[3]/div').click();
        cy.xpath('//*[@id="code"]').click().type('AC1'); //Code
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[7]/div/div/div/div').click(); //Type
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[2]/div/div/div[1]/div[2]/div[7]/div/div/div/ul/li').click(); 
        cy.xpath('//*[@id="add_zone_modal"]/div/form/div/div[3]/div/div/button[2]').click(); //Add Zone

        //Verifying zone
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]/td[1]/span').should('contain', 'Automation Zone'); 

        //Deleting zone 
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]/td[8]/span/div/div/img[2]').scrollIntoView()
        .click({force:true}); 
        cy.xpath('//*[@id="add_report_modal"]/div').should('be.visible'); 
        cy.xpath('//*[@id="add_report_modal"]/div/div[2]/button[2]').click();


    })
}); 

describe('Zone Types Module', function(){

    it('Zone Types Basic Functionality', function(){
        cy.ModelNavigator();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[3]/li').click(); //Zones Type Button
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]').children()
        .each(($button)=>{
            cy.wrap($button).should('not.be.disabled'); //Buttons
        }); 

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div').should('be.visible'); //List appears
    }); 

    it('Add Zone Type', function(){

        cy.ModelNavigator();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[3]/li').click(); //Zones Type Button
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[2]').click(); //Add Zone type button
        cy.xpath('//*[@id="add_zoneType_modal"]/div[1]/form/div').should('be.visible'); 

        //Adding zone type 

        cy.xpath('//*[@id="name"]').click().type('Automation Zone'); //Name Field 
        cy.xpath('//*[@id="code"]').click().type('CODE'); //Code Field
        cy.xpath('//*[@id="description"]').click().type('This will be the end of us'); //Description Field 
        cy.xpath('//*[@id="properties.0.property"]').click().type('P1'); //Property Field
        cy.xpath('//*[@id="add_zoneType_modal"]/div[1]/form/div/div[2]/div[3]/div/div[2]/div/div/span').click(); //Type Field
        cy.xpath('//*[@id="add_zoneType_modal"]/div[1]/form/div/div[2]/div[3]/div/div[2]/div/ul/li[1]').click(); 
        //cy.xpath('//*[@id="add_zoneType_modal"]/div[1]/form/div/div[2]/div[4]/button').click(); //Property Button
        cy.xpath('//*[@id="add_zoneType_modal"]/div[1]/form/div/div[3]/div/div/button[2]').click(); //Confirm Button

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[3]').click();
        cy.reload();

        //Deleting Zone Type
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]/td[5]/span/div/div/img[2]').scrollIntoView()
        .click({force:true}); 
       
       cy.xpath('//*[@id="add_report_modal"]/div').should('be.visible'); 
        cy.wait(2000);
        cy.xpath('//*[@id="add_report_modal"]/div/div[2]/button[2]').click();
        cy.reload();




    })
});

describe('Zone Groups', function(){


    it('Zone Groups Basic Funtionality', function(){
        cy.ModelNavigator(); 
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[4]/li').click(); //Zone Group Button

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]').children()
        .each(($button)=>{
            cy.wrap($button).should('not.be.disabled');
        }); //Checking buttons

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]').should('be.visible'); //Visibility of list
    })

    it('Add Zone Group', function(){

        cy.ModelNavigator(); 
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[4]/li').click(); //Zone Group Button
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[2]').click(); //Add user
        //Adding Group 
        cy.xpath('//*[@id="name"]').click().type('Automation Group'); //Adding name 
        cy.xpath('//*[@id="add_zoneGroup_modal"]/div[1]/form/div/div[2]/div[2]/div/div').click(); //Site Button
        cy.xpath('//*[@id="add_zoneGroup_modal"]/div[1]/form/div/div[2]/div[2]/div/ul/li[5]').click(); //Selecting site
        cy.xpath('//*[@id="code"]').click().type('AC1'); //Adding code
        cy.xpath('//*[@id="description"]').click().type('This is an automation test'); //Adding description
        cy.xpath('//*[@id="add_zoneGroup_modal"]/div[1]/form/div/div[5]/div/button[2]').click(); //Add button

        //Change
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[3]').click();
        cy.reload();

        //Deleting Zone Type
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]/td[5]/span/div/div/img[2]').scrollIntoView()
        .click({force:true}); 
       
       cy.xpath('//*[@id="add_report_modal"]/div').should('be.visible'); 
        cy.wait(2000);
        cy.xpath('//*[@id="add_report_modal"]/div/div[2]/button[2]').click();
        cy.reload();


    })

});