/// <reference types="cypress"/>

describe("Test Contact Us form on WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit(
            "https://www.webdriveruniversity.com/Contact-Us/contactus.html"
        );
        cy.get('[name = "first_name"]').type("John");
        cy.get('[name="last_name"]').type("Doe");
        cy.get('[name="email"]').type("johndoe@dummymail.com");
        cy.get("textarea.feedback-input").type("New comment");
        cy.get('[type="submit"]').click();
    });
    it("Should not be able to submit a successful submission as all fields are required", () => {});
});
