describe("Viewport Testing using customized Width And Height", () => {
    it(" Testing with different width and height", () => {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
        cy.viewport(360, 890);
        cy.get('[id="input-email"]').type("lambdatest.Cypress@disposable.com");
        cy.get('[id="input-password"]').type("Cypress123!!");
        cy.get('[type="submit"]').eq(0).click({ force: true });
    });
});
