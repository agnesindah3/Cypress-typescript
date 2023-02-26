export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'    // variabel yang mengandung nilai 'Sauce Labs backpack

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click() // klik atribute html yang mengandung kata dari variabel link_sauceLabsBackpack
        cy.contains('Sauce Labs Backpack').should('be.visible') // atribute yang mengandung 'Sauce Labs Backpack' seharusnya tampil
    }

    addToCart(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click() // add to cart
    }

    removeFromCart(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click() // remove from cart
    }
}
