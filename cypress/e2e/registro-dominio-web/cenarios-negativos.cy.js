/// <reference types="cypress" />
import seletores from '../../support/seletores'

/*
Funcionalidade: Tela Registro de domínio web - Cenários negativos
	Como usuário da Tela Registro de domínio web da Locaweb
	Quero consultar registros de domínios web
	Para contratá-los
*/

describe('Funcionalidade: Tela Registro de domínio web - Cenários negativos', () => {
  afterEach(() => {
    cy.screenshot()
  })

  context('Dado que eu acesse a tela de Registro de domínio web da Locaweb', () => {
    beforeEach(() => {
      cy.visit('/registro-de-dominio-web')
    }) 

    context('Cenario: Validar registro de 2 domínios internacionais que estejam ou não em uso', () => {
      context('E que eu informe um domínio internacional que não esteja em uso', () => {
        beforeEach(() => {
          cy.fixture('dominio').then((dominioFixture) => {
            cy.consultarDominioLivre(dominioFixture.dominioInternacional.nomeDominioInternacionalNaoUso, dominioFixture.dominioInternacional.extensaoDominioInternacional)
          })
        })
  
        context('E que eu clique no botão REGISTRE', () => {
          context('E que eu esteja na tela Contratar Registro e Transferência de Domínio', () => {
            context('Quando eu informar um domínio internacional que esteja em uso', () => {
              it('Então na tela Contratar Registro e Transferência de Domínio deverá apresentar mensagem de domínio não estar disponível para contratação', () => {
                cy.get(seletores.REGISTRO_DOMINIO_WEB.BOTAO_REGISTRE)
                  .click()
                
                cy.get(seletores.CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO.TITULO_CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO)
                  .should('be.visible')
                  .and('contain', 'Contratar Registro e Transferência de Domínio')
    
                cy.get(seletores.CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO.ICONE_OK)
                  .should('be.visible')
    
                cy.fixture('dominio').then((dominioFixture) => {
                  cy.consultarDominioNaoDisponivel(dominioFixture.dominioInternacional.nomeDominioInternacionalUso, dominioFixture.dominioInternacional.extensaoDominioInternacional)
                })
  
                cy.get(seletores.CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO.MSG_DOMINIO_NAO_DISPONIVEL)
                  .should('be.visible')
                  .and('contain', 'não está disponível para contratação')
              })
            })
          })
        })
      })
    })
  })
})