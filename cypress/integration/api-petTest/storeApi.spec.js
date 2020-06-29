///<reference types="cypress"/>

describe('Store Request', ()=>{

  var id =  Math.floor(Math.random() * 99)

  it('Post - StoreOrder', ()=>{
    cy.request({
      method: 'POST',
      url: 'https://petstore.swagger.io/v2/store/order',
      body:
      {
        "id": id,
        "petId": id,
        "quantity": 0,
        "shipDate": "2020-06-29T18:22:06.435Z",
        "status": "placed",
        "complete": true
      } 
    }).then(res=>console.log("POST: "+res))
      .its('status').should('to.be.equal', 200)
  })

  it('Get - StoreOrderId', ()=>{
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/store/order/'+id,

    }).then(res=>console.log("GET: "+res))
      .its('status').should('to.be.equal', 200)
  })

  it('Delete - StoreOrderId', ()=>{
    cy.request({
      method: 'DELETE',
      url: 'https://petstore.swagger.io/v2/store/order/'+id,
    }).then(res=>console.log("DELETE: "+res))
      .its('status').should('to.be.equal', 200)
  })

  it('Get - StoreInventory', ()=>{
    cy.request({
      method: 'GET',
      url: 'https://petstore.swagger.io/v2/store/inventory'

    }).then(res=>console.log("GET: "+res))
      .its('status').should('to.be.equal', 200)
  })
})