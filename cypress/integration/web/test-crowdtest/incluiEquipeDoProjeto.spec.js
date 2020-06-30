///<reference types = "cypress"/>

describe('Incluir Equipe do projeto', ()=>{
  beforeEach(function (){
    cy.navigate()
    cy.fixture('crowdData').as('usuario').then((usuario) => {
      cy.realizaLogin(usuario.user, usuario.password)
      })
  })
  
  var id =  Math.floor(Math.random() * 9999)

  it('Inclui Equipe do projeto', function (){
    cy.fixture('crowdData').as('usuario').then((usuario) => {
      cy.incluirProjeto(usuario.idProjeto + id, usuario.nomeProjeto, usuario.descricaoProjeto, usuario.tipoProjeto, usuario.feature+id)
      cy.incluirEquipe(usuario.testador)
      cy.ValidaEquipe(usuario.testador)
    })
  })

  it('Inclui Equipe do projeto inválida', function (){
    cy.fixture('crowdData').as('usuario').then((usuario) => {
      cy.incluirProjeto( id + "invalido", usuario.nomeProjeto, usuario.descricaoProjeto, usuario.tipoProjeto, usuario.feature + id)
      cy.incluirEquipe(usuario.testadorInvalido)
      cy.ValidaEquipeInvalida('não está cadastrado')
      cy.fecharPopUp()
    })
  })
})