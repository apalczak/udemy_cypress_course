/// <reference types="Cypress" />

describe("Obtainting data from tables", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table")
            .invoke("removeAttr", "target")
            .click({ force: true });
    });
    it("Calculate and asert the total ages of all users", () => {
        const userDetails = [];
        let totalAge = 0;
        cy.get("#thumbnail-1 td")
            .each(($el, index, $list) => {
                userDetails.push($el.text());
            })
            .then(() => {
                userDetails.map((tableDataElement) => {
                    if (Number(tableDataElement)) {
                        totalAge += Number(tableDataElement);
                    }
                });
                expect(totalAge).to.eq(322);
            });
    });
});
