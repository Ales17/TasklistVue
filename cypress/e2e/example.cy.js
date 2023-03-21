// https://docs.cypress.io/api/introduction/api.html

before(() => {

  cy.visit('localhost:4173')

})

describe("TaskList Test", () => {
  it("adds the ask", () => {
     cy.get(".form-control").should("be.visible");
    cy.get(".form-control").type("Koupit rohlíky")
    cy.get(".btn-primary").click()
  });
   
  
 
});
