describe('Reports', function(){



    it('Report functionality', function(){



       cy.HomeNavigator();

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[3]/li').click();

        //All buttons in report are clickable 
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[3]/li').children()
        .each(($button) => {

            cy.wrap($button)
        .should('exist').and('not.be.disabled') } );  
    });


    it('Reports', function(){


        cy.HomeNavigator();

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[3]/li').click();

        //Clicking reports 
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[3]/ul/li[1]').click();

        //List of reports appear 
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div/div[1]').should('be.visible');

        //Creating user report 
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[2]').click();

        //Heading 
        cy.xpath('//*[@id="name"]').type('Automation Testing report')

        //Select thing type
        cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[1]/div[2]/div[1]/div[2]/div/div').click()

        //List appears 
        cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[1]/div[2]/div[1]/div[2]/div/ul').should('be.visible');

        //All children are clickable 

        cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[1]/div[2]/div[1]/div[2]/div/ul').children()
        .each(($button)=>{
            cy.wrap($button)
            .should('not.be.disabled')
        }
    );

    //selecting

    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[1]/div[2]/div[1]/div[2]/div/ul/li[1]').click();

    //Selecting interval 

    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[1]/div[2]/div[1]/div[4]/div/div').click();

    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[1]/div[2]/div[1]/div[4]/div/ul/li[2]').click();


    //Setting up filter 

    //Selecting thing type 
    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[2]/form/div/div[1]/div/div/span').click();
    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[2]/form/div/div[1]/div/ul/li[1]').click();
    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[2]/form/div/div[2]/div/div/span').click();
    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[2]/form/div/div[2]/div/ul/li[1]').click();
    cy.xpath('//*[@id="filterName"]').type('F1'); //Naming filer 
    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[2]/form/div/div[5]/div/div/span').click(); //Selecting operator
    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[2]/form/div/div[5]/div/ul/li[1]').click(); //Selected 
    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[2]/form/div/div[8]/div/button').click();


    //Table Properties

    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[3]/div[1]/form/div[1]/div[1]/div/div/span').click();
    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[3]/div[1]/form/div[1]/div[1]/div/ul/li[1]').click(); //selected
    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[3]/div[1]/form/div[1]/div[2]/div/div').click(); //Selecting Property
    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[3]/div[1]/form/div[1]/div[2]/div/ul/li[1]').click(); //Selected
    cy.xpath('//*[@id="label"]').type('P1'); //Setting property 
    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[2]/div/div[3]/div[1]/form/div[2]/div/button').click(); //property added

    //Save report 

    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[3]/div/div/button[2]').click();

    //Verifying creation 

    cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div/div[1]/table/tbody/tr[1]').should('contain', 'Automation Testing report');

    //Checking edit button 
    cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div/div[1]/table/tbody/tr[1]/td[6]/span/div/div/img[1]').scrollIntoView()
    .click({force:true});

    //Editing name 
    cy.xpath('//*[@id="name"]').clear().type('Automation Testing report 101'); //Editing 

    cy.wait(3000)

    cy.xpath('//*[@id="add_report_modal"]/div/form/div[3]/div[3]/div/div/button[2]').click();
    
    cy.wait(3000)//Save Changes 

    cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div/div[1]/table/tbody/tr[1]/td[6]/span/div/div/img[2]').scrollIntoView()
    .click({force:true}); //delete button 

    cy.xpath('//*[@id="add_report_modal"]/div/div[2]/button[2]').click(); 

    });

    it('Folders', function(){

        cy.HomeNavigator();

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[3]/li').click();

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[3]/ul/li[3]').click();

        //Creatng new folder

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[1]').click(); 

        cy.xpath('//*[@id="FolderName"]').type('Testing folder'); //FolderName
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div[2]/div/form/div[2]/div[3]/div[2]/div[1]/label/div/input').click({force:true}); //selecting report

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div[2]/div/form/div[3]/button[2]').click();

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]/td[4]/span/div/div/img[2]').scrollIntoView()
        .click({force:true});

        cy.xpath('//*[@id="add_report_modal"]/div/div[2]/button[2]').click(); //deleted 

    })



});