 describe('Verificar filtro de mayor a menor', () => {
    //verificar en la pantalla principal el orden de los productos
 
 it("consultar filtro por mayor a menor con valores de $100000 hasta $300000 ", () => {
   cy.viewport(1191, 898);
   cy.visit("https://tiendaonline.movistar.com.ar/");
   cy.get("div.toolbar-sorter").click();
   cy.get("#sortQL").select("high_to_low");
    cy.get('[data-value="0_1000000"] > a').click();
    // Validar que se puedan aplicar los filtros
 
    cy.get('[data-value="100000_200000"] > a').should('exist').click();
 //Verificar la cantidad de equipos mostrados
  cy.get('.content-products .products .product-item').then(($productos) => {
      const cantidadEquipos = $productos.length;
      cy.log(`Cantidad de equipos mostrados: ${cantidadEquipos}`);
      // Mostrar una alerta si no hay productos
      if (cantidadEquipos === 0) {
          cy.log('ALERTA: No se encontraron productos después de aplicar los filtros');
          
      } else {
          
      }
  });
 });
});