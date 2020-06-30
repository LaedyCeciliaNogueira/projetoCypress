///<reference types="cypress"/>

describe('API Regres', ()=>{
  beforeEach(()=>{
    cy.request('/users?pages2').as('users')
  })
  
  it('Validando Content-type', ()=>{
    cy.get('@users')
    .its('headers')
    .its('content-type')
    .should('include', 'text/html; charset=UTF-8')
  })
 
  it('Validando Status-Code-M1', ()=>{
    cy.get('@users') 
      .then((res)=>{expect(res.status).equal(200)
    })
  })

  it('Validando Status-Code-M2', ()=>{
    cy.get('@users')
      .its('status')
      .should('equal', 200)
  })

  it.skip('Validando Body-Pages', ()=>{
    cy.get('@users')
      .its('body')
      .should('contains', {'total_pages':2})
  })

  it.skip('Validando Data', ()=>{
    cy.get('@users')
      .its('body').then((res)=>{
        expect(res.data[1]).has.property('name', 'Michael')
    })
  })
})