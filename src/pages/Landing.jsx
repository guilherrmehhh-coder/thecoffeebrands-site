import React, { useEffect, useRef } from 'react';
import { ArrowRight, Target, TrendingUp, Zap, CheckCircle2, Sparkles, Brain, ChevronDown } from 'lucide-react';
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
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleCTAClick = () => {
    window.open('https://pay.hotmart.com/E105156116F', '_blank');
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="landing-page">

      {/* Hero Section */}
      <section className="hero-section fade-in" ref={heroRef}>
        <div className="container-custom">
          <div className="hero-content">
            <h1 className="hero-title">
              Você não está sendo ignorado por falta de esforço.
              <span className="highlight-text"> Está sendo ignorado porque ninguém entende o que você faz.</span>
            </h1>

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
            />
          </div>
        </div>
      </section>


      {/* D.A.D Section */}
      <section className="dad-section fade-in" ref={dadRef}>
        <div className="container-custom">

          <h2 className="section-title text-center mb-12">
            Os 3 Gaps Que Estão Travando Suas Vendas
          </h2>

          <div className="gaps-grid">

            <Card className="gap-card">
              <CardContent className="gap-content">
                <div className="gap-number">Gap 01</div>
                <h3 className="gap-title">Posicionamento vago</h3>
                <p className="gap-text">
                  Sua marca não ocupa um lugar claro na mente do seu público.
                </p>
              </CardContent>
            </Card>

            <Card className="gap-card">
              <CardContent className="gap-content">
                <div className="gap-number">Gap 02</div>
                <h3 className="gap-title">Mensagem que não converte</h3>
                <p className="gap-text">
                  Você fala sobre o que faz, mas não sobre o que transforma.
                </p>
              </CardContent>
            </Card>

            <Card className="gap-card">
              <CardContent className="gap-content">
                <div className="gap-number">Gap 03</div>
                <h3 className="gap-title">Percepção de valor baixa</h3>
                <p className="gap-text">
                  Você continua competindo por preço.
                </p>
              </CardContent>
            </Card>

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
                <p>Engajamento existe, mas conversão não acontece.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section fade-in" ref={solutionRef}>
        <div className="container-custom">
          <div className="solution-content">

            <div className="solution-text">
              <h2 className="section-title">
                Agente de Posicionamento Magnético
              </h2>

              <ul className="solution-list">
                <li>
                  <CheckCircle2 className="check-icon" />
                  Analisa sua marca
                </li>

                <li>
                  <CheckCircle2 className="check-icon" />
                  Identifica bloqueios invisíveis
                </li>

                <li>
                  <CheckCircle2 className="check-icon" />
                  Cria posicionamento claro
                </li>

              </ul>

              {/* Novo Preço */}
              <div className="price-box-premium">

                <div className="limited-offer-badge">
                  <Zap className="badge-icon-small" />
                  <span>OFERTA LIMITADA</span>
                </div>

                <div className="price-comparison">

                  <div className="price-old-section">
                    <span className="price-label-old">De</span>
                    <span className="price-old-crossed">R$ 197</span>
                  </div>

                  <div className="discount-badge">
                    <span>76% OFF</span>
                  </div>

                  <div className="price-new-section">
                    <span className="price-label-new">Por apenas</span>
                    <span className="price-new-highlight">R$ 47</span>
                    <span className="price-installments">ou 12x de R$ 4,58</span>
                  </div>

                </div>
              </div>

              <Button 
                onClick={handleCTAClick}
                className="cta-button cta-buy-now"
                size="lg"
              >
                🚀 QUERO MEU AGENTE AGORA!
                <ArrowRight className="ml-2" />
              </Button>

            </div>

          </div>
        </div>
      </section>


      {/* Bonus Section */}
      <section className="order-bump-section fade-in" ref={orderBumpRef}>
        <div className="container-custom">

          <h2 className="bonus-section-title">
            🎁 Bônus Exclusivos de Pré-Venda
          </h2>

          <div className="bonus-grid">

            <Card className="bonus-card">
              <CardContent className="bonus-content">

                <div className="bonus-badge">
                  <Sparkles className="badge-icon" />
                  <span>Bônus 1</span>
                </div>

                <h3 className="bonus-title">
                  <TrendingUp className="inline-icon" />
                  Estratégias para Crescer no Instagram
                </h3>

                <div className="bonus-value">
                  <span className="bonus-price-old">De R$ 197</span>
                  <span className="bonus-price-free">GRÁTIS</span>
                </div>

              </CardContent>
            </Card>

            <Card className="bonus-card">
              <CardContent className="bonus-content">

                <div className="bonus-badge">
                  <Sparkles className="badge-icon" />
                  <span>Bônus 2</span>
                </div>

                <h3 className="bonus-title">
                  <Target className="inline-icon" />
                  Como vender pelo Instagram 2026
                </h3>

                <div className="bonus-value">
                  <span className="bonus-price-old">De R$ 197</span>
                  <span className="bonus-price-free">GRÁTIS</span>
                </div>

              </CardContent>
            </Card>

          </div>

        </div>
      </section>


    </div>
  );
};

export default Landing;
