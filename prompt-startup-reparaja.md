prompt-startup-reparaja.mdObjetivo

Transformar o sistema ReparaJá ERP em uma plataforma SaaS completa para oficinas automotivas.

O sistema deve permitir que múltiplas oficinas utilizem a mesma plataforma, com dados isolados e modelo de assinatura mensal.

A aplicação deve manter todas as funcionalidades existentes e adicionar recursos de plataforma SaaS.

--------------------------------------------------

FUNCIONALIDADES A IMPLEMENTAR

1) LANDING PAGE

Criar página inicial pública do sistema.

Rota:

/

Conteúdo:

Título:
"O ERP Inteligente para Oficinas Automotivas"

Seções:

Hero
Explicação do sistema
Benefícios
Funcionalidades
Planos
Botão de cadastro

Botões principais:

"Começar Agora"
"Criar Conta"

Design:

usar cores

laranja #ff6600
azul escuro #0b3a6e

logo em

/public/logo.png

--------------------------------------------------

2) PÁGINA DE PLANOS

Rota:

/pricing

Mostrar planos SaaS.

Plano Start

R$ 99/mês

Funcionalidades:

clientes
veículos
ordens de serviço
estoque
financeiro básico
portal do cliente

Plano Pro

R$ 199/mês

Inclui:

múltiplos usuários
relatórios financeiros
dashboard avançado
controle de peças usadas

Plano Premium

R$ 399/mês

Inclui:

integração WhatsApp
app mobile
relatórios avançados
integrações externas

--------------------------------------------------

3) CADASTRO DE OFICINAS

Criar rota pública:

/cadastro-oficina

Formulário:

nome da oficina
email
senha
plano escolhido

Ao cadastrar:

criar registro na tabela oficinas

oficinas
id
nome
email
senha_hash
plano
ativo
created_at

Após cadastro:

redirecionar para login

--------------------------------------------------

4) LOGIN DE OFICINAS

Rota:

/login

Campos:

email
senha

Criar sessão autenticada.

Após login:

redirecionar para

/dashboard

--------------------------------------------------

5) DASHBOARD DA OFICINA

Rota:

/dashboard

Cada oficina deve visualizar apenas seus próprios dados.

Filtrar registros por

oficina_id

Mostrar:

clientes
veículos
ordens de serviço
estoque
financeiro

--------------------------------------------------

6) PORTAL DO CLIENTE

Link seguro para clientes acompanharem reparos.

Exemplo:

/portal/:token

Cliente pode:

ver orçamento
aprovar orçamento
falar com consultor
acompanhar status do reparo

Links devem expirar em 7 dias.

--------------------------------------------------

7) DASHBOARD SAAS ADMIN

Criar painel global da plataforma.

Rota:

/admin

Apenas administrador pode acessar.

Mostrar:

oficinas cadastradas
oficinas ativas
receita mensal
planos utilizados

Tabela de oficinas:

nome
plano
status
número de ordens
mensalidade

Ações:

alterar plano
bloquear oficina
ativar oficina

--------------------------------------------------

8) ARQUITETURA MULTI-TENANT

Adicionar campo

oficina_id

nas tabelas:

clientes
veiculos
ordens
fotos
estoque_produtos
contas_pagar
contas_receber

Cada oficina acessa apenas seus próprios dados.

--------------------------------------------------

9) STACK

Frontend

React + Vite

Backend

Node.js + Express

Banco

PostgreSQL

--------------------------------------------------

10) DEPLOY

Frontend

Vercel

Backend

Render

--------------------------------------------------

OBJETIVO FINAL

Transformar o ReparaJá em uma plataforma SaaS escalável para milhares de oficinas no Brasil.
