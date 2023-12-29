describe('Verificar condiciones de pago para el tercer equipo banco credicoop', () => {
  it('Visitar la tienda de Movistar y veficar que no exista "Ahora 60 cuotas" en el tercer producto de la lista', () => {
   cy.viewport(1191, 898);

     cy.visit("https://tiendaonline.movistar.com.ar/")  
     cy.get('.products li.product-item')  //  clase de los elementos de la lista de productos
  .eq(2) // El índice 2 representa el tercer elemento ya que se arranca del elemento 0
  .click();
       cy.get("#open-installments-modal").click();
       cy.get("#inputbank").click();
       cy.get("#ui-id-21").click();
       cy.get("#cardSelector").click();
       cy.get('[data-card="Visa"] > span').click();
       cy.get('#calculate_btn > .btn-primary').click();
       cy.get('table')  // Busca la tabla en los elementos
         .contains('tbody tr', 'Ahora 60 cuotas de')  // En la misma tabla busca los elementos que contengan 'ahora 60'
         .should('not.exist');
      
      

      
      
      
      
    });
     
  
  });
