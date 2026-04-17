import React, { useEffect, useRef } from 'react';
import { ArrowRight, Target, TrendingUp, Zap, CheckCircle2, Sparkles, Brain, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Landing = () => {
  const heroRef = useRef(null);
  const problemRef = useRef(null);
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

    const sections = [heroRef, problemRef, solutionRef, benefitsRef, orderBumpRef, pathsRef, ctaFinalRef, aboutRef];
    sections.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

const handleCTAClick = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'click_checkout', {
      event_category: 'engagement',
      event_label: 'hotmart_checkout',
      value: 47
    });
  }

  window.open(
    'https://pay.hotmart.com/E105156116F?sck=HOTMART_PRODUCT_PAGE&off=yfqvil0i&hotfeature=32&_gl=1*v4zddi*_gcl_au*MjAwNzIzMTY5NC4xNzc0NTcyNzI4*FPAU*MjAwNzIzMTY5NC4xNzc0NTcyNzI4*_ga*MTY2MjY4MjY5NS4xNzc0NTcyNzI4*_ga_GQH2V1F11Q*czE3NzQ5MTgxNDgkbzMkZzEkdDE3NzQ5MTk4NTgkajQwJGwwJGgxNDA1NDAyMzA5&bid=1774919860508',
    '_blank'
  );
};

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="landing-page">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="hero-section fade-in" ref={heroRef}>
        <div className="container-custom">
          <div className="hero-content">
            <h1 className="hero-title">
              Você não está sendo ignorado por falta de esforço.
              <span className="highlight-text"> Está sendo ignorado porque ninguém entende o que você faz.</span>
            </h1>
            
            <p className="hero-subtitle">
              Enquanto você posta sem clareza…<br />
              Alguém menos preparado está ocupando seu espaço.
            </p>

            <p className="hero-description">
              Isso não é problema de conteúdo.<br />
              <strong>É problema de posicionamento.</strong>
            </p>

            <Button 
              onClick={handleCTAClick}
              className="cta-button cta-primary"
              size="lg"
            >
              Quero Meu Agente Agora!
              <ArrowRight className="ml-2" />
            </Button>

            <ChevronDown 
              className="scroll-indicator" 
              onClick={handleScrollDown}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section fade-in" ref={problemRef}>
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">
              Sem posicionamento, você vira só mais um.
            </h2>
          </div>

          <div className="problem-grid">
            <Card className="problem-card">
              <CardContent className="problem-card-content">
                <Target className="problem-icon" />
                <h3>Você compete por preço</h3>
                <p>Sem diferenciação clara, o cliente sempre vai escolher o mais barato.</p>
              </CardContent>
            </Card>

            <Card className="problem-card">
              <CardContent className="problem-card-content">
                <TrendingUp className="problem-icon" />
                <h3>Seu conteúdo não gera autoridade</h3>
                <p>Você publica constantemente, mas não é visto como referência no seu mercado.</p>
              </CardContent>
            </Card>

            <Card className="problem-card">
              <CardContent className="problem-card-content">
                <Zap className="problem-icon" />
                <h3>As pessoas te acham interessante… mas não compram</h3>
                <p>Engajamento existe, mas conversão não acontece. Falta clareza no que você oferece.</p>
              </CardContent>
            </Card>
          </div>

          <div className="problem-conclusion">
            <p className="conclusion-text">
              O problema não é falta de esforço.<br />
              <strong>É que sua mensagem não conecta.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section fade-in" ref={solutionRef}>
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
              <h2 className="section-title">
                Agente de Posicionamento Magnético
              </h2>

              <p className="solution-description">
                Um sistema inteligente que:
              </p>

              <ul className="solution-list">
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Analisa sua marca</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Identifica bloqueios invisíveis</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Cria posicionamento claro</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Constrói autoridade</span>
                </li>
              </ul>

              <div className="price-box">
                <span className="price-label">Investimento</span>
                <div className="price-wrapper">
                  <span className="price-old">De R$ 197</span>
                  <span className="price">Por apenas R$ 47</span>
                </div>
              </div>

              <Button 
                onClick={handleCTAClick}
                className="cta-button cta-secondary"
                size="lg"
              >
                Quero Meu Agente Agora!
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section fade-in" ref={benefitsRef}>
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">
            O que você vai conquistar
          </h2>

          <div className="benefits-grid">
            <div className="benefit-item">
              <Sparkles className="benefit-icon" />
              <h3>Clareza de posicionamento</h3>
              <p>Saiba exatamente o que você faz e como comunicar isso.</p>
            </div>

            <div className="benefit-item">
              <Target className="benefit-icon" />
              <h3>Estrutura de marca</h3>
              <p>Base sólida para construir autoridade no mercado.</p>
            </div>

            <div className="benefit-item">
              <TrendingUp className="benefit-icon" />
              <h3>Autoridade digital</h3>
              <p>Seja reconhecido como referência no seu segmento.</p>
            </div>

            <div className="benefit-item">
              <Zap className="benefit-icon" />
              <h3>Estratégia de conteúdo</h3>
              <p>Conteúdo que gera conexão e conversão.</p>
            </div>

            <div className="benefit-item">
              <CheckCircle2 className="benefit-icon" />
              <h3>Mensagem que conecta</h3>
              <p>Comunicação clara que atrai seu cliente ideal.</p>
            </div>

            <div className="benefit-item">
              <Brain className="benefit-icon" />
              <h3>Percepção premium</h3>
              <p>Eleve o valor percebido da sua marca.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Bump Section */}
      <section className="order-bump-section fade-in" ref={orderBumpRef}>
        <div className="container-custom">
          <div className="order-bump-card">
            <div className="order-bump-badge">
              <Sparkles className="badge-icon" />
              <span>Bônus somente de pré venda</span>
            </div>

            <h2 className="order-bump-title">
              Estratégia para crescer no Instagram
            </h2>

            <div className="order-bump-content">
              <div className="order-bump-text">
                <h3 className="product-name">
                  <TrendingUp className="inline-icon" />
                  Como vender pelo Instagram em 2026
                </h3>

                <p className="order-bump-description">
                  Você adquirindo hoje, você vai receber o como vender pelo Instagram em 2026.
                </p>

                <p className="order-bump-highlight">
                  Aprenda a se posicionar como um leão, e transforme seu Instagram numa máquina de vendas.
                </p>

                <p className="order-bump-promo">
                  Comprando hoje, você não paga nada por este bônus!
                </p>
              </div>

              <div className="order-bump-pricing">
                <div className="price-box-secondary">
                  <span className="price-label">Valor Normal</span>
                  <span className="price-old-large">De R$ 197</span>
                  <span className="price-free">GRÁTIS</span>
                </div>
                
                <Button 
                  onClick={handleCTAClick}
                  className="cta-button cta-bonus"
                  size="lg"
                >
                  Garantir Meu Bônus Grátis!
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Paths Section */}
      <section className="paths-section fade-in" ref={pathsRef}>
        <div className="container-custom">
          <h2 className="paths-title">VOCÊ TEM DOIS CAMINHOS</h2>

          <div className="paths-grid">
            <div className="path-card path-success">
              <div className="path-number">Caminho 1</div>
              <div className="path-icon-success">
                <TrendingUp size={48} />
              </div>
              <p className="path-text">
                Adquirir o agente para crescer no Instagram e imprimir dinheiro pela internet
              </p>
            </div>

            <div className="path-card path-failure">
              <div className="path-number">Caminho 2</div>
              <div className="path-icon-failure">
                <Target size={48} />
              </div>
              <p className="path-text">
                Você continua na mesma, fracassado e sem dinheiro, e vendo os outros na internet fazer dinheiro e <strong>VOCÊ NÃO</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-final-section fade-in" ref={ctaFinalRef}>
        <div className="container-custom">
          <div className="cta-final-content">
            <h2 className="cta-final-title">
              Pare de ser ignorado.<br />
              <span className="highlight-text">Comece a ser escolhido.</span>
            </h2>

            <Button 
              onClick={handleCTAClick}
              className="cta-button cta-final-button"
              size="lg"
            >
              Quero Construir a minha Marca!
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About The CoffeeBrands Section */}
      <section className="about-section fade-in" ref={aboutRef}>
        <div className="container-custom">
          <div className="about-content">
            <img 
              src="https://customer-assets.emergentagent.com/job_abd74624-8c37-4178-965b-183ce044e1e6/artifacts/bzan0pa6_chat-use-essa-imagem-e-troca-o-nome-que-_UFhLqRtiS8uQmbAPg--yUA_Po_BQ1shQg-bb8VABAZo4w_sd.jpeg" 
              alt="The CoffeeBrands" 
              className="about-logo"
            />

            <h2 className="about-title">
              Sobre a The CoffeeBrands
            </h2>

            <div className="about-text">
              <p>A The CoffeeBrands transforma boas ideias em marcas que fazem sentido. Apenas posicionamento claro e construção consistente. Porque as melhores marcas não convencem — elas são escolhidas.</p>

              <p className="about-signature">The CoffeeBrands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container-custom">
          <img 
            src="https://customer-assets.emergentagent.com/job_abd74624-8c37-4178-965b-183ce044e1e6/artifacts/bzan0pa6_chat-use-essa-imagem-e-troca-o-nome-que-_UFhLqRtiS8uQmbAPg--yUA_Po_BQ1shQg-bb8VABAZo4w_sd.jpeg" 
            alt="The CoffeeBrands" 
            className="footer-logo"
          />
          
          <div className="footer-content">
            <p className="footer-by">BY: Glauber e Guilherme</p>
            
            <p className="footer-description">
              Hoje ajudamos empreendedores a transformar seu Instagram em autoridade digital para imprimir dinheiro.
            </p>
            
            <p className="footer-achievement">
              Construindo a The Coffee Brands, atraímos +400 seguidores em 5 dias com 5 posts
            </p>
          </div>
          
          <p className="footer-copyright">© 2026 The CoffeeBrands. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
