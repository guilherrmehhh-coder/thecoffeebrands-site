import React, { useEffect, useRef } from 'react';
import {
  ArrowRight,
  Target,
  TrendingUp,
  Zap,
  CheckCircle2,
  Sparkles,
  Brain,
  ChevronDown
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Landing = () => {
  const heroRef = useRef(null);
  const thesisRef = useRef(null);
  const dadRef = useRef(null);
  const solutionRef = useRef(null);
  const benefitsRef = useRef(null);
  const bonusRef = useRef(null);
  const pathsRef = useRef(null);
  const ctaFinalRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        }
      });
    }, observerOptions);

    const sections = [
      heroRef,
      thesisRef,
      dadRef,
      solutionRef,
      benefitsRef,
      bonusRef,
      pathsRef,
      ctaFinalRef,
      aboutRef
    ];

    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
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

  const handleScrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="landing-page">
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
            <div className="offer-badge hero-badge">
              Vantagem injusta para marcas pessoais pequenas
            </div>

            <h1 className="hero-title">
              Transforme sua marca pessoal perdida em uma
              <span className="highlight-text"> marca clara que vende</span>
            </h1>

            <p className="hero-subtitle">
              Descubra em minutos o que está travando sua comunicação,
              sua percepção de valor e suas vendas.
            </p>

            <p className="hero-description">
              Em vez de continuar postando sem direção, você recebe clareza
              para se posicionar melhor, comunicar melhor e ser percebido
              como alguém que vale mais.
            </p>

            <p className="hero-description">
              <strong>Sem precisar viralizar.</strong><br />
              <strong>Sem depender de sorte.</strong><br />
              <strong>Sem virar escravo de conteúdo.</strong>
            </p>

            <Button
              onClick={handleScrollToOffer}
              className="cta-button cta-primary"
              size="lg"
            >
              Quero destravar minha marca
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

      <section className="problem-section fade-in" ref={thesisRef}>
        <div className="container-custom">
          <div className="section-header">
            <h2 className="section-title">
              O problema não é falta de conteúdo.
            </h2>
            <p className="section-subtitle text-center">
              O problema é que sua marca ainda não faz sentido na cabeça do cliente.
            </p>
          </div>

          <div className="problem-grid">
            <Card className="problem-card">
              <CardContent className="problem-card-content">
                <Target className="problem-icon" />
                <h3>Você fala com todo mundo</h3>
                <p>
                  Quando sua comunicação é vaga, ninguém sente que sua marca foi feita para ela.
                </p>
              </CardContent>
            </Card>

            <Card className="problem-card">
              <CardContent className="problem-card-content">
                <TrendingUp className="problem-icon" />
                <h3>Você posta, mas não constrói valor</h3>
                <p>
                  Conteúdo sem clareza pode gerar atenção, mas não gera autoridade nem decisão de compra.
                </p>
              </CardContent>
            </Card>

            <Card className="problem-card">
              <CardContent className="problem-card-content">
                <Zap className="problem-icon" />
                <h3>Você parece comum</h3>
                <p>
                  E quando sua marca parece comum, o cliente te compara por preço em vez de valor.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="problem-conclusion">
            <p className="conclusion-text">
              Marcas pequenas não precisam de mais conteúdo.<br />
              <strong>Precisam de clareza.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="dad-section fade-in" ref={dadRef}>
        <div className="container-custom">
          <div className="dad-errors">
            <h2 className="section-title text-center mb-6">
              Os 3 erros invisíveis que impedem sua marca de vender
            </h2>

            <p className="section-subtitle text-center mb-12">
              O Agente de Posicionamento Magnético usa o D.A.D. para identificar
              exatamente onde sua marca está perdendo força, clareza e valor.
            </p>

            <div className="gaps-grid">
              <Card className="gap-card">
                <CardContent className="gap-content">
                  <h3 className="gap-title">ERRO 01</h3>
                  <h4>Posicionamento vago</h4>
                  <p className="gap-text">
                    Sua marca não ocupa um lugar claro na mente do público.
                    Sem clareza, você vira só mais uma opção.
                  </p>
                </CardContent>
              </Card>

              <Card className="gap-card">
                <CardContent className="gap-content">
                  <h3 className="gap-title">ERRO 02</h3>
                  <h4>Mensagem que não converte</h4>
                  <p className="gap-text">
                    Você explica o que faz, mas não mostra com clareza
                    a transformação que entrega.
                  </p>
                </CardContent>
              </Card>

              <Card className="gap-card">
                <CardContent className="gap-content">
                  <h3 className="gap-title">ERRO 03</h3>
                  <h4>Percepção de valor baixa</h4>
                  <p className="gap-text">
                    Você pode até ser bom, mas se não parece valioso,
                    o cliente não paga como deveria.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="dad-intro">
              <h2 className="dad-intro-title">
                D.A.D. — Diagnóstico Autoridade Digital
              </h2>

              <p className="dad-intro-text">
                Um diagnóstico estratégico criado para entregar em
                <span className="highlight-green"> poucos minutos </span>
                a clareza que muita gente leva
                <span className="highlight-red"> semanas </span>
                para encontrar sozinha.
              </p>

              <p className="dad-intro-text">
                Você entende o que está errado, por que isso está travando suas vendas
                e qual direção seguir para corrigir sua marca.
              </p>

              <div className="dad-not-list">
                <p>Não é mais um curso genérico</p>
                <p>Não é um PDF solto</p>
                <p>Não é uma consultoria cara e demorada</p>
              </div>

              <p className="dad-intro-conclusion">
                É <strong>clareza estratégica sob demanda</strong>
              </p>
            </div>
          </div>

          <div className="dad-about-box">
            <h4>Por que isso é diferente?</h4>
            <p>
              A maioria tenta resolver falta de vendas com mais posts, mais dicas e mais esforço.
              Nós tratamos o problema na raiz: posicionamento, mensagem e percepção de valor.
            </p>
            <p>
              O mercado não compra o melhor produto.
              Compra o produto que parece mais valioso.
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
              <h2 className="section-title">
                Agente de Posicionamento Magnético
              </h2>

              <p className="solution-description">
                Um sistema estratégico para transformar conhecimento em posicionamento claro,
                comunicação forte e percepção de valor mais alta.
              </p>

              <ul className="solution-list">
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Analisa sua marca e identifica os bloqueios invisíveis</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Mostra onde sua comunicação está fraca</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Organiza seu posicionamento com mais clareza</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" />
                  <span>Entrega direção prática para parar de postar no escuro</span>
                </li>
              </ul>

              <div className="price-box-premium">
                <div className="offer-badge">
                  🔥 Oferta de lançamento
                </div>

                <div className="price-wrapper-premium">
                  <div className="price-old">
                    De <span>R$ 197</span>
                  </div>

                  <div className="price-discount">
                    76% OFF
                  </div>

                  <div className="price-new">
                    R$ 47
                  </div>

                  <p className="price-installments">
                    ou 6x de R$ 8,82 no cartão • acesso imediato
                  </p>
                </div>
              </div>

              <Button
                onClick={handleCTAClick}
                className="cta-button cta-buy-now"
                size="lg"
              >
                🚀 Quero meu agente agora
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section fade-in" ref={benefitsRef}>
        <div className="container-custom">
          <h2 className="section-title text-center mb-16">
            O que você vai conquistar com isso
          </h2>

          <div className="benefits-grid">
            <div className="benefit-item">
              <Sparkles className="benefit-icon" />
              <h3>Clareza de posicionamento</h3>
              <p>Você entende com mais precisão quem é, como se posiciona e o que precisa repetir.</p>
            </div>

            <div className="benefit-item">
              <Target className="benefit-icon" />
              <h3>Mensagem mais forte</h3>
              <p>Você para de explicar bonito e começa a comunicar transformação.</p>
            </div>

            <div className="benefit-item">
              <TrendingUp className="benefit-icon" />
              <h3>Mais percepção de valor</h3>
              <p>Seu cliente começa a enxergar sua marca com mais autoridade e mais peso.</p>
            </div>

            <div className="benefit-item">
              <Zap className="benefit-icon" />
              <h3>Direção prática</h3>
              <p>Você recebe clareza para ajustar sua presença digital sem ficar perdido.</p>
            </div>

            <div className="benefit-item">
              <CheckCircle2 className="benefit-icon" />
              <h3>Base para vender melhor</h3>
              <p>Uma marca mais clara vende com menos esforço do que uma marca confusa.</p>
            </div>

            <div className="benefit-item">
              <Brain className="benefit-icon" />
              <h3>Vantagem injusta</h3>
              <p>Enquanto outros improvisam conteúdo, você opera com direção estratégica.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="order-bump-section fade-in" ref={bonusRef}>
        <div className="container-custom">
          <div className="order-bump-card">
            <div className="order-bump-badge">
              <Sparkles className="badge-icon" />
              <span>Bônus de pré-venda</span>
            </div>

            <h2 className="order-bump-title">
              Como vender pelo Instagram em 2026
            </h2>

            <div className="order-bump-content">
              <div className="order-bump-text">
                <h3 className="product-name">
                  <TrendingUp className="inline-icon" />
                  Estratégia complementar de crescimento
                </h3>

                <p className="order-bump-description">
                  Um bônus para ajudar você a transformar clareza em execução:
                  o que postar, como se posicionar e como gerar mais intenção de compra no Instagram.
                </p>

                <p className="order-bump-highlight">
                  Porque conteúdo sem estratégia é barulho.
                </p>

                <p className="order-bump-promo">
                  Entrando agora, você recebe esse bônus sem custo adicional.
                </p>
              </div>

              <div className="order-bump-pricing">
                <div className="price-box-secondary">
                  <span className="price-label">Valor normal</span>
                  <span className="price-old-large">De R$ 197</span>
                  <span className="price-free">GRÁTIS</span>
                </div>

                <Button
                  onClick={handleCTAClick}
                  className="cta-button cta-bonus"
                  size="lg"
                >
                  Garantir meu bônus
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="paths-section fade-in" ref={pathsRef}>
        <div className="container-custom">
          <h2 className="paths-title">VOCÊ TEM 3 CAMINHOS</h2>

          <div className="paths-grid">
            <div className="path-card path-success">
              <div className="path-number">Caminho 1</div>
              <div className="path-icon-success">
                <TrendingUp size={48} />
              </div>
              <p className="path-text">
                Age agora, entende o que está travando sua marca
                e começa a corrigir isso imediatamente.
              </p>
            </div>

            <div className="path-card">
              <div className="path-number">Caminho 2</div>
              <div className="path-icon-success">
                <Target size={48} />
              </div>
              <p className="path-text">
                Espera mais um pouco, continua sem clareza
                e vê sua marca continuar parecendo comum.
              </p>
            </div>

            <div className="path-card path-failure">
              <div className="path-number">Caminho 3</div>
              <div className="path-icon-failure">
                <Zap size={48} />
              </div>
              <p className="path-text">
                Tenta resolver tudo sozinho, demora mais,
                erra mais e continua postando sem transformar isso em clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-final-section fade-in" ref={ctaFinalRef}>
        <div className="container-custom">
          <div className="cta-final-content">
            <h2 className="cta-final-title">
              Pare de postar sem direção.<br />
              <span className="highlight-text">Comece a construir uma marca que vende.</span>
            </h2>

            <p className="hero-description">
              Se sua marca ainda não é clara, ela ainda não é escolhida.
            </p>

            <Button
              onClick={handleCTAClick}
              className="cta-button cta-final-button"
              size="lg"
            >
              Quero destravar minha marca agora
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

            <h2 className="about-title">
              Sobre a The CoffeeBrands
            </h2>

            <div className="about-text">
              <p>
                A The CoffeeBrands transforma marcas pessoais pequenas em marcas claras que vendem.
                Nosso foco não é fazer você parecer ocupado. É fazer sua marca fazer sentido.
              </p>

              <p>
                Porque marcas fortes não crescem por acaso.
                Crescem com clareza, repetição e percepção de valor.
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
              Ajudamos marcas pessoais pequenas a parar de postar e começar a vender.
            </p>

            <p className="footer-achievement">
              Posicionamento, mensagem e percepção de valor para transformar atenção em clientes.
            </p>
          </div>

          <p className="footer-copyright">
            © 2026 The CoffeeBrands. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
