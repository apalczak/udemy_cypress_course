/// <reference types="cypress"/>

describe("Iterate over elements", () => {
    it("Log information of all hair care products", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']")
            .contains("Hair Care")
            .click();
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log(`Index: ${index} : ${$el.text()}`);
        });
    });

    it("Add specific product to cart", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path=']")
            .contains("Hair Care")
            .click();
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log(`Index: ${index} : ${$el.text()}`);
        });

        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            if ($el.text().includes("Seaweed")) {
                cy.wrap($el).click();
            }
        });
    });
});
