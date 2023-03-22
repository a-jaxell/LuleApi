describe("Check if localhost is running", () => {
    it("Should be able to access localhost", () => {
        cy.visit("http://localhost:8080");
        cy.contains("Lule Northern Lights Cinema");
    });
});