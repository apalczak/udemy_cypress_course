/// <reference types="cypress"/>

describe("Test Contact Us form on WebdriverUni", () => {
    let user;

    before(() => {
        cy.fixture("example").as("user");
    });

    it("Should have a charset set to UTF-8", () => {
        cy.visit(
            "https://www.webdriveruniversity.com/Contact-Us/contactus.html"
        );
        cy.document().should("have.property", "charset").and("eq", "UTF-8");
    });
    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.visit(
            "https://www.webdriveruniversity.com/Contact-Us/contactus.html"
        );
        cy.get("@user").then((user) => {
            cy.get('[name = "first_name"]').type(user.first_name);
            cy.get('[name="last_name"]').type(user.last_name);
            cy.get('[name="email"]').type(user.email);
        });

        cy.get("textarea.feedback-input").type("New comment");
        cy.get('[type="submit"]').click();
        cy.get("h1").should("have.text", "Thank You for your Message!");
    });
    it("Should not be able to submit a successful submission as all fields are required", () => {
        cy.visit(
            "https://www.webdriveruniversity.com/Contact-Us/contactus.html"
        );
        cy.get('[name = "first_name"]').type("John");
        cy.get('[name="last_name"]').type("Doe");
        // cy.get('[name="email"]').type("johndoe@dummymail.com");
        cy.get("textarea.feedback-input").type("New comment");
        cy.get('[type="submit"]').click();
        cy.get("body").contains(`Error: Invalid email address`);
    });
});
