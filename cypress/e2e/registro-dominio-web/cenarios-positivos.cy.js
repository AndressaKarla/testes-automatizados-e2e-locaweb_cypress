/// <reference types="cypress" />
import seletores from '../../support/seletores'

/*
Funcionalidade: Tela Registro de domínio web - Cenários positivos
	Como usuário da Tela Registro de domínio web da Locaweb
	Quero consultar registros de domínios web
	Para contratá-los
*/

describe('Funcionalidade: Tela Registro de domínio web - Cenários positivos', () => {
  afterEach(() => {
    cy.screenshot()
  })

  context('Dado que eu acesse a tela de Registro de domínio web da Locaweb', () => {
    beforeEach(() => {
      cy.visit('/registro-de-dominio-web')
    }) 

    context('Cenario: Validar registro de 1 domínio nacional diferente de .org.br que não esteja em uso para cliente Locaweb com CPF válido', () => {
      context('E que eu informe um domínio nacional diferente de .org.br que não esteja em uso', () => {
        beforeEach(() => {
          cy.fixture('dominio').then((dominioFixture) => {
            cy.consultarDominioLivre(dominioFixture.dominioNacional.nomeDominioNacionalDiferenteOrgBrCpf, dominioFixture.dominioNacional.extensaoDominioNacionalDiferenteOrgBr)
          })
        })
  
        context('E que eu clique no botão REGISTRE', () => {
          context('E que eu esteja na tela Contratar Registro e Transferência de Domínio', () => {
            context('E que eu informe um CPF válido para cliente Locaweb', () => {
              context('E que eu esteja na tela Contratar Registro e Transferência de Domínio e com a opção Quero contratar apenas meus domínios selecionada por padrão', () => {
                context('E que eu esteja na tela Contratar Registro de Domínio e seção ACESSE SUA CONTA', () => {
                  context('Quando eu informar os campos de usuario e senha de um cliente Locaweb', () => {
                    it('Então deverá apresentar a tela Contratar Registro de Domínio e seção Informações de Pagamento', () => {
                      cy.get(seletores.REGISTRO_DOMINIO_WEB.BOTAO_REGISTRE)
                        .click()

                      cy.get(seletores.CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO.TITULO_CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO)
                        .should('be.visible')
                        .and('contain', 'Contratar Registro e Transferência de Domínio')

                      cy.fixture('usuario').then((usuarioFixture) => {
                        cy.informarCpfValido(usuarioFixture.clienteLocawebCpf.cpfValido)
                      })

                      cy.get(seletores.CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO.BOTAO_CONTINUAR)
                        .click()
                      
                      cy.get(seletores.CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO.TITULO_CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO)
                        .should('be.visible')

                      cy.get(seletores.CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO.OPCAO_CONTRATAR_APENAS_MEUS_DOMINIOS)
                        .should('be.visible')
                        .and('contain', 'Quero contratar apenas meus domínios')
          
                      cy.get(seletores.CONTRATAR_REGISTRO_TRANSFERENCIA_DOMINIO.BOTAO_CONTINUAR)
                        .should('be.visible')
                        .click()

                      cy.get(seletores.CONTRATAR_REGISTRO_DOMINIO.TITULO_CONTRATAR_REGISTRO_DOMINIO)
                        .should('be.visible')
                        .and('contain', 'Contratar Registro de Domínio')

                      cy.get(seletores.CONTRATAR_REGISTRO_DOMINIO.SECAO_ACESSE_SUA_CONTA)
                        .should('be.visible')
                        .and('contain', 'Acesse sua conta')
          
                      cy.fixture('usuario').then((usuarioFixture) => {
                        cy.acessarConta(usuarioFixture.clienteLocawebCpf.usuarioValido, usuarioFixture.clienteLocawebCpf.senhaValida)
                      })
        
                      cy.get(seletores.CONTRATAR_REGISTRO_DOMINIO.SECAO_INFORMACOES_PAGAMENTO)
                        .should('be.visible')
                        .and('contain', 'Informações de Pagamento')
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})