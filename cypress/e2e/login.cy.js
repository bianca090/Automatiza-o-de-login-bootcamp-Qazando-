describe('login', () =>{

it('login com sucesso', () =>{
    cy.visit('https://www.automationpratice.com.br/login#!');
    cy.get('#user').type('biancagomeslira09@gmail.com');
    cy.get ('#password').type('123456');
    cy.get('#btnLogin').click()
    cy.get('#swal2-title').should('have.text', 'Login realizado')
    
})

it('login com senha incorreta', () =>{
    cy.visit('https://www.automationpratice.com.br/login#!');
    cy.get('#user').type('biancagomeslira09@gmail.com');
    cy.get('#password').type('123');
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'Senha inválida.')

})

it('login com e-mail invalido', () =>{
    cy.visit('https://www.automationpratice.com.br/login#!');
    cy.get('#user').type('0000000');
    cy.get('#password').type('123456');
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
})
it('loguin com campos vazios', () =>{
    cy.visit('https://www.automationpratice.com.br/login#!');
    cy.get('#btnLogin').click()
    cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
 })
})








