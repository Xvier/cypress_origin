/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.origin("https://the-internet.herokuapp.com/login", ()=>{
      const MyPage = Cypress.require('./Heroku.js')
      const myPage = new MyPage();
      cy.visit('https://the-internet.herokuapp.com/login')
      myPage.fillDetails()
    })
  })
})