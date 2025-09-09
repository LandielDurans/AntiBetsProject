# 🎲 Desafio 4.0 - O Problema das Bets

Projeto acadêmico desenvolvido como parte do **Desafio 4.0** da faculdade.  
O objetivo é conscientizar sobre os **impactos sociais, psicológicos e financeiros** das apostas esportivas online no Brasil.

---

## 📌 Objetivo do Projeto
As plataformas de apostas online (bets) estão cada vez mais presentes no cotidiano dos jovens brasileiros.  
Apesar da popularização, o vício em apostas — também conhecido como **ludopatia** — é um problema sério, capaz de gerar **endividamento, perda de vínculos sociais e agravamento de transtornos mentais**.

Este projeto busca:
- 📊 Apresentar dados e estatísticas sobre o público apostador.  
- 🧠 Explicar os fatores sociais, psicológicos e mercadológicos que incentivam o vício.  
- 💡 Promover **conscientização** sobre os riscos e consequências das apostas online.  

---

## 🛠️ Tecnologias Utilizadas
- **React + Vite** → base do projeto.  
- **TypeScript** → tipagem estática.  
- **TailwindCSS** → estilização rápida e responsiva.  
- **ShadCN/UI** → componentes reutilizáveis (cards, títulos, botões).  
- **Lucide Icons** → ícones modernos.  
- **Recharts** → gráficos estatísticos.  

---

# 🎲 Desafio 4.0 - O Problema das Bets

Projeto acadêmico desenvolvido como parte do **Desafio 4.0** da faculdade.  
O objetivo é conscientizar sobre os **impactos sociais, psicológicos e financeiros** das apostas esportivas online no Brasil.

---

## 📌 Objetivo do Projeto
As plataformas de apostas online (bets) estão cada vez mais presentes no cotidiano dos jovens brasileiros.  
Apesar da popularização, o vício em apostas — também conhecido como **ludopatia** — é um problema sério, capaz de gerar **endividamento, perda de vínculos sociais e agravamento de transtornos mentais**.

Este projeto busca:
- 📊 Apresentar dados e estatísticas sobre o público apostador.  
- 🧠 Explicar os fatores sociais, psicológicos e mercadológicos que incentivam o vício.  
- 💡 Promover **conscientização** sobre os riscos e consequências das apostas online.  

---

## 🛠️ Tecnologias Utilizadas
- **React + Vite** → base do projeto  
- **TypeScript** → tipagem estática  
- **TailwindCSS** → estilização rápida e responsiva  
- **ShadCN/UI** → componentes reutilizáveis (cards, botões, títulos)  
- **Lucide Icons** → ícones modernos  
- **Recharts** → gráficos estatísticos  

---

## 📂 Estrutura de Pastas

```bash
.
├── public/
│   └── img/                # Imagens utilizadas no projeto
│       ├── betimg.png
│       ├── bg-causas.png
│       ├── relato1.png
│       ├── relato2.png
│       └── relato3.png
├── src/
│   ├── App.tsx             # Componente principal
│   ├── App.css             # Estilos globais
│   ├── index.css           # Estilos Tailwind
│   ├── main.tsx            # Ponto de entrada do React
│   ├── lib/utils.ts        # Funções auxiliares
│   ├── components/         # Componentes organizados por seção
│   │   ├── Header/         # Cabeçalho
│   │   │   └── Header.tsx
│   │   ├── Home/           # Página inicial
│   │   │   └── HomePage.tsx
│   │   ├── SectionOne/     # Seção do problema
│   │   │   └── Problema.tsx
│   │   ├── SectionTwo/     # Seção das causas
│   │   │   └── Causas.tsx
│   │   └── ui/             # Componentes reutilizáveis (design system)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── charts/
│   │           └── pieChart.tsx
├── tsconfig.json
├── vite.config.ts
├── yarn.lock
└── README.md
```

## ▶️ Como Rodar o Projeto

- ### **Pré requisitos**
- **NodeJs (>= 18)**
- **Npm ou Yarn**

```bash
# Clone o repositório
git clone https://github.com/usuario/desafio-4.0-bets.git

# Acesse a pasta do projeto
cd desafio-4.0-bets

# Instale as dependências
yarn install
# ou
npm install

# Rode o projeto
yarn dev
# ou
npm run dev
```

*O projeto ficará disponível em http://localhost:5173*