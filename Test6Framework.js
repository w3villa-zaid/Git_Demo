/// <reference types="Cypress" />

import cypress from "cypress"
import Homepage from "../pageObjects/Homepage"
import Productpage from "../pageObjects/Productpage"

describe(" My Test Suite Framework Ecomm",function()

{
  before(function(){
    cy.fixture('example').then(function(dataval)
    {
this.val=dataval

    })

  })



    it("My Test Case 1, Input field in form", function()
    {
const home = new Homepage();

        cy.visit(cypress.env('url') + "/angularpractice/")
        home.geteditbox().type(this.val.name)
        home.getgender().select(this.val.gender)
        home.gettwowaybinding().should('have.value', this.val.name)
       home.geteditbox().should('have.attr','minlength','2')
        home.getEntrepreanuer().should('be.disabled')
        
    
    })

    beforeEach(function(){
        cy.fixture('example').then(function(dataset)
        {
    this.values=dataset

        })
    })
    it("My Test Case 2, Add to cart", function()
    {

    const productpage = new Productpage();

    cy.visit(cypress.env('url') + "/angularpractice/")
    cy.get(':nth-child(2) > .nav-link').click()

    const AProd = this.values.productname; 
        
    AProd.forEach((element) => 
    {
        cy.selectproduct(element)

    }  )

    productpage.getcheckout().click()
   var sum = 0;
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

       const amount= $el.text()
       var result = amount.split(" ")
       var result = result[1].trim()
       sum = Number(sum)+Number(result)

       }).then(function(){
        cy.log(sum)

       })
   cy.get('h3 strong').then(function(element){

    const amt = element.text();
    var total = amt.split(" ")
    total = total[1].trim()
    expect(Number(total)).to.be.equal(sum)


   })

    cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click( {force: true})
    cy.get("input[value='Purchase']").click();
    cy.get('.alert').should('have.text', "Success! Thank you! Your order will be delivered in next few weeks :-)")
    
 })
   

    
  })


