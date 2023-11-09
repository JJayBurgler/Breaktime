class DiscoverModule {
    //Page Objects
    startQuizButton() {
        return cy.contains('Quiz')
    }
    quizAnswerList() {
        return cy.get('.quiz__question-list').children('li')
    }
    nextArrowButton() {
        return cy.get('.next-step-button').first()
    }
    resultsText(){
        return cy.contains('Results')
    }

    randomAnswer() {
        this.quizAnswerList().its('length').then((len) => Cypress._.random(0,len-1)).then((numb) => {
            return this.quizAnswerList().eq(numb).click()
          })
    }
}

export default DiscoverModule;