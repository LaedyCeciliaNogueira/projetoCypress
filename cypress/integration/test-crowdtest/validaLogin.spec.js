///<reference types = "cypress"/>

describe('Valida Tela Login', ()=>{
  beforeEach(()=>{
    cy.navigate()
  })

  it('Realiza login com sucesso', function (){
    cy.fixture('crowdData').as('usuario').then(() => {
      cy.realizaLogin(this.usuario.user, this.usuario.password)
      cy.validaLogin(this.usuario.msgSucesso)
    })
  })

  it('Realiza login Invalido', function (){
    cy.fixture('crowdData').as('usuario').then(() => {
      cy.realizaLogin(this.usuario.user, 'invalida')
      cy.validaLoginInvalido(this.usuario.msgErro)
    })
  })
})