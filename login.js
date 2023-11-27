/// <reference types="Cypress" />

describe(" My First Test Suite", function()
{
    it(" User login ", function()
    {

cy.visit('https://quickdev3.super.one/webapp/login');
cy.get("input[type='email']").type("brat220@t.com")
cy.get("input[type='password']").type("Test@123")
cy.get('.login-btn-gold').click();




    })



})