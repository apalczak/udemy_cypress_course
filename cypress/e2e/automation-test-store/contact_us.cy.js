/// <reference types="cypress"/>

describe("Test Contact Us form on Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get(`a[href$="contact"]`).click();
        cy.get("#ContactUsFrm_first_name").type("John");
        cy.get("#ContactUsFrm_email").type("johndoe@dummymail.com");
        cy.get("#ContactUsFrm_enquiry").type("New enquiry");
        cy.get(`button[title="Submit"]`).click();
        cy.get(".mb40 > :nth-child(3)").should(
            "have.text",
            "Your enquiry has been successfully sent to the store owner!".trim()
        );
    });
});
