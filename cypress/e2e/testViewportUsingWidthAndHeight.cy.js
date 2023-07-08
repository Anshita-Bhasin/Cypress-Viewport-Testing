

describe("Viewport Testing using customized Widhth And Height", () => {
    const viewports = [

        { width: 1280, height: 720 }, // Desktop
        { width: 320, height: 480 }, // Mobile portrait
        { width: 768, height: 1024 },// Tablet
    ];
    it("Passing single width and height", () => {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
        cy.viewport(360, 890);
        cy.get('[id="input-email"]').type("lambdatest.Cypress@disposable.com");
        cy.get('[id="input-password"]').type("Cypress123!!");
        cy.get('[type="submit"]').eq(0).click({ force: true });

    });
    it(`Passing multiple width and height`, () => {
        cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=common/home");
        viewports.forEach((viewport) => {
            cy.viewport(viewport.width, viewport.height);
            cy.get('input[name="search"]').eq(0).type("Macbook");
        })
    });

});