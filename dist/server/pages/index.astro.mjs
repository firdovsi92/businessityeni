import { c as createComponent, a as createAstro, r as renderTemplate, d as renderSlot, e as renderHead, b as addAttribute, m as maybeRenderHead, f as renderComponent } from '../chunks/astro/server_qcOAErUz.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="AI Business IT - AI solutions for small and medium businesses"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"><script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.69/build/spline-viewer.js"><\/script>', "</head> <body> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/project/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <div class="container" data-astro-cid-3ef6ksr2> <div class="logo" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2>AI Business IT</a> </div> <nav data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a href="#services" data-astro-cid-3ef6ksr2>Xidmətlər</a></li> <li data-astro-cid-3ef6ksr2><a href="#about" data-astro-cid-3ef6ksr2>Haqqımızda</a></li> <li data-astro-cid-3ef6ksr2><a href="#faq" data-astro-cid-3ef6ksr2>FAQ</a></li> <li data-astro-cid-3ef6ksr2><a href="#contact" data-astro-cid-3ef6ksr2>Əlaqə</a></li> </ul> </nav> <div class="mobile-menu-btn" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> </div> </div> </header>  `;
}, "/home/project/src/components/Header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" data-astro-cid-bbe6dxrz> <div class="spline-container" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "spline-viewer", "spline-viewer", { "url": "https://prod.spline.design/fP0LH65i8bXQDQjZ/scene.splinecode", "data-astro-cid-bbe6dxrz": true })} </div> <div class="hero-content" data-astro-cid-bbe6dxrz> <h1 data-astro-cid-bbe6dxrz>Biznesiniz üçün Süni İntellekt Həlləri</h1> <p data-astro-cid-bbe6dxrz>Kiçik və orta biznesləri qabaqcıl süni intellekt texnologiyası ilə gücləndiririk</p> <div class="hero-buttons" data-astro-cid-bbe6dxrz> <a href="#services" class="btn" data-astro-cid-bbe6dxrz>Xidmətlərimiz</a> <a href="#contact" class="btn-outline" data-astro-cid-bbe6dxrz>Bizimlə Əlaqə</a> </div> </div> </section> `;
}, "/home/project/src/components/Hero.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "S\xFCni \u0130ntellekt M\u0259sl\u0259h\u0259tl\u0259\u015Fm\u0259si",
      description: "Biznesinizin ehtiyaclar\u0131na uy\u011Fun s\xFCni intellekt h\u0259ll\u0259rinin t\u0259tbiqi \xFC\xE7\xFCn strateji t\u0259limat.",
      icon: "\u{1F4A1}"
    },
    {
      title: "Ma\u015F\u0131n \xD6yr\u0259nm\u0259si H\u0259ll\u0259ri",
      description: "Biznesiniz \xFC\xE7\xFCn m\u0259lumatlar\u0131 t\u0259hlil etm\u0259k v\u0259 faydal\u0131 m\u0259lumatlar t\u0259qdim etm\u0259k \xFC\xE7\xFCn x\xFCsusi ML modell\u0259ri.",
      icon: "\u{1F9E0}"
    },
    {
      title: "Proses Avtomatla\u015Fd\u0131rmas\u0131",
      description: "S\xFCni intellekt texnologiyas\u0131 il\u0259 i\u015Fl\u0259y\u0259n a\u011F\u0131ll\u0131 avtomatla\u015Fd\u0131rma il\u0259 \u0259m\u0259liyyatlar\u0131 sad\u0259l\u0259\u015Fdirin.",
      icon: "\u2699\uFE0F"
    },
    {
      title: "T\u0259bii Dil Emal\u0131",
      description: "M\xFC\u015Ft\u0259ri qar\u015F\u0131l\u0131ql\u0131 \u0259laq\u0259l\u0259rini t\u0259kmill\u0259\u015Fdirm\u0259k \xFC\xE7\xFCn s\xF6hb\u0259t botlar\u0131 v\u0259 m\u0259tn t\u0259hlili al\u0259tl\u0259rini t\u0259tbiq edin.",
      icon: "\u{1F4AC}"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="services" class="services" data-astro-cid-g5jplrhu> <div class="container" data-astro-cid-g5jplrhu> <div class="section-header" data-astro-cid-g5jplrhu> <h2 data-astro-cid-g5jplrhu>Xidmətlərimiz</h2> <p data-astro-cid-g5jplrhu>Kiçik və orta bizneslər üçün qabaqcıl süni intellekt həlləri təqdim edirik</p> </div> <div class="services-grid" data-astro-cid-g5jplrhu> ${services.map((service) => renderTemplate`<div class="service-card" data-astro-cid-g5jplrhu> <div class="service-icon" data-astro-cid-g5jplrhu>${service.icon}</div> <h3 data-astro-cid-g5jplrhu>${service.title}</h3> <p data-astro-cid-g5jplrhu>${service.description}</p> </div>`)} </div> </div> </section> `;
}, "/home/project/src/components/Services.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="about" class="about" data-astro-cid-v2cbyr3p> <div class="container" data-astro-cid-v2cbyr3p> <div class="about-content" data-astro-cid-v2cbyr3p> <div class="about-text" data-astro-cid-v2cbyr3p> <h2 data-astro-cid-v2cbyr3p>AI Business IT Haqqında</h2> <p data-astro-cid-v2cbyr3p>
Biz kiçik və orta ölçülü müəssisələrə qabaqcıl süni intellekt həlləri gətirməyə həsr olunmuş ixtisaslaşmış süni intellekt mütəxəssisləri komandasıyıq. Missiyamız süni intellekt texnologiyasını demokratikləşdirmək, onu bütün ölçülü şirkətlər üçün əlçatan və praktik etməkdir.
</p> <p data-astro-cid-v2cbyr3p>
Maşın öyrənməsi, təbii dilin emalı və məlumatların təhlili sahəsində illərlə təcrübəyə malik olaraq, biz müəssisələrə süni intellektin gücü ilə əməliyyatları optimallaşdırmağa, dəyərli məlumatlar əldə etməyə və innovativ müştəri təcrübələri yaratmağa kömək edirik.
</p> <p data-astro-cid-v2cbyr3p>
Yanaşmamız infrastruktura və ya ixtisaslaşmış komandalara böyük sərmayələr tələb etmədən real biznes dəyəri təqdim edən praktik, nəticəyönümlü həllərə yönəlib.
</p> </div> <div class="ai-visual" data-astro-cid-v2cbyr3p> <div class="ai-animation" data-astro-cid-v2cbyr3p> <div class="ai-brain" data-astro-cid-v2cbyr3p> <div class="brain-center" data-astro-cid-v2cbyr3p></div> <div class="brain-connections" data-astro-cid-v2cbyr3p> <div class="connection c1" data-astro-cid-v2cbyr3p></div> <div class="connection c2" data-astro-cid-v2cbyr3p></div> <div class="connection c3" data-astro-cid-v2cbyr3p></div> <div class="connection c4" data-astro-cid-v2cbyr3p></div> <div class="connection c5" data-astro-cid-v2cbyr3p></div> <div class="connection c6" data-astro-cid-v2cbyr3p></div> </div> <div class="brain-particles" data-astro-cid-v2cbyr3p> <div class="particle p1" data-astro-cid-v2cbyr3p></div> <div class="particle p2" data-astro-cid-v2cbyr3p></div> <div class="particle p3" data-astro-cid-v2cbyr3p></div> <div class="particle p4" data-astro-cid-v2cbyr3p></div> <div class="particle p5" data-astro-cid-v2cbyr3p></div> <div class="particle p6" data-astro-cid-v2cbyr3p></div> <div class="particle p7" data-astro-cid-v2cbyr3p></div> <div class="particle p8" data-astro-cid-v2cbyr3p></div> </div> </div> </div> <div class="ai-tagline" data-astro-cid-v2cbyr3p>Süni İntellekt ilə Biznesinizi Gələcəyə Daşıyın</div> </div> </div> </div> </section> `;
}, "/home/project/src/components/About.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faqItems = [
    {
      question: "S\xFCni intellekti n\u0259 \xFC\xE7\xFCn biznesim\u0259 inteqrasiya etm\u0259liy\u0259m?",
      answer: "S\xFCni intellekt texnologiyalar\u0131 biznesinizin effektivliyini art\u0131rmaq, x\u0259rcl\u0259ri azaltmaq v\u0259 r\u0259qab\u0259t \xFCst\xFCnl\xFCy\xFC \u0259ld\u0259 etm\u0259k \xFC\xE7\xFCn g\xFCcl\xFC vasit\u0259dir. S\xFCni intellekt rutin tap\u015F\u0131r\u0131qlar\u0131 avtomatla\u015Fd\u0131raraq i\u015F\xE7il\u0259rinizin daha d\u0259y\u0259rli i\u015Fl\u0259r\u0259 fokuslanmas\u0131na imkan verir, m\xFC\u015Ft\u0259ri t\u0259cr\xFCb\u0259sini f\u0259rdil\u0259\u015Fdirir v\u0259 m\u0259lumatlardan d\u0259y\u0259rli anlay\u0131\u015Flar \xE7\u0131xararaq daha yax\u015F\u0131 biznes q\u0259rarlar\u0131 verm\u0259y\u0259 k\xF6m\u0259k edir."
    },
    {
      question: "Ki\xE7ik v\u0259 orta biznes olaraq s\xFCni intellekt h\u0259ll\u0259rini nec\u0259 t\u0259tbiq ed\u0259 bil\u0259r\u0259m?",
      answer: "Ki\xE7ik v\u0259 orta biznesl\u0259r \xFC\xE7\xFCn s\xFCni intellekti t\u0259tbiq etm\u0259yin bir ne\xE7\u0259 praktik yolu var. Haz\u0131r s\xFCni intellekt xidm\u0259tl\u0259rind\u0259n istifad\u0259 ed\u0259r\u0259k ba\u015Flaya bil\u0259rsiniz - m\xFC\u015Ft\u0259ri xidm\u0259ti \xFC\xE7\xFCn chatbotlar, marketinq \xFC\xE7\xFCn m\u0259zmun yaratma al\u0259tl\u0259ri, sat\u0131\u015F proqnozlar\u0131 \xFC\xE7\xFCn analitik h\u0259ll\u0259r. AI Business IT kimi \u015Firk\u0259tl\u0259r siz\u0259 biznesinizin ehtiyaclar\u0131na uy\u011Fun h\u0259ll\u0259r t\u0259klif ed\u0259 bil\u0259r, b\xF6y\xFCk investisiya t\u0259l\u0259b etm\u0259d\u0259n s\xFCni intellektin \xFCst\xFCnl\xFCkl\u0259rind\u0259n yararlanma\u011Fa k\xF6m\u0259k ed\u0259r."
    },
    {
      question: "S\xFCni intellekt h\u0259ll\u0259rinin t\u0259tbiqi n\u0259 q\u0259d\u0259r x\u0259rc t\u0259l\u0259b edir?",
      answer: "S\xFCni intellekt h\u0259ll\u0259rinin x\u0259rci layih\u0259nin miqyas\u0131ndan v\u0259 m\xFCr\u0259kk\u0259bliyind\u0259n as\u0131l\u0131 olaraq d\u0259yi\u015Fir. Xo\u015F x\u0259b\u0259r odur ki, bulud \u0259sasl\u0131 s\xFCni intellekt xidm\u0259tl\u0259ri v\u0259 haz\u0131r h\u0259ll\u0259r say\u0259sind\u0259, ki\xE7ik v\u0259 orta biznesl\u0259r \xFC\xE7\xFCn s\xFCni intellekt daha \u0259l\xE7atan olub. Biz m\xFC\u015Ft\u0259ril\u0259rimiz\u0259 b\xFCdc\u0259l\u0259rin\u0259 uy\u011Fun h\u0259ll\u0259r t\u0259klif edirik - ayl\u0131q abun\u0259 modelind\u0259n tutmu\u015F x\xFCsusi layih\u0259l\u0259r\u0259 q\u0259d\u0259r. \u018Fsas m\u0259qs\u0259dimiz s\xFCni intellekt investisiyan\u0131z\u0131n biznesiniz\u0259 real d\u0259y\u0259r qatmas\u0131n\u0131 v\u0259 q\u0131sa m\xFCdd\u0259td\u0259 \xF6z\xFCn\xFC do\u011Frultmas\u0131n\u0131 t\u0259min etm\u0259kdir."
    },
    {
      question: "S\xFCni intellekt h\u0259ll\u0259ri hans\u0131 biznes prosesl\u0259rin\u0259 t\u0259tbiq edil\u0259 bil\u0259r?",
      answer: "S\xFCni intellekt dem\u0259k olar ki, b\xFCt\xFCn biznes sah\u0259l\u0259rind\u0259 t\u0259tbiq edil\u0259 bil\u0259r: M\xFC\u015Ft\u0259ri xidm\u0259ti (24/7 chatbotlar, sor\u011Fular\u0131n avtomatik t\u0259snifat\u0131), Marketinq (h\u0259d\u0259fl\u0259nmi\u015F kampaniyalar, kontentin optimalla\u015Fd\u0131r\u0131lmas\u0131), Sat\u0131\u015F (m\xFC\u015Ft\u0259ri davran\u0131\u015F\u0131n\u0131n t\u0259hlili, sat\u0131\u015F proqnozlar\u0131), \u018Fm\u0259liyyatlar (t\u0259chizat z\u0259ncirinin optimalla\u015Fd\u0131r\u0131lmas\u0131, keyfiyy\u0259t\u0259 n\u0259zar\u0259t), Maliyy\u0259 (f\u0131r\u0131ldaq\xE7\u0131l\u0131\u011F\u0131n a\u015Fkarlanmas\u0131, x\u0259rcl\u0259rin t\u0259hlili), \u0130nsan resurslar\u0131 (namiz\u0259dl\u0259rin se\xE7ilm\u0259si, i\u015F\xE7i performans\u0131n\u0131n t\u0259hlili). Biznesinizin ehtiyaclar\u0131na uy\u011Fun olaraq, \u0259n \xE7ox d\u0259y\u0259r qatacaq sah\u0259l\u0259rd\u0259n ba\u015Flayaraq s\xFCni intellekti m\u0259rh\u0259l\u0259li \u015F\u0259kild\u0259 t\u0259tbiq etm\u0259yi t\xF6vsiy\u0259 edirik."
    },
    {
      question: "S\xFCni intellekt h\u0259ll\u0259rinin t\u0259tbiqi n\u0259 q\u0259d\u0259r vaxt apar\u0131r v\u0259 nec\u0259 ba\u015Flamal\u0131yam?",
      answer: "T\u0259tbiq m\xFCdd\u0259ti layih\u0259nin miqyas\u0131ndan as\u0131l\u0131 olaraq bir ne\xE7\u0259 h\u0259ft\u0259d\u0259n bir ne\xE7\u0259 aya q\u0259d\u0259r d\u0259yi\u015F\u0259 bil\u0259r. Ba\u015Flamaq \xFC\xE7\xFCn \u0259n yax\u015F\u0131 yol biziml\u0259 pulsuz m\u0259sl\u0259h\u0259tl\u0259\u015Fm\u0259 seans\u0131 t\u0259\u015Fkil etm\u0259kdir. Bu g\xF6r\xFC\u015Fd\u0259 biznesinizin ehtiyaclar\u0131n\u0131 m\xFC\u0259yy\u0259nl\u0259\u015Fdir\u0259c\u0259k, s\xFCni intellektin \u0259n \xE7ox fayda ver\u0259 bil\u0259c\u0259yi sah\u0259l\u0259ri t\u0259hlil ed\u0259c\u0259k v\u0259 siz\u0259 uy\u011Fun yol x\u0259rit\u0259si t\u0259klif ed\u0259c\u0259yik. Biz h\u0259m\xE7inin ki\xE7ik pilot layih\u0259l\u0259rl\u0259 ba\u015Flama\u011F\u0131 t\xF6vsiy\u0259 edirik - bu, riskinizi minimuma endirm\u0259kl\u0259 s\xFCni intellektin biznesiniz\u0259 g\u0259tir\u0259c\u0259yi faydalar\u0131 qiym\u0259tl\u0259ndirm\u0259y\u0259 imkan verir."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="faq" class="faq" data-astro-cid-al2ca2vr> <div class="container" data-astro-cid-al2ca2vr> <div class="section-header" data-astro-cid-al2ca2vr> <h2 data-astro-cid-al2ca2vr>Tez-tez Verilən Suallar</h2> <p data-astro-cid-al2ca2vr>Süni intellektin biznesinizə inteqrasiyası haqqında ən çox soruşulan suallar</p> </div> <div class="faq-container" data-astro-cid-al2ca2vr> ${faqItems.map((item, index) => renderTemplate`<div class="faq-item" data-astro-cid-al2ca2vr> <button class="faq-question" data-astro-cid-al2ca2vr> ${item.question} <span class="faq-icon" data-astro-cid-al2ca2vr>+</span> </button> <div class="faq-answer" data-astro-cid-al2ca2vr> <p data-astro-cid-al2ca2vr>${item.answer}</p> </div> </div>`)} </div> </div> </section>  `;
}, "/home/project/src/components/FAQ.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="contact" data-astro-cid-xmivup5a> <div class="container" data-astro-cid-xmivup5a> <div class="section-header" data-astro-cid-xmivup5a> <h2 data-astro-cid-xmivup5a>Bizimlə Əlaqə</h2> <p data-astro-cid-xmivup5a>Süni intellektin biznesinizi necə dəyişdirə biləcəyini müzakirə etmək üçün əlaqə saxlayın</p> </div> <div class="contact-content" data-astro-cid-xmivup5a> <div class="contact-info" data-astro-cid-xmivup5a> <div class="info-item" data-astro-cid-xmivup5a> <h3 data-astro-cid-xmivup5a>E-poçt</h3> <p data-astro-cid-xmivup5a>firo.memmedli@gmail.com</p> </div> <div class="info-item" data-astro-cid-xmivup5a> <h3 data-astro-cid-xmivup5a>Telefon</h3> <p data-astro-cid-xmivup5a>+1 (555) 123-4567</p> </div> <div class="info-item" data-astro-cid-xmivup5a> <h3 data-astro-cid-xmivup5a>Ünvan</h3> <p data-astro-cid-xmivup5a>123 AI Küçəsi, Texnologiya Şəhəri<br data-astro-cid-xmivup5a>İnnovasiya Dövləti, 12345</p> </div> </div> <div class="contact-form" data-astro-cid-xmivup5a> <form id="contactForm" data-astro-cid-xmivup5a> <div class="form-group" data-astro-cid-xmivup5a> <label for="name" data-astro-cid-xmivup5a>Ad Soyad</label> <input type="text" id="name" name="name" required data-astro-cid-xmivup5a> </div> <div class="form-group" data-astro-cid-xmivup5a> <label for="email" data-astro-cid-xmivup5a>E-poçt</label> <input type="email" id="email" name="email" required data-astro-cid-xmivup5a> </div> <div class="form-group" data-astro-cid-xmivup5a> <label for="message" data-astro-cid-xmivup5a>Mesaj</label> <textarea id="message" name="message" rows="5" required data-astro-cid-xmivup5a></textarea> </div> <button type="submit" id="submitButton" class="btn" data-astro-cid-xmivup5a>Mesaj Göndər</button> <div id="statusMessage" class="status-message" data-astro-cid-xmivup5a></div> </form> </div> </div> </div> </section>  `;
}, "/home/project/src/components/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="container" data-astro-cid-sz7xmlte> <div class="footer-content" data-astro-cid-sz7xmlte> <div class="footer-logo" data-astro-cid-sz7xmlte> <h3 data-astro-cid-sz7xmlte>AI Business IT</h3> <p data-astro-cid-sz7xmlte>Kiçik və orta bizneslər üçün süni intellekt həlləri</p> </div> <div class="footer-links" data-astro-cid-sz7xmlte> <div class="link-group" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Şirkət</h4> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="#about" data-astro-cid-sz7xmlte>Haqqımızda</a></li> <li data-astro-cid-sz7xmlte><a href="#services" data-astro-cid-sz7xmlte>Xidmətlər</a></li> <li data-astro-cid-sz7xmlte><a href="#contact" data-astro-cid-sz7xmlte>Əlaqə</a></li> </ul> </div> <div class="link-group" data-astro-cid-sz7xmlte> <h4 data-astro-cid-sz7xmlte>Hüquqi</h4> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte><a href="#" data-astro-cid-sz7xmlte>Məxfilik Siyasəti</a></li> <li data-astro-cid-sz7xmlte><a href="#" data-astro-cid-sz7xmlte>Xidmət Şərtləri</a></li> </ul> </div> </div> </div> <div class="copyright" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; ${currentYear} AI Business IT.</p> </div> </div> </footer> `;
}, "/home/project/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Chatbot = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<link href="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css" rel="stylesheet"><script type="module">
	import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

	createChat({
		webhookUrl: 'https://primary-n8n-yeni.up.railway.app/webhook/6f89b077-5cad-48db-b026-3edac3932103/chat',
    target: '#n8n-chat',
    mode: 'window',
    chatInputKey: 'chatInput',
    chatSessionKey: 'sessionId',
    metadata: {},
    showWelcomeScreen: false,
    defaultLanguage: 'az',
    initialMessages: [
      'Salam! \u{1F44B}',
      'M\u0259nim ad\u0131m Nathan. Bu g\xFCn siz\u0259 nec\u0259 k\xF6m\u0259k ed\u0259 bil\u0259r\u0259m?'
    ],
    i18n: {
      az: {
        title: 'AI Biznes IT',
        subtitle: "S\xF6hb\u0259t\u0259 ba\u015Flay\u0131n. Biz 7/24 siz\u0259 k\xF6m\u0259k etm\u0259y\u0259 haz\u0131r\u0131q.",
        footer: '',
        getStarted: 'Yeni S\xF6hb\u0259t',
        inputPlaceholder: 'Sual\u0131n\u0131z\u0131 yaz\u0131n...',
      },
      en: {
        title: 'AI Business IT',
        subtitle: "Start a chat. We're here to help you 24/7.",
        footer: '',
        getStarted: 'New Conversation',
        inputPlaceholder: 'Type your question...',
      }
    },
    primaryColor: '#6366f1'
	});
<\/script>`, '<div id="n8n-chat"></div>'])), maybeRenderHead());
}, "/home/project/src/components/Chatbot.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "AI Business IT - AI Solutions for Businesses" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ${renderComponent($$result2, "Chatbot", $$Chatbot, {})} ` })}`;
}, "/home/project/src/pages/index.astro", void 0);

const $$file = "/home/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
