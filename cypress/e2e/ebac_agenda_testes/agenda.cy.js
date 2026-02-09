/// <reference types="cypress" />

describe('visitar site', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })
  it('deve adicionar um contato', () => {
    cy.get('input[placeholder="Nome"]').type('MARIA')
    cy.get('input[placeholder="E-mail"]').type('maria@email.com')
    cy.get('input[placeholder="Telefone"]').type('11999999999')
    cy.get('button[type="submit"]').click()

    cy.screenshot('contato-adicionado') 

    })

    it('deve alterar um contato existente', () =>{
      cy.get('.edit').first().click()
      cy.get('input[placeholder="Nome"]').clear().type('MARIA DA SILVA')
      cy.get('button[type="submit"]').click()
    })

    it('deve excluir um contato', () => {
      cy.get('.delete').first().click()
      })
})