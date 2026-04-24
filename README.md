## 🔐 Test Automation - Login Suite (Cypress)

## 📝 Sobre o Projeto
Este repositório contém a automação de testes para o fluxo de autenticação da plataforma Automationpratice. O foco principal foi garantir a segurança e a integridade da experiência do usuário, validando desde o acesso bem-sucedido até o tratamento de erros críticos no formulário de login.

O projeto utiliza Cypress para realizar testes de ponta a ponta (E2E), garantindo que as mensagens de feedback do sistema estejam corretas e acessíveis.

## 🕹️ Cenários de Teste Implementados
A suíte de testes cobre os seguintes comportamentos:

Login com Sucesso: Valida a entrada com credenciais válidas e confirma se o alerta de "Login realizado" é exibido.

Senha Incorreta: Verifica se o sistema bloqueia o acesso e exibe a mensagem de erro "Senha inválida" ao usar uma senha curta ou errada.

E-mail Inválido: Testa o comportamento do campo de usuário ao receber formatos de dados inesperados (ex: números ou e-mails sem formatação).

Campos Vazios: Garante que o sistema impede o envio do formulário sem preenchimento, exibindo a validação de "E-mail inválido".

## 🛠️ Tecnologias Utilizadas
Cypress: Framework de automação para testes rápidos e estáveis no navegador.

JavaScript (ES6): Linguagem utilizada para criar os scripts de automação.

Chai: Biblioteca de asserções para validar os textos e elementos na tela (should('have.text', ...)).

## 📁 Estrutura de Arquivos
Conforme a imagem do repositório, a organização segue o padrão:

cypress/e2e/login.cy.js: Contém todos os casos de teste de login.

cypress.config.js: Arquivo de configuração principal do framework.

package.json: Gerenciamento de scripts e dependências do projeto.
