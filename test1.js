/// <reference types="Cypress" />

describe(" My First Test Suite", function()

{

    it(" My First test Case ", function()
    {
        
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('input[type=search]').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').should('have.length', 4)
        cy.get('.products').find('.product').eq(2).contains("ADD TO CART").click();
        cy.wait(2000)
        cy.get('.products').find('.product').each(($el, index, $list) => {

            const vegetable = $el.find('h4.product-name').text()
            
                if(vegetable.includes('Cashews'))
                {

                    cy.wrap($el).contains("ADD TO CART").click()
                }

            
        
        })

    })
})