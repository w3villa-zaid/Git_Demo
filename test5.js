/// <reference types="Cypress" />



describe(" My Test Suite Web Controls checkboxes",function()
{
    it("My Test Case 1, tables", function()

    {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()

            if (text.includes('Python Language'))
            {
             cy.get('tr td:nth-child(2)').eq(index).next().then( (price)=>{

                const priceval = price.text()
                expect(priceval).to.eql('25')
             })

            }


            })



    })

    it("My Test Case 2, Mouse hover", function()

    {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('.mouse-hover-content').invoke('show')
        cy.get(".mouse-hover a[href*='#top']").click()
        cy.url().should('contain', 'top')
        
    
    })


})