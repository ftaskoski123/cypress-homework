/// <reference types="cypress" />

describe("Test Contact us form via WebdriverUni", () => {
  it.only("Should be able to submit a successful submission via contact us form", () => {
    // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("Blogs");
    cy.get('[name="email"]').type("joe.blogs@hotmail.com");
    cy.get("textarea.feedback-input").type("This is fun");
    cy.get('[type="submit"]').click();
    // cy.get("h1").should("have.text", "Thank You for your Message!");
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it("Should Not be able to submit a successful submission via contact us form as all fields are required ", () => {
    // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.get('[name="first_name"]').type("Joe");
    cy.get('[name="last_name"]').type("Blogs");
    cy.get("textarea.feedback-input").type("This is fun");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error: all fields are required");
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });
});
