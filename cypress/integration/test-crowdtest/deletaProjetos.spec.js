///<reference types = "cypress"/>

describe('Delete Projetos', ()=>{
  beforeEach(function (){
    cy.navigate()
    cy.fixture('crowdData').as('usuario').then((usuario) => {
      cy.realizaLogin(usuario.user, 
                      usuario.password)
      })
  })
  
  it('Deleta Projetos', ()=>{
    cy.deletaProjetos()
    cy.validaExclusao()
  })
})
