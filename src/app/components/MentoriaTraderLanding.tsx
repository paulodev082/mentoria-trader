"use client";

import { useMemo, useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  Star,
  Shield,
  ArrowRight,
  Users,
  LineChart,
  MessageCircle,
  Trophy,
  Sparkles,
  DollarSign,
  Instagram,
} from "lucide-react";

/* ================== CONFIG ================== */
// Número do WhatsApp no formato internacional sem + nem espaços
const WA_NUMBER = "5511988964565";
const WHATSAPP_LINK =
  "https://wa.me/5511988964565?text=Ol%C3%A1!%20Quero%20entrar%20na%20mentoria%20de%20trader.";
const INSTAGRAM_URL =
  "https://www.instagram.com/alans.888/profilecard/?igsh=bzN1ZGluMXBuYjJ1";

const MENTOR_NOME = "MAGO O TRADER";
const MENTOR_TITULO = "Trader e Mentor";
const MARCA = "Mentoria Mago O Trader";
/* ============================================ */

type SectionProps = {
  id?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
};

export default function MentoriaTraderLanding() {
  const [showPopup, setShowPopup] = useState(false);

  // Abre o popup 2s após carregar, se já não foi dispensado nas últimas 24h
  useEffect(() => {
    const key = "mt_popup_until";
    const until = localStorage.getItem(key);
    const now = Date.now();
    if (!until || now > Number(until)) {
      const t = setTimeout(() => setShowPopup(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  const beneficios = useMemo(
    () => [
      {
        icon: <LineChart className="w-6 h-6" />,
        title: "Estratégias comprovadas",
        desc:
          "Setup objetivo para day trade e swing trade, com entradas claras, stops e alvos definidos.",
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Acompanhamento diário",
        desc:
          "Sala ao vivo e comunidade para tirar dúvidas e evoluir com outros alunos.",
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: "Gestão",
        desc:
          "Modelos de risk management para proteger capital e crescer de forma consistente.",
      },
      {
        icon: <Star className="w-6 h-6" />,
        title: "Mentoria premium",
        desc:
          "Feedback individual, plano de estudos e trilhas para iniciantes e avançados.",
      },
    ],
    []
  );

  const conteudos = [
    "Leitura de fluxo e contexto (price action prático)",
    "Setups de alta probabilidade e confirmação",
    "Psicologia do trader e disciplina",
    "Gestão e tamanho de posição",
    "Playbook de rotina diária (pré, durante e pós-mercado)",
    "Diário de trade e métricas de desempenho",
  ];

  const depoimentos = [
    {
      nome: "Mariana S.",
      texto:
        "Depois de 2 semanas na mentoria, saí do aleatório para um plano claro. Meu mês fechou positivo pela primeira vez!",
      ganho: "+R$ 2.140",
    },
    {
      nome: "Carlos R.",
      texto:
        "A gestão mudou meu jogo. Hoje opero tranquilo e consistente, sem buscar o 'tiro de sorte'.",
      ganho: "+R$ 1.780",
    },
    {
      nome: "João P.",
      texto:
        "O suporte no grupo é absurdo. A cada dúvida, uma resposta com print, exemplo e explicação objetiva.",
      ganho: "+R$ 3.020",
    },
  ];

  const faq = [
    {
      q: "Para quem é a mentoria?",
      a:
        "Para iniciantes e traders com experiência que querem sistematizar entradas, dominar gestão e criar consistência.",
    },
    {
      q: "Preciso de experiência?",
      a:
        "Não. Você terá trilhas de estudo desde o zero até setups avançados, com acompanhamento.",
    },
    {
      q: "Como funcionam as aulas?",
      a:
        "Aulas gravadas + encontros ao vivo semanais. Suporte diário no grupo e materiais para prática.",
    },
    {
      q: "Posso cancelar?",
      a:
        "Sim, você pode solicitar cancelamento a qualquer momento. Também oferecemos garantia de 7 dias.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <Hero />
      <TrustBar />

      {/* ====== POPUP ====== */}
      {showPopup && (
        <LeadPopup
          onClose={() => {
            // não mostrar novamente por 24h
            localStorage.setItem(
              "mt_popup_until",
              String(Date.now() + 24 * 60 * 60 * 1000)
            );
            setShowPopup(false);
          }}
        />
      )}

      <Section
        id="beneficios"
        title={`Por que a ${MARCA}?`}
        subtitle="Tudo que você precisa para performar de forma consistente"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6 shadow-lg"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-amber-500/10 p-3 text-amber-400">
                {b.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        id="como-funciona"
        title="Como funciona"
        subtitle="Do onboarding ao seu primeiro trade consistente"
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Onboarding e diagnóstico",
                desc:
                  "Entendemos seu momento, traçamos metas e um plano de estudos sob medida.",
              },
              {
                step: 2,
                title: "Fundamentos e setups",
                desc:
                  "Aulas práticas e diretas para você operar com confiança e critérios objetivos.",
              },
              {
                step: 3,
                title: "Gestão na prática",
                desc:
                  "Tamanho de posição, exposição diária, stops e alvos — tudo modelado para seu perfil.",
              },
              {
                step: 4,
                title: "Acompanhamento e evolução",
                desc:
                  "Sala ao vivo, revisão de trades e feedbacks para acelerar seus resultados.",
              },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-slate-950 font-bold">
                  {s.step}
                </div>
                <div>
                  <h4 className="font-semibold text-white">{s.title}</h4>
                  <p className="text-slate-300 text-sm">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vídeo local: sem barra lateral, autoplay e loop */}
          <div className="relative">
            <div className="mx-auto w-full max-w-[220px]">
              <div className="relative rounded-[22px] p-2 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl ring-1 ring-white/20 shadow-[0_20px_80px_-20px_rgba(245,158,11,.35)]">
                <div className="rounded-[18px] overflow-hidden bg-black">
                  <div className="aspect-[9/16] w-full">
                    <video
                      src="/video1.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute -inset-1 rounded-[26px] bg-amber-500/10 blur-2xl" />
              </div>
              <p className="mt-3 text-center text-xs text-slate-400" />
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="conteudo"
        title="O que você vai aprender"
        subtitle="Do zero ao avançado, com método e clareza"
      >
        <ul className="grid md:grid-cols-2 gap-3">
          {conteudos.map((c, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-200">
              <Check className="mt-1 w-5 h-5 text-amber-400" />
              <span className="text-sm">{c}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section
        id="prova-social"
        title="Resultados dos alunos"
        subtitle="Depoimentos reais de quem aplicou o método"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <Trophy className="w-4 h-4 text-amber-400" />
                  </div>
                  <span className="font-semibold">{d.nome}</span>
                </div>
                <span className="text-emerald-400 text-sm font-medium">
                  {d.ganho}
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                “{d.texto}”
              </p>
            </motion.div>
          ))}
        </div>
        <p className="text-xs text-slate-400 mt-3">
          Disclaimer: resultados variam. Nenhum ganho é garantido. Operar no
          mercado envolve riscos.
        </p>
      </Section>

      {/* ======= PLANOS ======= */}
      <Section
        id="plano"
        title="Entre para a mentoria"
        subtitle="Vagas limitadas para acompanhamento próximo"
      >
        <div className="space-y-8">
          <CardFeature />

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <PlanCard
              title="Plano Mentoria"
              price="R$ 500,00"
              desc="Acesso completo + suporte + encontros ao vivo."
              badge="vagas limitadas"
              cta="Entrar na mentoria pelo WhatsApp"
              waMessage="Olá! Quero assinar a Mentoria."
            />

            <PlanCard
              title="Plano Sala de Operações"
              price="R$ 150,00"
              desc="Sala ao vivo com envio de sinais de compra e venda + espaço para tirar dúvidas."
              badge="vagas limitadas"
              cta="Entrar na sala pelo WhatsApp"
              waMessage="Olá! Quero assinar o Plano Sala de Operações."
            />
          </div>
        </div>
      </Section>

      <Section
        id="faq"
        title="Perguntas frequentes"
        subtitle="Tire suas dúvidas antes de entrar"
      >
        <div className="divide-y divide-white/10 rounded-2xl overflow-hidden ring-1 ring-white/10">
          {faq.map((f, i) => (
            <details key={i} className="group bg-slate-900/40">
              <summary className="list-none cursor-pointer p-5 hover:bg-slate-900/60 transition flex items-center justify-between">
                <span className="font-medium">{f.q}</span>
                <ArrowRight className="w-5 h-5 transition group-open:rotate-90" />
              </summary>
              <div className="p-5 pt-0 text-slate-300 text-sm">{f.a}</div>
            </details>
          ))}
        </div>
      </Section>

      <Section
        id="mentor"
        title={`Sobre ${MENTOR_NOME}`}
        subtitle={`${MENTOR_TITULO} | especialista em consistência e gestão`}
      >
        <div className="grid lg:grid-cols-[220px_1fr] gap-8 items-center">
          {/* imagem 500x500 responsiva (preenche) */}
          <div className="w-full max-w-[500px] aspect-square rounded-2xl overflow-hidden bg-slate-800 ring-1 ring-white/10 relative">
            <Image
              src="/logomago.jpeg"
              alt={MENTOR_NOME}
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="space-y-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              {MENTOR_NOME} opera há mais de 5 anos no mercado, com foco em
              leitura de contexto e setups objetivos. Já ajudou centenas de
              alunos a saírem do aleatório para um processo claro e mensurável.
            </p>
            <ul className="grid sm:grid-cols-3 gap-3">
              {[
                { icon: <Trophy className="w-5 h-5" />, label: "+500 alunos" },
                {
                  icon: <DollarSign className="w-5 h-5" />,
                  label: "Risco controlado",
                },
                { icon: <Sparkles className="w-5 h-5" />, label: "Método direto" },
              ].map((it, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 rounded-xl bg-slate-900/60 ring-1 ring-white/10 p-3"
                >
                  <span className="text-amber-400">{it.icon}</span>
                  <span className="text-sm">{it.label}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 text-slate-950 px-5 py-3 font-semibold shadow-lg hover:opacity-90"
              >
                Falar no WhatsApp <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-800 ring-1 ring-white/10 px-5 py-3 font-semibold hover:bg-slate-700"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </Section>

      <CtaSticky />
      <Footer />
    </div>
  );
}

/* ---------- Subcomponentes ---------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* LOGO + NOME */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logomago.jpeg"
            alt={MARCA}
            width={32}
            height={32}
            className="h-8 w-8 rounded object-cover"
            priority
          />
          <span className="font-bold tracking-tight">{MARCA}</span>
        </Link>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#beneficios" className="hover:text-white">Benefícios</a>
          <a href="#como-funciona" className="hover:text-white">Como funciona</a>
          <a href="#conteudo" className="hover:text-white">Conteúdo</a>
          <a href="#prova-social" className="hover:text-white">Resultados</a>
          <a href="#plano" className="hover:text-white font-semibold text-white">Entrar</a>
        </nav>

        {/* CTA HEADER */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-800 ring-1 ring-white/10 px-3 py-2 font-semibold hover:bg-slate-700"
          >
            <Instagram className="w-4 h-4" /> IG
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 text-slate-950 px-4 py-2 font-semibold shadow hover:opacity-90"
          >
            Quero entrar
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* fundo com gradiente + brilho */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute -top-24 -left-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-20 bg-amber-500/30" />
        <div className="absolute -bottom-32 -right-32 h-[520px] w-[520px] rounded-full blur-3xl opacity-20 bg-blue-500/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Esquerda */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Construa{" "}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent animate-[shine_6s_linear_infinite]">
                consistência
              </span>{" "}
              no mercado com um método direto
            </motion.h1>

            <p className="mt-4 text-slate-300/90 max-w-xl">
              Entre para a {MARCA} e tenha acesso às aulas, setups, gestão e acompanhamento para evoluir de forma previsível.
            </p>

            {/* CTA WhatsApp */}
            <div className="mt-6">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 text-slate-950 px-5 py-3 font-semibold shadow-[0_10px_30px_rgba(245,158,11,.25)] hover:brightness-95 transition"
              >
                Falar no WhatsApp <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            {/* selos */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1">
                <Shield className="w-4 h-4" /> Garantia 7 dias
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1">
                <Star className="w-4 h-4" /> +500 alunos
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1">
                <LineChart className="w-4 h-4" /> Setups objetivos
              </span>
            </div>
          </div>

          {/* Direita — vídeo local 9:16 */}
          <div className="relative">
            <div className="mx-auto w-full max-w-[220px]">
              <div className="relative rounded-[22px] p-2 bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-xl ring-1 ring-white/20 shadow-[0_20px_80px_-20px_rgba(245,158,11,.35)]">
                <div className="rounded-[18px] overflow-hidden bg-black">
                  <div className="aspect-[9/16] w-full">
                    <video
                      src="/video2.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute -inset-1 rounded-[26px] bg-amber-500/10 blur-2xl" />
              </div>
              <p className="mt-3 text-center text-xs text-slate-400" />
            </div>
          </div>
        </div>
      </div>

      {/* animação do shine no gradiente da palavra */}
      <style jsx>{`
        @keyframes shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </section>
  );
}

function TrustBar() {
  return (
    <div className="bg-slate-900/60 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-wrap items-center justify-center gap-6">
        {["B3", "Mini Índice", "Mini Dólar", "Ações", "Opções"].map((logo, i) => (
          <div key={i} className="text-slate-400 text-xs md:text-sm">
            {logo}
          </div>
        ))}
      </div>
    </div>
  );
}

function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
          {subtitle && <p className="text-slate-300 mt-2 max-w-2xl">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function CardFeature() {
  return (
    <div className="rounded-2xl bg-gradient-to-b from-slate-900/70 to-slate-900/30 ring-1 ring-white/10 p-6 shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <Star className="w-5 h-5 text-amber-400" />
        <h3 className="text-lg font-semibold">O que está incluso</h3>
      </div>
      <ul className="space-y-3 text-sm">
        {[
          "Acesso imediato a todas as aulas",
          "Sala ao vivo / encontros semanais",
          "Setups com critérios objetivos",
          "Diário de trade e planilhas",
          "Modelos de gestão",
          "Suporte e comunidade",
        ].map((i, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <Check className="mt-1 w-4 h-4 text-amber-400" /> {i}
          </li>
        ))}
      </ul>
      <div className="mt-6 rounded-xl bg-slate-950/40 ring-1 ring-white/10 p-4 text-xs text-slate-400">
        * Mercado financeiro envolve riscos. Este material tem caráter educacional e não constitui recomendação de
        investimento.
      </div>
    </div>
  );
}

/* ---- Card genérico de plano ---- */
function PlanCard({
  title,
  price,
  desc,
  badge,
  cta,
  waMessage,
}: {
  title: string;
  price: string;
  desc: string;
  badge?: string;
  cta: string;
  waMessage: string;
}) {
  const url = `${WHATSAPP_LINK}&text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="h-full rounded-2xl bg-slate-900/60 ring-1 ring-white/10 p-6 shadow-xl flex flex-col">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        {badge && (
          <span className={`text-xs ${badge === "novo" ? "text-emerald-400" : "text-emerald-300"}`}>
            {badge}
          </span>
        )}
      </div>

      <div className="mt-3 flex items-end gap-2">
        <span className="text-4xl font-extrabold">{price}</span>
        <span className="text-slate-400">/ mês</span>
      </div>

      <p className="text-sm text-slate-300 mt-2">{desc}</p>

      <div className="mt-5 gap-3 flex flex-col">
        <a
          href={url}
          target="_blank"
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 text-slate-950 px-5 py-3 font-semibold shadow-lg hover:opacity-90"
        >
          {cta} <MessageCircle className="w-4 h-4" />
        </a>
        <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
          <Shield className="w-4 h-4" /> Garantia de 7 dias
        </div>
      </div>
    </div>
  );
}

/* ===== Popup de captação ===== */
function LeadPopup({ onClose }: { onClose: () => void }) {
  const [nome, setNome] = useState("");
  const [whats, setWhats] = useState("");
  const [email, setEmail] = useState("");

  function sendToWhats(e: React.FormEvent) {
    e.preventDefault();
    const msg = [
      "Olá! Quero fazer minha inscrição na mentoria.",
      `• Nome: ${nome || "-"}`,
      `• WhatsApp: ${whats || "-"}`,
      email ? `• E-mail: ${email}` : null,
      "",
      "Vim pelo popup do site.",
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* modal */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl bg-slate-900 ring-1 ring-white/10 shadow-2xl">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-9 w-9 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold">!</div>
            <h3 className="text-xl font-semibold">Mentoria {MENTOR_NOME}</h3>
          </div>
          <p className="text-slate-300 text-sm">
            Quer garantir sua vaga agora? Preencha rapidinho e vamos te chamar no WhatsApp.
          </p>

          <form onSubmit={sendToWhats} className="mt-4 space-y-3">
            <div>
              <label className="text-xs text-slate-400">Nome</label>
              <input
                required
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="mt-1 w-full rounded-xl bg-slate-950/60 ring-1 ring-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400">WhatsApp</label>
              <input
                required
                value={whats}
                onChange={(e) => setWhats(e.target.value)}
                className="mt-1 w-full rounded-xl bg-slate-950/60 ring-1 ring-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="(11) 90000-0000"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400">E-mail (opcional)</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl bg-slate-950/60 ring-1 ring-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="voce@email.com"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 text-slate-950 px-4 py-2.5 font-semibold shadow-lg hover:opacity-90"
              >
                Fazer inscrição pelo WhatsApp <MessageCircle className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-xl bg-slate-800 ring-1 ring-white/10 px-4 py-2.5 font-semibold hover:bg-slate-700"
              >
                Agora não
              </button>
            </div>

            <div className="flex items-center justify-between pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                className="inline-flex items-center gap-2 text-xs text-slate-300 hover:underline"
              >
                <Instagram className="w-4 h-4" /> Seguir no Instagram
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                className="text-xs text-amber-400 hover:underline"
              >
                Falar direto no WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function CtaSticky() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-40">
      <div className="mx-auto max-w-2xl px-4">
        <div className="rounded-2xl bg-slate-900/90 backdrop-blur ring-1 ring-white/10 shadow-2xl p-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <MessageCircle className="w-4 h-4 text-amber-400" />
            <span>Fale com nossa equipe e garanta sua vaga</span>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            className="rounded-xl bg-amber-500 text-slate-950 px-4 py-2 font-semibold hover:opacity-90"
          >
            Entrar agora
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/logomago.jpeg" alt={MARCA} width={32} height={32} className="rounded object-cover" />
            <span className="font-bold">{MARCA}</span>
          </div>
          <p className="text-slate-400 mt-2 max-w-sm">
            Educação em trading focada em consistência, gestão e tomada
            de decisão simples.
          </p>
        </div>
        <div>
          <p className="text-slate-400">Contato</p>
          <ul className="mt-2 space-y-2 text-slate-300">
            <li>
              <a href={WHATSAPP_LINK} target="_blank" className="hover:underline">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" className="inline-flex items-center gap-2 hover:underline">
                <Instagram className="w-4 h-4" /> Instagram
              </a>
            </li>
            <li>
              <a href="mailto:contato@suaempresa.com" className="hover:underline">
                contato@suaempresa.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-slate-400">Legal</p>
          <ul className="mt-2 space-y-2 text-slate-300">
            <li><a href="#" className="hover:underline">Termos de uso</a></li>
            <li><a href="#" className="hover:underline">Política de privacidade</a></li>
            <li className="text-xs text-slate-500">
              * Este conteúdo é educacional e não constitui recomendação de
              investimento. Resultados passados não garantem resultados futuros.
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {MARCA}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
