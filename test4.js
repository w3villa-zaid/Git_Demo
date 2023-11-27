/// <reference types="Cypress" />



describe(" My Test Suite Web Controls checkboxes",function()
{
    /*it("My Test Case 1, pop ups", function()

    {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        cy.on('window:alert', (str) => {
            expect(str).to.eq('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            expect(str).to.eq('Hello , Are you sure you want to confirm?')
        })

    })*/


    it("My Test Case 2, switch tab", function()

    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.origin("https://www.qaclickacademy.com/", () =>
        {
            cy.get("#navbarSupportedContent a[href*='contactus']").click()
            cy.get('.mt-30 div h2').should('have.text', "Keepch")

        })
        
    })

})