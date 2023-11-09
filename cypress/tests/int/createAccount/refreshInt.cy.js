import StartModule from "../../../components/1_startModule"
import DiscoverModule from "../../../components/2_discoverModule"
import ShopModule from "../../../components/4_shopModule"

const startModule = new StartModule();
const discoverModule = new DiscoverModule();
const shopModule = new ShopModule();

describe('Refresh Tests', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('refreshBaseURL'))
  })

  it('Random Quiz Completion', () => {
    //use random inputs to help cover all possibilities as it runs
    // Header
    startModule.nextArrowButton().click()
    cy.wait(2000)
  
    // Quiz
    discoverModule.startQuizButton().scrollIntoView().click()
    cy.wait(2000)
    discoverModule.randomAnswer() // question 1
    cy.wait(2000)
    discoverModule.randomAnswer() // question 2
    cy.wait(2000)
    discoverModule.randomAnswer() // question 3
    cy.wait(2000)

    cy.get("body").then($body => {
      if ($body.find('.quiz__question-list').length > 0) {   
        discoverModule.randomAnswer() // question 4
        cy.wait(2000)
      }
    })

    cy.get("body").then($body => {
      if ($body.find('.quiz__question-list').length > 0) {   
        discoverModule.randomAnswer() // question 5
        cy.wait(2000)
      }
    })

    discoverModule.resultsText().should('be.visible')
  })

  it('Verify amazon links', () => {
    shopModule.amazonButton().scrollIntoView().click()
    shopModule.links().each((link) => {
      cy.request(link.prop('href'))
    })
  })

  it('Verify walmart links', () => {
    shopModule.walmartButton().scrollIntoView().click()
    shopModule.links().each((link) => {
      cy.request(link.prop('href'))
    })
  })
})
