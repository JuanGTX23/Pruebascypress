describe('Verificar cuotas y producto', () => {

 it("Ingresar a la pagina y buscar el tercero de la lista y verificar cuotas de banco Santander-Visa", () => {
      cy.viewport(1191, 898); 
  cy.visit("https://tiendaonline.movistar.com.ar");
cy.get('.products li.product-item')  //  clase de los elementos de la lista de productos
  .eq(2) // El índice 2 representa el tercer elemento ya que se arranca del elemento 0
  .click();
     cy.get("#open-installments-modal").click();
     cy.get("#inputbank").click();
     cy.get("#ui-id-42").click();
     cy.get("#inputCard").click();;
     cy.get('[data-card="Visa"] > span').click();
     cy.get('#calculate_btn > .btn-primary').click();
    cy.get('table')  
  .contains('tbody tr', 'Ahora 3 cuotas')
  .should('exist');

  })

  it('Ingresar a la pagina, buscar el equipo Samsung A14 4G y verificar cuotas de banco Servicios Financieros-Mastercard ', () => {
  cy.viewport(1191, 898);
  cy.visit("https://tiendaonline.movistar.com.ar");
   cy.get('.products li.product-item')  // Reemplaza con la clase real de los elementos de la lista de productos
    .contains('.name', 'Galaxy A14 4G')  //  clase del nombre del producto a buscar
    .click()
  cy.get("#open-installments-modal").click();
  //selecciona la lista depegable de los bancos
  cy.get("#inputbank").click();
  //selecciona la opcion del banco
  cy.get('#ui-id-6').click();
  //selecciona la lista depegable de las tarjetas
  cy.get("#cardSelector").click();
  //selecciona la tarjeta 
  cy.get('[data-card="Mastercard"] > span').click();
  //hace clic en el boton para calcular
  cy.get("#calculate_btn > button").click();

  
});
  
});
