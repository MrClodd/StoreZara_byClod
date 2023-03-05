describe('1. Google the word “automation”, 2. Find the resulting Wikipedia link, 3. Check in which year the first automatic process was carried out, 4. Take a screenshot of the Wikipedia page', () => {
  it('Pass correctly', () => {
      cy.visit('https://www.google.es/')

    // The button is visible
      cy.get('#L2AGLb > .QS5gu').scrollIntoView().should('be.visible')

    // Click on the button
      cy.get('#L2AGLb > .QS5gu').click()

    // Find Google the word “automation”
      cy.get('.gLFyf').type('automatización').type('{enter}')

    // Find the resulting Wikipedia link
      cy.get('.g > :nth-child(1) > [jscontroller="SC7lYd"] > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').scrollIntoView().should('be.visible')

    // Click on the button
      cy.get('.g > :nth-child(1) > [jscontroller="SC7lYd"] > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').click()

    // Check in which year the first automatic process was carried out 
      cy.wait(3000)
      cy.origin('https://es.wikipedia.org', () => {
      cy.contains('hacia el año 270').scrollIntoView()
      
    // Take a screenshot of the Wikipedia page
      cy.screenshot()
  })
    })
  })