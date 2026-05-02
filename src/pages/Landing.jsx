import React from 'react';
import { ArrowRight } from 'lucide-react';

const Landing = () => {

const handleCTA = () => {
  window.open('https://pay.hotmart.com/E105156116F', '_blank');
};

return (
<div className="landing">

{/* HERO */}
<section className="hero">

<img 
src="https://i.imgur.com/SEU_LOGO_AQUI.png" 
className="logo"
/>

<h1>
Seu Instagram não gera clientes?
<span> Em 20 minutos eu te mostro exatamente o que está travando</span>
</h1>

<p className="sub">
Sem postar todos os dias.<br/>
Sem depender de sorte.<br/>
Sem continuar falando sozinho.
</p>

<button onClick={handleCTA}>
QUERO MEU RAIO-X AGORA <ArrowRight/>
</button>

</section>

{/* PROBLEMA */}
<section className="problem">

<h2>Você está aqui</h2>

<ul>
<li>Posta… e ninguém chama</li>
<li>Engaja… mas não vende</li>
<li>Perfil bonito… mas não gera dinheiro</li>
<li>Tem potencial… mas não transforma em cliente</li>
</ul>

<p>
O problema não é esforço.<br/>
<strong>É posicionamento.</strong>
</p>

</section>

{/* TESE */}
<section className="tese">

<h2>O mercado te ensinou errado</h2>

<p>Você não precisa de mais conteúdo.</p>
<p>Você precisa ser percebido como alguém que vale pagar.</p>

</section>

{/* MECANISMO */}
<section className="mecanismo">

<h2>Raio-X de Posicionamento Magnético</h2>

<div className="steps">

<div>
<h3>1. Diagnóstico Brutal</h3>
<p>Identificamos onde você perde dinheiro</p>
</div>

<div>
<h3>2. Decodificação</h3>
<p>Mostramos exatamente o erro</p>
</div>

<div>
<h3>3. Plano de Execução</h3>
<p>Plano claro para vender em 30 dias</p>
</div>

</div>

</section>

{/* OFERTA */}
<section className="offer">

<h2>20 minutos. 1 decisão.</h2>

<p>Não é aula. Não é teoria. É direção.</p>

<div className="price">
<span className="old">R$97</span>
<span className="new">R$47</span>
</div>

<p className="bonus">
+ Bônus Branding + Instagram
</p>

<button onClick={handleCTA}>
QUERO MEU RAIO-X AGORA
</button>

</section>

{/* FINAL */}
<section className="final">

<h2>
Você pode continuar tentando...
<br/>
ou pode começar a vender.
</h2>

<button onClick={handleCTA}>
COMEÇAR AGORA
</button>

</section>

</div>
);
};

export default Landing;
