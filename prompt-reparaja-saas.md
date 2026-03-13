Objetivo

Transformar o ReparaJá ERP atual em uma plataforma SaaS completa para oficinas automotivas, mantendo todas as funcionalidades existentes e adicionando recursos premium, com arquitetura escalável e multi-oficina.

O sistema deve permitir que várias oficinas utilizem a mesma plataforma, cada uma com seus próprios dados isolados.

--------------------------------------------------

FUNCIONALIDADES A IMPLEMENTAR

1) MULTI-TENANCY (MULTI-OFICINA)

Implementar arquitetura multi-tenant.

Criar tabela:

oficinas
id
nome
email
senha_hash
plano
ativo
created_at

Adicionar campo oficina_id nas tabelas:

clientes
veiculos
ordens
fotos
estoque_produtos
contas_pagar
contas_receber

Regras:

- Cada oficina acessa apenas seus próprios dados
- Implementar middleware que filtra dados por oficina_id
- Criar autenticação segura com login de oficina
- Gerenciar sessão de usuário

--------------------------------------------------

2) PORTAL DO CLIENTE

Criar portal acessado por link seguro.

Funcionalidades:

Botões:

Aprovar Orçamento
- altera status da ordem
- registra timestamp de aprovação
- envia notificação para oficina

Falar com Consultor
- abre WhatsApp da oficina
- ou chat interno

Regras:

- link seguro
- read-only
- expiração automática em 7 dias

Mostrar:

- previsão de entrega
- data da última atualização da ordem

--------------------------------------------------

3) SEGURANÇA E LGPD

Implementar segurança de dados.

Criptografar dados sensíveis:

telefone  
email  
CPF/CNPJ

Armazenamento de fotos:

AWS S3
ou Cloudflare R2
ou Google Cloud Storage

Permitir:

- exportação de dados
- exclusão de dados
- consentimento de uso de dados

Links do portal do cliente devem expirar automaticamente.

--------------------------------------------------

4) FUNCIONALIDADES EXISTENTES (MANTER)

As seguintes funcionalidades já existem e devem continuar funcionando:

- geração de PDF de orçamento
- portal do cliente
- histórico de veículo por placa
- controle de estoque
- alertas de reposição
- contas a pagar
- contas a receber
- dashboard com KPIs

Essas funcionalidades devem ser preservadas exatamente como estão.

--------------------------------------------------

5) MELHORIAS PREMIUM

Adicionar recursos avançados.

APP MOBILE

Para mecânicos e gerentes:

- atualizar status do reparo
- anexar fotos
- registrar peças utilizadas

--------------------------------------------------

INTEGRAÇÃO WHATSAPP

Enviar mensagens automáticas quando:

- orçamento criado
- orçamento aprovado
- veículo em reparo
- veículo pronto

--------------------------------------------------

CONTROLE DE PEÇAS USADAS

Criar tabela:

pecas_usadas
id
ordem_id
produto_id
quantidade
valor

Registrar todas as peças utilizadas em cada reparo.

--------------------------------------------------

RELATÓRIOS AVANÇADOS

Relatórios financeiros:

- faturamento por oficina
- faturamento consolidado
- ticket médio
- lucro por reparo
- volume mensal
- peças mais utilizadas

--------------------------------------------------

6) DASHBOARD SAAS GLOBAL

Criar painel administrativo global.

Rota:

/admin

Funcionalidades:

- visualizar oficinas cadastradas
- visualizar receita total da plataforma
- visualizar planos ativos
- visualizar status de pagamento
- bloquear ou ativar oficinas

KPIs:

- total de oficinas
- faturamento mensal
- crescimento da plataforma

--------------------------------------------------

7) CADASTRO DE NOVAS OFICINAS

Criar rota pública:

/cadastro-oficina

Funcionalidades:

Cadastro de oficina com:

nome da oficina  
email  
senha  
plano escolhido  

Após cadastro:

- criar oficina_id
- criar ambiente isolado
- redirecionar para login

--------------------------------------------------

8) STACK TECNOLÓGICA

Frontend

React + Vite

Backend

Node.js + Express

Banco de dados

PostgreSQL

Arquitetura

multi-tenancy baseada em oficina_id

--------------------------------------------------

9) DEPLOY

Frontend:

Vercel

Backend:

Render

--------------------------------------------------

10) BRANDING

Logo localizada em:

/public/logo.png

Cores principais:

Laranja #ff6600  
Azul escuro #0b3a6e

Idioma da aplicação:

Português (PT-BR)

--------------------------------------------------

11) OBJETIVO FINAL

Transformar o ReparaJá em uma plataforma SaaS escalável para milhares de oficinas, com arquitetura modular, código reutilizável e modelo de receita baseado em assinatura.
