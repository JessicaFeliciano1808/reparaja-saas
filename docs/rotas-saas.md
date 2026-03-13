# Estrutura SaaS – ReparaJá

Este documento define as rotas principais da evolução do sistema ReparaJá para uma plataforma SaaS multi-oficina.

---

## 1. Cadastro de Oficinas

Rota:

/cadastro-oficina

Página pública onde oficinas podem criar conta na plataforma.

Campos do formulário:

- Nome da Oficina
- CNPJ
- Nome do Responsável
- Email
- Telefone
- Senha
- Plano (Starter / Pro / Enterprise)

Fluxo de funcionamento:

1. Usuário preenche o formulário
2. Sistema cria registro na tabela oficinas
3. Gera oficina_id
4. Redireciona para login da oficina

Tabela no banco:

oficinas

id  
nome  
cnpj  
responsavel  
email  
telefone  
senha_hash  
plano  
ativo  
data_criacao

---

## 2. Login da Oficina

Rota:

/login

Permite que a oficina acesse o sistema usando:

- email
- senha

Após login:

/dashboard

---

## 3. Dashboard da Oficina

Rota:

/dashboard

Cada oficina acessa apenas seus próprios dados.

Todos os registros são filtrados por:

oficina_id

Módulos disponíveis:

- Clientes
- Veículos
- Ordens de serviço
- Fotos do reparo
- Estoque
- Contas a pagar
- Contas a receber
- Relatórios

---

## 4. Portal do Cliente

Rota pública:

/portal/:token

O cliente pode:

- visualizar orçamento
- aprovar orçamento
- falar com consultor
- ver previsão de entrega
- acompanhar status do reparo

Segurança:

- links expiram em 7 dias
- acesso somente leitura

---

## 5. Painel SaaS da Plataforma

Rota:

/admin

Acesso restrito ao administrador do sistema.

KPIs exibidos:

- oficinas cadastradas
- oficinas ativas
- receita mensal recorrente (MRR)
- novas oficinas no mês
- total de ordens na plataforma

Tabela de oficinas:

- nome da oficina
- plano
- status
- número de ordens
- mensalidade

Ações administrativas:

- visualizar dados da oficina
- alterar plano
- bloquear oficina
- excluir oficina

---

## 6. Multi-tenancy

O sistema utiliza arquitetura multi-oficina.

Todas as tabelas possuem:

oficina_id

Exemplo de tabelas:

clientes  
veiculos  
repair_orders  
estoque_produtos  
contas_pagar  
contas_receber  

Cada oficina acessa apenas seus próprios dados.

---

## 7. Segurança e LGPD

Requisitos de proteção de dados:

- criptografia de dados sensíveis
- consentimento explícito do usuário
- exportação de dados
- exclusão permanente de dados
- armazenamento seguro de fotos

Storage recomendado:

- AWS S3
- Cloudflare R2
- Google Cloud Storage

---

## 8. Stack Tecnológica

Frontend:

React + Vite

Backend:

Node.js + Express

Banco de Dados:

PostgreSQL

Deploy:

Frontend: Vercel  
Backend: Render

---

## 9. Branding

Logo do sistema:

/public/logo.png

Cores oficiais:

Laranja  
#ff6600

Azul escuro  
#0b3a6e

---

## 10. Objetivo Final

Transformar o ReparaJá em uma plataforma SaaS escalável para oficinas automotivas, oferecendo:

- gestão completa da oficina
- comunicação digital com clientes
- controle financeiro
- portal de acompanhamento do reparo
- modelo de monetização por assinatura
