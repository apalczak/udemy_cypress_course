/// <reference types="cypress"/>

describe("Mouse actions", () => {
    it("Simulates mouse scroll into wiev", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#actions")
            .scrollIntoView()
            .invoke("removeAttr", "target")
            .click({ force: true });
    });
    it("Drag and drop a dragable item", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#actions")
            .scrollIntoView()
            .invoke("removeAttr", "target")
            .click({ force: true });
        cy.get("#draggable").trigger("mousedown", { which: 1 });
        cy.get("#droppable")
            .trigger("mousemove")
            .trigger("mouseup", { force: true })
            .should("contain", "Dropped");
    });
    it("Doubleclick an element", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#actions")
            .scrollIntoView()
            .invoke("removeAttr", "target")
            .click({ force: true });
        cy.get("#double-click")
            .trigger("dblclick")
            .should("have.class", "double");
    });
    it("Hold down the left mouse button on an given item", () => {
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#actions")
            .scrollIntoView()
            .invoke("removeAttr", "target")
            .click({ force: true });
        cy.get("#click-box")
            .trigger("mousedown", { which: 1 })
            .should("have.css", "background-color", "rgb(0, 255, 0)");
    });
});
