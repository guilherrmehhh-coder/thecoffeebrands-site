import React, { useEffect, useRef } from 'react';
import {
  ArrowRight,
  Target,
  TrendingUp,
  Zap,
  CheckCircle2,
  Sparkles,
  Brain,
  ChevronDown,
  Eye,
  MessageCircle,
  DollarSign,
  ShieldCheck,
  FileText,
  Compass,
  Lock
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Landing = () => {
  const heroRef = useRef(null);
  const problemRef = useRef(null);
  const dadRef = useRef(null);
  const solutionRef = useRef(null);
  const benefitsRef = useRef(null);
  const orderBumpRef = useRef(null);
  const pathsRef = useRef(null);
  const ctaFinalRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    const sections = [heroRef, problemRef, dadRef, solutionRef, benefitsRef, orderBumpRef, pathsRef, ctaFinalRef, aboutRef];
    sections.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const checkoutUrl = 'https://pay.hotmart.com/E105156116F?sck=HOTMART_PRODUCT_PAGE&off=yfqvil0i&hotfeature=32&_gl=1*v4zddi*_gcl_au*MjAwNzIzMTY5NC4xNzc0NTcyNzI4*FPAU*MjAwNzIzMTY5NC4xNzc0NTcyNzI4*_ga*MTY2MjY4MjY5NS4xNzc0NTcyNzI4*_ga_GQH2V1F11Q*czE3NzQ5MTgxNDgkbzMkZzEkdDE3NzQ5MTk4NTgkajQwJGwwJGgxNDA1NDAyMzA5&bid=1774919860508';

  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'click_checkout', {
        event_category: 'engagement',
        event_label: 'hotmart_checkout_pre_venda',
        value: 47
      });
    }

    window.open(checkoutUrl, '_blank');
  };

  const scrollToOffer = () => {
    const offer = document.getElementById('oferta');
    if (offer) offer.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="landing-page pb-premium-page">
      <style>{`
        .pb-premium-page {
          background: #0A0A0A;
          color: #F4F4F0;
          overflow-x: hidden;
        }

        .pb-premium-page .container-custom {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .pb-premium-page .header {
          background: rgba(10, 10, 10, 0.82);
          border-bottom: 1px solid rgba(197, 160, 89, 0.18);
          backdrop-filter: blur(14px);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .pb-premium-page .header-content {
          min-height: 76px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .pb-premium-page .logo,
        .pb-premium-page .footer-logo,
        .pb-premium-page .about-logo {
          object-fit: contain;
          border-radius: 999px;
        }

        .pb-premium-page .logo {
          width: 42px;
          height: 42px;
        }

        .pb-premium-page .header-brand-name {
          font-size: 1rem;
          letter-spacing: .08em;
          text-transform: uppercase;
          margin: 0;
          color: #F4F4F0;
          font-weight: 800;
        }

        .pb-premium-page .hero-section {
          min-height: calc(100vh - 76px);
          display: flex;
          align-items: center;
          position: relative;
          background:
            radial-gradient(circle at 78% 20%, rgba(197, 160, 89, .22), transparent 24%),
            linear-gradient(90deg, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, .95) 47%, rgba(10, 10, 10, .72) 100%),
            url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1300&q=80');
          background-size: cover;
          background-position: center right;
          border-bottom: 1px solid rgba(197, 160, 89, 0.18);
        }

        .pb-premium-page .hero-content {
          max-width: 760px;
          padding: 96px 0;
        }

        .pb-eyebrow,
        .pb-premium-page .offer-badge,
        .pb-premium-page .section-kicker {
          color: #C5A059;
          text-transform: uppercase;
          letter-spacing: .08em;
          font-weight: 800;
          font-size: .86rem;
        }

        .pb-premium-page .hero-title {
          margin: 16px 0 20px;
          font-size: clamp(3rem, 8vw, 6.7rem);
          line-height: .88;
          letter-spacing: -.05em;
          text-transform: uppercase;
          color: #F4F4F0;
          font-weight: 950;
        }

        .pb-premium-page .highlight-text,
        .pb-premium-page .highlight-gold {
          color: #C5A059;
        }

        .pb-premium-page .hero-subtitle {
          color: #E6DFD3;
          font-size: clamp(1.05rem, 2vw, 1.35rem);
          line-height: 1.55;
          max-width: 660px;
          margin-bottom: 20px;
        }

        .pb-premium-page .hero-description {
          color: #F4F4F0;
          font-size: 1.08rem;
          margin-bottom: 28px;
        }

        .hero-mini-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          margin: 30px 0;
        }

        .hero-mini-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #F4F4F0;
          font-size: .78rem;
          text-transform: uppercase;
          font-weight: 800;
        }

        .hero-mini-item svg { color: #C5A059; min-width: 22px; }

        .pb-premium-page .cta-button {
          background: linear-gradient(135deg, #D9B65E, #C5A059);
          color: #0A0A0A;
          border: 1px solid rgba(244, 244, 240, .18);
          border-radius: 8px;
          font-weight: 950;
          text-transform: uppercase;
          letter-spacing: .02em;
          box-shadow: 0 18px 46px rgba(197, 160, 89, .22);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        .pb-premium-page .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 22px 60px rgba(197, 160, 89, .32);
        }

        .pb-premium-page .scroll-indicator {
          display: block;
          margin: 38px auto 0;
          color: #C5A059;
          animation: pbBounce 1.6s infinite;
        }

        @keyframes pbBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(9px); }
        }

        .pb-premium-page section {
          padding: 82px 0;
        }

        .pb-premium-page .section-title,
        .pb-premium-page .dad-intro-title,
        .pb-premium-page .order-bump-title,
        .pb-premium-page .paths-title,
        .pb-premium-page .cta-final-title,
        .pb-premium-page .about-title {
          color: #F4F4F0;
          text-transform: uppercase;
          letter-spacing: -.04em;
          line-height: .95;
          font-weight: 950;
        }

        .pb-premium-page .section-title {
          font-size: clamp(2.2rem, 5vw, 4.4rem);
        }

        .pb-premium-page .section-subtitle {
          color: #E6DFD3;
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .pb-premium-page .highlight-red,
        .pb-premium-page .highlight-green {
          color: #C5A059;
        }

        .pb-premium-page .dad-section,
        .pb-premium-page .benefits-section,
        .pb-premium-page .paths-section {
          background: #0A0A0A;
        }

        .gaps-grid,
        .problem-grid,
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .pb-premium-page .gap-card,
        .pb-premium-page .problem-card,
        .pb-premium-page .order-bump-card,
        .pb-premium-page .path-card,
        .pb-result-card,
        .pb-premium-page .dad-about-box {
          background: linear-gradient(180deg, rgba(244, 244, 240, .055), rgba(244, 244, 240, .025));
          border: 1px solid rgba(197, 160, 89, .20);
          border-radius: 14px;
          color: #F4F4F0;
          box-shadow: inset 0 1px 0 rgba(244, 244, 240, .06);
        }

        .pb-premium-page .gap-content,
        .pb-premium-page .problem-card-content {
          padding: 28px;
        }

        .pb-premium-page .gap-title {
          color: #C5A059;
          font-size: .88rem;
          letter-spacing: .08em;
          margin-bottom: 12px;
        }

        .pb-premium-page .gap-card h4,
        .pb-premium-page .problem-card h3,
        .pb-premium-page .benefit-item h3 {
          color: #F4F4F0;
          font-size: 1.25rem;
          text-transform: uppercase;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .pb-premium-page .gap-text,
        .pb-premium-page .problem-card p,
        .pb-premium-page .benefit-item p,
        .pb-premium-page .dad-about-box p {
          color: #E6DFD3;
          line-height: 1.58;
        }

        .dad-intro {
          margin-top: 54px;
          padding: 42px;
          border-radius: 18px;
          background: linear-gradient(135deg, rgba(197, 160, 89, .14), rgba(244, 244, 240, .035));
          border: 1px solid rgba(197, 160, 89, .22);
          text-align: center;
        }

        .pb-premium-page .dad-intro-title {
          font-size: clamp(2rem, 4vw, 3.7rem);
          margin-bottom: 20px;
        }

        .pb-premium-page .dad-intro-text,
        .pb-premium-page .dad-intro-conclusion {
          color: #E6DFD3;
          font-size: 1.12rem;
          line-height: 1.65;
        }

        .pb-premium-page .dad-not-list {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin: 26px 0;
        }

        .pb-premium-page .dad-not-list p {
          border: 1px solid rgba(197, 160, 89, .28);
          border-radius: 999px;
          padding: 10px 16px;
          color: #F4F4F0;
          margin: 0;
        }

        .pb-premium-page .dad-about-box {
          margin-top: 28px;
          padding: 32px;
        }

        .pb-premium-page .dad-about-box h4 {
          color: #C5A059;
          text-transform: uppercase;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .pb-premium-page .problem-section,
        .pb-premium-page .solution-section,
        .pb-premium-page .order-bump-section,
        .pb-premium-page .about-section {
          background: linear-gradient(180deg, #101010, #0A0A0A);
          border-top: 1px solid rgba(197, 160, 89, .13);
          border-bottom: 1px solid rgba(197, 160, 89, .13);
        }

        .pb-premium-page .section-header { text-align: center; margin-bottom: 44px; }
        .pb-premium-page .problem-icon,
        .pb-premium-page .benefit-icon,
        .pb-premium-page .check-icon,
        .pb-premium-page .inline-icon {
          color: #C5A059;
        }

        .pb-premium-page .problem-icon { width: 38px; height: 38px; margin-bottom: 18px; }
        .pb-premium-page .problem-conclusion { text-align: center; margin-top: 42px; }
        .pb-premium-page .conclusion-text { color: #E6DFD3; font-size: 1.25rem; }

        .solution-content {
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          gap: 56px;
          align-items: center;
        }

        .solution-image {
          border-radius: 22px;
          padding: 24px;
          background: radial-gradient(circle at 50% 30%, rgba(197, 160, 89, .18), transparent 58%);
          border: 1px solid rgba(197, 160, 89, .18);
        }

        .pb-premium-page .product-image {
          width: 100%;
          border-radius: 16px;
          filter: drop-shadow(0 24px 40px rgba(0, 0, 0, .55));
        }

        .pb-premium-page .solution-description {
          color: #E6DFD3;
          font-size: 1.25rem;
          margin: 20px 0;
        }

        .pb-premium-page .solution-list {
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          display: grid;
          gap: 12px;
        }

        .pb-premium-page .solution-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #F4F4F0;
          font-weight: 700;
        }

        .price-box-premium {
          border: 1px solid rgba(197, 160, 89, .32);
          border-radius: 18px;
          padding: 28px;
          background: linear-gradient(135deg, rgba(197, 160, 89, .12), rgba(244, 244, 240, .035));
          margin: 28px 0;
        }

        .pb-premium-page .offer-badge { margin-bottom: 14px; }
        .price-old { color: #E6DFD3; font-size: 1rem; }
        .price-old span { text-decoration: line-through; color: rgba(230, 223, 211, .62); }
        .price-discount { color: #C5A059; font-weight: 900; margin-top: 8px; }
        .price-new { color: #C5A059; font-size: clamp(3.2rem, 7vw, 5.2rem); line-height: .95; font-weight: 950; letter-spacing: -.05em; }
        .price-installments { color: #E6DFD3; margin-top: 10px; }

        .benefits-grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .pb-premium-page .benefit-item {
          padding: 28px;
          border-left: 1px solid rgba(197, 160, 89, .42);
        }

        .pb-premium-page .benefit-icon { width: 38px; height: 38px; margin-bottom: 18px; }

        .order-bump-card { padding: 38px; }
        .order-bump-title { font-size: clamp(2rem, 4vw, 3.6rem); margin: 14px 0 26px; }
        .order-bump-content { display: grid; grid-template-columns: 1.3fr .7fr; gap: 34px; align-items: center; }
        .product-name { color: #F4F4F0; text-transform: uppercase; font-weight: 950; display: flex; align-items: center; gap: 10px; }
        .order-bump-description, .order-bump-highlight { color: #E6DFD3; line-height: 1.6; }
        .order-bump-promo { color: #C5A059; font-weight: 900; }
        .price-box-secondary { display: grid; gap: 6px; margin-bottom: 18px; }
        .price-label { color: #E6DFD3; text-transform: uppercase; font-size: .8rem; }
        .price-old-large { color: rgba(230, 223, 211, .62); text-decoration: line-through; font-size: 1.3rem; }
        .price-free { color: #C5A059; font-size: 2.6rem; font-weight: 950; }

        .paths-title { text-align: center; font-size: clamp(2.2rem, 5vw, 4rem); margin-bottom: 34px; }
        .paths-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
        .path-card { padding: 34px; }
        .path-number { color: #C5A059; font-weight: 900; text-transform: uppercase; margin-bottom: 18px; }
        .path-icon-success, .path-icon-failure { color: #C5A059; margin-bottom: 18px; }
        .path-text { color: #E6DFD3; font-size: 1.1rem; line-height: 1.6; }

        .cta-final-section {
          background: linear-gradient(135deg, #C5A059, #E0BB62);
          color: #0A0A0A;
        }

        .cta-final-content { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .pb-premium-page .cta-final-title { color: #0A0A0A; font-size: clamp(2.1rem, 4.5vw, 4.3rem); }
        .pb-premium-page .cta-final-title .highlight-text { color: #0A0A0A; }
        .pb-premium-page .cta-final-button { background: #0A0A0A; color: #C5A059; }

        .about-content { text-align: center; max-width: 760px; margin: 0 auto; }
        .about-logo { width: 86px; height: 86px; margin: 0 auto 20px; }
        .about-title { font-size: clamp(2rem, 4vw, 3.6rem); }
        .about-text { color: #E6DFD3; line-height: 1.7; }
        .about-signature { color: #C5A059; font-weight: 900; text-transform: uppercase; }

        .footer {
          background: #0A0A0A;
          border-top: 1px solid rgba(197, 160, 89, .18);
          padding: 48px 0 28px;
          color: #E6DFD3;
        }

        .footer-logo { width: 70px; height: 70px; display: block; margin-bottom: 20px; }
        .footer-content { display: grid; gap: 8px; max-width: 760px; }
        .footer-by, .footer-achievement { color: #C5A059; font-weight: 800; }
        .footer-copyright { margin-top: 30px; color: rgba(230, 223, 211, .65); font-size: .9rem; }

        .fade-in { opacity: 0; transform: translateY(22px); transition: opacity .75s ease, transform .75s ease; }
        .fade-in-visible { opacity: 1; transform: translateY(0); }

        @media (max-width: 900px) {
          .hero-mini-grid,
          .gaps-grid,
          .problem-grid,
          .benefits-grid,
          .solution-content,
          .order-bump-content,
          .paths-grid {
            grid-template-columns: 1fr;
          }

          .pb-premium-page .hero-section {
            background:
              linear-gradient(180deg, rgba(10, 10, 10, .90), rgba(10, 10, 10, .98)),
              url('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80');
            background-size: cover;
            background-position: center;
          }

          .pb-premium-page .hero-content { padding: 70px 0; }
          .cta-final-content { flex-direction: column; align-items: flex-start; }
          .pb-premium-page .container-custom { width: min(100% - 28px, 1180px); }
          .dad-intro, .order-bump-card { padding: 26px; }
        }
      `}</style>

      <header className="header">
        <div className="container-custom">
          <div className="header-content">
            <img
              src="https://customer-assets.emergentagent.com/job_abd74624-8c37-4178-965b-183ce044e1e6/artifacts/bzan0pa6_chat-use-essa-imagem-e-troca-o-nome-que-_UFhLqRtiS8uQmbAPg--yUA_Po_BQ1shQg-bb8VABAZo4w_sd.jpeg"
              alt="The CoffeeBrands"
              className="logo"
            />
            <h1 className="header-brand-name">The CoffeeBrands</h1>
          </div>
        </div>
      </header>

      <section className="hero-section fade-in" ref={heroRef}>
        <div className="container-custom">
          <div className="hero-content">
            <div className="pb-eyebrow">Raio-X magnético de posicionamento</div>

            <h1 className="hero-title">
              Descubra em 20 minutos por que sua marca <span className="highlight-text">não gera clientes</span>
            </h1>

            <p className="hero-subtitle">
              Em vez de continuar postando no escuro, descubra exatamente o que está travando sua percepção de valor — e saia com um plano claro para vender nos próximos 30 dias.
            </p>

            <p className="hero-description">
              Não é falta de conteúdo. <strong>É falta de posicionamento.</strong>
            </p>

            <div className="hero-mini-grid">
              <div className="hero-mini-item"><Brain /> Diagnóstico completo</div>
              <div className="hero-mini-item"><FileText /> Plano de ação</div>
              <div className="hero-mini-item"><Compass /> Direção estratégica</div>
              <div className="hero-mini-item"><Target /> Posicionamento claro</div>
            </div>

            <Button onClick={scrollToOffer} className="cta-button cta-primary" size="lg">
              Quero meu Raio-X agora
              <ArrowRight className="ml-2" />
            </Button>

            <p style={{ marginTop: 14, color: '#E6DFD3', fontSize: '.9rem' }}>
              <Lock size={14} style={{ display: 'inline', marginRight: 6 }} /> Preço de pré-venda por tempo limitado
            </p>

            <ChevronDown className="scroll-indicator" onClick={handleScrollDown} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </section>

      <section className="dad-section fade-in" ref={dadRef}>
        <div className="container-custom">
          <div className="dad-errors">
            <h2 className="section-title text-center mb-6">O problema não é o seu conteúdo</h2>

            <h3 className="section-subtitle text-center mb-12">
              São os 3 <span className="highlight-gold">bloqueios invisíveis</span> que impedem sua marca de vender.
            </h3>

            <p className="section-subtitle text-center mb-12">
              Todo empreendedor que produz conteúdo e não vende costuma estar preso nos mesmos pontos: fala com todo mundo, comunica pouco valor e não deixa claro por que deveria ser escolhido.
            </p>

            <div className="gaps-grid">
              <Card className="gap-card">
                <CardContent className="gap-content">
                  <h3 className="gap-title">BLOQUEIO 01</h3>
                  <h4>Posicionamento vago</h4>
                  <p className="gap-text">
                    Sua marca não ocupa um lugar claro na mente do público. As pessoas até gostam do conteúdo, mas escolhem quem parece mais especialista.
                  </p>
                </CardContent>
              </Card>

              <Card className="gap-card">
                <CardContent className="gap-content">
                  <h3 className="gap-title">BLOQUEIO 02</h3>
                  <h4>Mensagem que não converte</h4>
                  <p className="gap-text">
                    Você fala sobre o que faz, mas não sobre o que transforma. Sem clareza na promessa, a decisão de compra não acontece.
                  </p>
                </CardContent>
              </Card>

              <Card className="gap-card">
                <CardContent className="gap-content">
                  <h3 className="gap-title">BLOQUEIO 03</h3>
                  <h4>Percepção de valor baixa</h4>
                  <p className="gap-text">
                    Você entrega valor, mas não parece valioso o suficiente. Sem percepção forte, sua marca continua competindo por preço.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="dad-intro">
              <h2 className="dad-intro-title">D.A.D. — Diagnóstico Autoridade Digital</h2>

              <p className="dad-intro-text">
                Um diagnóstico criado para fazer em <span className="highlight-gold">20 minutos</span> o que muita consultoria leva semanas para organizar: clareza, direção e plano de ação.
              </p>

              <div className="dad-not-list">
                <p>Não é um curso</p>
                <p>Não é um PDF genérico</p>
                <p>Não é consultoria cara</p>
              </div>

              <p className="dad-intro-conclusion">
                É <strong>inteligência de marca sob demanda</strong> para quem quer parar de postar por sorte e começar a vender com estratégia.
              </p>
            </div>
          </div>

          <div className="dad-about-box">
            <h4>Por que confiar nesse diagnóstico?</h4>
            <p>
              A The CoffeeBrands transforma marcas pequenas em marcas que vendem. Nosso foco não é fazer sua marca parecer bonita: é fazer sua marca ser entendida, percebida como valiosa e escolhida pelo cliente certo.
            </p>
            <p>
              O Agente de Posicionamento Magnético nasceu da nossa metodologia de branding aplicada para clarear mensagem, oferta, autoridade e percepção de valor.
            </p>
          </div>
        </div>
      </section>

      <section className="problem-section fade-in" ref={problemRef}>
        <div className="container-custom">
          <div className="section-header">
            <div className="section-kicker">A verdade</div>
            <h2 className="section-title">Sem posicionamento, você vira só mais um.</h2>
          </div>

          <div className="problem-grid">
            <Card className="problem-card">
              <CardContent className="problem-card-content">
                <Eye className="problem-icon" />
                <h3>Você posta e ninguém te vê</h3>
                <p>Conteúdo bom não compensa uma mensagem fraca.</p>
              </CardContent>
            </Card>

            <Card className="problem-card">
              <CardContent className="problem-card-content">
                <MessageCircle className="problem-icon" />
                <h3>Atrai curioso, não cliente</h3>
                <p>Seu perfil até chama atenção, mas não deixa claro por que alguém deveria comprar.</p>
              </CardContent>
            </Card>

            <Card className="problem-card">
              <CardContent className="problem-card-content">
                <DollarSign className="problem-icon" />
                <h3>Dinheiro fica na sua frente</h3>
                <p>Todos os dias você perde vendas porque sua marca não comunica valor suficiente.</p>
              </CardContent>
            </Card>
          </div>

          <div className="problem-conclusion">
            <p className="conclusion-text">
              O cliente não compra só o melhor. <br />
              <strong>Ele compra o que parece mais valioso.</strong>
            </p>
          </div>
        </div>
      </section>

      <section id="oferta" className="solution-section fade-in" ref={solutionRef}>
        <div className="container-custom">
          <div className="solution-content">
            <div className="solution-image">
              <img
                src="https://customer-assets.emergentagent.com/job_abd74624-8c37-4178-965b-183ce044e1e6/artifacts/5gx5qjuo_ChatGPT%20Image%2025%20de%20mar.%20de%202026%2C%2023_10_37.png"
                alt="Agente de Posicionamento Magnético"
                className="product-image"
              />
            </div>

            <div className="solution-text">
              <div className="section-kicker">Como funciona</div>
              <h2 className="section-title">Agente de Posicionamento Magnético</h2>

              <p className="solution-description">Um sistema inteligente que entrega:</p>

              <ul className="solution-list">
                <li><CheckCircle2 className="check-icon" /><span>Diagnóstico completo da sua marca e Instagram</span></li>
                <li><CheckCircle2 className="check-icon" /><span>Correção dos bloqueios de posicionamento</span></li>
                <li><CheckCircle2 className="check-icon" /><span>Direcionamento de conteúdo para atrair clientes</span></li>
                <li><CheckCircle2 className="check-icon" /><span>Plano de ação de 30 dias para aplicar sem ficar perdido</span></li>
              </ul>

              <div className="price-box-premium">
                <div className="offer-badge">🔥 Preço de pré-venda</div>

                <div className="price-wrapper-premium">
                  <div className="price-old">De <span>R$ 97</span></div>
                  <div className="price-discount">Oferta liberada por tempo limitado</div>
                  <div className="price-new">R$ 47</div>
                  <p className="price-installments">ou 6x de R$ 8,82 no cartão • acesso imediato</p>
                </div>
              </div>

              <Button onClick={handleCTAClick} className="cta-button cta-buy-now" size="lg">
                🚀 Quero meu agente agora
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section fade-in" ref={benefitsRef}>
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">O que você recebe</h2>

          <div className="benefits-grid">
            <div className="benefit-item">
              <Brain className="benefit-icon" />
              <h3>Diagnóstico completo</h3>
              <p>Análise profunda da sua marca, mensagem e posicionamento.</p>
            </div>

            <div className="benefit-item">
              <Sparkles className="benefit-icon" />
              <h3>Correção da comunicação</h3>
              <p>Ajustes para sua mensagem parar de soar genérica.</p>
            </div>

            <div className="benefit-item">
              <Target className="benefit-icon" />
              <h3>Cliente ideal claro</h3>
              <p>Entenda para quem você fala e qual dor sua marca resolve.</p>
            </div>

            <div className="benefit-item">
              <TrendingUp className="benefit-icon" />
              <h3>Conteúdo com direção</h3>
              <p>O que postar, como falar e o que evitar para não atrair curioso.</p>
            </div>

            <div className="benefit-item">
              <FileText className="benefit-icon" />
              <h3>Plano de ação</h3>
              <p>Uma rota prática para aplicar nos próximos 30 dias.</p>
            </div>

            <div className="benefit-item">
              <ShieldCheck className="benefit-icon" />
              <h3>Percepção premium</h3>
              <p>Eleve o valor percebido da sua marca sem depender de desconto.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="order-bump-section fade-in" ref={orderBumpRef}>
        <div className="container-custom">
          <div className="order-bump-card">
            <div className="order-bump-badge">
              <Sparkles className="badge-icon" />
              <span>Bônus somente de pré-venda</span>
            </div>

            <h2 className="order-bump-title">Como vender pelo Instagram em 2026</h2>

            <div className="order-bump-content">
              <div className="order-bump-text">
                <h3 className="product-name"><TrendingUp className="inline-icon" /> Estratégia para crescer e vender com posicionamento</h3>

                <p className="order-bump-description">
                  Comprando hoje, você recebe um bônus estratégico para transformar seu Instagram em um canal de autoridade, conexão e vendas.
                </p>

                <p className="order-bump-highlight">
                  Menos post aleatório. Mais clareza, repetição de mensagem e direção comercial.
                </p>

                <p className="order-bump-promo">Na pré-venda, esse bônus sai grátis.</p>
              </div>

              <div className="order-bump-pricing">
                <div className="price-box-secondary">
                  <span className="price-label">Valor normal</span>
                  <span className="price-old-large">R$ 97</span>
                  <span className="price-free">Grátis</span>
                </div>

                <Button onClick={handleCTAClick} className="cta-button cta-bonus" size="lg">
                  Garantir bônus grátis
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="paths-section fade-in" ref={pathsRef}>
        <div className="container-custom">
          <h2 className="paths-title">Você tem dois caminhos</h2>

          <div className="paths-grid">
            <div className="path-card path-success">
              <div className="path-number">Caminho 1</div>
              <div className="path-icon-success"><TrendingUp size={48} /></div>
              <p className="path-text">
                Corrigir seu posicionamento, deixar sua mensagem clara e começar a construir uma marca que atrai clientes com mais intenção.
              </p>
            </div>

            <div className="path-card path-failure">
              <div className="path-number">Caminho 2</div>
              <div className="path-icon-failure"><Target size={48} /></div>
              <p className="path-text">
                Continuar postando sem direção, atraindo curioso e dependendo da sorte para alguém entender o valor do que você vende.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-final-section fade-in" ref={ctaFinalRef}>
        <div className="container-custom">
          <div className="cta-final-content">
            <h2 className="cta-final-title">
              Para quem quer vender com estratégia <br />
              <span className="highlight-text">e não com sorte.</span>
            </h2>

            <Button onClick={handleCTAClick} className="cta-button cta-final-button" size="lg">
              Quero meu Raio-X agora
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="about-section fade-in" ref={aboutRef}>
        <div className="container-custom">
          <div className="about-content">
            <img
              src="https://raw.githubusercontent.com/guilherrmehhh-coder/thecoffeebrands-site/main/Logotipo%20da%20CoffeeBrands%20com%20x%C3%ADcara%20de%20caf%C3%A9.png"
              alt="The CoffeeBrands"
              className="about-logo"
            />

            <h2 className="about-title">Sobre a The CoffeeBrands</h2>

            <div className="about-text">
              <p>
                A The CoffeeBrands ajuda marcas pequenas a saírem da comunicação confusa para uma marca clara, estratégica e desejada. Nosso trabalho é transformar posicionamento em percepção de valor — e percepção de valor em clientes.
              </p>

              <p className="about-signature">The CoffeeBrands</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container-custom">
          <img
            src="https://raw.githubusercontent.com/guilherrmehhh-coder/thecoffeebrands-site/main/Logotipo%20da%20CoffeeBrands%20com%20x%C3%ADcara%20de%20caf%C3%A9.png"
            alt="The CoffeeBrands"
            className="footer-logo"
          />

          <div className="footer-content">
            <p className="footer-by">BY: Glauber e Guilherme</p>
            <p className="footer-description">
              Branding, posicionamento e comunicação para marcas pequenas que querem vender com mais clareza.
            </p>
            <p className="footer-achievement">
              Cultura. Comunidade. Conexão.
            </p>
          </div>

          <p className="footer-copyright">© 2026 The CoffeeBrands. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
