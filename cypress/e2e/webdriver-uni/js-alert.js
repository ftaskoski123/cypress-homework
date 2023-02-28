/// <reference types="cypress" />

describe("Handle JS alerts", () => {
  it("Confirm js alert contains the correct text", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button1 > p").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });
});
