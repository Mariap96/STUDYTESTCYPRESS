describe('Login', function(){
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login?_k=8of9pb')
        cy.get('input[type="email"]').type('pruebascy.123@gmail.com')
        cy.get('input[type="password"]').type('admin123')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        /*Punto es para class .btn y # es para id #button*/
    })
})