/// <reference types="cypress"/>

describe("Add multiple items to cart", () => {
    beforeEach(() => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']")
            .contains("Hair Care")
            .click();
    });

    before(() => {
        cy.fixture("product").as("products");
    });

    it("Add specific product to cart", () => {
        cy.get("@products").then((products) => {
            products.productName.forEach((productName) => {
                cy.log(productName);
                cy.addProductToCart(productName);
            });
        });

        //
    });
});
