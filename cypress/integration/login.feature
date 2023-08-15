Feature: Registrar Usuario
  Como usuario
  Quiero acceder a la opcion Register
  Para registrar un usuario

  Scenario: Register user successfully
    Given Estoy en la página de inicio
    When hago click en Register opcion
    Then Debería ver la página de registro de nuevo usuario.