///<reference types = "cypress"/>

describe('Projeto Completo', ()=>{
  var id =  Math.floor(Math.random() * 9999)

  beforeEach(function (){
    cy.navigate()
    cy.fixture('crowdData').as('usuario').then((usuario) => {
      cy.realizaLogin(usuario.user, usuario.password)
    })
  })
  
  it.only('Adiciona Projeto Completo', function (){
    cy.fixture('crowdData').as('usuario').then((usuario) => {
      cy.incluirProjeto(usuario.idProjeto + id, usuario.nomeProjeto, usuario.descricaoProjeto, usuario.tipoProjeto, 'IncluirCT')
      cy.incluirEquipe(usuario.testador)
      cy.incluiCasoDeTeste(usuario.titulo_CT, usuario.descricao_CT, usuario.resultadoEsperado_CT, usuario.newFeature, usuario.selectFeature)
      cy.selecionaMenuReleaseProjeto()
      cy.incluirRelease(usuario.nomeRelease+id, usuario.InstrucoesRelease)
      cy.acessaMenuBugTrackerProjeto()
      cy.incluirBug(usuario.tituloBug) 
      
      cy.ValidaBugCadastrado('cadastrada com sucesso.')
    })
  })
})