# Gelatos Gourmet

Aplicativo de precificação, receitas e orçamentos para eventos, **desenvolvido sob encomenda para a Gelatos Gourmet**, uma gelateria artesanal.

**Acesse o app:** https://williamlima2008-crypto.github.io/gelatos-gourmet/

> Projeto desenvolvido por **William Lima** para atender às necessidades de uma cliente real: calcular o preço de venda dos produtos e enviar orçamentos profissionais para aniversários, casamentos e festas.

## O que o app faz

- **Ingredientes:** cadastro por peso (g, kg), volume (ml, L) ou unidade, com o custo por medida calculado automaticamente.
- **Receitas e preço de venda:** cálculo com custos indiretos, mão de obra, imposto e margem de lucro, todos ajustáveis por receita.
- **Medidas caseiras:** líquidos aceitam xícara (tamanho ajustável por receita), colher de sopa e colher de chá, com frações como 1/2 e 1 1/2.
- **Rendimento e porções:** preço por kg, por litro, por 100 g, por 100 ml e por porção (pote, bola, fatia), com custo de embalagem.
- **Aviso de custo:** indica quando o custo de uma receita mudou desde que foi salva.
- **Orçamentos para eventos:** itens com quantidade e valor, extras opcionais (entrega, equipamento), sinal opcional, validade e chave PIX. O cliente final vê só itens e totais; custo e lucro ficam visíveis apenas para a dona do negócio.
- **Envio do orçamento:** imagem pronta para compartilhar no WhatsApp ou PDF.
- **Cópia de segurança:** exportação e restauração dos dados, com lembrete semanal.
- **Acesso com PIN (opcional):** tela de bloqueio ao abrir o app.

## Como instalar no celular

O app é um **PWA**: instala direto pelo link, sem loja de aplicativos, e funciona sem internet depois de instalado.

- **Android (Chrome):** menu ⋮ → **Instalar app**
- **iPhone (Safari):** botão Compartilhar → **Adicionar à Tela de Início**

## Privacidade

Todos os dados (ingredientes, receitas, orçamentos e PIN) ficam **somente no aparelho de quem usa**. Nada é enviado para servidores, e este repositório não contém dados da cliente.

## Tecnologias

- HTML, CSS e JavaScript puro, em um único arquivo, sem dependências externas
- PWA com `manifest.webmanifest` e service worker para uso offline
- Armazenamento local no navegador (`localStorage`)
- Hospedagem no GitHub Pages

## Estrutura

```
index.html              aplicativo completo
sw.js                   service worker (modo offline)
manifest.webmanifest    configuração de instalação
icons/                  ícones do aplicativo
```

## Autor

Desenvolvido por **William Lima**.

Este é um projeto feito sob encomenda. O uso e a redistribuição seguem o que foi combinado com a cliente.
