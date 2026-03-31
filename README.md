# Agente de Posicionamento Magnético - Landing Page

Landing page premium de alta conversão para o produto digital "Agente de Posicionamento Magnético" da marca **The CoffeeBrands**.

![Landing Page Preview](https://magnetic-positioning.preview.emergentagent.com)

## 🚀 Features

- ✅ Design minimalista premium (preto/branco/cinza/dourado)
- ✅ Responsivo (Mobile First)
- ✅ Animações suaves (fade-in, slide-up, hover effects)
- ✅ Tipografia premium (Space Grotesk + Inter)
- ✅ CTAs otimizados para conversão
- ✅ Integração com checkout Hotmart
- ✅ Seção "2 Caminhos" com psicologia de conversão
- ✅ Bônus Instagram grátis
- ✅ Scroll suave e navegação intuitiva

## 📋 Estrutura do Projeto

```
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── ui/          # Shadcn UI components
│   │       ├── button.jsx
│   │       └── card.jsx
│   ├── pages/
│   │   └── Landing.jsx  # Componente principal da landing page
│   ├── styles/
│   │   └── Landing.css  # Estilos customizados
│   ├── App.js          # Roteamento
│   ├── App.css         # Estilos globais
│   ├── index.js        # Entry point
│   └── index.css       # Tailwind CSS + reset
├── package.json
├── tailwind.config.js
├── craco.config.js
└── README.md
```

## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework frontend
- **React Router DOM 7** - Roteamento
- **Tailwind CSS** - Estilização
- **Shadcn/UI** - Componentes de UI
- **Lucide React** - Ícones
- **Google Fonts** - Space Grotesk & Inter

## 📦 Instalação Local

### Pré-requisitos
- Node.js 18+ 
- Yarn ou npm

### Passos

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd agente-posicionamento-magnetico
```

2. Instale as dependências:
```bash
yarn install
# ou
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
yarn start
# ou
npm start
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 🌐 Deploy

### Vercel (Recomendado)

1. Instale o Vercel CLI:
```bash
npm i -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Para produção:
```bash
vercel --prod
```

### Netlify

1. Instale o Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Faça login:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy
```

4. Para produção:
```bash
netlify deploy --prod
```

### Build Manual

```bash
yarn build
# ou
npm run build
```

Os arquivos de produção estarão em `build/`

## ⚙️ Configuração

### Atualizar Link de Checkout

O link do checkout Hotmart está em `/src/pages/Landing.jsx`:

```javascript
const handleCTAClick = () => {
  window.open('https://pay.hotmart.com/SEU_LINK_AQUI', '_blank');
};
```

### Personalizar Cores

As cores principais estão em `/src/styles/Landing.css`:

- **Dourado**: `#d4af37`, `#f4d03f`, `#c9a726`
- **Vermelho**: `#dc2626`, `#ef4444`, `#b91c1c`
- **Preto**: `#000000`
- **Branco**: `#ffffff`

### Tipografia

As fontes são carregadas via Google Fonts. Para alterar, edite o import em `/src/styles/Landing.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
```

## 📊 Estrutura das Seções

1. **Header** - Logo + "The CoffeeBrands" em dourado
2. **Hero** - Headline principal + CTA + scroll indicator
3. **Problema** - 3 cards mostrando dores
4. **Solução** - Produto + preço promocional (R$197 → R$47)
5. **Benefícios** - 6 benefícios em grid
6. **Bônus Instagram** - Estratégia grátis (R$197 → GRÁTIS)
7. **2 Caminhos** - Contraste sucesso (dourado) vs fracasso (vermelho)
8. **CTA Final** - Última chamada para ação
9. **About** - Sobre The CoffeeBrands (resumido)
10. **Footer** - Info de Glauber e Guilherme + copyright

## 🎨 Design System

### Cores Principais
- Background: `#000000` (preto)
- Texto principal: `#ffffff` (branco)
- Texto secundário: `#d0d0d0`, `#b0b0b0`
- Destaques: Dourado `#d4af37` / Vermelho `#ef4444`

### Tipografia
- **Títulos**: Space Grotesk (700)
- **Corpo**: Inter (400, 500, 600)

### Espaçamento
- Seções: `8rem` (desktop) → `6rem` (mobile)
- Cards: `2.5rem` - `5rem` gap
- Elementos: `1.5rem` - `3rem` margin

### Animações
- Fade-in: `0.8s ease-out`
- Hover: `0.3s - 0.4s ease`
- Float (scroll arrow): `2s ease-in-out infinite`

## 🔧 Scripts Disponíveis

- `yarn start` - Inicia servidor de desenvolvimento
- `yarn build` - Build para produção
- `yarn test` - Executa testes

## 📱 Responsividade

Breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 968px`
- Desktop: `> 968px`

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Minha feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

© 2026 The CoffeeBrands. Todos os direitos reservados.

## 👥 Autores

**Glauber e Guilherme** - The CoffeeBrands

*Hoje ajudamos empreendedores a transformar seu Instagram em autoridade digital para imprimir dinheiro. Construindo a The Coffee Brands, atraímos +400 seguidores em 5 dias com 5 posts.*

## 🔗 Links

- **Landing Page**: https://magnetic-positioning.preview.emergentagent.com
- **Hotmart**: [Link do Produto]
- **Instagram**: [@thecoffeebrands]

## 📞 Suporte

Para dúvidas ou suporte, entre em contato:
- Email: contato@thecoffeebrands.com
- Instagram: @thecoffeebrands

---

**Made with ❤️ by The CoffeeBrands**
