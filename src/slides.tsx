import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Activity, AlertTriangle, ArrowRight, ArrowUpRight, Bell, Bluetooth,
  Blocks, BrainCircuit, CheckCircle2, ChevronRight, Cloud, Cpu,
  Eye, Fingerprint, Gauge, Globe2, Hexagon, Layers, Link2, LocateFixed,
  Lock, MapPin, Network, Radar, RefreshCcw,
  Satellite, Server, ShieldCheck, ShieldHalf, Siren, Smartphone,
  Users, Video, Waves, Zap,
} from "lucide-react";
import { H2, IQOOPhone, Kicker, ShieldMark, Sub, fadeUp, CAPABILITIES } from "./components";

/* ================= SLIDE 1 — COVER ================= */
export function S1Cover() {
  return (
    <div className="relative flex h-full items-center overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD200]/[0.06] blur-[120px]" />
      <div className="absolute right-[8%] top-[12%] hidden xl:block font-mono2 text-[10px] leading-5 text-white/25 text-right">
        LAT 28.6139°N<br />LON 77.2090°E<br />MESH <span className="text-[#FFD200]">● 1,284 NODES</span><br />UPTIME 99.98%
      </div>
      <div className="absolute left-[4%] bottom-[10%] hidden xl:flex items-center gap-2 font-mono2 text-[10px] text-white/30">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-blink" /> SYSTEM NOMINAL — SENSING ACTIVE
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-8 px-6 md:px-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0} className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[#FFD200]/40 bg-[#FFD200]/10 px-3 py-1 font-mono2 text-[10px] tracking-[0.2em] text-[#FFD200]">SIH HACKATHON · FINALIST BUILD</span>
            <span className="rounded-full border border-white/15 px-3 py-1 font-mono2 text-[10px] tracking-[0.2em] text-white/60">REAL-TIME SAFETY INTELLIGENCE</span>
          </motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="font-display mt-5 text-[clamp(56px,8.5vw,124px)] font-bold leading-[0.92] tracking-[-0.03em]">
            JAN<span className="text-[#FFD200]">RAK</span>SHAK
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2} className="font-display mt-4 text-[clamp(16px,2vw,26px)] font-medium leading-snug text-white/90">
            See the threat. <span className="text-[#FFD200]">Predict the risk.</span><br />Act before it escalates.
          </motion.p>
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3} className="mt-3 max-w-lg text-[13px] md:text-[15px] text-white/50">
            Real-Time Public Safety Intelligence Using Jan Devices — turning every capable smartphone into a sensing, processing &amp; relay node.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4} className="mt-7 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-[#FFD200] px-5 py-2.5 font-display text-[13px] font-bold tracking-wide text-black">
              <Radar size={15} /> LIVE SYSTEM DEMO <ChevronRight size={15} />
            </div>
            <div className="flex items-center gap-4 rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 font-mono2 text-[11px] text-white/70">
              <span><b className="text-white">18ms</b> inference</span>
              <span className="h-3 w-px bg-white/15" />
              <span><b className="text-white">4-hop</b> BLE relay</span>
              <span className="h-3 w-px bg-white/15" />
              <span><b className="text-[#FFD200]">24/7</b> sensing</span>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="flex justify-center">
          <IQOOPhone mode="hero" />
        </motion.div>
      </div>

      {/* bottom strip */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 md:grid-cols-4 divide-x divide-white/10 font-mono2 text-[10px] tracking-[0.15em] text-white/50">
          {[["SENSOR", "NODE ACTIVE"], ["PROCESSOR", "EDGE INFERENCE"], ["RELAY", "MESH LINKED"], ["INTERFACE", "SOS READY"]].map(([a, b]) => (
            <div key={a} className="flex items-center justify-center gap-2 px-4 py-2.5">
              <span className="text-[#FFD200]">▮</span> {a} <span className="text-white/25">/</span> <span className="text-white/80">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= SLIDE 2 — PROBLEM ================= */
export function S2Problem() {
  const stages = [
    { k: "SIGNAL", icon: Waves, t: "Weak early signals", d: "Abnormal motion, sound spikes, crowd density shifts — invisible in isolation.", c: "text-sky-400", bg: "bg-sky-400/10", bd: "border-sky-400/25" },
    { k: "RISK", icon: Gauge, t: "Risk builds silently", d: "No fusion of signals. No score. No context. Danger compounds unnoticed.", c: "text-[#FFD200]", bg: "bg-[#FFD200]/10", bd: "border-[#FFD200]/30" },
    { k: "INCIDENT", icon: AlertTriangle, t: "Incident erupts", d: "Stampede, assault, fire, crash — now visible, now costly, now late.", c: "text-orange-400", bg: "bg-orange-500/10", bd: "border-orange-500/30" },
    { k: "RESPONSE", icon: Siren, t: "Response lags", d: "Delayed calls, vague locations, zero situational awareness on arrival.", c: "text-red-400", bg: "bg-red-500/10", bd: "border-red-500/30" },
  ];
  return (
    <div className="relative flex h-full items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute inset-x-0 top-[38%] h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-12">
        <Kicker index="02 / 14" label="The Problem" />
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <H2>Emergencies don&apos;t start<br />as <span className="text-[#FFD200]">emergencies.</span></H2>
          <Sub>Every major incident was a small signal first. Today&apos;s response is <span className="text-white">reactive</span> — fragmented signals, delayed reporting, dead zones, zero live context.</Sub>
        </div>

        {/* EKG strip */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/60">
          <svg viewBox="0 0 1200 90" className="h-[74px] w-full" preserveAspectRatio="none">
            <path d="M0 45 H 260 L275 45 285 20 295 70 305 38 315 45 H 520 L535 45 545 8 560 82 572 30 585 45 H 780 L795 45 805 25 815 65 825 45 H 900 L915 45 925 5 945 85 960 25 975 45 H1200"
              fill="none" stroke="#FFD200" strokeWidth="2" opacity="0.9" />
            <path d="M0 45 H 260 L275 45 285 20 295 70 305 38 315 45 H 520 L535 45 545 8 560 82 572 30 585 45 H 780 L795 45 805 25 815 65 825 45 H 900 L915 45 925 5 945 85 960 25 975 45 H1200"
              fill="none" stroke="#ff3b30" strokeWidth="2" strokeDasharray="8 10" className="animate-dash" opacity="0.5" />
          </svg>
          <div className="flex justify-between border-t border-white/10 px-4 py-1.5 font-mono2 text-[9px] tracking-[0.2em] text-white/40">
            <span>NORMAL BASELINE</span><span className="text-[#FFD200]">▲ ANOMALY WINDOW</span><span className="text-red-400">▼ CRITICAL — UNREPORTED 11 MIN</span>
          </div>
        </motion.div>

        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stages.map((s, i) => (
            <motion.div key={s.k} variants={fadeUp} initial="hidden" animate="show" custom={i}
              className={`relative rounded-2xl border ${s.bd} bg-[#0b0b0d] p-4`}>
              <div className="flex items-center justify-between">
                <span className={`font-mono2 text-[10px] tracking-[0.25em] ${s.c}`}>0{i + 1} · {s.k}</span>
                <s.icon size={16} className={s.c} />
              </div>
              <div className="font-display mt-2 text-[16px] font-bold">{s.t}</div>
              <p className="mt-1 text-[12px] leading-relaxed text-white/50">{s.d}</p>
              {i < 3 && <div className="absolute -right-[13px] top-1/2 z-10 hidden lg:flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black text-white/60"><ArrowRight size={12} /></div>}
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5} className="mt-4 flex flex-wrap gap-2 font-mono2 text-[10.5px]">
          {[["Fragmented signals", "No single sensor tells the story"], ["Delayed reporting", "Avg. 7–11 min to first call"], ["Connectivity dead-zones", "Crowds kill networks"], ["No live context", "Responders arrive blind"]].map(([a, b]) => (
            <div key={a} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" /><b className="text-white">{a}</b> — {b}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* ================= SLIDE 3 — IDEA ================= */
export function S3Idea() {
  const spokes = [
    { icon: Users, k: "PEOPLE", d: "Crowd becomes sensor grid", pos: "left-[2%] top-[16%]", line: "from-left" },
    { icon: Smartphone, k: "NEARBY DEVICES", d: "BLE mesh relays alerts", pos: "right-[2%] top-[16%]", line: "from-right" },
    { icon: Cloud, k: "CLOUD CORE", d: "Fusion + risk scoring", pos: "left-[2%] bottom-[14%]", line: "from-left" },
    { icon: Siren, k: "RESPONDERS", d: "Live map + priority feed", pos: "right-[2%] bottom-[14%]", line: "from-right" },
  ];
  return (
    <div className="relative flex h-full items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD200]/[0.05] blur-[110px]" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-12">
        <div className="text-center">
          <div className="flex justify-center"><Kicker index="03 / 14" label="Our Idea" /></div>
          <H2>Turn every capable Jan device<br />into a <span className="text-[#FFD200]">sensing, processing</span> &amp; <span className="text-[#FFD200]">communication</span> node.</H2>
          <p className="mx-auto mt-3 max-w-2xl text-[13.5px] text-white/55">JANRAKSHAK is not an app. It&apos;s a <span className="text-white">distributed safety ecosystem</span> — phones sense, score, relay and interface with response infrastructure.</p>
        </div>

        <div className="relative mx-auto mt-6 h-[300px] max-w-[980px] md:h-[330px]">
          {/* connection lines */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 980 330" preserveAspectRatio="none">
            {[[60, 70, 490, 165], [920, 70, 490, 165], [60, 265, 490, 165], [920, 265, 490, 165]].map(([x1, y1, x2, y2], i) => (
              <g key={i}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,210,0,0.35)" strokeWidth="1.5" strokeDasharray="6 8" className="animate-dash" />
                <circle cx={x1} cy={y1} r="4" fill="#FFD200" />
              </g>
            ))}
          </svg>
          {spokes.map((s, i) => (
            <motion.div key={s.k} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.15 }}
              className={`absolute ${s.pos} hidden md:flex w-[210px] items-center gap-3 rounded-2xl border border-white/10 bg-[#0c0c0e]/90 p-3 backdrop-blur`}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFD200]/15 text-[#FFD200]"><s.icon size={18} /></div>
              <div><div className="font-mono2 text-[10px] font-bold tracking-[0.15em]">{s.k}</div><div className="text-[11px] text-white/50">{s.d}</div></div>
            </motion.div>
          ))}
          {/* center node */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25, duration: 0.7 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex h-[190px] w-[190px] items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-[#FFD200]/25 animate-spin-slow" style={{ borderStyle: "dashed" }} />
              <div className="absolute inset-4 rounded-full border border-white/10" />
              <div className="absolute inset-0 rounded-full bg-[#FFD200]/[0.07] blur-2xl" />
              <div className="relative flex h-28 w-28 flex-col items-center justify-center rounded-3xl border border-[#FFD200]/40 bg-gradient-to-b from-[#17171a] to-black glow-yellow">
                <ShieldMark size={30} />
                <div className="font-display mt-1 text-[11px] font-bold tracking-[0.2em]">JANRAKSHAK</div>
                <div className="font-mono2 text-[8px] text-[#FFD200]">● SAFETY NODE</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto grid max-w-[980px] grid-cols-3 gap-3 text-center">
          {[["SENSE", "Distributed sensing across crowd"], ["THINK", "On-device risk assessment"], ["CONNECT", "Mesh relay + response link"]].map(([a, b], i) => (
            <motion.div key={a} variants={fadeUp} initial="hidden" animate="show" custom={i} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="font-display text-[15px] font-bold tracking-[0.2em] text-[#FFD200]">0{i + 1} · {a}</div>
              <div className="mt-0.5 text-[12px] text-white/55">{b}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= SLIDE 4 — WHY iQOO ================= */
export function S4WhyIQOO() {
  return (
    <div className="relative flex h-full items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#FFD200]/[0.06] blur-[110px]" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] items-center gap-8 px-6 md:px-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Kicker index="04 / 14" label="Why iQOO — The Hardware Advantage" />
          <H2>Flagship hardware.<br /><span className="text-stroke-yellow">Safety platform.</span></H2>
          <Sub>JANRAKSHAK doesn&apos;t need new hardware. It fuses <span className="text-white">capabilities already in your pocket</span> into one safety workflow.</Sub>
          <div className="mt-1 flex justify-center lg:justify-start" style={{ height: 348 }}><IQOOPhone mode="mini" scale={0.72} risk={74} /></div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-2.5">
            {CAPABILITIES.map((c, i) => (
              <motion.div key={c.t} variants={fadeUp} initial="hidden" animate="show" custom={i}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0d] p-3.5 transition-colors hover:border-[#FFD200]/50">
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-[#FFD200]/0 blur-2xl transition-all group-hover:bg-[#FFD200]/10" />
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFD200]/12 text-[#FFD200] border border-[#FFD200]/20"><c.icon size={17} /></div>
                  <div className="font-mono2 text-[9px] tracking-[0.2em] text-white/40">0{i + 1}</div>
                </div>
                <div className="font-display mt-2 text-[14.5px] font-bold leading-tight">{c.t}</div>
                <div className="font-mono2 text-[10.5px] text-white/45">{c.d}</div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={9} className="mt-3 flex items-center gap-1 overflow-hidden rounded-2xl border border-[#FFD200]/25 bg-[#FFD200]/[0.05] px-2 py-2.5">
            {["SENSE", "COMPUTE", "CONNECT", "ACT"].map((s, i) => (
              <div key={s} className="flex flex-1 items-center gap-1">
                <div className="flex-1 rounded-xl bg-black/60 border border-white/10 px-2 py-2 text-center">
                  <div className="font-display text-[12px] font-bold tracking-[0.18em] text-[#FFD200]">{s}</div>
                </div>
                {i < 3 && <ArrowRight size={13} className="shrink-0 text-white/30" />}
              </div>
            ))}
          </motion.div>
          <p className="mt-2 font-mono2 text-[10px] tracking-wide text-white/40">ONE WORKFLOW — sensors → Snapdragon compute → BLE + 5G → command center</p>
        </div>
      </div>
    </div>
  );
}

/* ================= SLIDE 5 — HOW IT WORKS ================= */
export function S5How() {
  const steps = [
    { icon: Waves, t: "iQOO Sensors", d: "Accel · gyro · mic · baro", layer: "DEVICE", c: "#7dd3fc" },
    { icon: Cpu, t: "On-Device Processing", d: "Filtering · features · 18ms", layer: "DEVICE", c: "#7dd3fc" },
    { icon: Gauge, t: "Risk Assessment", d: "Score 0–100 + context", layer: "DEVICE", c: "#7dd3fc" },
    { icon: Bluetooth, t: "BLE Multi-Hop Relay", d: "A→B→C store-forward", layer: "COMMS", c: "#FFD200" },
    { icon: Cloud, t: "Cloud Infrastructure", d: "Fusion · dedup · logging", layer: "CLOUD", c: "#c4b5fd" },
    { icon: Radar, t: "Live Dashboard", d: "Map · feed · priority queue", layer: "CLOUD", c: "#c4b5fd" },
    { icon: Siren, t: "Emergency Response", d: "Dispatch with context", layer: "ACTION", c: "#f87171" },
  ];
  const layerColor: Record<string, string> = { DEVICE: "bg-sky-400", COMMS: "bg-[#FFD200]", CLOUD: "bg-violet-400", ACTION: "bg-red-400" };
  return (
    <div className="relative flex h-full items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 md:px-12">
        <Kicker index="05 / 14" label="How It Works — End-to-End Architecture" />
        <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
          <H2>From pocket sensor to <span className="text-[#FFD200]">dispatch.</span></H2>
          <div className="flex gap-2 font-mono2 text-[10px]">
            {[["DEVICE", "bg-sky-400"], ["COMMS", "bg-[#FFD200]"], ["CLOUD", "bg-violet-400"], ["ACTION", "bg-red-400"]].map(([l, c]) => (
              <span key={l} className="flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-white/60"><span className={`h-1.5 w-1.5 rounded-full ${c}`} />{l}</span>
            ))}
          </div>
        </div>

        <div className="relative mt-6">
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-white/10 lg:block" />
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-gradient-to-r from-sky-400 via-[#FFD200] to-red-400 opacity-60 lg:block" />
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4 lg:grid-cols-7">
            {steps.map((s, i) => (
              <motion.div key={s.t} variants={fadeUp} initial="hidden" animate="show" custom={i} className="relative">
                <div className={`mx-auto flex h-[104px] w-full max-w-[150px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#0b0b0d] p-3 text-center`} style={{ boxShadow: `0 0 24px ${s.c}14` }}>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10" style={{ background: `${s.c}18`, color: s.c }}><s.icon size={17} /></div>
                  <div className="font-display mt-1.5 text-[12px] font-bold leading-tight">{s.t}</div>
                  <div className="font-mono2 mt-0.5 text-[9px] text-white/45">{s.d}</div>
                </div>
                <div className="mt-2 flex items-center justify-center gap-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${layerColor[s.layer]}`} />
                  <span className="font-mono2 text-[9px] tracking-[0.2em] text-white/50">0{i + 1} · {s.layer}</span>
                </div>
                {i < 6 && <ChevronRight size={14} className="absolute -right-2 top-12 hidden text-[#FFD200] lg:block" />}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={8} className="mt-5 grid grid-cols-1 gap-2.5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 flex items-center gap-3">
            <Zap size={18} className="text-[#FFD200] shrink-0" />
            <p className="text-[12px] text-white/60"><b className="text-white">Continuous flow</b> — sensing never sleeps; risk re-scored every 500 ms on-device.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 flex items-center gap-3">
            <RefreshCcw size={18} className="text-[#FFD200] shrink-0" />
            <p className="text-[12px] text-white/60"><b className="text-white">Graceful degradation</b> — no cloud? Mesh + store-forward keeps alerts moving.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 flex items-center gap-3">
            <ShieldCheck size={18} className="text-[#FFD200] shrink-0" />
            <p className="text-[12px] text-white/60"><b className="text-white">Verified handoff</b> — every hop signed; cloud deduplicates before dispatch.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ================= SLIDE 6 — MESH ================= */
export function S6Mesh() {
  return (
    <div className="relative flex h-full items-center overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD200]/[0.05] blur-[120px]" />
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] items-center gap-6 px-6 md:px-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Kicker index="06 / 14" label="Bluetooth Multi-Hop Mesh — Our Signature" />
          <H2>When networks fail,<br /><span className="text-[#FFD200]">phones become the network.</span></H2>
          {/* mesh viz */}
          <div className="relative mt-5 overflow-hidden rounded-3xl border border-white/10 bg-[#08080a]/90 p-2">
            <div className="flex items-center justify-between px-3 py-2 font-mono2 text-[10px] text-white/45">
              <span className="flex items-center gap-2"><Bluetooth size={12} className="text-[#FFD200]" /> LIVE MESH TOPOLOGY · SECTOR 7 · 6 NODES</span>
              <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-blink" /> PACKET IN FLIGHT</span>
            </div>
            <svg viewBox="0 0 640 300" className="h-[240px] w-full md:h-[280px]">
              <defs>
                <filter id="glow"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              {/* faint links */}
              {[
                "M110,190 L250,110", "M250,110 L380,150", "M380,150 L490,90", "M490,90 L575,150",
                "M110,190 L250,230", "M250,230 L380,150", "M250,110 L250,230", "M380,150 L420,240", "M420,240 L575,150",
              ].map((d, i) => <path key={i} d={d} stroke="rgba(255,255,255,0.12)" strokeWidth="1.2" fill="none" />)}
              {/* active path */}
              <path id="meshPath" d="M110,190 L250,110 L380,150 L490,90 L575,150" stroke="#FFD200" strokeWidth="2.5" fill="none" filter="url(#glow)" strokeDasharray="7 9" className="animate-dash" />
              {/* traveling packets */}
              {[0, 4].map((begin, i) => (
                <circle key={i} r={i === 0 ? 7 : 4} fill={i === 0 ? "#FFD200" : "#fff"} filter="url(#glow)">
                  <animateMotion dur="4s" begin={`${begin}s`} repeatCount="indefinite" path="M110,190 L250,110 L380,150 L490,90 L575,150" />
                </circle>
              ))}
              {/* nodes */}
              {[
                { x: 110, y: 190, label: "A", sub: "DETECTS", hot: true },
                { x: 250, y: 110, label: "B", sub: "RELAYS", hot: false },
                { x: 380, y: 150, label: "C", sub: "RELAYS", hot: false },
                { x: 490, y: 90, label: "D", sub: "GATEWAY", hot: false },
                { x: 575, y: 150, label: "☁", sub: "CLOUD", hot: false },
                { x: 250, y: 230, label: "E", sub: "RELAY", hot: false },
                { x: 420, y: 240, label: "F", sub: "RELAY", hot: false },
              ].map((n) => (
                <g key={n.label}>
                  {n.hot && <circle cx={n.x} cy={n.y} r="26" fill="none" stroke="#ff3b30" strokeWidth="1.5" opacity="0.6"><animate attributeName="r" values="16;30" dur="1.8s" repeatCount="indefinite" /><animate attributeName="opacity" values="0.8;0" dur="1.8s" repeatCount="indefinite" /></circle>}
                  <circle cx={n.x} cy={n.y} r="20" fill={n.hot ? "#2a0d0d" : n.label === "☁" ? "#141310" : "#0e0e11"} stroke={n.hot ? "#ff3b30" : n.label === "☁" ? "#FFD200" : "rgba(255,255,255,0.25)"} strokeWidth={n.hot || n.label === "☁" ? 2 : 1.2} />
                  <text x={n.x} y={n.y + 5} textAnchor="middle" fill={n.hot ? "#ff6b60" : n.label === "☁" ? "#FFD200" : "#fff"} fontSize="13" fontWeight="bold" fontFamily="Space Grotesk">{n.label}</text>
                  <text x={n.x} y={n.y + 36} textAnchor="middle" fill={n.hot ? "#ff6b60" : "rgba(255,255,255,0.5)"} fontSize="9" fontFamily="JetBrains Mono" letterSpacing="1">{n.sub}</text>
                </g>
              ))}
            </svg>
            <div className="grid grid-cols-4 divide-x divide-white/10 border-t border-white/10 font-mono2 text-[9.5px]">
              {[["HOP 1", "A → B · 40ms"], ["HOP 2", "B → C · 38ms"], ["HOP 3", "C → D · 44ms"], ["UPLINK", "D → ☁ · 210ms"]].map(([a, b]) => (
                <div key={a} className="px-3 py-2 text-center"><div className="text-[#FFD200] tracking-[0.15em]">{a}</div><div className="text-white/55">{b}</div></div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-2.5">
          {[
            { t: "Detect at the edge", d: "Device A flags anomaly on-device — no cloud needed to start.", icon: Eye },
            { t: "Relay, don't wait", d: "Signed BLE advertisements hop phone-to-phone automatically.", icon: Bluetooth },
            { t: "Gateway uplinks", d: "First device with signal pushes the fused alert to cloud.", icon: Satellite },
            { t: "Built for dead zones", d: "Crowds, basements, blackouts — store-forward + TTL prevents loss.", icon: ShieldCheck },
          ].map((f, i) => (
            <motion.div key={f.t} variants={fadeUp} initial="hidden" animate="show" custom={i} className="flex gap-3 rounded-2xl border border-white/10 bg-[#0b0b0d] p-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FFD200]/12 text-[#FFD200]"><f.icon size={16} /></div>
              <div><div className="font-display text-[14px] font-bold">{f.t}</div><div className="text-[12px] text-white/50">{f.d}</div></div>
            </motion.div>
          ))}
          <div className="rounded-2xl border border-[#FFD200]/30 bg-[#FFD200]/[0.06] px-4 py-3 font-mono2 text-[10.5px] leading-relaxed text-white/70">
            <span className="text-[#FFD200]">SPEC ▸</span> BLE 5.x extended adv · ~100m/hop · 4–6 hops typical ·<br />TTL + dedup + ECDSA-signed payloads · <span className="text-white">works when conventional connectivity is weak or unavailable.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= SLIDE 7 — DETECTION ================= */
export function S7Detection() {
  const pipe = [
    { icon: Waves, t: "Raw signals", d: "Accel · gyro · mic @ kHz" },
    { icon: Activity, t: "Signal processing", d: "Denoise · windows · FFT" },
    { icon: Layers, t: "Context", d: "Location · time · density" },
    { icon: Gauge, t: "Risk score", d: "0–100 calibrated" },
    { icon: BrainCircuit, t: "Classification", d: "Fall · surge · distress" },
    { icon: Bell, t: "Priority alert", d: "P1–P4 + evidence" },
  ];
  return (
    <div className="relative flex h-full items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-12">
        <Kicker index="07 / 14" label="Detection & Risk Intelligence" />
        <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
          <H2>Raw noise in.<br /><span className="text-[#FFD200]">Ranked risk</span> out.</H2>
          <Sub>No &ldquo;AI magic&rdquo;. Transparent pipeline — <span className="text-white">signal analysis → anomaly scoring → predictive analysis</span> with thresholds you can audit.</Sub>
        </div>

        <div className="mt-5 grid items-stretch gap-4 lg:grid-cols-[1fr_300px]">
          <div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
              {pipe.map((p, i) => (
                <motion.div key={p.t} variants={fadeUp} initial="hidden" animate="show" custom={i} className="relative rounded-2xl border border-white/10 bg-[#0b0b0d] p-3 text-center">
                  <div className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl ${i === 3 ? "bg-[#FFD200] text-black glow-yellow" : "bg-white/[0.06] text-white/80"}`}><p.icon size={17} /></div>
                  <div className="font-display mt-2 text-[12.5px] font-bold leading-tight">{p.t}</div>
                  <div className="font-mono2 mt-0.5 text-[9px] text-white/45">{p.d}</div>
                  <div className="font-mono2 mt-1.5 text-[9px] text-[#FFD200]/80">STAGE 0{i + 1}</div>
                  {i < 5 && <ArrowRight size={13} className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-white/25 lg:block" />}
                </motion.div>
              ))}
            </div>
            {/* thresholds bar */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={7} className="mt-3 rounded-2xl border border-white/10 bg-black/50 p-4">
              <div className="flex items-center justify-between font-mono2 text-[10px] tracking-[0.15em] text-white/50">
                <span>CALIBRATED THRESHOLDS</span><span>FALSE-POSITIVE RATE <b className="text-emerald-400">&lt; 2.1%</b> (VAL SET)</span>
              </div>
              <div className="relative mt-3 h-3 overflow-hidden rounded-full bg-white/10">
                <div className="absolute inset-y-0 left-0 w-[45%] bg-emerald-500/70" />
                <div className="absolute inset-y-0 left-[45%] w-[25%] bg-[#FFD200]/80" />
                <div className="absolute inset-y-0 left-[70%] w-[30%] bg-red-500/80" />
                <motion.div initial={{ left: "10%" }} animate={{ left: ["10%", "82%", "68%", "82%"] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 h-5 w-[3px] -translate-y-1/2 rounded bg-white shadow-[0_0_12px_#fff]" />
              </div>
              <div className="mt-1.5 flex justify-between font-mono2 text-[9px] text-white/45"><span>NORMAL 0–45</span><span>WATCH 45–70</span><span className="text-red-400">ESCALATE 70–100</span></div>
            </motion.div>
          </div>

          {/* gauge */}
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="flex flex-col items-center justify-center rounded-3xl border border-red-500/25 bg-gradient-to-b from-[#160b0b] to-black p-5">
            <div className="font-mono2 text-[10px] tracking-[0.25em] text-white/50">LIVE RISK DIAL</div>
            <div className="relative mt-2">
              <svg viewBox="0 0 200 120" className="w-[220px]">
                <path d="M20 105 A80 80 0 0 1 180 105" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="14" strokeLinecap="round" />
                <motion.path d="M20 105 A80 80 0 0 1 180 105" fill="none" stroke="url(#rg)" strokeWidth="14" strokeLinecap="round"
                  initial={{ strokeDasharray: "0 300" }} animate={{ strokeDasharray: "206 300" }} transition={{ duration: 1.8, delay: 0.6 }}
                  strokeDashoffset={0} />
                <defs><linearGradient id="rg" x1="0" x2="1"><stop offset="0" stopColor="#FFD200" /><stop offset="1" stopColor="#ef4444" /></linearGradient></defs>
              </svg>
              <div className="absolute inset-x-0 bottom-0 text-center">
                <span className="font-display text-[52px] font-bold leading-none">82</span>
                <div className="font-mono2 text-[10px] tracking-[0.2em] text-red-400">● HIGH · P1</div>
              </div>
            </div>
            <div className="mt-3 w-full space-y-1.5 font-mono2 text-[10px]">
              {[["Crowd surge", 91, "#ef4444"], ["Impact anomaly", 84, "#f97316"], ["Distress audio", 77, "#FFD200"]].map(([l, v, c]) => (
                <div key={l as string} className="flex items-center gap-2">
                  <span className="w-24 text-white/55">{l}</span>
                  <div className="h-1.5 flex-1 rounded-full bg-white/10"><motion.div initial={{ width: 0 }} animate={{ width: `${v}%` }} transition={{ delay: 0.8, duration: 1 }} className="h-full rounded-full" style={{ background: c as string }} /></div>
                  <span className="w-7 text-right text-white">{v}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-xl bg-red-500/10 border border-red-500/30 px-3 py-1.5 font-mono2 text-[10px] text-red-300">▲ AUTO-ESCALATED · EVIDENCE ATTACHED</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ================= SLIDE 8 — COMMAND CENTER ================= */
const FEED = [
  { t: "P1 · Crowd surge — Gate 4, Connaught Pl", time: "now", c: "red" },
  { t: "P2 · Impact anomaly — Metro Exit 2", time: "12s", c: "orange" },
  { t: "Mesh relay established — 6 nodes, Sector 7", time: "31s", c: "yellow" },
  { t: "P2 · Distress audio pattern — Block C", time: "48s", c: "orange" },
  { t: "Unit DL-14 dispatched — ETA 4 min", time: "1m", c: "green" },
  { t: "P3 · Density rising — Food court level", time: "2m", c: "blue" },
  { t: "Gateway uplink restored — 5G", time: "3m", c: "green" },
];
export function S8Dashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2600);
    return () => clearInterval(id);
  }, []);
  const feed = [...FEED.slice(tick % FEED.length), ...FEED.slice(0, tick % FEED.length)].slice(0, 5);
  return (
    <div className="relative flex h-full items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div><Kicker index="08 / 14" label="Live Command Center" />
            <H2>One screen. <span className="text-[#FFD200]">Total awareness.</span></H2></div>
          <div className="flex items-center gap-2 font-mono2 text-[10px]">
            <span className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-blink" /> OPERATIONS LIVE</span>
            <span className="rounded-full border border-white/10 px-3 py-1.5 text-white/50">NEW DELHI · SECTOR GRID 7</span>
          </div>
        </div>

        {/* dashboard */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 overflow-hidden rounded-3xl border border-white/12 bg-[#09090b] glow-card">
          {/* titlebar */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.02] px-4 py-2.5">
            <div className="flex gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-500/80" /><span className="h-2.5 w-2.5 rounded-full bg-[#FFD200]/80" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" /></div>
            <div className="flex items-center gap-2 font-display text-[12px] font-bold tracking-[0.15em]"><ShieldMark size={14} /> JANRAKSHAK <span className="font-mono2 font-normal text-white/40">COMMAND v2.4</span></div>
            <div className="ml-auto hidden md:flex items-center gap-4 font-mono2 text-[10px] text-white/50">
              <span>NODES <b className="text-[#FFD200]">1,284</b></span><span>MESH <b className="text-emerald-400">HEALTHY</b></span><span>LATENCY <b className="text-white">212ms</b></span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr]">
            {/* map */}
            <div className="relative min-h-[300px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
              <svg viewBox="0 0 600 340" className="absolute inset-0 h-full w-full">
                <rect width="600" height="340" fill="#0a0c0e" />
                {Array.from({ length: 12 }).map((_, i) => <line key={`v${i}`} x1={i * 55} y1="0" x2={i * 55} y2="340" stroke="rgba(255,255,255,0.05)" />)}
                {Array.from({ length: 8 }).map((_, i) => <line key={`h${i}`} x1="0" y1={i * 48} x2="600" y2={i * 48} stroke="rgba(255,255,255,0.05)" />)}
                {/* roads */}
                <path d="M0,120 H600 M0,240 H600 M150,0 V340 M330,0 V340 M470,0 V340" stroke="rgba(255,255,255,0.12)" strokeWidth="5" />
                <path d="M0,120 H600 M150,0 V340 M330,0 V340" stroke="rgba(255,210,0,0.25)" strokeWidth="1.5" strokeDasharray="8 8" />
                <path d="M60,300 C180,220 260,260 330,180 S480,120 560,90" stroke="#2dd4bf" strokeWidth="2.5" fill="none" opacity="0.5" />
                <text x="18" y="112" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="JetBrains Mono">CONNAUGHT PL · OUTER CIRCLE</text>
                <text x="340" y="232" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="JetBrains Mono">BARAKHAMBA RD</text>
                {/* coverage */}
                <ellipse cx="300" cy="170" rx="150" ry="90" fill="rgba(255,210,0,0.06)" stroke="rgba(255,210,0,0.3)" strokeDasharray="5 6" />
                {/* mesh dots */}
                {[[180, 150], [230, 190], [270, 140], [320, 200], [360, 150], [250, 230], [410, 190]].map(([x, y], i) => (
                  <g key={i}><circle cx={x} cy={y} r="3.5" fill="#FFD200" opacity="0.85" /><circle cx={x} cy={y} r="8" fill="none" stroke="rgba(255,210,0,0.3)" /></g>
                ))}
              </svg>
              {/* incident pins */}
              {[
                { x: "47%", y: "38%", c: "bg-red-500", label: "P1 · GATE 4" },
                { x: "63%", y: "58%", c: "bg-orange-500", label: "P2 · EXIT 2" },
                { x: "30%", y: "62%", c: "bg-[#FFD200]", label: "WATCH" },
              ].map((p) => (
                <div key={p.label} className="absolute" style={{ left: p.x, top: p.y }}>
                  <div className={`absolute -inset-3 rounded-full ${p.c} opacity-20 animate-ping`} />
                  <div className={`relative flex h-6 w-6 items-center justify-center rounded-full ${p.c} text-black`}><MapPin size={13} /></div>
                  <div className="absolute left-7 top-0 whitespace-nowrap rounded-md border border-white/15 bg-black/85 px-2 py-0.5 font-mono2 text-[9px] text-white">{p.label}</div>
                </div>
              ))}
              <div className="absolute bottom-3 left-3 flex gap-1.5 font-mono2 text-[9px]">
                {[["P1 CRITICAL", "bg-red-500"], ["P2 HIGH", "bg-orange-500"], ["WATCH", "bg-[#FFD200]"]].map(([l, c]) => (
                  <span key={l} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/80 px-2.5 py-1 text-white/70"><span className={`h-1.5 w-1.5 rounded-full ${c}`} />{l}</span>
                ))}
              </div>
              <div className="absolute right-3 top-3 rounded-lg border border-white/10 bg-black/80 px-2.5 py-1.5 font-mono2 text-[9px] text-white/60">RISK HEATMAP <span className="text-[#FFD200]">ON</span> · SAT <span className="text-white/30">OFF</span></div>
            </div>

            {/* right column */}
            <div className="grid grid-cols-2">
              <div className="col-span-2 grid grid-cols-4 divide-x divide-white/10 border-b border-white/10">
                {[[`1,284`, "NODES"], [`${3 + (tick % 3)}`, "ACTIVE P1"], ["212ms", "UPLINK"], ["98.2%", "MESH UP"]].map(([v, l]) => (
                  <div key={l} className="px-3 py-2.5 text-center"><div className="font-display text-[19px] font-bold text-white">{v}</div><div className="font-mono2 text-[9px] tracking-[0.2em] text-white/40">{l}</div></div>
                ))}
              </div>
              <div className="col-span-2 border-b border-white/10 px-3 py-2">
                <div className="mb-1.5 flex items-center justify-between font-mono2 text-[9.5px] tracking-[0.2em] text-white/45"><span>◉ PRIORITY ALERT FEED</span><span className="text-[#FFD200]">AUTO-TRIAGED</span></div>
                <div className="space-y-1">
                  {feed.map((f, i) => (
                    <motion.div key={f.t + i} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-[11px] ${i === 0 ? "border-red-500/30 bg-red-500/[0.08]" : "border-white/[0.07] bg-white/[0.02]"}`}>
                      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${f.c === "red" ? "bg-red-500" : f.c === "orange" ? "bg-orange-500" : f.c === "yellow" ? "bg-[#FFD200]" : f.c === "green" ? "bg-emerald-400" : "bg-sky-400"} ${i === 0 ? "animate-blink" : ""}`} />
                      <span className="truncate text-white/80">{f.t}</span>
                      <span className="ml-auto shrink-0 font-mono2 text-[9px] text-white/35">{f.time}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="border-r border-white/10 px-3 py-2">
                <div className="font-mono2 text-[9.5px] tracking-[0.2em] text-white/45">RESPONSE STATUS</div>
                {[["DL-14 · Medical", "EN ROUTE · 4m", "bg-[#FFD200]"], ["DL-09 · Police", "ON SCENE", "bg-emerald-400"]].map(([a, b, c]) => (
                  <div key={a} className="mt-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-2 py-1.5 text-[10.5px]"><div className="text-white/85">{a}</div><div className="font-mono2 text-[9px] text-white/45 flex items-center gap-1"><span className={`h-1 w-1 rounded-full ${c}`} />{b}</div></div>
                ))}
              </div>
              <div className="px-3 py-2">
                <div className="font-mono2 text-[9.5px] tracking-[0.2em] text-white/45">NETWORK</div>
                <div className="mt-1.5 space-y-1.5 font-mono2 text-[10px] text-white/60">
                  {[["5G uplink", 92, "#34d399"], ["BLE mesh", 98, "#FFD200"], ["Gateways", 64, "#7dd3fc"]].map(([l, v, c]) => (
                    <div key={l as string}><div className="flex justify-between"><span>{l}</span><span>{v}%</span></div><div className="h-1 rounded-full bg-white/10"><div className="h-full rounded-full" style={{ width: `${v}%`, background: c as string }} /></div></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ================= SLIDE 9 — SCENARIO ================= */
export function S9Scenario() {
  const seq = [
    { t: "0.0s", icon: Activity, h: "Anomaly detected", d: "Accel spike 9.2g + audio 94dB, Device A", c: "#ff6b60" },
    { t: "0.4s", icon: LocateFixed, h: "Location locked", d: "GPS ±3m · Gate 4, Connaught Pl", c: "#7dd3fc" },
    { t: "0.9s", icon: Bluetooth, h: "Mesh relay fires", d: "A→B→C→D · signed BLE hops", c: "#FFD200" },
    { t: "1.6s", icon: Gauge, h: "Risk scored 82 · P1", d: "Surge + density + audio fused", c: "#f97316" },
    { t: "2.1s", icon: Bell, h: "Alert prioritized", d: "Deduped · evidence attached", c: "#c4b5fd" },
    { t: "2.8s", icon: Radar, h: "Command sees it", d: "Map pin + feed + heatmap", c: "#34d399" },
    { t: "4.2s", icon: Siren, h: "Responders move", d: "DL-14 dispatched with context", c: "#fff" },
  ];
  return (
    <div className="relative flex h-full items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-12">
        <Kicker index="09 / 14" label="From Signal to Action — 4.2 Seconds" />
        <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
          <H2>One surge. <span className="text-[#FFD200]">Seven moves.</span></H2>
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono2 text-[11px] text-white/60">SCENARIO ▸ <span className="text-white">Crowd surge anomaly — Saturday 21:47, Connaught Place</span></div>
        </div>
        <div className="relative mt-6">
          <div className="absolute left-0 right-0 top-[38px] hidden h-[2px] bg-white/10 lg:block" />
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2, delay: 0.5 }} className="absolute left-0 right-0 top-[38px] hidden h-[2px] origin-left bg-gradient-to-r from-red-500 via-[#FFD200] to-emerald-400 lg:block" />
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
            {seq.map((s, i) => (
              <motion.div key={s.h} variants={fadeUp} initial="hidden" animate="show" custom={i} className="relative">
                <div className="font-mono2 mb-2 inline-block rounded-full border border-white/15 bg-black px-2.5 py-0.5 text-[10px] text-[#FFD200]">{s.t}</div>
                <div className="rounded-2xl border border-white/10 bg-[#0b0b0d] p-3" style={{ boxShadow: `0 8px 30px ${s.c}12` }}>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10" style={{ background: `${s.c}15`, color: s.c }}><s.icon size={16} /></div>
                  <div className="font-display mt-2 text-[12.5px] font-bold leading-tight">{s.h}</div>
                  <div className="mt-0.5 text-[11px] leading-snug text-white/50">{s.d}</div>
                </div>
                <div className="mx-auto mt-2 hidden h-2 w-2 rounded-full lg:block" style={{ background: s.c }} />
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={8} className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] px-5 py-3.5">
          <div className="flex items-center gap-3">
            <CheckCircle2 size={20} className="text-emerald-400" />
            <p className="text-[13px] text-white/75"><b className="text-white">Outcome:</b> responders arrive with location, risk context &amp; live crowd state — not a vague phone call.</p>
          </div>
          <div className="font-mono2 text-[11px] text-emerald-300">SIGNAL → ACTION IN 4.2s · vs 7–11 min legacy</div>
        </motion.div>
      </div>
    </div>
  );
}

/* ================= SLIDE 10 — SECURITY ================= */
export function S10Security() {
  const cards = [
    { icon: Lock, t: "Secure communication", d: "ECDSA-signed alerts · encrypted uplinks · rotating BLE IDs." },
    { icon: Eye, t: "Privacy-aware handling", d: "On-device scoring · minimal payloads · no raw audio leaves phone." },
    { icon: Fingerprint, t: "Device trust", d: "Attested nodes · reputation-weighted relay · Sybil resistance." },
    { icon: Blocks, t: "Tamper-resistant records", d: "Hash-chained incident log — what happened, when, from whom." },
    { icon: ShieldCheck, t: "Data integrity", d: "Every hop verifiable · dedup by content hash · audit-ready trail." },
    { icon: RefreshCcw, t: "Resilient communication", d: "Mesh + store-forward + multi-gateway uplinks. No single point of failure." },
  ];
  return (
    <div className="relative flex h-full items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-12">
        <Kicker index="10 / 14" label="Security & Reliability" />
        <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
          <H2>Trusted by <span className="text-[#FFD200]">design.</span></H2>
          <Sub>Cybersecurity + hash-chained records where they add real value — <span className="text-white">integrity &amp; auditability</span>, not buzzwords.</Sub>
        </div>
        <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div key={c.t} variants={fadeUp} initial="hidden" animate="show" custom={i} className={`rounded-2xl border p-4 ${i === 3 ? "border-[#FFD200]/35 bg-[#FFD200]/[0.05]" : "border-white/10 bg-[#0b0b0d]"}`}>
              <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${i === 3 ? "bg-[#FFD200] text-black" : "bg-white/[0.06] text-[#FFD200]"}`}><c.icon size={17} /></div>
              <div className="font-display mt-2.5 text-[14.5px] font-bold">{c.t} {i === 3 && <span className="ml-1 rounded-full bg-[#FFD200]/15 border border-[#FFD200]/30 px-2 py-0.5 font-mono2 text-[8.5px] tracking-widest text-[#FFD200]">⛓ LEDGER</span>}</div>
              <p className="mt-1 text-[12px] leading-relaxed text-white/50">{c.d}</p>
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={7} className="mt-3 flex flex-wrap items-center gap-2 rounded-2xl border border-white/10 bg-black/50 px-4 py-3 font-mono2 text-[10.5px]">
          <span className="text-[#FFD200]">⛓ INCIDENT CHAIN ▸</span>
          {["#a3f1 · DETECT 21:47:02", "#b7c2 · RELAY×3 ✓", "#c9d4 · SCORE 82 ✓", "#de01 · DISPATCH ✓"].map((h) => (
            <span key={h} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-white/60">{h}</span>
          ))}
          <span className="ml-auto text-white/40">each record hashes the previous — tampering breaks the chain. scoped, honest use of ledger tech.</span>
        </motion.div>
      </div>
    </div>
  );
}

/* ================= SLIDE 11 — TEAM ================= */
export function S11Team() {
  const team = [
    { icon: BrainCircuit, k: "MACHINE LEARNING", n: "Risk Intelligence", d: "Signal processing, anomaly scoring, calibrated thresholds.", chip: "INTELLIGENCE" },
    { icon: ShieldHalf, k: "CYBERSECURITY", n: "Trust & Privacy", d: "Signed mesh, encrypted uplinks, privacy-by-design.", chip: "SECURITY" },
    { icon: Link2, k: "BLOCKCHAIN", n: "Verifiable Truth", d: "Hash-chained incident log, device trust, audit trail.", chip: "TRUST" },
    { icon: Server, k: "FULL-STACK / SYSTEMS", n: "Execution Engine", d: "Mesh stack, cloud fusion, live dashboard, deployment.", chip: "EXECUTION" },
  ];
  return (
    <div className="relative flex h-full items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD200]/[0.05] blur-[110px]" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 md:px-12 text-center">
        <div className="flex justify-center"><Kicker index="11 / 14" label="Team Advantage" /></div>
        <H2>Four disciplines. <span className="text-[#FFD200]">One system.</span></H2>
        <p className="mx-auto mt-3 max-w-2xl text-[13.5px] text-white/55">ML gives it <span className="text-white">intelligence</span> · Cybersecurity gives it <span className="text-white">security</span> · Blockchain gives it <span className="text-white">trust</span> · Full-stack gives it <span className="text-white">execution</span>.</p>
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {team.map((m, i) => (
            <motion.div key={m.k} variants={fadeUp} initial="hidden" animate="show" custom={i}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0d] p-5 text-left transition-colors hover:border-[#FFD200]/50">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#FFD200] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFD200]/12 text-[#FFD200] border border-[#FFD200]/20"><m.icon size={22} /></div>
              <div className="font-mono2 mt-4 text-[10px] tracking-[0.22em] text-[#FFD200]">{m.k}</div>
              <div className="font-display mt-1 text-[18px] font-bold">{m.n}</div>
              <p className="mt-1.5 text-[12px] leading-relaxed text-white/50">{m.d}</p>
              <div className="font-mono2 mt-3 inline-block rounded-full border border-white/12 px-2.5 py-1 text-[9px] tracking-[0.2em] text-white/60">◈ {m.chip}</div>
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5} className="font-display mx-auto mt-5 max-w-3xl rounded-2xl border border-[#FFD200]/25 bg-[#FFD200]/[0.05] px-6 py-3.5 text-[14px] md:text-[16px] font-medium text-white/85">
          &ldquo;The stack to sense it, secure it, prove it — and ship it.&rdquo;
        </motion.div>
      </div>
    </div>
  );
}

/* ================= SLIDE 12 — WHY IT MATTERS ================= */
export function S12Impact() {
  const stats = [
    { v: "4.2s", l: "SIGNAL → DISPATCH", d: "vs 7–11 min legacy reporting", icon: Zap },
    { v: "6×", l: "FASTER INFO FLOW", d: "mesh relay in dead zones", icon: Network },
    { v: "360°", l: "SITUATIONAL AWARENESS", d: "map + feed + risk, live", icon: Eye },
    { v: "0", l: "SINGLE POINTS OF FAILURE", d: "distributed by architecture", icon: ShieldCheck },
    { v: "100%", l: "EVIDENCE-ATTACHED", d: "every alert carries context", icon: Video },
  ];
  return (
    <div className="relative flex h-full items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-[#FFD200]/[0.06] blur-[120px]" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-12">
        <Kicker index="12 / 14" label="Why It Matters" />
        <H2>Minutes cost lives.<br />We work in <span className="text-[#FFD200]">seconds.</span></H2>
        <div className="mt-6 grid grid-cols-2 gap-2.5 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <motion.div key={s.l} variants={fadeUp} initial="hidden" animate="show" custom={i}
              className="rounded-3xl border border-white/10 bg-[#0b0b0d] p-5 text-center">
              <s.icon size={18} className="mx-auto text-[#FFD200]" />
              <div className="font-display mt-2 text-[clamp(30px,3vw,44px)] font-bold leading-none text-white">{s.v}</div>
              <div className="font-mono2 mt-2 text-[10px] tracking-[0.18em] text-[#FFD200]">{s.l}</div>
              <div className="mt-1 text-[11.5px] text-white/50">{s.d}</div>
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeUp} initial="hidden" animate="show" custom={6} className="mt-5 grid gap-2.5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-[13px] leading-relaxed text-white/65">
            <span className="font-display text-white font-bold">Earlier detection</span> — weak signals fused before they become casualties. <span className="font-display text-white font-bold">Faster flow</span> — mesh moves data when towers choke. <span className="font-display text-white font-bold">Informed response</span> — crews arrive knowing, not guessing.
          </div>
          <div className="flex items-center gap-4 rounded-2xl border border-[#FFD200]/30 bg-gradient-to-r from-[#FFD200]/[0.08] to-transparent px-5 py-4">
            <Siren size={28} className="shrink-0 text-[#FFD200]" />
            <p className="font-display text-[15px] md:text-[17px] font-medium leading-snug">&ldquo;The goal isn&apos;t to replace responders — it&apos;s to give them <span className="text-[#FFD200]">a head start they&apos;ve never had.</span>&rdquo;</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ================= SLIDE 13 — FUTURE ================= */
export function S13Future() {
  const phases = [
    { p: "PHASE 01 · NOW", t: "Campus & event pilots", d: "100s of iQOO nodes · single-sector mesh · command dashboard", c: "#34d399" },
    { p: "PHASE 02 · NEXT", t: "Edge intelligence", d: "Advanced sensor fusion · federated risk models on-device", c: "#FFD200" },
    { p: "PHASE 03 · SCALE", t: "Infrastructure integration", d: "CCTV + sirens + traffic signals join the mesh as nodes", c: "#7dd3fc" },
    { p: "PHASE 04 · VISION", t: "City-level safety network", d: "Emergency-service APIs · predictive hotspots · public grid", c: "#c4b5fd" },
  ];
  return (
    <div className="relative flex h-full items-center overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 md:px-12">
        <Kicker index="13 / 14" label="Future Vision" />
        <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
          <H2>From one phone<br />to a <span className="text-[#FFD200]">city that senses.</span></H2>
          <Sub>JANRAKSHAK scales by participation — every new device strengthens sensing, relay density and coverage.</Sub>
        </div>

        {/* scale viz */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-5 flex items-center justify-between gap-2 overflow-hidden rounded-3xl border border-white/10 bg-black/50 px-6 py-5">
          {[
            { icon: Smartphone, l: "1 PHONE", s: "a node" },
            { icon: Users, l: "100 PHONES", s: "a cluster" },
            { icon: Hexagon, l: "10K PHONES", s: "a district grid" },
            { icon: Globe2, l: "1M PHONES", s: "a living safety net" },
          ].map((n, i) => (
            <div key={n.l} className="flex flex-1 items-center gap-2">
              <div className="flex flex-col items-center gap-1.5 text-center flex-1">
                <div className={`flex items-center justify-center rounded-2xl border ${i === 3 ? "h-16 w-16 bg-[#FFD200] text-black border-[#FFD200] glow-yellow" : "h-12 w-12 md:h-14 md:w-14 bg-white/[0.05] text-white/80 border-white/15"}`}><n.icon size={i === 3 ? 26 : 20} /></div>
                <div className={`font-mono2 text-[10px] font-bold tracking-[0.15em] ${i === 3 ? "text-[#FFD200]" : "text-white"}`}>{n.l}</div>
                <div className="font-mono2 text-[9px] text-white/40">{n.s}</div>
              </div>
              {i < 3 && <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-white/20 to-[#FFD200]/50" />}
            </div>
          ))}
        </motion.div>

        <div className="mt-3 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((f, i) => (
            <motion.div key={f.t} variants={fadeUp} initial="hidden" animate="show" custom={i} className="rounded-2xl border border-white/10 bg-[#0b0b0d] p-4">
              <div className="font-mono2 text-[10px] tracking-[0.2em]" style={{ color: f.c }}>● {f.p}</div>
              <div className="font-display mt-1.5 text-[15px] font-bold">{f.t}</div>
              <p className="mt-1 text-[12px] text-white/50">{f.d}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2 font-mono2 text-[10px] text-white/55">
          {["More device participation", "Edge intelligence", "Advanced sensor fusion", "Infrastructure integration", "Emergency-service integration"].map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">+ {t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= SLIDE 14 — CLOSING ================= */
export function S14Closing() {
  const words = ["OBSERVE.", "DETECT.", "RELAY.", "PREDICT.", "RESPOND."];
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden text-center">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD200]/[0.07] blur-[130px]" />
      {/* orbit deco */}
      <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] animate-spin-slower hidden md:block" style={{ borderStyle: "dashed" }} />
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFD200]/15 hidden md:block" />

      <div className="relative z-10 mx-auto max-w-[1000px] px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center justify-center gap-2 font-mono2 text-[11px] tracking-[0.3em] text-white/50">
          <span className="h-px w-12 bg-white/20" /> JANRAKSHAK · SIH HACKATHON <span className="h-px w-12 bg-white/20" />
        </motion.div>
        <h2 className="font-display mt-5 text-[clamp(30px,5.2vw,72px)] font-bold leading-[1.02] tracking-tight">
          {words.map((w, i) => (
            <motion.span key={w} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.14, duration: 0.6 }}
              className={`mr-3 inline-block last:mr-0 ${i === 2 || i === 4 ? "text-[#FFD200]" : ""}`}>{w}</motion.span>
          ))}
        </h2>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }} className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#FFD200] text-black glow-yellow">
          <ShieldMark size={36} />
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.35 }} className="font-display mx-auto mt-5 max-w-2xl text-[clamp(15px,2vw,22px)] font-medium text-white/85">
          Turning Jan devices into a <span className="text-[#FFD200]">connected frontline</span> for public safety.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-[#FFD200] px-6 py-3 font-display text-[13px] font-bold tracking-wide text-black">THANK YOU · QUESTIONS <ArrowUpRight size={15} /></div>
          <div className="rounded-full border border-white/15 px-5 py-3 font-mono2 text-[11px] tracking-[0.15em] text-white/60">TEAM JANRAKSHAK · ML × SECURITY × LEDGER × SYSTEMS</div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} className="mt-6 font-mono2 text-[10px] tracking-[0.2em] text-white/30">
          SENSOR + PROCESSOR + RELAY + INTERFACE — ALL IN THE PHONE YOU ALREADY CARRY
        </motion.div>
      </div>
    </div>
  );
}

/* registry */
export const SLIDES = [
  { id: "cover", label: "Cover", C: S1Cover },
  { id: "problem", label: "Problem", C: S2Problem },
  { id: "idea", label: "Idea", C: S3Idea },
  { id: "iqoo", label: "Why iQOO", C: S4WhyIQOO },
  { id: "how", label: "How It Works", C: S5How },
  { id: "mesh", label: "BLE Mesh", C: S6Mesh },
  { id: "detect", label: "Risk Intel", C: S7Detection },
  { id: "command", label: "Command Center", C: S8Dashboard },
  { id: "scenario", label: "Signal→Action", C: S9Scenario },
  { id: "security", label: "Security", C: S10Security },
  { id: "team", label: "Team", C: S11Team },
  { id: "impact", label: "Impact", C: S12Impact },
  { id: "future", label: "Vision", C: S13Future },
  { id: "closing", label: "Closing", C: S14Closing },
];
