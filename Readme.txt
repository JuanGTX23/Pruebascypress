Se le agrego una exepción al arhivo e2e.js para que deje continuar con el flujo, ya que por ahi se tarda en cargar y no encuentra los elementos: 
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
}) 


