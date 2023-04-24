/// <reference types="cypress" />

export default class Heroku {

    fillDetails(){
        cy.get("#username").type("xavier")
        cy.get("#password").type("password")
    }

}