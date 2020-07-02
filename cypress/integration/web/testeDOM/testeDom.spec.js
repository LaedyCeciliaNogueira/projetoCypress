///<reference types="Cypress"/>

describe('Teste do Botao desabilitado', ()=>{

  beforeEach(()=>{
    cy.viewport('macbook-13')
    cy.visit('https://www.instagram.com')
  })
  it('Testando Botao desabilitado', ()=>{
    cy.get('.HmktE > :nth-child(4)').click({ force: true })
  })

  it('Testando botao Habilitado', ()=>{
    cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').type('testeusuario@email.com')
    cy.get(':nth-child(3) > ._9GP1n > .f0n8F > ._2hvTZ').type('testepassword')
    cy.get('button').onclick = () => {
      alert("fui clicado");
      console.log('Teste')
    }
    cy.get('.HmktE > :nth-child(4)').click()
    console.log('Teste2')
  })
})

/*
https://jsfiddle.net/brg47cut/10/
*/