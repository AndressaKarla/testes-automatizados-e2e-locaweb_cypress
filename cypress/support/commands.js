/// <reference types="cypress" />
import seletores from './seletores'

Cypress.Commands.add('consultarDominioLivre', (nomeDominio, extensaoDominio) => {
  cy.get(seletores.REGISTRO_DOMINIO_WEB.CAMPO_NOME_DOMINIO).as('campoNomeDominio')

  cy.get('@campoNomeDominio')
    .should('be.visible')
    .type(nomeDominio)

  cy.get(seletores.REGISTRO_DOMINIO_WEB.ROLAGEM_TELA)
    .click()

  cy.get('.top-level-domain-list')
    .select(extensaoDominio)
    .should('have.value', extensaoDominio)

  cy.get(seletores.REGISTRO_DOMINIO_WEB.BOTAO_CONSULTE)
    .click()

  cy.get(seletores.REGISTRO_DOMINIO_WEB.MSG_DOMINIO_LIVRE)
    .should('be.visible')
})

Cypress.Commands.add('consultarDominioNaoDisponivel', (nomeDominio, extensaoDominio) => {
  cy.get(seletores.CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO.CAMPO_NOME_DOMINIO)
    .should('be.visible')
    .type(nomeDominio)

  cy.get('.input-tld')
    .select(extensaoDominio)
    .should('have.value', extensaoDominio)

  cy.get(seletores.CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO.OPCAO_PESQUISAR)
    .click()

  cy.get(seletores.CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO.MSG_DOMINIO_NAO_DISPONIVEL)
    .should('be.visible')
})

Cypress.Commands.add('informarCpfValido', (cpf) => {
  cy.get(seletores.CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO.CAMPO_CPF_CNPJ)
    .should('be.visible')
    .type(cpf, { log: false })

  cy.get(seletores.CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO.BOTAO_VALIDAR)
    .click()

  cy.get(seletores.CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO.ICONE_OK)
    .should('be.visible')
  
})

Cypress.Commands.add('acessarConta', (usuario, senha) => {
  cy.get(seletores.CONTRATAR_REGISTRO_DOMINIO.CAMPO_USUARIO)
    .should('be.visible')
    .type(usuario)

  cy.get(seletores.CONTRATAR_REGISTRO_DOMINIO.CAMPO_SENHA)
    .type(senha, { log: false })

  cy.get(seletores.CONTRATAR_REGISTRO_DOMINIO.BOTAO_ENTRAR)
    .click()
})