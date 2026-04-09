# Freitas Centrix — Landing Page de Campanha

Protótipo de validação da landing page e materiais de campanha para geração de leads em Comércio Exterior.

## Estrutura

```
freitas-centrix/
├── index.html    # Estrutura e conteúdo (LP, criativos, Google Ads)
├── style.css     # Estilos globais
├── script.js     # Navegação entre abas e formulário multistep
└── README.md
```

## Conteúdo

O arquivo `index.html` contém três seções navegáveis:

- **Landing Page** — hero com formulário, blocos de dor, proposta de valor, diferenciais, Centrix e depoimentos
- **Criativos** — 3 variações de copy para Meta Ads (imagem + legenda)
- **Google Ads** — 15 headlines, 4 descrições e listas de palavras-chave

## Formulário

O formulário está estruturado em duas etapas para validação visual.
A integração real será feita via embed do **RD Station** — substituir o bloco `.multistep-form` pelo código gerado na plataforma.

## Status

Protótipo de validação. Não há integração com backend, CRM ou analytics.

## Próximos passos antes de ir ao ar

- [ ] Substituir formulário pelo embed do RD Station
- [ ] Adicionar Google Tag Manager
- [ ] Testar responsividade mobile
- [ ] Configurar domínio / subdomínio
