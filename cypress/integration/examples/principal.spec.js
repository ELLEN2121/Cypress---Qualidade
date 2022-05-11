

describe('Testes iniciais',()=>{
  
    it('Visitar a pagina e verificar o titulo', ()=>{
        cy.visit('https://www.google.com.br/')
        //cy.pause();
        cy.title().should('be.equal','Google')
        cy.get('.gLFyf').type("teste")
        cy.get('.CqAVzb > center > .gNO89b').click()
    })
    
})