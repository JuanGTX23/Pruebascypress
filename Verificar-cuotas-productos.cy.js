describe('Verificar cuotas y producto', () => {

it("Ingresar a la pagina y buscar el tercero de la lista y verificar cuotas de banco Santander-Visa", () => {
     cy.viewport(1191, 898); 
 cy.visit("https://tiendaonline.movistar.com.ar");
cy.get('.products li.product-item')  //  clase de los elementos de la lista de productos
 .eq(2) // El índice 2 representa el tercer elemento ya que se arranca del elemento 0
 .click();
    cy.get("#open-installments-modal").click();
    cy.get("#inputbank").should('be.visible').click();
    cy.get('#ui-id-42').click({ force: true });
    cy.get("#inputCard").click();
    cy.get('[data-card="Visa"] > span').click();
    cy.get('#calculate_btn > .btn-primary').click();
   cy.get('table')  
 .contains('tbody tr', 'Ahora 3 cuotas')
 .should('exist');

 })

it('Ingresar a la pagina, buscar el equipo Samsung A14 4G y verificar cuotas de banco Servicios Financieros-Mastercard', () => {
  cy.viewport(1191, 898);
  cy.visit("https://tiendaonline.movistar.com.ar");

  cy.get('.products li.product-item')  //  elementos de la lista de productos
    .contains('.name', 'Galaxy A14 4G')  //  clase del nombre del producto a buscar
    .click();

  cy.get("#open-installments-modal").click();

  //Espera a que el menú desplegable de bancos esté visible
  cy.get("#inputbank").should('be.visible').click();

  // selecciona forzadamente la opciones visible
  cy.get('#ui-id-6').click({ force: true });
  // Selección de tarjeta y cálculo de cuotas
  cy.get("#cardSelector").click();
  cy.get('[data-card="Mastercard"] > span').click();
  cy.get("#calculate_btn > button").click();
});
  
});
