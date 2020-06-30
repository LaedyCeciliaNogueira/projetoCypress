Cypress.Commands.add('postPet', (id, name)=>{
  it('Post Pet', ()=>{
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
    })
  })
})