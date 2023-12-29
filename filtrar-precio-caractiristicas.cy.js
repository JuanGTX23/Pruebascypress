describe('Verificar filtros precio-caracteristicas', () => {
    //Se verificara en la pantalla principal el filtro por precio y caracteristica

it('Visitar la tienda de Movistar y filtrar', () => {
    cy.viewport(1191, 898);
    cy.visit("https://tiendaonline.movistar.com.ar/");
    cy.get('[data-value="0_1000000"] > a').click();
    cy.get('[data-value="200000_300000"] > a').click();
    cy.get('[data-value="802"] > a').click();
});



});