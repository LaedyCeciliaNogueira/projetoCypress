///<reference types="cypress"/>

describe('Pet Request', ()=>{

  var id =  Math.floor(Math.random() * 99)
  let name = 'Charla'

  it('Post - Pet', ()=>{
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/pet/',
      body:
      {
        "id": id,
        "name": name,
        "photoUrls": [],
        "tags": [],
        "status": "LIVE"
      } 
    }).then(res=>console.log("POST: "+res))
      .its('status').should('to.be.equal', 200)
  })

  it('Get - StatusPet', ()=>{
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/#/pet/findPetsByStatus',
    }).then(res=>console.log("GETSTATUS: " +res))
      .its('status').should('to.be.equal', 200)
  })

  it('Get - PetId', ()=>{
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/#/pet/'+id,

    }).then(res=>console.log("GET: "+res))
      .its('status').should('to.be.equal', 200)
  })

  it('Delete - PetId', ()=>{
    cy.request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/pet/'+id,
    }).then(res=>console.log("DELETE: "+res))
      .its('status').should('to.be.equal', 200)
  })
})