/// <reference types="cypress" />

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("Challenge", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".thumbnail").its("length").should("be.eq", 16); // moze i vaka  cy.get(".thumbnail").should("have.length", 16)
    // cy.get(".productcart").should("have.attr", "title", "Add to Cart"); // moze i vaka   cy.get(".productcart").invoke('attr','title').should('include','Add to Cart')
    cy.get(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });
  it.only("Calculate total", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    // cy.get("@productThumbnail")
    //   .find(".oneprice")
    //   .each(($el, index, $list) => {
    //     cy.log($el.text());
    //   });
    var itemsTotal = 0;
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");
    cy.get("@itemPrice").then(($linkText) => {
      var itemsPriceTotal = 0;
      var itemPrice = $linkText.split("$");
      var i;
      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[0]);
        itemsPriceTotal += Number(itemPrice[i]);
      }
      itemsTotal += itemsPriceTotal;
      cy.log(`Non sale price items total: ${itemsPriceTotal}`).then(() =>{

      })
    });
  });
});
