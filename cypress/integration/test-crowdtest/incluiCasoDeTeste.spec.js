///<reference types = "cypress"/>

describe('Incluir Caso de Teste', ()=>{
  beforeEach(function (){
    cy.navigate()
    cy.fixture('crowdData').as('usuario').then((usuario) => {
      cy.realizaLogin(usuario.user, usuario.password)
      })
  })
  
  var id =  Math.floor(Math.random() * 9999)

  it('Inclui Caso de Teste', function (){
    cy.fixture('crowdData').as('usuario').then((usuario) => {
      cy.incluirProjeto(usuario.idProjeto + id, usuario.nomeProjeto, usuario.descricaoProjeto, usuario.tipoProjeto, usuario.feature + id)
      cy.fecharPopUp()
      cy.incluiCasoDeTeste(usuario.titulo_CT, usuario.descricao_CT,
                           usuario.resultadoEsperado_CT, 
                           usuario.newFeature, usuario.selectFeature)
      cy.validaMensagemSucesso('Caso de teste criado com sucesso.')
    })
  })
})