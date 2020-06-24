///<reference types = "cypress"/>

describe('Release', ()=>{
  var id =  Math.floor(Math.random() * 9999)

  beforeEach(function (){
    cy.navigate()
    cy.fixture('crowdData').as('usuario').then((usuario) => {
      cy.realizaLogin(usuario.user, usuario.password)
      })
  })
  
  it.only('Inclui Release', function (){
    cy.fixture('crowdData').as('usuario').then((usuario) => {
      cy.incluirProjeto(usuario.idProjeto + id, usuario.nomeProjeto, usuario.descricaoProjeto, usuario.tipoProjeto, usuario.feature + id)
      cy.selecionaMenuRelease()
      cy.incluirRelease(usuario.nomeRelease, usuario.InstrucoesRelease, usuario.feature + id)

      cy.ValidaRelease(usuario.nomeRelease)
    })
  })
})