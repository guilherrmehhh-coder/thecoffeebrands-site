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

    const sections = [
      heroRef,
      problemRef,
      dadRef,
      solutionRef,
      benefitsRef,
      orderBumpRef,
      pathsRef,
      ctaFinalRef,
      aboutRef
    ];

    sections.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
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

      {/* Hero */}
      <section className="hero-section fade-in" ref={heroRef}>
        <div className="container-custom">
          <div className="hero-content">
            <h1 className="hero-title">
              Você não está sendo ignorado por falta de esforço.
              <span className="highlight-text">
                {' '}Está sendo ignorado porque ninguém entende o que você faz.
              </span>
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


      {/* DAD */}
      <section className="dad-section fade-in" ref={dadRef}>
        <div className="container-custom">

          <h2 className="section-title text-center">
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
                  Você fala sobre o que faz, mas não sobre transformação.
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


      {/* Solution */}
      <section className="solution-section fade-in" ref={solutionRef}>
        <div className="container-custom">

          <h2 className="section-title">
            Agente de Posicionamento Magnético
          </h2>

          <div className="price-box-premium">

            <div className="price-new-highlight">
              R$ 47
            </div>

            <Button
              onClick={handleCTAClick}
              className="cta-button cta-buy-now"
              size="lg"
            >
              🚀 QUERO MEU AGENTE AGORA
            </Button>

          </div>

        </div>
      </section>


      {/* Bonus */}
      <section className="order-bump-section fade-in" ref={orderBumpRef}>
        <div className="container-custom">

          <h2 className="bonus-section-title">
            🎁 Bônus Exclusivos
          </h2>

          <div className="bonus-grid">

            <Card className="bonus-card">
              <CardContent className="bonus-content">
                <h3 className="bonus-title">
                  Estratégias Instagram
                </h3>
              </CardContent>
            </Card>

            <Card className="bonus-card">
              <CardContent className="bonus-content">
                <h3 className="bonus-title">
                  Como vender pelo Instagram
                </h3>
              </CardContent>
            </Card>

          </div>

        </div>
      </section>


    </div>
  );
};

export default Landing;
