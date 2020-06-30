///<reference types="cypress"/>

describe('API Pet - Post', ()=>{
  
  var id =  Math.floor(Math.random() * 99)
  let name = 'Babi'

  beforeEach(()=>{
    cy.request({
      method: 'POST', url: 'https://petstore.swagger.io/v2/pet/',
      body:{"id": id, "name": name, "photoUrls": [], "tags": [], "status": "LIVE"} 
    }).as('users')
  })

  it('Valida Data', ()=>{
    cy.get('@users').then((res)=>{ 
        expect(res.body).contains({"name": 'Babi'})
        expect(res.body).contains({"status": 'LIVE'})
      })
  })

  it('Valida Status-code', ()=>{
    cy.get('@users').then((res)=>{
        expect(res.status).equal(200)
      })
  })

  it('Valida Content-Type', ()=>{
    cy.get('@users').its('headers').its('content-type')
      .should('include', 'application/json')
  })

  describe('Delete and Get', ()=>{
    it('Get Pet', ()=>{
      cy.request('GET', 'https://petstore.swagger.io/v2/pet/'+id).then((res)=>{
        expect(res.body).contains({"name": 'Babi'})  
        expect(res.status).equal(200)
      })
    })

    it('Deleta Pet', ()=>{
      cy.request('DELETE', 'https://petstore.swagger.io/v2/pet/'+id).then((res)=>{
        expect(res.status).equal(200)
        expect(res.body).contains({"type": 'unknown'})  
      })
    })
  })
})