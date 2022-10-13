/// <reference types="cypress"/>

describe("Alert and popups handling", () => {
    it("Confirm JS alert contains the correct text", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#popup-alerts")
            .invoke("removeAttr", "target")
            .click({ force: true });
        cy.get("#button1").click();
        cy.on("window:alert", (str) => {
            expect(str).to.equal("I am an alert box!");
        });
    });
    it("Validate JS confirm alert box works when clicking OK", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#popup-alerts")
            .invoke("removeAttr", "target")
            .click({ force: true });
        cy.get("#button4").click();
        cy.on("window:confirm", (str) => {
            return true;
        });
        cy.get("#confirm-alert-text").contains("You pressed OK!");
    });
    it("Validate JS confirm alert box works when clicking CANCEL", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#popup-alerts")
            .invoke("removeAttr", "target")
            .click({ force: true });
        cy.get("#button4").click();
        cy.on("window:confirm", (str) => {
            return false;
        });
        cy.get("#confirm-alert-text").contains("You pressed Cancel!");
    });
});
