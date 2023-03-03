/// <reference types="cypress" />

describe("Verify checkboxes", () => {
  it("Check and validate checkbox", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    // cy.get("#checkboxes > :nth-child(1) > input").check();

    // cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");

    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    cy.get("@option-1").check().should("be.checked");

    cy.get('[value="green"]').check().should("be.checked");

    cy.get(":nth-child(5) > input").uncheck().should("not.be.checked");
  });
  it("Check multiple checkboxes", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("input[type='checkbox']").check().should("be.checked");
  });
});
