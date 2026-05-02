import React, { useEffect, useRef } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Target,
  MessageCircle,
  TrendingUp,
  ShieldCheck,
  Clock,
  Sparkles,
  Brain,
  BadgeDollarSign,
  Users,
  XCircle
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Landing = () => {
  const heroRef = useRef(null);
  const problemRef = useRef(null);
  const thesisRef = useRef(null);
  const mechanismRef = useRef(null);
  const deliverablesRef = useRef(null);
  const offerRef = useRef(null);
  const audienceRef = useRef(null);
  const finalRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('fade-in-visible');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    );

    [heroRef, problemRef, thesisRef, mechanismRef, deliverablesRef, offerRef, audienceRef, finalRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const handleCTAClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'click_checkout', {
        event_category: 'engagement',
        event_label: 'project_brands_raio_x',
        value: 47
      });
    }

    window.open(
      'https://pay.hotmart.com/E105156116F?sck=HOTMART_PRODUCT_PAGE&off=yfqvil0i&hotfeature=32&_gl=1*v4zddi*_gcl_au*MjAwNzIzMTY5NC4xNzc0NTcyNzI4*FPAU*MjAwNzIzMTY5NC4xNzc0NTcyNzI4*_ga*MTY2MjY4MjY5NS4xNzc0NTcyNzI4*_ga_GQH2V1F11Q*czE3NzQ5MTgxNDgkbzMkZzEkdDE3NzQ5MTk4NTgkajQwJGwwJGgxNDA1NDAyMzA5&bid=1774919860508',
      '_blank'
    );
  };

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="landing-page project-brands">
      <header className="header">
        <div className="container-custom header-inner">
          <div className="brand-lockup">
            <img src="https://raw.githubusercontent.com/guilherrmehhh-coder/thecoffeebrands-site/f55be1492dc45869147a6f1b043739b296c8c135/ChatGPT%20Image%2027%20de%20abr.%20de%202026%2C%2020_35_01.png" alt="Project Brands" className="header-logo" />
            <div>
              <p className="brand-name">Project Brands</p>
              <span className="brand-tagline">Arquitetando seu Instagram para vender</span>
            </div>
          </div>

          <Button onClick={scrollToOffer} className="header-cta">
            Quero meu Raio-X
            <ArrowRight size={18} />
          </Button>
        </div>
      </header>

      <section className="hero-section fade-in" ref={heroRef}>
        <div className="container-custom hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Raio-X magnético de vendas no Instagram</p>

            <h1 className="hero-title">
              Seu Instagram não gera clientes?
              <span> Em 20 minutos eu te mostro exatamente o que está travando.</span>
            </h1>

            <p className="hero-subtitle">
              E te entrego um plano claro para começar a vender em até 30 dias.
            </p>

            <div className="hero-pills">
              <span>Sem postar todos os dias</span>
              <span>Sem depender de sorte</span>
              <span>Sem continuar falando sozinho</span>
            </div>

            <Button onClick={scrollToOffer} className="cta-button cta-primary" size="lg">
              Quero meu Raio-X agora
              <ArrowRight className="ml-2" />
            </Button>

   <p className="scarcity">
  🔥 Somente hoje garanta o preço de pré-venda<br/>
