# Pruebascypress

Se agrego una exepción para que pueda continuar con el flujo en el archivo e2e.js
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
}) 


