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
    it("Should be able to output log with the name of the link", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get(`a[href$="contact"]`)
            .click()
            .then((item) => {
                cy.log(item[0].innerText);
            });
    });
    it.only("Validate properties of the Contact Us Page", () => {
        cy.visit(
            "https://www.automationteststore.com/index.php?rt=content/contact"
        );
        cy.contains("#ContactUsFrm", "Contact Us Form")
            .find("#field_11")
            .should("contain", "First name");
    });
});
