/// <reference types="cypress"/>

describe("Test Contact Us form on Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.xpath(`//a[contains(@href,'contact')]`).click();
        cy.get("#ContactUsFrm_first_name").type("John");
        cy.get("#ContactUsFrm_email").type("johndoe@dummymail.com");
        cy.get("#ContactUsFrm_enquiry").type("New enquiry");
        cy.get(".col-md-6 > .btn").click();
    });
});
