/// <reference types="Cypress" />

describe(" My First Test Suite", function()

{

    it(" My Second test Case ", function()
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('input[type=search]').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productlocator')
        //cy.get('@productlocator').find('.product').eq(2).contains("ADD TO CART").click()
        cy.wait(2000)
        cy.get('@productlocator').find('.product').each(($el, index, $list) => {

            const vegetable = $el.find('h4.product-name').text()
            
                if(vegetable.includes('Cashews'))
                {

                    cy.wrap($el).contains("ADD TO CART").click()
                }
            })

            cy.wait(2000)
            cy.get('.cart-icon > img').click()
            cy.get('.action-block').contains("PROCEED TO CHECKOUT").click()
            cy.contains("Place").click()

        })




     
    })