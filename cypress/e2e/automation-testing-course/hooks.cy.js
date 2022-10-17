///<reference types="cypress"/>

describe("Hooks", () => {
    before(() => {
        cy.log("Runs once before all tests in the block");
    });

    after(() => {
        cy.log("Runs once after all tests in the block");
    });

    beforeEach(() => {
        cy.log("Runs before every test in the block");
    });

    afterEach(() => {
        cy.log("Runs after every test in the block");
    });

    it("First example test", () => {
        cy.log("First test");
    });

    it("Second example test", () => {
        cy.log("Second test");
    });
});
