# 🚀 Guia Completo de Deploy

## Opção 1: Deploy no Vercel (Recomendado)

### Via Dashboard (Mais Fácil)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em "Add New" → "Project"
4. Selecione seu repositório GitHub
5. Vercel detectará automaticamente as configurações
6. Clique em "Deploy"
7. Aguarde o build (~2-3 minutos)
8. Seu site estará no ar em `seu-projeto.vercel.app`

### Via CLI

```bash
# Instale o Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (primeira vez)
cd seu-projeto
vercel

# Siga as instruções interativas
# ? Set up and deploy "~/seu-projeto"? [Y/n] y
# ? Which scope do you want to deploy to? Seu-Nome
# ? Link to existing project? [y/N] n
# ? What's your project's name? agente-posicionamento
# ? In which directory is your code located? ./

# Deploy para produção
vercel --prod
```

## Opção 2: Deploy no Netlify

### Via Dashboard

1. Acesse [netlify.com](https://netlify.com)
2. Faça login com GitHub
3. Clique em "Add new site" → "Import an existing project"
4. Escolha GitHub e autorize
5. Selecione seu repositório
6. Configurações detectadas automaticamente:
   - Build command: `yarn build`
   - Publish directory: `build`
7. Clique em "Deploy site"
8. Aguarde o build
9. Site disponível em `random-name.netlify.app`

### Via CLI

```bash
# Instale o Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy (primeira vez)
cd seu-projeto
netlify init

# Siga as instruções:
# ? What would you like to do? Create & configure a new site
# ? Team: Seu-Time
# ? Site name (optional): agente-posicionamento
# ? Build command: yarn build
# ? Directory to deploy: build

# Deploy
netlify deploy --prod
```

## Configurar Domínio Customizado

### No Vercel

1. Vá em "Settings" do seu projeto
2. Clique em "Domains"
3. Adicione seu domínio: `www.seudominio.com`
4. Vercel fornecerá registros DNS
5. Configure no seu provedor de domínio:

```
Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
TTL: 3600
```

6. Aguarde propagação (até 48h)

### No Netlify

1. Vá em "Site settings" → "Domain management"
2. Clique em "Add custom domain"
3. Digite seu domínio: `www.seudominio.com`
4. Netlify fornecerá registros DNS
5. Configure no seu provedor:

```
Tipo: CNAME
Nome: www
Valor: seu-site.netlify.app
TTL: 3600
```

6. Aguarde propagação

## Variáveis de Ambiente

### Vercel

1. Vá em "Settings" → "Environment Variables"
2. Adicione (se necessário):
   - `REACT_APP_HOTMART_LINK`: Seu link do Hotmart
   - `REACT_APP_GA_ID`: Google Analytics ID
   - `REACT_APP_FB_PIXEL`: Facebook Pixel ID

### Netlify

1. Vá em "Site settings" → "Environment variables"
2. Adicione as mesmas variáveis acima

## SSL/HTTPS

### Vercel
✅ SSL automático e gratuito (Let's Encrypt)

### Netlify  
✅ SSL automático e gratuito (Let's Encrypt)

## Builds Automáticos

Ambas plataformas fazem deploy automático quando você faz push para o GitHub:

```bash
git add .
git commit -m "Update: nova feature"
git push origin main
```

O deploy começa automaticamente!

## Performance & Otimizações

### Cache Headers
Já configurados em `vercel.json` e `netlify.toml`

### Compressão
Ambas plataformas fazem compressão automática (gzip/brotli)

### CDN
✅ Vercel: CDN global automático
✅ Netlify: CDN global automático

## Monitoramento

### Vercel Analytics
```bash
# Instale o pacote
yarn add @vercel/analytics

# Em src/App.js, adicione:
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

### Google Analytics

1. Obtenha seu ID do GA4
2. Adicione ao `public/index.html` antes do `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Facebook Pixel

Adicione ao `public/index.html`:

```html
<!-- Facebook Pixel -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'SEU_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

## Troubleshooting

### Build Falhou

**Erro comum**: `Module not found`
```bash
# Limpe cache e reinstale
rm -rf node_modules yarn.lock
yarn install
yarn build
```

**Erro**: `Out of memory`
```bash
# Aumente memória no build
NODE_OPTIONS=--max_old_space_size=4096 yarn build
```

### Deploy Lento

- Verifique tamanho das imagens (otimize com TinyPNG)
- Remova dependências não usadas
- Use lazy loading para componentes pesados

### Domínio Não Funciona

1. Verifique registros DNS (use [dnschecker.org](https://dnschecker.org))
2. Aguarde até 48h para propagação completa
3. Limpe cache do navegador (Ctrl + Shift + Delete)
4. Tente em modo anônimo

## Custos

### Vercel
- **Hobby Plan**: Grátis
  - 100 GB bandwidth/mês
  - Builds ilimitados
  - Domínio customizado

### Netlify
- **Starter Plan**: Grátis
  - 100 GB bandwidth/mês
  - 300 min build/mês
  - Domínio customizado

## Checklist Pré-Deploy

- [ ] Testado localmente (`yarn build` e `yarn start`)
- [ ] Link do Hotmart configurado
- [ ] Imagens otimizadas
- [ ] Meta tags SEO configuradas
- [ ] Google Analytics/Facebook Pixel (opcional)
- [ ] Domínio registrado (se quiser customizado)
- [ ] Conta no Vercel ou Netlify criada
- [ ] Repositório GitHub criado e código commitado

## Próximos Passos Após Deploy

1. ✅ Teste todos os CTAs
2. ✅ Verifique responsividade mobile
3. ✅ Configure Google Search Console
4. ✅ Submeta sitemap
5. ✅ Configure remarketing do Facebook
6. ✅ Monitore conversões

---

**Pronto! Sua landing page está no ar e pronta para converter! 🚀💰**
