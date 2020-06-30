//<reference types = "cypress"/>

describe('Rastreio de Encomenda - Correios', ()=>{
  beforeEach('Before ', ()=>{
    cy.visit('https://www2.correios.com.br/sistemas/rastreamento/default.cfm')
  })
  const produts = ['OJ053980980BR', 'OJ693893698BR']
  produts.forEach(prod =>{
  
    it.only(`Rastreio de Encomenda `, function(){

      cy.insereCodigo(`${prod}`)

      if(`${prod}` == 'OJ053980980BR'){
        cy.fixture('rastreioData').as('data').then(() => {
          cy.validaRastreio(this.data.produto1, "Entregue")
        })
      }
      else if(`${prod}` == 'OJ693893698BR'){
        cy.fixture('rastreioData').as('data').then(() => {
          cy.validaRastreio(this.data.produto2, "Entregue")
        })
      }
      else{
        console.log(`${prod}  Erro`)
      }
    })
  })
})