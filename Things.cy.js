

describe('Things', function(){


    it('Bsic functionality of Things Module', function(){

      cy.ThingNavigator();

      cy.xpath('//*[@id="root"]/div[3]/header/div/header/div/div/ul/li[2]/span').click();
      cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[1]/div/h1/div/img').click();
      cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[1]').should('be.visible'); //list appears 
      cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul').children() //   Clickability 
        .each(($button)=>{
            cy.wrap($button).should('not.be.disabled');
            
        })

    })
});

describe('ThingType', function(){

    it('Basic Functionality', function(){

        cy.ThingNavigator();

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[3]').should('be.visible'); //Visibility of the main list

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div[2]/div[1]').children() //clickability of buttons
        .each(($button)=>{
            cy.wrap($button).should('not.be.disabled')
        });

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div[2]/div[1]').type('testing')

    });

    it('Create ThingsType', function(){

        cy.ThingNavigator();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div[2]/div[2]/button[2]').scrollIntoView().click({force:true}); //Add thingType
        cy.xpath('//*[@id="add_report_modal"]/div/div[2]/div[2]/div[1]/div/div').children() //
        .each(($button)=>{
            cy.wrap($button).should('not.be.disabled');
        });

        cy.xpath('//*[@id="add_report_modal"]/div/div[2]/div[2]/div[2]/div/div/div/div/button').scrollIntoView().click({force:true}); //Choosing custom template
        cy.xpath('//*[@id="add_report_modal"]/div/div[2]/div[3]/button[2]').click(); //Presssing Create button

        cy.xpath('//*[@id="ThingTypeName"]').eq(1).type('AutomationTest',{force: true} ) //Checking type box and typing 
         
        //Setting Properties
        cy.xpath('//*[@id="Name"]').eq(1).type('TC1'); //First property 
        cy.xpath('//*[@id="add_report_modal"]/div/div[3]/div[2]/div/div[2]/div/form[2]/div/div[5]/div/label/div/div').scrollIntoView().click({force:true}); //Checking button1
        cy.xpath('//*[@id="add_report_modal"]/div/div[3]/div[2]/div/div[2]/div/form[2]/div/div[6]/div/label/div/div').scrollIntoView().click({force:true}); //Checking button2
        cy.xpath('//*[@id="add_report_modal"]/div/div[3]/div[2]/div/div[2]/div/form[2]/div/div[7]/div/label/div/div').scrollIntoView().click({force:true}); //Checking button3
       
        cy.xpath('//*[@id="add_report_modal"]/div/div[3]/div[2]/div/div[2]/div/form[2]/div/div[8]/button/div').scrollIntoView()
        .click({force:true}); //Checking and setting properity 
        cy.xpath('//*[@id="add_report_modal"]/div/div[3]/div[3]/div/div/button[2]').click(); //Checking save button
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[3]/div/div[1]/table/tbody/tr[1]/td[2]').should('contain','AutomationTest'); //Verifying Thingtype Creation

    });

    
});

describe('Thing', function(){

    it('Thing Basic Functionality', function(){


        cy.ThingNavigator();

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[2]/li').click();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[1]/div/div/span').click({froce:true}); //Checking Dropdown menu 
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[1]/div/ul').should('be.visible'); //Verify menu appears
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[1]/div/div/input').type('AutomationTest'); //Checking Search
        cy.wait(3000);

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[1]/div/ul/li').click();
      
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[3]').click({force:true}); //Initalize search

    })

    it('Adding thing', function(){

        cy.ThingNavigator();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[2]/li').click();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[2]').click({force:true}); //Add thing
        cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[1]/div/div/div/div[1]/div/div').click({force:true}); //ThingType name
        cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[1]/div/div/div/div[1]/div/div/input').type('AutomationTest'); //Searching
        cy.wait(1000);
        cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[1]/div/div/div/div[1]/div/ul/li').click();
        cy.xpath('//*[@id="EnterValue"]').eq(0).type('Hi');
        cy.xpath('//*[@id="EnterValue"]').eq(1).type('Hello'); //Adding thing value
        cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[3]/div/div/button[2]').click({force:true}).click();
        cy.reload();

        cy.wait(1000);
        //Verify thing is added 
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[1]/div').click({froce:true});
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[1]/div/div/input').type('AutomationTest'); //Checking Search
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[3]').click({force:true}); 
        cy.wait(1000);
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[1]/div/ul/li').click({force:true});
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[3]').click({force:true});
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]/td[1]/span').should('contain','Hi')

      

    })
})

describe('ThingType Delete', function(){

    it('Delete ThingType', function(){

        cy.ThingNavigator();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[1]/li/div/span').click();
        cy.xpath('//*[@id="ThingTypeName"]').click({force:true});
        cy.xpath('//*[@id="ThingTypeName"]').type('AutomationTest')
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div[2]/div[2]/button[3]').click({force:true});
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[3]/div/div[1]/table/tbody/tr[1]/td[4]/span/div/div/img[2]').scrollIntoView()
        .click({force:true}); 
        cy.xpath('//*[@id="add_report_modal"]/div').should('be.visible');
        cy.xpath('//*[@id="add_report_modal"]/div/div[2]/button[2]').click({force:true});
        
    })

}
)


