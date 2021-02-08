describe('Create and mask-unmark as favorite', function(){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=8of9pb')
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').type('pruebascy.123@gmail.com')
        cy.get('input[type="password"]').type('admin123')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed', {timeout:10000}).should('be.visible')
    })

    it('Create a post', function(){

    cy.get('.nav-link').contains('New Post').click()
    cy.wait(1000)
    cy.hash().should('include', '#/editor')
   // cy.location('hash').should('include', '#/editor') -- Same line 16 
    cy.get('input[placeholder="Article Title"]').type('Prueba # 2')
    cy.get('input[placeholder="What\'s this article about?"]').type('This is a test')
    cy.get('textarea[placeholder="Write your article (in markdown)"]').type('This is a test for study cypress')
    cy.get('input[placeholder="Enter tags"]').type('@tags')
    cy.get('button[type="button"]').contains('Publish Article').click()
    //cy.hash().should('include','#/article')
    cy.url().should('include','article')
    })

    it('Mark un mark favorite ', function(){
        cy.get('.nav-link').contains('pruebascypress').click()
        cy.contains('My Articles').should('be.visible')
        cy.get('.ion-heart').click()
        cy.get('.nav-link').contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')
        cy.get('.ion-heart').click()
        cy.reload()
        cy.get('.article-preview'). contains('No articles are here... yet.').should('be.visible')
        cy.go("back")
        //cy.go(-1)
        //cy.go("forward")
        //cy.go(1)
    })
})