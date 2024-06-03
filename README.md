# Q.A Challenge Luma Store

# Descrição do projeto

O teste foi desenvolvido conforme todos os requisitos solicitados, utilizando a linguagem JavaScript com o framework Cypress e o pacote Faker para geração de dados dinâmicos. Dessa forma, não é necessário alterar os dados manualmente, garantindo que sempre sejam utilizados dados diferentes em cada execução.  

O projeto segue a seguinte ordem de execução:  

1 - Cadastro no site  
2 - Pesquisa de produto  
3 - Seleção de produtos  
4 - Checkout do produto  
5 - Review do produto pos compra  

# Rezoes para escolher Cypress:

O framework é simples e fácil de usar e permite um retorno no mesmo instante, permitindo que acompanhe os resultados instantaneamente, facilitando a identificação e correção de erros.

# Vantagem

Cypress possui uma interface simples e é uma ferramenta completa de testes end-to-end que não precisa de pacotes adicionais para o realizar a programação básico.
O Cypress permite a criação de testes que se acemelham como um usuário real, verificando todo o fluxo da aplicação, incluindo requisições de rede e respostas.
Com o Cypress você pode simular vários estados de rede e ajustar o comportamento do navegador para testes mais consistentes. 
Cypress tem uma comunidade ativa e uma extensa documentação, é fácil encontrar soluções para problemas e obter suporte de outros desenvolvedores.

# Porque usar Cypress em vez do Playwright 

Cypress possue uma interface simples de compreender, permitindo que o usuário acompanhe os testes sendo executado em tempo real inspecionando os estados do DOM duração a execução. Já o Playwright não permite que acompanhe os testes em tempo real, apenas mostrando screenshots de algum passos que são executados durante os testes dificultando os testes.
Cypress por ser mais antigo que o Playwright, possui uma documentação excelente e mais completa, rica em detalhes permitindo soluções para diversos problemas

# Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 12 ou superior)

# Instruções de instalação e execução

1 - Baixe o projeto [GitHub](https://github.com/calegariosouza/LumaStoreCodesh).  
2 - Exporte a LumaStoreCodesh-main.zip e acesse a raiz do projeto.  
2 - Dentro da pasta do projeto, clique com o botão direito e abra com o terminal.  
3 - No terminal, se não tiver aberto a partir da pasta do projeto, navegue até o diretório correto e execute o comando: **npm install**.  
4 - Apos realizar a instalação dos modulos do cypress, rode o comando: **npm run test**.  
4 - Quando o Cypress abrir, selecione "E2E Testing".  
5 - Escolha o navegador desejado.  
6 - Após selecionar o navegador, o navegador do Cypress será aberto. Selecione o arquivo **sc01.cy.js** que corresponde ao teste desenvolvido.  
**Observação:** Caso tenha algum antivírus instalado em seu computador, recomenda-se pausá-lo, pois o Cypress realiza um acesso remoto no navegador e alguns antivírus podem reconhecer isso como uma ameaça, bloqueando e causando erros na execução do teste.    

# Instruções de acesso aos arquivos

1 - O arquivo  **sc01.cy.js** está dentro da pasta cypress/e2e. Nesse arquivo contem todos os blocos de códigos que foram desenvolvidos para realizar o passo a passo mencionado na **Descrição**.  
2 - Na pasta **Pages** contem os arquivos onde ficam armazenamos os elementos utilizados para executar cada ação, separado por modulos: Cadastro, Pesquisa, Checkout e Produto.  


>  This is a challenge by [Coodesh](https://coodesh.com/)
