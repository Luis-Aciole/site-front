# Omnidex - Loja Virtual

## Descrição do Projeto

Omnidex é um site de e-commerce fictício desenvolvido como trabalho acadêmico. Ele simula uma loja online, onde os usuários podem navegar por produtos, adicioná-los ao carrinho, e finalizar a compra (simulação). O foco do projeto está no uso de HTML, CSS, JavaScript e Bootstrap, além de práticas modernas de versionamento e integração contínua com GitHub e Azure.

---

## Objetivo do Site

O objetivo do site é demonstrar a aplicação de tecnologias web em um cenário realista de uma loja online, incluindo funcionalidades como:

- Catálogo de produtos
- Carrinho de compras com `localStorage`
- Página de finalização de compra com simulação de pedido
- Navegação entre páginas
- Estilização responsiva com Bootstrap
- Pipeline automatizado de deploy no Azure via GitHub

---

## URL de Acesso

Acesse a página hospedada aqui:  
(https://proud-ocean-0ea9c740f.6.azurestaticapps.net)
---
## Descrição do Pipeline Configurado

O pipeline foi configurado utilizando o GitHub com integração ao Azure Static Web Apps. O processo segue os seguintes passos automáticos sempre que há um push na branch `main`:

1. **Commit e Push no GitHub**  
   O desenvolvedor faz alterações no projeto e envia para o repositório remoto.

2. **Ação do GitHub (GitHub Actions)**  
   Um workflow YAML detecta o push e inicia o pipeline.

3. **Build e Deploy Automático**  
   O conteúdo do repositório é automaticamente construído e enviado para hospedagem no Azure Static Web Apps.

4. **Site Atualizado**  
   Após a execução do pipeline, o site já está disponível com as alterações aplicadas.

---

## Boas Práticas de Documentação

Este `README.md` foi elaborado com base em princípios fundamentais de uma boa documentação:

- Clareza na descrição do projeto e seus objetivos  
- Informações úteis e objetivas para o usuário final e avaliador  
- Organização lógica com seções bem definidas  
- Uso de Markdown para facilitar leitura e formatação visual
---
