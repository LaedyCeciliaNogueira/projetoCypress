Cypress.Commands.add('aguarde', (tempo)=>{
  cy.wait(tempo)
})
//link UrlBase - Mantis
import loc from './locators'

Cypress.Commands.add('navigate', ()=>{
  cy.visit('http://blackmirror.crowdtest.me.s3-website-us-east-1.amazonaws.com/')
})

//LOGIN
Cypress.Commands.add('realizaLogin', (user, password)=>{
  cy.get(loc.LOGIN.USER).type(user)
  cy.get(loc.LOGIN.PASSWORD).type(password)
  cy.get(loc.LOGIN.BT_LOGIN).click()
})
Cypress.Commands.add('validaLogin', (msg)=>{
  cy.get(loc.LOGIN.MSG_SUCESSO).should('contain', msg)
})
Cypress.Commands.add('validaLoginInvalido', (msg)=>{
  cy.get(loc.LOGIN.MSG_ERRO).should('contain', msg)
})

// ENTRAR
Cypress.Commands.add('clicaTestar', (msg)=>{
  cy.get(loc.TESTAR).click()
})

//INCLUIR PROJETO
Cypress.Commands.add('incluirProjeto', (id, nome, descricao, tipo, feature)=>{
  cy.clicaTestar()

  cy.get(loc.MENU.GERENCIAR_PROJETOS).click()
  cy.get(loc.INCLUIR_PROJETO.PROJETOS).click()
  cy.get(loc.INCLUIR_PROJETO.BT_NOVOPROJETO).click()
 
  cy.get(loc.INCLUIR_PROJETO.CP_ID).type(id)
  cy.get(loc.INCLUIR_PROJETO.CP_NOME).type(nome)
  cy.get(loc.INCLUIR_PROJETO.CP_DESCRICAO).type(descricao)
  cy.get(loc.INCLUIR_PROJETO.ADD_FEATURE).click()
  cy.get(loc.INCLUIR_PROJETO.CP_ADD_FEATURE).type(feature)
  cy.get(loc.INCLUIR_PROJETO.SELECT_TIPO).click()
  cy.get(loc.INCLUIR_PROJETO.LISTA).contains(tipo).click({ force: true });
 
  cy.get(loc.BOTOES.BT_SALVAR).click()
})

Cypress.Commands.add('validaMensagemSucesso', (msg)=>{
  cy.get(loc.MENSAGENS.MSG_SUCESSO).should('contain', msg)
  cy.fecharPopUp()
})

Cypress.Commands.add('validaIdObrigatorio', (msg)=>{
  cy.get(loc.INCLUIR_PROJETO.ID_OBRIGATORIO).should('contain', msg)
})

Cypress.Commands.add('fecharPopUp', ()=>{
  cy.get(loc.BOTOES.BTN_FECHAR).click()
})

//INCLUIR CASO DE TESTE
Cypress.Commands.add('incluiCasoDeTeste', (titulo, descricao, resultado, newfeature, selectFeature)=>{
  cy.get(loc.INCLUIR_CASODETESTE.MENU_CASODETESTE).click()
  cy.get(loc.INCLUIR_CASODETESTE.BTN_INCLUIR).click()
  cy.get(loc.INCLUIR_CASODETESTE.CP_TITULO).type(titulo)
  cy.get(loc.INCLUIR_CASODETESTE.CP_DESCRICAO).type(descricao)
  cy.get(loc.INCLUIR_CASODETESTE.CP_RESULTADOESPERASO).type(resultado)
  cy.get(loc.INCLUIR_CASODETESTE.SELECT_FEATURE).type(newfeature)
  cy.get(loc.INCLUIR_CASODETESTE.LISTA_FEATURE).click({ force: true });
  cy.aguarde(2000)
  cy.get(loc.BOTOES.BT_SALVAR).click()
})

//INCLUIR EQUIPE DO PROJETO
Cypress.Commands.add('incluirEquipe', (testador)=>{
  cy.fecharPopUp()
  cy.get(loc.EQUIPE_DO_PROJETO.MENU_EQUIPEDOPROJETO).click()
  cy.get(loc.EQUIPE_DO_PROJETO.CT_TESTADOR).type(testador)
  cy.get(loc.EQUIPE_DO_PROJETO.BTN_INCLUIR).click()
})

Cypress.Commands.add('ValidaEquipe', (testador)=>{
  cy.get(loc.EQUIPE_DO_PROJETO.VALIDACAO).should('contain', testador)
})

Cypress.Commands.add('ValidaEquipeInvalida', (msg)=>{
  cy.get(loc.EQUIPE_DO_PROJETO.MSG_ERR0).should('contain', msg)
})

//DELETA PROJETOS
Cypress.Commands.add('deletaProjetos', ()=>{
  cy.clicaTestar()
  cy.get(loc.MENU.GERENCIAR_PROJETOS).click()
  cy.get(loc.INCLUIR_PROJETO.PROJETOS).click()
  cy.trataProjeto()
})

Cypress.Commands.add('trataProjeto', ()=>{
  if(cy.get(loc.DELETA_PROJETOS.LISTA_PROJETOS).should('have.length', length >=1)){
    cy.deletandoProjetos()
  } else if(cy.get(loc.DELETA_PROJETOS.LISTA_VAZIA).should('not.have.length')){
    console.log('Não há elementos')
  } else{ }
})

