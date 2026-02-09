/// <reference types="cypress" />

describe('visitar site', () => {
  beforeEach(() => {
    cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
  })

  it('deve adicionar um contato', () => {
    const nome = 'MARIA'
    const email = 'maria@email.com'
    const telefone = '11999999999'

    cy.get('input[placeholder="Nome"]').type(nome)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Telefone"]').type(telefone)
    cy.get('button[type="submit"]').click()

    cy.contains(nome).should('be.visible')
    cy.screenshot('contato-adicionado')
  })

  it('deve alterar um contato existente', () => {
    const nomeAlterado = 'MARIA DA SILVA'

    cy.get('.edit').first().click()
    cy.get('input[placeholder="Nome"]').clear().type(nomeAlterado)
    cy.get('button[type="submit"]').click()

    cy.contains(nomeAlterado).should('be.visible')
     cy.screenshot('contato-alterado')
  })

  it('deve excluir um contato', () => {
    cy.get('.delete').first().click()

    cy.contains('MARIA DA SILVA').should('not.exist')
     cy.screenshot('contato-excluido')
  })
})