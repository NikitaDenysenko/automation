/// <reference types="cypress" /> //provides autocomplite functionality 

describe('Basic Test', () => {
    it('We have correct page title', () => {
        cy.visit('https://www.freecodecamp.org/')
        cy.contains('Learn to code').should('have.text', 'Learn to code — for free.')
        //cy.get('nav#universal-nav')
        cy.get('.toggle-button-nav').click()
        cy.viewport('iphone-6')
    })
})

//npx cypress open (run in dev)
//npx cypress run --headless (run in CI/CD env)