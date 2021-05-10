Feature: Login
  Eu como usuário
  Gostaria de fazer Login
  Para acessar o sistema

  Scenario: Login com sucesso
    Given Eu preencho o e-mail
    And Eu preencho a senha
    When Eu clicar em Entrar
    Then Eu vejo o botão Salvar
    
    
