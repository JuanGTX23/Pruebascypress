 describe('Verificar filtros precio-caracteristicas', () => {
    //verificar en la pantalla principal el orden de los productos
 
 it("consultar filtro por mayor a menor con valores de $0 hasta $1000000 ", () => {
   cy.viewport(1191, 898);
   cy.visit("https://tiendaonline.movistar.com.ar/");
   cy.get("div.toolbar-sorter").click();
   cy.get("#sortQL").select("high_to_low");
    cy.get('[data-value="0_1000000"] > a').click();
    cy.get('[data-value="100000_200000"] > a').click();
 });
});