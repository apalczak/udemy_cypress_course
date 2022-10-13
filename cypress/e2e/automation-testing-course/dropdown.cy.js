///<reference types="cypress"/>

describe("Interact with dropdown lists", () => {
    it("Check and validate radio-buttons", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons")
            .invoke("removeAttr", "target")
            .click({ force: true });
        cy.get("#dropdowm-menu-1").select("c#").should("have.value", "c#");
        cy.get("#dropdowm-menu-2")
            .select("testng")
            .should("have.value", "testng");
        cy.get("#dropdowm-menu-3")
            .select("jquery")
            .should("have.value", "jquery");
    });
});
