/// <reference types="cypress" />

describe("Interact with dropdown lists ", () => {
  it("Select specific values", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#dropdowm-menu-1")
      .select("C#")
      .should("have.value", "c#")
      .contains("C#");
  });
});
