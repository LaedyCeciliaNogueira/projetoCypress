///<reference types = "cypress"/>

describe('Valida Itens de Tela', ()=>{
  var id =  Math.floor(Math.random() * 9999)

  beforeEach(function (){
    cy.navigate()
    cy.fixture('crowdData').as('usuario').then((usuario) => {
      cy.realizaLogin(usuario.user, usuario.password)
      })
  })
  
  it.only('Inclui Projeto', function (){
   cy.visitaTelaProjetos()
   cy.ValidaElementosDeTela()
  })
})