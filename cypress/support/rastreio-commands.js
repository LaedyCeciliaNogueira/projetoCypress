Cypress.Commands.add('validaRastreio', function (rastreio, message) {
    cy.get('#imagemhidden > #datas > #DataEntrega > strong')
          .should('contain.text', message)
        console.log('Produto: '+ rastreio + '  Status: ' + message)
})

Cypress.Commands.add('insereCodigo', (prod)=>{
      cy.get('#objetos').type(prod)
      cy.get('#btnPesq').click()
})