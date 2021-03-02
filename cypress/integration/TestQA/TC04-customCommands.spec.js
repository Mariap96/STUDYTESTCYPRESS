describe('Create and mask-unmark as favorite', function () {

    Cypress.config('pageLoadTomeout', 100000)

    before(function () {
        cy.SignIn()
    })

    it('Create a post', function () {

        //cy.get('.nav-link').contains('New Post').click()
        cy.get('ul.navbar-nav').children().contains('New Post').click()
        cy.wait(1000)
        cy.hash().should('include', '#/editor')
        // cy.location('hash').should('include', '#/editor') -- Same line 16 
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Prueba # 2')
            cy.get('input').eq(1).type('This is a test')
            cy.get('textarea').last().type('This is a test for study cypress')
            cy.get('input[placeholder="Enter tags"]').type('@tags')
            cy.get('button[type="button"]').contains('Publish Article').click()
        })
        //cy.hash().should('include','#/article')
        cy.url().should('include', 'article')
    })

    it('Mark un mark favorite ', function () {
        //cy.get('.nav-link').contains('pruebascypress').click()
        cy.get('ul.navbar-nav').children().contains('pruebascypress').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').first().click()
        cy.get('.nav-link').contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart').first().click()
        cy.reload()
        cy.get('.article-preview').contains('No articles are here... yet.').should('be.visible')
        cy.go("back")
        //cy.go(-1)
        //cy.go("forward")
        //cy.go(1)
    })
})
