class ShopModule {
    //Page Objects
    links() {
        return cy.get('#split-button-menu').children('a')
    }
    amazonButton() {
        return cy.contains('Shop at Amazon')
    }
    walmartButton() {
        return cy.contains('Shop at Walmart')
    }
}

export default ShopModule;