</p>
          </div>

          <div className="hero-panel">
            <div className="hero-logo-card">
              <img src="https://raw.githubusercontent.com/guilherrmehhh-coder/thecoffeebrands-site/f55be1492dc45869147a6f1b043739b296c8c135/ChatGPT%20Image%2027%20de%20abr.%20de%202026%2C%2020_35_01.png" alt="Project Brands" />
            </div>

            <div className="metric-card">
              <span>Posicionamento</span>
              <div className="bar"><i style={{ width: '32%' }} /></div>
              <small>Força da mensagem: 32%</small>
            </div>

            <div className="metric-card">
              <span>Conteúdo</span>
              <div className="bar"><i style={{ width: '44%' }} /></div>
              <small>Clareza estratégica: média</small>
            </div>

            <div className="metric-card">
              <span>Conversão</span>
              <div className="bar"><i style={{ width: '18%' }} /></div>
              <small>Potencial de vendas: 18%</small>
            </div>

            <div className="diagnostic-card main">
              <p className="mini-label">Perdas estimadas por mês</p>
              <strong>R$ 18.740</strong>
              <span>em oportunidades desperdiçadas</span>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-section fade-in" ref={problemRef}>
        <div className="container-custom">
          <div className="section-header">
            <p className="eyebrow">Você está aqui</p>
            <h2 className="section-title">O problema não é falta de conteúdo. É posicionamento.</h2>
            <p className="section-subtitle">
              Se você sente que posta, se esforça e mesmo assim não transforma atenção em cliente,
              provavelmente sua marca ainda não está sendo percebida como algo valioso.
            </p>
          </div>

          <div className="problem-grid">
            <Card className="problem-card"><CardContent className="problem-card-content"><MessageCircle className="problem-icon" /><h3>Posta… e ninguém chama</h3><p>Seu conteúdo aparece, mas não gera conversa, desejo ou pedido de orçamento.</p></CardContent></Card>
            <Card className="problem-card"><CardContent className="problem-card-content"><Target className="problem-icon" /><h3>Engaja… mas não vende</h3><p>As pessoas curtem, comentam e somem. Falta clareza na oferta e na transformação.</p></CardContent></Card>
            <Card className="problem-card"><CardContent className="problem-card-content"><BadgeDollarSign className="problem-icon" /><h3>Perfil bonito… sem dinheiro</h3><p>Visual sozinho não vende. Sua mensagem precisa posicionar valor antes do cliente perguntar preço.</p></CardContent></Card>
            <Card className="problem-card"><CardContent className="problem-card-content"><Brain className="problem-icon" /><h3>Potencial travado</h3><p>Você sabe que entrega, mas não consegue fazer o mercado entender por que deve escolher você.</p></CardContent></Card>
          </div>
        </div>
      </section>

      <section className="thesis-section fade-in" ref={thesisRef}>
        <div className="container-custom thesis-card">
          <p className="eyebrow">A tese</p>
          <h2>O mercado te ensinou errado.</h2>
          <p>Você não precisa de mais conteúdo. Não precisa postar todo dia. Você precisa ser percebido como alguém que vale pagar.</p>
          <div className="not-list">
            <span>Isso não é curso genérico de marketing.</span>
            <span>Isso não é consultoria onde você sai com PDF bonito e zero implementação.</span>
            <span>Isso não é teoria. É direcionamento direto para vender.</span>
          </div>
        </div>
      </section>

      <section className="mechanism-section fade-in" ref={mechanismRef}>
        <div className="container-custom">
          <div className="section-header">
            <p className="eyebrow">O mecanismo</p>
            <h2 className="section-title">Raio-X de Posicionamento Magnético</h2>
            <p className="section-subtitle">Nossa IA faz uma análise direta, sem enrolação, que mostra o que está travando suas vendas e como corrigir.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card"><span className="step-number">1</span><h3>Diagnóstico Brutal</h3><p>Analisamos seu perfil, conteúdo e posicionamento para identificar onde você está perdendo dinheiro.</p><small>Duração: 10 min</small></div>
            <div className="step-card"><span className="step-number">2</span><h3>Decodificação do Perfil</h3><p>Mostramos exatamente o que está errado e por que isso afasta clientes.</p><small>Duração: 5 min</small></div>
            <div className="step-card"><span className="step-number">3</span><h3>Plano de Execução</h3><p>Você sai com um plano claro, simples e direto para começar a gerar vendas nos próximos 30 dias.</p><small>Duração: 5 min</small></div>
          </div>
        </div>
      </section>

      <section className="deliverables-section fade-in" ref={deliverablesRef}>
        <div className="container-custom">
          <div className="section-header">
            <p className="eyebrow">O que você recebe</p>
            <h2 className="section-title">Um plano para parar de adivinhar e começar a executar.</h2>
          </div>

          <div className="deliverables-grid">
            {[
              ['Diagnóstico completo do seu Instagram', 'Valor: R$97'],
              ['Ajustes práticos de posicionamento', 'Valor: R$197'],
              ['Direcionamento de conteúdo que gera DM', 'Valor: R$97'],
              ['Correção de bio e percepção de valor', 'Valor: R$47'],
              ['Plano de ação de 30 dias', 'Valor: R$197'],
              ['Clareza total do que fazer sem achismo', 'Valor: inestimável']
            ].map(([title, value]) => (
              <div className="deliverable-item" key={title}>
                <CheckCircle2 />
                <h3>{title}</h3>
                <p>{value}</p>
              </div>
            ))}
          </div>

          <div className="result-strip">
            <TrendingUp />
            <p>Com estratégia e consistência, saímos do zero e em menos de 1 mês passamos de +600 seguidores.</p>
          </div>
        </div>
      </section>

      <section id="oferta" className="offer-section fade-in" ref={offerRef}>
        <div className="container-custom offer-grid">
          <div className="offer-copy">
            <p className="eyebrow">Pré-venda</p>
            <h2>Sessão individual com nosso agente.</h2>
            <p>20 minutos de análise, 100% focada no seu perfil. Não é aula. Não é teoria. É direcionamento direto para vender.</p>

            <div className="bonus-box">
              <h3>Bônus de pré-venda</h3>
              <ul>
                <li><Sparkles /> Meus principais aprendizados com Instagram</li>
                <li><Sparkles /> Como criar seu Branding</li>
              </ul>
            </div>
          </div>

          <div className="price-card">
            <span className="offer-badge">Oferta de pré-venda</span>
            <p className="price-anchor">Valor real dessa análise: <s>R$297</s></p>
            <p className="price-old">De <s>R$97</s></p>
            <h3>R$47</h3>
            <p className="payment">Pagamento único • acesso imediato</p>

            <div className="guarantee">
              <ShieldCheck />
              <span>Garantia de 7 dias: se não fizer sentido, solicite seu dinheiro de volta.</span>
            </div>

            <Button onClick={handleCTAClick} className="cta-button cta-buy-now" size="lg">
              Quero meu Raio-X agora
              <ArrowRight className="ml-2" />
            </Button>

            <p className="scarcity">
  🔥 Somente hoje garanta o preço de pré-venda
