
## parkNpay - fluxos + desenvolvimento

 - fluxo 1 - estacionamentos que tem sistema de ticket
   
 - fluxo 2 - sistema próprio parkNPay

  
→ Usuário Não Precisa Logar → Opção na primeira tela (continuar sem conta)

 
Usuários deslogados só podem:

(Ler Ticket) → (Pagar Ticket [Pix])

  
Usuários logados podem:

  
(Cadastrar Carro)

(Obter localização do Carro no Mapa)

(Cadastrar cartão)

(Histórico de pagamentos/estacionamentos)

(Criar sessão) → gerar ticket + pagar ticket

… Todas as funcionalidades.

  

→ Telas a serem implementadas:

→ Inicial:

-   “Você no estacionamento: ___” (pegar a localização)
    
-   Pagar Ticket (Verificar se existe sessão de estacionamento ativa ou no-auth/sóLerTicket)
    
-   Estacionamentos Parceiros (Lista de Estacionamentos)
    
-   Criar uma sessão (Gerar Ticket)
    

→ Sessão (Controlar sessão de estacionamento):

-   Se tiver sessão ativa:
    

-   Ver localização do carro no mapa
    
-   Ver QR CODE para entrar + sair do estacionamento
    
-   Terminar sessão (Pagar)
    

-   Se não:
    

-   Botão (Iniciar sessão → Você está aqui?
    

-   Localização ou Escolha de Estacionamento)
    

  

→ Fluxo de pagar:

-   Escolher método de pagamento (deslogado só pix)
    
-   PIX (Tela de Espera sobre confirmação de pagamento)
    
-   Cartão
    
-   Confirmação que o usuário pode sair do estacionamento
    

  

→ Meus Pagamentos:

-   Histórico de Pagamentos
    
-   Cadastrar nova forma de pagamento
    
-   Editar formas de pagamento
    

  
  

→Componentes:

→BottomBar (Comum a todas as telas) : Acessa as telas do app

-   Tela Inicial
    
-   Pagamentos
    
-   Sessão


inciar o projeto
Comandos
# npm install

