// describe('My First Test', () => {
//     it('finds the content "type"', () => {
//         cy.visit('https://example.cypress.io')
//         cy.contains('type').click()
//         cy.url().should('include', '/commands/actions')

//         cy.get('.action-email')
//         .type('fake@email.com')
//         .should('have.value', 'fake@email.com')
//     })
// })

describe('OXゲームで勝敗が決定した時のテスト', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('Xが勝利', () => {
        cy.get('[data-e2e="button-0"]').click().get('[data-e2e="button-0"]').should('have.text', 'X')
        cy.get('[data-e2e="button-1"]').click().get('[data-e2e="button-1"]').should('have.text', 'O')
        cy.get('[data-e2e="button-3"]').click().get('[data-e2e="button-3"]').should('have.text', 'X')
        cy.get('[data-e2e="button-4"]').click().get('[data-e2e="button-4"]').should('have.text', 'O')
        cy.get('[data-e2e="button-6"]').click().get('[data-e2e="button-6"]').should('have.text', 'X')
        cy.get('[data-e2e="status"]').should('have.text', 'Winner: X')
    })
})