</p>
          </div>
        </div>
      </section>

      <section className="audience-section fade-in" ref={audienceRef}>
        <div className="container-custom audience-grid">
          <div className="audience-card positive">
            <Users />
            <h2>Pra quem é</h2>
            <ul>
              <li>Prestadores de serviço</li>
              <li>Mentores e consultores</li>
              <li>Quem já tenta vender pelo Instagram mas não converte</li>
            </ul>
          </div>

          <div className="audience-card negative">
            <XCircle />
            <h2>Pra quem não é</h2>
            <ul>
              <li>Quem quer só crescer seguidores</li>
              <li>Quem não aplica o que aprende</li>
              <li>Quem espera resultado sem execução</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="final-section fade-in" ref={finalRef}>
        <div className="container-custom final-card">
          <Clock />
          <h2>Você pode continuar postando e esperando… ou pode entender exatamente o que está te travando.</h2>

     <div className="paths-grid">
  <div className="path-card path-good">
    <strong>CAMINHO 1 — AGIR AGORA</strong>
    <p>Você faz o Raio-X, entende o que trava sua marca e começa essa semana com um plano claro pra vender.</p>
  </div>

  <div className="path-card path-warning">
    <strong>CAMINHO 2 — ESPERAR</strong>
    <p>Você continua postando no escuro, o preço sobe, as vagas fecham e mais clientes compram de quem se posiciona melhor.</p>
  </div>

  <div className="path-card path-danger">
    <strong>CAMINHO 3 — TENTAR SOZINHO</strong>
    <p>Você perde 3 a 6 meses testando no achismo, se frustra, cansa e continua sem transformar seguidores em dinheiro.</p>
  </div>
</div>

          <Button onClick={handleCTAClick} className="cta-button cta-final-button" size="lg">
            Quero meu Raio-X agora
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <footer className="footer">
        <div className="container-custom footer-inner">
          <div className="brand-lockup">
            <img src="https://raw.githubusercontent.com/guilherrmehhh-coder/thecoffeebrands-site/f55be1492dc45869147a6f1b043739b296c8c135/ChatGPT%20Image%2027%20de%20abr.%20de%202026%2C%2020_35_01.png" alt="Project Brands" className="footer-logo" />
            <div>
              <p className="brand-name">Project Brands</p>
              <span className="brand-tagline">Branding e posicionamento para marcas que vendem.</span>
            </div>
          </div>

          <p>© 2026 Project Brands. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
