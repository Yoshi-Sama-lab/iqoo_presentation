import { motion } from "framer-motion";
import {
  Activity, Bluetooth, Cpu, Gauge, LocateFixed, Radio,
  RefreshCcw, Waves, Zap,
} from "lucide-react";

/* ---------- shared micro components ---------- */

export function Kicker({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono2 text-[11px] tracking-[0.25em] text-[#FFD200]">{index}</span>
      <span className="h-px w-10 bg-[#FFD200]/60" />
      <span className="font-mono2 text-[11px] tracking-[0.25em] text-white/60 uppercase">{label}</span>
    </div>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-[clamp(28px,3.4vw,52px)] font-bold leading-[1.02] tracking-tight text-white">
      {children}
    </h2>
  );
}

export function Sub({ children }: { children: React.ReactNode }) {
  return <p className="max-w-xl text-[13.5px] md:text-[15px] leading-relaxed text-white/55">{children}</p>;
}

export const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.08 * i + 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ---------- iQOO phone render (pure CSS/SVG) ---------- */

export function IQOOPhone({
  scale = 1,
  mode = "hero",
  risk = 82,
}: {
  scale?: number;
  mode?: "hero" | "node" | "mini";
  risk?: number;
}) {
  return (
    <div style={{ transform: `scale(${scale})` }} className="relative shrink-0">
      {/* glow */}
      <div className="absolute left-1/2 top-1/2 -z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFD200]/[0.07] blur-[80px]" />
      {/* radar rings */}
      <div className="absolute left-1/2 top-1/2 -z-0 -translate-x-1/2 -translate-y-1/2">
        {[340, 440, 540].map((s, i) => (
          <div
            key={s}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]"
            style={{ width: s, height: s, animationDelay: `${i * 0.85}s` }}
          >
            <div className="animate-pulse-ring absolute inset-0 rounded-full border border-[#FFD200]/30" style={{ animationDelay: `${i * 0.85}s` }} />
          </div>
        ))}
      </div>

      <motion.div
        initial={{ rotateY: -14, rotateX: 4 }}
        animate={{ rotateY: [-14, -8, -14], rotateX: [4, 2, 4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 h-[460px] w-[222px] rounded-[36px] border border-white/15 bg-gradient-to-b from-[#1a1a1e] via-[#0b0b0d] to-[#050506] p-[10px] glow-card"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* side buttons */}
        <div className="absolute -right-[2px] top-28 h-16 w-[3px] rounded-full bg-white/20" />
        <div className="absolute -left-[2px] top-24 h-10 w-[3px] rounded-full bg-white/20" />
        <div className="absolute -left-[2px] top-36 h-10 w-[3px] rounded-full bg-white/20" />

        {/* screen */}
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[28px] bg-[#08080a]">
          {/* wallpaper */}
          <div className="absolute inset-0 bg-grid-fine opacity-60" />
          <div className="absolute -top-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#FFD200]/20 blur-[50px]" />
          <div className="absolute bottom-0 h-40 w-full bg-gradient-to-t from-[#FFD200]/[0.08] to-transparent" />

          {/* notch */}
          <div className="relative z-10 mx-auto mt-2.5 h-[22px] w-[92px] rounded-full bg-black border border-white/10 flex items-center justify-center">
            <div className="h-[8px] w-[8px] rounded-full bg-[#0f2a3a] ring-1 ring-cyan-400/40" />
          </div>
          <div className="relative z-10 mt-1 flex items-center justify-between px-4 font-mono2 text-[9px] text-white/50">
            <span>21:47</span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-1.5 w-4 rounded-[2px] bg-[#FFD200]" /> 5G
            </span>
          </div>

          {/* app header */}
          <div className="relative z-10 mt-2 px-3">
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-2 backdrop-blur">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFD200] text-black">
                <ShieldMark />
              </div>
              <div>
                <div className="font-display text-[10px] font-bold tracking-[0.18em]">JANRAKSHAK</div>
                <div className="font-mono2 text-[8px] text-emerald-400 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-blink" /> LIVE SENSING
                </div>
              </div>
              <div className="ml-auto font-mono2 text-[8px] text-white/40">iQOO 12</div>
            </div>
          </div>

          {/* risk dial */}
          <div className="relative z-10 mx-3 mt-2.5 rounded-2xl border border-white/10 bg-black/60 p-3">
            <div className="flex items-center justify-between">
              <span className="font-mono2 text-[8px] tracking-[0.2em] text-white/50">RISK SCORE</span>
              <span className="rounded-full bg-red-500/15 border border-red-500/30 px-2 py-0.5 font-mono2 text-[8px] text-red-400">● HIGH</span>
            </div>
            <div className="mt-1 flex items-end justify-center gap-2">
              <span className="font-display text-[44px] font-bold leading-none text-white">{risk}</span>
              <span className="pb-1 font-mono2 text-[9px] text-white/40">/100</span>
            </div>
            {/* bar */}
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: "8%" }}
                animate={{ width: `${risk}%` }}
                transition={{ duration: 1.6, ease: "easeOut", delay: 0.5 }}
                className="h-full rounded-full bg-gradient-to-r from-[#FFD200] via-orange-500 to-red-500"
              />
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1.5 font-mono2 text-[7.5px]">
              <div className="rounded-md bg-white/[0.05] px-1.5 py-1 text-center text-white/60">MOTION <span className="text-red-400">▲9.2g</span></div>
              <div className="rounded-md bg-white/[0.05] px-1.5 py-1 text-center text-white/60">AUDIO <span className="text-[#FFD200]">94dB</span></div>
              <div className="rounded-md bg-white/[0.05] px-1.5 py-1 text-center text-white/60">CROWD <span className="text-orange-400">DENSE</span></div>
            </div>
          </div>

          {/* waveform */}
          <div className="relative z-10 mx-3 mt-2 rounded-xl border border-white/10 bg-white/[0.03] p-2">
            <div className="flex items-center justify-between px-1">
              <span className="font-mono2 text-[7.5px] tracking-[0.18em] text-white/40">ACCEL · GYRO · MIC</span>
              <Activity size={11} className="text-[#FFD200]" />
            </div>
            <Waveform />
          </div>

          {/* relay row */}
          <div className="relative z-10 mx-3 mt-2 flex items-center gap-1.5">
            <div className="flex-1 rounded-lg border border-[#FFD200]/25 bg-[#FFD200]/[0.07] px-2 py-1.5 text-center">
              <div className="font-mono2 text-[7px] text-[#FFD200] flex items-center justify-center gap-1"><Bluetooth size={9} /> MESH · 4 HOPS</div>
            </div>
            <div className="flex-1 rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1.5 text-center">
              <div className="font-mono2 text-[7px] text-white/60 flex items-center justify-center gap-1"><LocateFixed size={9} /> GPS LOCK ±3m</div>
            </div>
          </div>

          {/* SOS */}
          <div className="relative z-10 mx-3 mb-3 mt-2 rounded-xl bg-[#FFD200] py-2 text-center">
            <div className="font-display text-[11px] font-bold tracking-[0.2em] text-black">◉ BROADCAST ALERT</div>
          </div>

          {/* scan line */}
          <div className="pointer-events-none absolute inset-x-0 z-20 h-10 bg-gradient-to-b from-transparent via-[#FFD200]/[0.07] to-transparent" style={{ animation: "scan-y 4s ease-in-out infinite" }} />
        </div>
      </motion.div>

      {/* floating chips */}
      {mode === "hero" && (
        <>
          <FloatChip className="-left-40 top-16" icon={<Waves size={13} />} title="GYRO + ACCEL" sub="1 kHz sampling" delay={0.6} />
          <FloatChip className="-right-44 top-32" icon={<LocateFixed size={13} />} title="GPS · ±3 m" sub="28.6139°N 77.2090°E" delay={0.9} />
          <FloatChip className="-left-44 top-64" icon={<Cpu size={13} />} title="ON-DEVICE AI" sub="18 ms inference" delay={1.15} />
          <FloatChip className="-right-40 bottom-24" icon={<Bluetooth size={13} />} title="BLE MESH" sub="A→B→C→Cloud" delay={1.35} />
        </>
      )}
    </div>
  );
}

function FloatChip({ className, icon, title, sub, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: className.includes("-left") ? -18 : 18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.7 }}
      className={`absolute z-20 hidden lg:flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#0c0c0e]/90 px-3 py-2 backdrop-blur-xl ${className}`}
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FFD200]/15 text-[#FFD200]">{icon}</div>
      <div>
        <div className="font-mono2 text-[10px] font-semibold tracking-wider text-white">{title}</div>
        <div className="font-mono2 text-[9px] text-white/45">{sub}</div>
      </div>
    </motion.div>
  );
}

export function ShieldMark({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8 3.5v5.2c0 5-3.4 9.4-8 11.3-4.6-1.9-8-6.3-8-11.3V5.5L12 2z" fill="currentColor" stroke="none" opacity={0.18} />
      <path d="M12 2l8 3.5v5.2c0 5-3.4 9.4-8 11.3-4.6-1.9-8-6.3-8-11.3V5.5L12 2z" />
      <circle cx="12" cy="11" r="2.6" />
      <path d="M12 8v-1.5M12 15.5V14M8 11H6.5M17.5 11H16" />
    </svg>
  );
}

function Waveform() {
  const bars = [8, 14, 22, 12, 30, 42, 26, 52, 34, 60, 44, 28, 48, 36, 58, 30, 20, 40, 24, 14, 32, 18, 26, 10, 16, 22, 12, 28, 20, 14];
  return (
    <div className="mt-1.5 flex h-10 items-end justify-between gap-[2px] px-1">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 4 }}
          animate={{ height: [4, (h / 60) * 36 + 4, 4] }}
          transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.07, ease: "easeInOut" }}
          className={`w-[4px] rounded-full ${i > 12 && i < 20 ? "bg-red-500" : i > 9 ? "bg-[#FFD200]" : "bg-white/25"}`}
        />
      ))}
    </div>
  );
}

export const CAPABILITIES = [
  { icon: Activity, t: "Sensors", d: "Accel · gyro · baro · mic" },
  { icon: Gauge, t: "Motion & Orientation", d: "Fall · surge · stillness" },
  { icon: LocateFixed, t: "Location", d: "GPS + fused positioning" },
  { icon: Radio, t: "Connectivity", d: "5G · Wi-Fi · auto-failover" },
  { icon: Cpu, t: "Processing", d: "On-device inference" },
  { icon: Bluetooth, t: "Bluetooth", d: "BLE 5.x advertising" },
  { icon: RefreshCcw, t: "Device-to-Device", d: "Multi-hop relay mesh" },
  { icon: Zap, t: "Real-Time Data", d: "Streams @ 50–1000 Hz" },
];
