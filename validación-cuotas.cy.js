describe('Buscar el equipo, con sus cuotas respectivamente', () => {
    it('Ingresar a la página y buscar por nombre de equipo (Galaxy a14 4G) de la lista validar cuotas ahora 3, Banco Santander-visa', () => {
        // Visitar la página
        cy.viewport(1191, 898);
        cy.visit("https://tiendaonline.movistar.com.ar");

         // Verificar que el producto existe antes de realizar más acciones
        cy.get('.product-item-name .name').contains('Galaxy A14 4G').should('exist');
        // Buscar el tercer elemento de la lista de productos (índice 2 representa el tercer elemento)
        cy.get('.products li.product-item').eq(2).click();
        // Verificar cuotas de banco Santander-Visa
        cy.get("#open-installments-modal").click();
        cy.get("#inputbank").should('be.visible').click();
        cy.get('#ui-id-42').click({ force: true });
        cy.get("#inputCard").click();
        cy.get('[data-card="Visa"] > span').click();
        cy.get('#calculate_btn > .btn-primary').click();

        // Validar que se indique que el equipo puede ser pagado en 3 cuotas sin interés
        cy.get('table tbody tr').contains('Ahora 3 cuotas').should('exist');

        // Verificar si aparecen ahora 18 cuotas y ahora 24 cuotas y mostrar una alerta
        cy.get('table tbody tr').each(($row) => {
            const textoEnFila = $row.text();
            if (textoEnFila.includes('Ahora 18 cuotas') || textoEnFila.includes('Ahora 24 cuotas')) {
                cy.log('ALERTA: Se encontró "Ahora 18 cuotas" o "Ahora 24 cuotas" en la tabla');
               
            }
        });
    });
    it('Ingresar a la página y buscar el tercero de la lista, validar cuotas ahora 3,Financieros-Mastercard',() => {
  cy.viewport(1191, 898);
  cy.visit("https://tiendaonline.movistar.com.ar");

  
  //Eligira el 3 de la lista y lo seleccionara
  cy.get('.products li.product-item').eq(2).click();
    
  cy.get("#open-installments-modal").click();
  //Espera a que el menú desplegable de bancos esté visible
  cy.get("#inputbank").should('be.visible').click();

  // selecciona forzadamente la opciones visible
  cy.get('#ui-id-6').click({ force: true });
  // Selección de tarjeta y cálculo de cuotas
  cy.get("#cardSelector").click();
  cy.get('[data-card="Mastercard"] > span').click();
  cy.get("#calculate_btn > button").click();

  
        // Validar que se indique que el equipo puede ser pagado en 3 cuotas sin interés
        cy.get('table tbody tr').contains('Ahora 3 cuotas').should('exist');

        // Verificar si aparecen ahora 18 cuotas y ahora 24 cuotas y mostrar una alerta
        cy.get('table tbody tr').each(($row) => {
            const textoEnFila = $row.text();
            if (textoEnFila.includes('Ahora 18 cuotas') || textoEnFila.includes('Ahora 24 cuotas')) {
                cy.log('ALERTA: Se encontró "Ahora 18 cuotas" o "Ahora 24 cuotas" en la tabla');
               
            }
        });
  
});
    
});




















