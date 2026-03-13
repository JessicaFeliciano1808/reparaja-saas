You are a senior full-stack developer.

Improve the existing system "ReparaJá – ERP para Oficinas Automotivas" built with:

Frontend: React + Vite + TypeScript + Tailwind + ShadCN
Backend: Node.js + Express + TypeScript
Database: PostgreSQL with Drizzle ORM

The system already contains modules for:
clientes, veículos, ordens de serviço, estoque, financeiro e portal do cliente.

Your task is to evolve the system to a scalable SaaS platform for multiple automotive repair shops.

Implement the following improvements.

--------------------------------------

1) APPROVE ESTIMATE BUTTON (CLIENT PORTAL)

Inside the route:

/portal/:token

Add two new buttons visible to the customer:

- "Aprovar Orçamento"
- "Falar com Consultor"

Behavior:

If customer clicks "Aprovar Orçamento":

• Update repair_orders.status to:
"approved_by_customer"

• Save approval timestamp

• Show confirmation message:
"Orçamento aprovado com sucesso"

• Trigger WhatsApp notification to the workshop.

If customer clicks "Falar com Consultor":

Open WhatsApp link:

https://wa.me/{workshop_phone}?text=Olá,%20quero%20falar%20sobre%20meu%20orçamento

--------------------------------------

2) REAL-TIME DELIVERY DATE

Improve the field:

"Previsão de Entrega"

Requirements:

• Add column in database:

repair_orders
delivery_forecast_date

• Show this date in:

Customer Portal
Repair Order Detail
Dashboard

• Highlight if delivery date is overdue.

--------------------------------------

3) LGPD DATA SECURITY

Prepare the system for Brazilian data protection law (LGPD).

Implement:

• Secure storage of customer photos
• Private storage path
• Token based access for portal

Add:

- privacy policy page
- terms of use page

Ensure:

• Portal access only via secure token
• Tokens expire after 30 days
• No direct access to photo URLs

--------------------------------------

4) MULTI-TENANT SaaS ARCHITECTURE

Transform system into SaaS for multiple repair shops.

Create table:

workshops
id
name
cnpj
phone
email
subscription_plan
subscription_status
created_at

Add workshop_id to:

clientes
veiculos
repair_orders
estoque_produtos
financeiro

All queries must filter by workshop_id.

--------------------------------------

5) WORKSHOP REGISTRATION PORTAL

Create public route:

/cadastro-oficina

Where a workshop owner can:

• register account
• create workshop
• start free trial

Fields:

nome
email
senha
nome_da_oficina
telefone
cnpj
cidade

After registration:

Create workshop automatically.

--------------------------------------

6) SUBSCRIPTION SYSTEM

Create plans:

Starter
Pro
Enterprise

Example prices:

Starter: R$79
Pro: R$149
Enterprise: R$299

Create table:

subscriptions

workshop_id
plan
status
start_date
next_billing_date

Add middleware:

Block system access if subscription_status = expired.

--------------------------------------

7) ADMIN DASHBOARD (SaaS owner)

Create route:

/admin

Features:

• total workshops
• monthly revenue
• active subscriptions
• churn rate
• system usage

Charts using Recharts.

--------------------------------------

8) UI IMPROVEMENTS

Use ReparaJá brand:

Primary color:
#ff6600

Secondary:
#0b3a6e

Add buttons:

Aprovar Orçamento
Falar com Consultor
Cadastrar Oficina

--------------------------------------

9) SALES CONVERSION IMPROVEMENTS

Inside customer portal add:

• vehicle information
• before / progress / after photos
• estimate value
• delivery forecast
• approve estimate button

Goal:
Increase repair approval conversion rate.

--------------------------------------

10) FINAL GOAL

Transform ReparaJá into a scalable SaaS platform capable of serving thousands of automotive workshops in Brazil.

Maintain clean architecture, reusable components and modular code.
