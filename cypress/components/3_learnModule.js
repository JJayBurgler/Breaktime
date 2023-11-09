class LearnModule {
    //Page Objects
    startListicleButton() {
        return cy.contains('Listicle')
    }
    nextCardButton() {
        return cy.get('.inner-next')
    }
    prevCardButton() {
        return cy.get('.inner-prev')
    }
    skipButton() {
        return cy.get('.btn-skip')
    }
    nextArrowButton() {
        return cy.get('.next-step-button').last()
    }
}

export default LearnModule;