describe('Tenant', function(){


    it('Tenant Basic functionality', function(){

        cy.TenantNavigator(); //Navigate to Tenant Module 
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]').should('be.visible'); //Verify the sidebar list is visible
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul').children()
        .each(($button)=>{
            cy.wrap($button).should('not.be.disabled')
        }); //Verify all the buttons are clickable 
    })

    it('Tenant_Group', function(){

        cy.TenantNavigator();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]').click();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[1]/li').click();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[3]').click(); //Verify Run
        cy.wait(1000);
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table').should('be.visible'); //Table Visibility 

      /*
        // Add Tenant 
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[2]').click(); //Add tenant button
        cy.xpath('//*[@id="add_tenant_modal"]/div[1]/div[2]').should('be.visible'); 
        cy.xpath('//*[@id="name"]').click(); //Name Field
        cy.xpath('//*[@id="name"]').type('Automation Tenant'); //Typing name
        cy.xpath('//*[@id="logo"]').click(); //Logo Field
        cy.xpath('//*[@id="logo"]').type('Tester'); //Typing Logo
        cy.xpath('//*[@id="add_tenant_modal"]/div[1]/div[2]/form/div[3]/div/button[2]').click(); //Confirming tenant
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]').should('contain', 'Automation Tenant'); //Verify Tenant Exists
        */

        



    })
}); 


describe('User_Module', function(){

    it('User Basic Functionality', function(){

        cy.TenantNavigator();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[2]/li').click(); //User Button
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]').children()
        .each(($button)=>{
            cy.wrap($button).should('not.be.disabled');
        }); //Checking buttons

        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[3]').click(); //Run button
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]').should('be.visible'); //Visibility of user list
    }); 

    it('Creat User', function(){

        cy.TenantNavigator();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[2]/li').click(); //User Button
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[2]').click(); //Add user button
        cy.xpath('//*[@id="add_user_modal"]/div/form/div').should('be.visible'); //Visibile Add user screen 
        // Adding user 
        cy.xpath('//*[@id="add_user_modal"]/div/form/div/div[2]/div[1]/div[2]/div/div/span').click(); //Site Button
        cy.xpath('//*[@id="add_user_modal"]/div/form/div/div[2]/div[1]/div[2]/div/ul/li[5]').click(); //Selecting Site
        cy.xpath('//*[@id="name"]').click(); //Name buttion
        cy.xpath('//*[@id="name"]').type('Automater'); 
        cy.xpath('//*[@id="userName"]').click(); //User Name
        cy.xpath('//*[@id="userName"]').type('Auto11');
        cy.xpath('//*[@id="phoneNumber"]').click(); //Phone number
        cy.xpath('//*[@id="phoneNumber"]').type('+971507321571');
        cy.xpath('//*[@id="email"]').click(); //Email
        cy.xpath('//*[@id="email"]').type('Auto@email.com');
        cy.xpath('//*[@id="password"]').click(); //Password
        cy.xpath('//*[@id="password"]').type('Inn0vent!'); 
        cy.xpath('//*[@id="customized-hook-demo"]').click(); //Roles
        cy.xpath('//*[@id="customized-hook-demo-option-57"]').scrollIntoView().click();
        cy.xpath('//*[@id="department"]').click(); //Department
        cy.xpath('//*[@id="department"]').type('Automation'); 
        cy.xpath('//*[@id="add_user_modal"]/div/form/div/div[2]/div[6]/div[2]/div[1]/div/div').click(); //Status
        cy.xpath('//*[@id="add_user_modal"]/div/form/div/div[2]/div[6]/div[2]/div[1]/div/ul/li[1]').click();
        cy.xpath('//*[@id="add_user_modal"]/div/form/div/div[2]/div[6]/div[1]/div[2]/div/div').click(); //Time Zone
        cy.xpath('//*[@id="add_user_modal"]/div/form/div/div[2]/div[6]/div[1]/div[2]/div/ul/li[1]').scrollIntoView().click();
        cy.xpath('//*[@id="add_user_modal"]/div/form/div/div[2]/div[6]/div[2]/div[2]/div/div').click(); //Date
        cy.xpath('//*[@id="add_user_modal"]/div/form/div/div[2]/div[6]/div[2]/div[2]/div/ul/li[1]').click(); 
        cy.xpath('//*[@id="add_user_modal"]/div/form/div/div[3]/div/div/button[2]').click(); //Confirm User

        //Verifying the user has been created 
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]/td[1]/span').should('contain', 'Automater'); 

        //Verify you can login with this user 
        cy.visit('http://139.59.151.223:5173/');
        cy.get('#username').type('Auto11');
        cy.get('#password').type('Inn0vent!');
        cy.get("button[type='submit']").click();
        cy.xpath('//*[@id="root"]/div[3]/header/div/div[1]/div/div/img').should('be.visible');

        //Delete User
        cy.TenantNavigator();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[2]/li').click(); //User Button
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]/td[9]/span/div/div/img[2]').scrollIntoView()
        .click({force:true}); //Delete Button
        cy.xpath('//*[@id="add_report_modal"]/div').should('be.visible'); //Delete screen 
        cy.xpath('//*[@id="add_report_modal"]/div/div[2]/button[2]').click(); //To Delete
    })
}); 

describe('Roles', function(){


    it('Roles_ Basic Functionality', function(){

        cy.TenantNavigator();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[3]/li').click(); //Roles Button
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]').children()
        .each(($button)=>{
            cy.wrap($button).should('not.be.disabled');
        }); //Checking buttons
    }); 

    it('Add Role', function(){

        cy.TenantNavigator();
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[1]/aside/div/div[1]/div[2]/nav/div/ul/div[3]/li').click(); //Roles Button
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[1]/div[2]/div[2]/button[2]').click();
        cy.xpath('//*[@id="add_role_modal"]/div/form/div').should('be.visible'); //Roles screen 
         
        //Adding Role 
        cy.xpath('//*[@id="role_name"]').click(); //Name Button
        cy.xpath('//*[@id="role_name"]').type('Automation Role'); 
        cy.xpath('//*[@id="add_role_modal"]/div/form/div/div[2]/div[1]/div[3]/div/div').click(); //Site Button
        cy.xpath('//*[@id="add_role_modal"]/div/form/div/div[2]/div[1]/div[3]/div/ul/li[5]').click(); 
        cy.xpath('//*[@id="add_role_modal"]/div/form/div/div[2]/div[1]/div[4]/div/div').click(); //Report Folder
        cy.xpath('//*[@id="add_role_modal"]/div/form/div/div[2]/div[1]/div[4]/div/ul/li[3]').click(); 
        cy.xpath('//*[@id="add_role_modal"]/div/form/div/div[2]/div[2]/div[1]/div[2]/div[1]/label/div/div').scrollIntoView()
        .click({force:true}); //Selecting Thing role 
        cy.xpath('//*[@id="add_role_modal"]/div/form/div/div[3]/div/div/button[2]').click(); //Confirm Button 

        //Deleting role 
        cy.xpath('//*[@id="root"]/div[3]/div/main/div[2]/div/div[2]/div/div[1]/table/tbody/tr[1]/td[4]/span/div/div/img[2]').scrollIntoView()
        .click({force:true});
        cy.xpath('//*[@id="add_report_modal"]/div').should('be.visible');
        cy.xpath('//*[@id="add_report_modal"]/div/div[2]/button[2]').click();

    })
})

