describe(" Web Testing in Landscape Mode", () => {
    it("Passing viewport as Landscape ", () => {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
        cy.viewport('iphone-xr', 'landscape');
        cy.get('[id="input-email"]').type("lambdatest.Cypress@disposable.com");
        cy.get('[id="input-password"]').type("Cypress123!!");
        cy.get('[type="submit"]').eq(0).click({ force: true });
    });
    
});
