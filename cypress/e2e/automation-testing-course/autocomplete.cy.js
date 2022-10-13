/// <reference types="cypress"/>

describe("Autocomplete dropdown lists", () => {
    it("Select specific values via select dropdown with autocomplete", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#autocomplete-textfield")
            .invoke("removeAttr", "target")
            .click({ force: true });
        cy.get("#myInput").type("A");
        cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
            const product = $el.text();
            const productToSelect = "Avacado";
            if (product === productToSelect) {
                $el.click();
                cy.get("#submit-button").click();
            }
        });
        cy.url().should("include", "Avacado");
    });
});
