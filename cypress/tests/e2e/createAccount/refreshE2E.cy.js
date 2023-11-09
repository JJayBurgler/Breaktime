import StartModule from "../../../components/1_startModule"
import DiscoverModule from "../../../components/2_discoverModule"
import LearnModule from "../../../components/3_learnModule"
import ShopModule from "../../../components/4_shopModule"
import AllSetModule from "../../../components/5_allsetModule"

const startModule = new StartModule();
const discoverModule = new DiscoverModule();
const learnModule = new LearnModule();
const shopModule = new ShopModule();
const allsetModule = new AllSetModule();

describe('Refresh E2E', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('refreshBaseURL'))
  })

  it('User goes through all modules', () => {
    // Header
    startModule.nextArrowButton().click()
    cy.wait(2000)
  
    // Quiz
    discoverModule.startQuizButton().scrollIntoView().click()
    cy.wait(2000)
    discoverModule.quizAnswerList().first().click() // question 1
    cy.wait(2000)
    discoverModule.quizAnswerList().first().click() // question 2
    cy.wait(2000)
    discoverModule.quizAnswerList().first().click() // question 3
    cy.wait(2000)
    discoverModule.quizAnswerList().first().click() // question 4
    cy.wait(2000)
    discoverModule.nextArrowButton().click()
    cy.wait(2000)

    // Listicle
    learnModule.startListicleButton().scrollIntoView().click()
    cy.wait(2000)
    learnModule.nextCardButton().click()
    cy.wait(2000)
    learnModule.nextCardButton().click()
    cy.wait(2000)
    learnModule.nextArrowButton().click()

    // Product Links
    shopModule.amazonButton().scrollIntoView().click()
    shopModule.links().should('be.visible')

    // Congrats
    allsetModule.congratsText().scrollIntoView().should('be.visible')
  })
})
