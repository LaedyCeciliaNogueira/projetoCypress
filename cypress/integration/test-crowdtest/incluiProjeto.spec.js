///<reference types = "cypress"/>

describe('Incluir Projeto', ()=>{
  var id =  Math.floor(Math.random() * 9999)

  beforeEach(function (){
    cy.navigate()
    cy.fixture('crowdData').as('usuario').then(() => {
      cy.realizaLogin(this.usuario.user, 
                      this.usuario.password)
      })
  })
  
  it.only('Inclui Projeto', function (){
    cy.fixture('crowdData').as('usuario').then(() => {
      cy.incluirProjeto(this.usuario.idProjeto + id, 
                        this.usuario.nomeProjeto, 
                        this.usuario.descricaoProjeto,
                        this.usuario.tipoProjeto,
                        this.usuario.feature + id)
      cy.validaMensagemSucesso('Projeto criado com sucesso')
    })
  })

  it('Valida campo obrigatorio', function (){
    cy.fixture('crowdData').as('usuario').then(() => {
      cy.incluirProjeto(' ', 
                        this.usuario.nomeProjeto, 
                        this.usuario.descricaoProjeto,
                        this.usuario.tipoProjeto,
                        this.usuario.feature + id)
      cy.validaIdObrigatorio('Informe o identificador do projeto')
    })
  })
})