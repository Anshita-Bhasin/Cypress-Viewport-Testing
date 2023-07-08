describe("Viewport Testing using defined presets", () => {
    const presets =
        ['macbook-15', 'samsung-note9', 'ipad-mini', 'iphone-xr']
        ;
    it("Passing single preset", () => {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
        cy.viewport('ipad-2');
        cy.get('[id="input-email"]').type("lambdatest.Cypress@disposable.com");
        cy.get('[id="input-password"]').type("Cypress123!!");
        cy.get('[type="submit"]').eq(0).click({ force: true });

    });
    it(`Passing multiple presets`, () => {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
        presets.forEach((preset) => {
            cy.viewport(preset)
            cy.get('input[name="search"]').eq(0).type("Macbook");
        })
    });

});