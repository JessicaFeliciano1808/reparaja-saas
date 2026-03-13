# Arquitetura do Sistema – ReparaJá

## Visão Geral

O ReparaJá é um sistema SaaS para gestão de oficinas automotivas.

A plataforma permite que oficinas controlem:

- clientes
- veículos
- ordens de serviço
- estoque
- financeiro
- comunicação com clientes

---

## Stack Tecnológica

Frontend:

- React
- Vite
- TypeScript
- TailwindCSS
- ShadCN UI

Backend:

- Node.js
- Express
- TypeScript

Banco de dados:

- PostgreSQL
- Drizzle ORM

Gráficos:

- Recharts

---

## Arquitetura

O sistema utiliza arquitetura **Fullstack JavaScript**.

Frontend e backend rodam no mesmo servidor.

Estrutura principal:

client/
server/
shared/
public/

---

## Banco de Dados

Principais tabelas:

clientes  
veiculos  
repair_orders  
estoque_produtos  
estoque_movimentacoes  
contas_pagar  
contas_receber  

---

## Portal do Cliente

Cada ordem de serviço gera um **token seguro**.

O cliente pode acessar:

/portal/:token

No portal ele pode:

- visualizar fotos do reparo
- ver orçamento
- acompanhar status do serviço

---

## Evolução SaaS

O sistema está sendo preparado para arquitetura **multi-tenant**, permitindo várias oficinas utilizarem a plataforma.

Cada oficina terá:

- conta própria
- assinatura mensal
- dados isolados no banco

---

## Escalabilidade

Objetivo:

Atender milhares de oficinas automotivas no Brasil através de um modelo SaaS escalável.
