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
    }).its('status').should('to.be.equal', 200)
  })

  it('Get - StatusPet', ()=>{
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/#/pet/findPetsByStatus',
    }).its('status').should('to.be.equal', 200)
  })

  it('Get - PetId', ()=>{
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/#/pet/'+id,
    }).its('status').should('to.be.equal', 200)
  })

  it('Delete - PetId', ()=>{
    cy.request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/pet/'+id,
    }).its('status').should('to.be.equal', 200)
  })
})