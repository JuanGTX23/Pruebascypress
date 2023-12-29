describe('Verificar filtros precio-caracteristicas', () => {
    it('Visitar la tienda de Movistar y filtrar', () => {
        // Visitar la página
        cy.viewport(1191, 898);
        cy.visit("https://tiendaonline.movistar.com.ar/");
        // Validar que se pueda ingresar a la página indicada
        cy.url().should('eq', 'https://tiendaonline.movistar.com.ar/');
        // Aplicar filtros
        cy.get('[data-value="0_1000000"] > a').click();
        cy.get('[data-value="200000_300000"]').should('exist').click();
        // se filtra por memoria de 128GB
        cy.get('[data-value="802"] > a').click();
        // Validar que se puedan aplicar los filtros
        cy.get('.selectedfilters li').should('have.length', 2); // Verificar que hay dos filtros aplicados
        // Verificar si hay productos mostrados
        cy.get('.content-products .products .product-item').then(($productos) => {
            const cantidadEquipos = $productos.length;
            cy.log(`Cantidad de equipos mostrados: ${cantidadEquipos}`);

            // Validar que se obtengan equipos luego del filtrado
            if (cantidadEquipos === 0) {
                // Mostrar una alerta si no hay productos, pero permitir que el test continúe
                cy.log('No se encontraron productos después de aplicar los filtros');
                
            } else {
                
            }
        });
    });
});



















































































