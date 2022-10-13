/// <reference types="cypress"/>

describe("Alias, invoke, variables and iterating wrap up", () => {
    it("Calculate total of normal and sale products", () => {
        cy.visit("https://www.automationteststore.com/");

        cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
        cy.get(".thumbnail")
            .find(".pricenew")
            .invoke("text")
            .as("saleItemPrice");

        let priceTotal = 0;

        cy.get("@itemPrice").then(($linkText) => {
            let normalPriceTotal = 0;
            let itemPrice = $linkText.split("$");
            itemPrice.map((price) => {
                cy.log(price);
                normalPriceTotal += Number(price);
            });
            cy.log("Normal total price:" + normalPriceTotal);
            priceTotal += normalPriceTotal;
        });

        cy.get("@saleItemPrice")
            .then(($linkText) => {
                let salePriceTotal = 0;
                let itemPrice = $linkText.split("$");
                itemPrice.map((price) => {
                    cy.log(price);
                    salePriceTotal += Number(price);
                });
                cy.log("Sale total price:" + salePriceTotal);
                priceTotal += salePriceTotal;
            })
            .then(() => cy.log("Total:" + priceTotal));
    });
});
