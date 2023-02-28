/// <reference types="cypress" />

describe("Cypress web security", () => {
  it("Validate visiting two different domains", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.visit("https://www.automationteststore.com/");
  });

  it("Should Not be able to submit a successful submission via contact us form as all fields are required ", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#automation-test-store").invoke("removeAttr", "target").click();
  });
  it("Origin", () => {
    cy.origin("webdriveruniversity.com", () => {
      cy.visit("/");
    });

    cy.origin("automationteststore.com", () => {
      cy.visit("/");
    });
  });
});
