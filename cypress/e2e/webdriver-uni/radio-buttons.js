/// <reference types="cypress" />

describe("Verify radibuttons", () => {
  it("Check radiobuttons", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get('[value="green"]').check().should("be.checked");

    cy.get('[value="lettuce"]').should("not.be.checked");
    cy.get('[value="cabbage"]').should("be.disabled");
    cy.get('[value="lettuce"]')
      .should("be.enabled")
      .check()
      .should("be.checked");
    cy.get("#fruit-selects").select(0);
  });
});