Cypress.Commands.add('deletandoProjetos', ()=>{
  cy.get(loc.DELETA_PROJETOS.LISTA_PROJETOS).then((tabela) => {
    let elemento = null;
    for(elemento in tabela) {
      if (elemento == 'length') {
        break;
      }
      cy.get(loc.DELETA_PROJETOS.BTN_DELETAR).click()
      cy.get(loc.DELETA_PROJETOS.CONFIRMA_DELETE).click()
      cy.aguarde(2000)
      cy.fecharPopUp()
    }
  });
})

Cypress.Commands.add('validaExclusao', ()=>{
  cy.get(loc.DELETA_PROJETOS.LISTA_VAZIA).should('not.have.length')
})

//INCLUIR BUG
  Cypress.Commands.add('acessaMenuBugTracker', ()=>{
    cy.get(loc.BUG_TRACKER.MENU_BUGTRACKER).click()
  })
  Cypress.Commands.add('acessaMenuBugTrackerProjeto', ()=>{
    cy.get(loc.BUG_TRACKER.MENU_BUGTRACKER_PROJETO).click()
  })
  Cypress.Commands.add('incluirBug', (titulo)=>{
    cy.get(loc.BUG_TRACKER.BTN_NOVAOCORRENCIA).click()
    cy.get(loc.BUG_TRACKER.LISTA_RELEASE).click()
    cy.aguarde(2000)
    cy.get(loc.BUG_TRACKER.SELECIONA_RELEASE).click()
    cy.get(loc.BUG_TRACKER.CT_TITULO_BUG).type(titulo)
    cy.get(loc.BOTOES.BT_SALVAR).click()
  })

  Cypress.Commands.add('ValidaBugCadastrado', (msg)=>{
    cy.get(loc.BUG_TRACKER.VALIDACAO_BUG).should('contain', msg)
    cy.fecharPopUp()
  })

  //INCLUIR RELEASE
  Cypress.Commands.add('selecionaMenuRelease', ()=>{
    cy.fecharPopUp()
    cy.get(loc.RELEASE.MENU_RELEASE).click()
  })
  Cypress.Commands.add('selecionaMenuReleaseProjeto', ()=>{
    cy.fecharPopUp()
    cy.get(loc.RELEASE.MENU_RELEASE_PROJETO).click()
  })

  Cypress.Commands.add('incluirRelease', (nome, instrucoes, xpto)=>{
    cy.get(loc.RELEASE.BTN_INCLUIR_RELEASE).click()
    cy.get(loc.RELEASE.CP_NOME_RELEASE).type(nome)
    cy.get(loc.RELEASE.CP_INSTRUCOES).type(instrucoes)
    cy.get(loc.RELEASE.LISTA_FEATURES).click()
    cy.get(loc.RELEASE.SELECIONA_FEATURE).click();
    cy.get(loc.RELEASE.CHECKBOX_AGENDAMENTO).click()
    cy.get(loc.RELEASE.CHECKBOX_AGENDAMENTO).click()
    cy.get(loc.RELEASE.RELEASE_TIPO_PPB).click()
    cy.get(loc.RELEASE.RADIO_ABRANGENCIA_INTERNA).click()
    cy.get(loc.BOTOES.BTN_PROXIMO).click()

    cy.get(loc.RELEASE.BTN_PROXIMO_PG2).click()
    cy.get(loc.RELEASE.TIPO_OCORRENCIA).click()

    cy.get(loc.RELEASE.BTN_PROXIMO_PG3).click()
    cy.get(loc.RELEASE.RADIO_NAO).click()

    cy.get(loc.RELEASE.BTN_PROXIMO_PG4).click()
    cy.get(loc.RELEASE.DECLARO_QUE_LI).click()
    cy.get(loc.RELEASE.DECLARO_QUE_LI).click()

    cy.get(loc.RELEASE.BTN_CONCLUIR_CADASTRO).click()
  })

  Cypress.Commands.add('ValidaRelease', (titulo)=>{
    cy.get(loc.RELEASE.VALIDACAO_RELEASE).should('contain', titulo)
  })

  //VALIDA ELEMENTOS DE TELA
  Cypress.Commands.add('visitaTelaProjetos', ()=>{
    cy.clicaTestar()
    cy.get(loc.MENU.GERENCIAR_PROJETOS).click()
  })

  Cypress.Commands.add('ValidaElementosDeTela', ()=>{
    cy.get(loc.VALIDA_TELA.VALIDA_ICON_PROJETOS).should('be.visible')
    cy.get(loc.VALIDA_TELA.VALIDA_ICON_TESTERS).should('be.visible')
    cy.get(loc.VALIDA_TELA.VALIDA_ICON_RELEASE).should('be.visible')
    cy.get(loc.VALIDA_TELA.VALIDA_ICON_CASOTESTE).should('be.visible')
    cy.get(loc.VALIDA_TELA.VALIDA_ICON_ESTATISTICA).should('be.visible')
    cy.get(loc.VALIDA_TELA.VALIDA_ICON_OCORRENCIA).should('be.visible')
  })





