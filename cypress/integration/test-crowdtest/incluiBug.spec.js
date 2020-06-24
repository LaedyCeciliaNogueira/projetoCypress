///<reference types = "cypress"/>

describe('Bug Tracker', ()=>{
  var id =  Math.floor(Math.random() * 9999)

  beforeEach(function (){
    cy.navigate()
    cy.fixture('crowdData').as('usuario').then((usuario) => {
      cy.realizaLogin(usuario.user, usuario.password)
    })
  })
  
  it.only('Inclui Bug ao projeto', function (){
    cy.fixture('crowdData').as('usuario').then((usuario) => {
      cy.incluirProjeto(usuario.idProjeto + id, usuario.nomeProjeto, usuario.descricaoProjeto, usuario.tipoProjeto, usuario.feature + id)
      cy.selecionaMenuRelease()
      cy.incluirRelease(usuario.nomeRelease+id, usuario.InstrucoesRelease)
      cy.acessaMenuBugTracker()
      cy.incluirBug(usuario.tituloBug)

      cy.ValidaBugCadastrado('Ocorrência cadastrada com sucesso.')

    })
  })
})