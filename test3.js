/// <reference types="Cypress" />



describe(" My Test Suite Web Controls checkboxes",function()
{
    it("My Test Case 3 checkboxes", function()

    {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("input[id = 'checkBoxOption1']").check().should('be.checked').and('have.value',"option1")
        cy.get("input[id = 'checkBoxOption1']").uncheck().should('not.be.checked')
        cy.wait(2000)
        cy.get("input[type ='checkbox']").check(['option2'])

    })

    it("My Test Case 4, dropdowns", function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("select[id = 'dropdown-class-example']").select('option1').should('have.value', "option1")
        cy.get('#autocomplete').type('Aus')
        cy.wait(2000)
        cy.get('.ui-menu-item .ui-menu-item-wrapper').each(($el, index, $list) => {

            if($el.text()==='Australia')
            {
                cy.wrap($el).click()
            }
        })
    })
    it("My Test Case 5, visible mode/ Radio buttons", function()

    {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.wait(2000)
        cy.get('input[value ="radio3"]').check().should('be.checked')




    })
   


})
