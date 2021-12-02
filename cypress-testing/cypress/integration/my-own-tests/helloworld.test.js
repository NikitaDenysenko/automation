/// <reference types="cypress" /> //provides autocomplite functionality 

describe('Basic Test', () => {
    it('Web page loads', () => {
        cy.visit('https://www.freecodecamp.org/')
    })
    it('Shoud open login page', () => {
        cy.contains("Get started (it's free)").click()
        cy.get('#email').should('exist')
        cy.contains('Continue with Google').should('exist')
        cy.contains('Continue with GitHub').should('exist')
    })
    it('Login page link test', () => {
        cy.url().should('include', '/login')
        cy.url().then(value => {
            cy.log('Current url is: ', value)
        })
        cy.get('#email').type('test@test.com')
    })
    it('Shoud complite task from the course', () => {
        cy.visit('https://www.freecodecamp.org/learn')
        cy.contains('Responsive Web Design Certification').click()
        cy.contains('Declare the Doctype of an HTML Document').click()
        cy.get('.view-line').type('<!DOCTYPE html><html><h1></h1></html>')
        cy.contains('Run the Tests').click()
        cy.contains('Go to next challenge').click()
    })
})

//npx cypress open (run in dev)
//npx cypress run --headless (run in CI/CD env)