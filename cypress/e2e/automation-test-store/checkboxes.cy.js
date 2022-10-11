///<reference types="cypress"/>

describe("Verify checkboxes", () => {
    it("Check and validate checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons")
            .invoke("removeAttr", "target")
            .click({ force: true });
        cy.get("#checkboxes > :nth-child(1) > input")
            .check()
            .should("be.checked");
    });
    it("Uncheck and validate checkbox", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons")
            .invoke("removeAttr", "target")
            .click({ force: true });
        cy.get(":nth-child(5) > input").uncheck().should("not.be.checked");
    });
    it("Check multiple checkboxes", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#dropdown-checkboxes-radiobuttons")
            .invoke("removeAttr", "target")
            .click({ force: true });
        cy.get("input[type='checkbox'")
            .check(["option-1", "option-2", "option-3", "option-4"])
            .should("be.checked");
    });
});
