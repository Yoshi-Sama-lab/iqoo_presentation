import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Expand, Grid3X3, Shrink, X,
} from "lucide-react";
import { SLIDES } from "./slides";
import { ShieldMark } from "./components";

const TOTAL = SLIDES.length;

export default function App() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [overview, setOverview] = useState(false);
  const [fs, setFs] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((n: number) => {
    setDir(n > idx ? 1 : -1);
    setIdx(Math.max(0, Math.min(TOTAL - 1, n)));
    setOverview(false);
  }, [idx]);

  const next = useCallback(() => go(idx + 1), [go, idx]);
  const prev = useCallback(() => go(idx - 1), [go, idx]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", " ", "PageDown", "Enter"].includes(e.key)) { e.preventDefault(); next(); }
      else if (["ArrowLeft", "PageUp", "Backspace"].includes(e.key)) { e.preventDefault(); prev(); }
      else if (e.key === "Home") go(0);
      else if (e.key === "End") go(TOTAL - 1);
      else if (e.key.toLowerCase() === "o" || e.key === "Escape") setOverview((v) => !v);
      else if (e.key.toLowerCase() === "f") toggleFs();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const toggleFs = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().then(() => setFs(true)).catch(() => {});
    } else {
      document.exitFullscreen?.().then(() => setFs(false)).catch(() => {});
    }
  };

  const Active = SLIDES[idx].C;

  return (
    <div className="noise vignette relative flex h-full w-full flex-col overflow-hidden bg-[#060607] text-white">
      {/* top progress */}
      <div className="absolute inset-x-0 top-0 z-50 h-[3px] bg-white/10">
        <motion.div
          className="h-full bg-[#FFD200]"
          animate={{ width: `${((idx + 1) / TOTAL) * 100}%` }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          style={{ boxShadow: "0 0 12px rgba(255,210,0,0.7)" }}
        />
      </div>

      {/* header */}
      <header className="relative z-40 flex items-center gap-3 border-b border-white/[0.08] bg-black/50 px-4 py-2.5 backdrop-blur-xl md:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#FFD200] text-black">
            <ShieldMark size={17} />
          </div>
          <div className="leading-none">
            <div className="font-display text-[13px] font-bold tracking-[0.22em]">JANRAKSHAK</div>
            <div className="font-mono2 mt-0.5 text-[8.5px] tracking-[0.2em] text-white/40">iQOO HACKATHON · SAFETY INTELLIGENCE</div>
          </div>
        </div>

        {/* section pills (desktop) */}
        <nav className="mx-auto hidden items-center gap-1 xl:flex">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              title={s.label}
              className={`group relative h-7 rounded-full px-2.5 font-mono2 text-[9.5px] tracking-wider transition-all ${
                i === idx ? "bg-[#FFD200] text-black font-bold" : "text-white/40 hover:text-white hover:bg-white/10"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 xl:ml-0">
          <span className="font-mono2 hidden text-[11px] text-white/50 sm:block">
            <b className="font-display text-[15px] text-white">{String(idx + 1).padStart(2, "0")}</b>
            <span className="text-white/30"> / {String(TOTAL).padStart(2, "0")}</span>
          </span>
          <span className="font-mono2 hidden rounded-full border border-[#FFD200]/30 bg-[#FFD200]/10 px-3 py-1 text-[9.5px] tracking-[0.15em] text-[#FFD200] md:block">
            {SLIDES[idx].label.toUpperCase()}
          </span>
          <button onClick={() => setOverview((v) => !v)} className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/70 hover:border-[#FFD200]/50 hover:text-[#FFD200]" title="Overview (O)">
            {overview ? <X size={15} /> : <Grid3X3 size={15} />}
          </button>
          <button onClick={toggleFs} className="hidden h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white/70 hover:border-[#FFD200]/50 hover:text-[#FFD200] sm:flex" title="Fullscreen (F)">
            {fs ? <Shrink size={15} /> : <Expand size={15} />}
          </button>
        </div>
      </header>

      {/* stage */}
      <main
        className="relative z-10 flex-1 overflow-hidden"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (dx < -50) next();
          else if (dx > 50) prev();
          touchX.current = null;
        }}
      >
        {/* ghost slide number */}
        <div className="pointer-events-none absolute -bottom-8 right-2 z-0 select-none overflow-hidden">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
              className="font-display text-[22vw] md:text-[15vw] font-bold leading-none text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.055)" }}
            >
              {String(idx + 1).padStart(2, "0")}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* side click zones */}
        <button onClick={prev} aria-label="Previous" className="group absolute inset-y-0 left-0 z-30 w-[52px] cursor-w-resize opacity-0 transition-opacity hover:opacity-100 disabled:cursor-default" disabled={idx === 0}>
          <span className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white/70"><ArrowLeft size={15} /></span>
        </button>
        <button onClick={next} aria-label="Next" className="group absolute inset-y-0 right-0 z-30 w-[52px] cursor-e-resize opacity-0 transition-opacity hover:opacity-100 disabled:cursor-default" disabled={idx === TOTAL - 1}>
          <span className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#FFD200]/40 bg-[#FFD200] text-black"><ArrowRight size={15} /></span>
        </button>

        <AnimatePresence mode="popLayout" custom={dir} initial={false}>
          <motion.section
            key={idx}
            custom={dir}
            initial={{ opacity: 0, x: 90 * dir, scale: 0.985 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -90 * dir, scale: 0.985 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 overflow-y-auto thin-scroll"
          >
            <div className="min-h-full pb-6 pt-5 md:pt-7">
              <Active />
            </div>
          </motion.section>
        </AnimatePresence>

        {/* overview */}
        <AnimatePresence>
          {overview && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-40 overflow-y-auto thin-scroll bg-black/90 p-6 backdrop-blur-xl md:p-10">
              <div className="mx-auto max-w-[1100px]">
                <div className="mb-5 flex items-center justify-between">
                  <div className="font-mono2 text-[11px] tracking-[0.25em] text-white/50">ALL SLIDES — CLICK TO JUMP <span className="text-[#FFD200]">[ {TOTAL} ]</span></div>
                  <button onClick={() => setOverview(false)} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 hover:border-[#FFD200] hover:text-[#FFD200]"><X size={16} /></button>
                </div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {SLIDES.map((s, i) => (
                    <button key={s.id} onClick={() => go(i)}
                      className={`group overflow-hidden rounded-2xl border p-4 text-left transition-all ${i === idx ? "border-[#FFD200] bg-[#FFD200]/[0.06]" : "border-white/10 bg-white/[0.03] hover:border-white/30"}`}>
                      <div className={`font-display text-[34px] font-bold leading-none ${i === idx ? "text-[#FFD200]" : "text-white/15 group-hover:text-white/30"}`}>{String(i + 1).padStart(2, "0")}</div>
                      <div className="font-display mt-2 text-[13px] font-bold">{s.label}</div>
                      <div className="font-mono2 mt-0.5 text-[9px] tracking-[0.2em] text-white/35">{s.id.toUpperCase()}</div>
                      {i === idx && <div className="font-mono2 mt-2 text-[9px] tracking-widest text-[#FFD200]">● NOW VIEWING</div>}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* footer controls */}
      <footer className="relative z-40 flex items-center gap-3 border-t border-white/[0.08] bg-black/60 px-4 py-2.5 backdrop-blur-xl md:px-6">
        <div className="flex items-center gap-1.5">
          <button onClick={prev} disabled={idx === 0} className="flex h-9 items-center gap-1.5 rounded-xl border border-white/12 bg-white/[0.04] px-3.5 font-display text-[12px] font-bold text-white/80 transition-all hover:border-[#FFD200]/60 hover:text-white disabled:opacity-30 disabled:hover:border-white/12">
            <ArrowLeft size={14} /> <span className="hidden sm:inline">PREV</span>
          </button>
          <button onClick={next} disabled={idx === TOTAL - 1} className="flex h-9 items-center gap-1.5 rounded-xl bg-[#FFD200] px-4 font-display text-[12px] font-bold text-black transition-all hover:brightness-110 disabled:opacity-30">
            <span className="hidden sm:inline">{idx === TOTAL - 1 ? "END" : "NEXT"}</span> <ArrowRight size={14} />
          </button>
        </div>

        {/* dots */}
        <div className="mx-auto hidden items-center gap-1.5 md:flex">
          {SLIDES.map((s, i) => (
            <button key={s.id} onClick={() => go(i)} title={s.label}
              className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-[#FFD200]" : i < idx ? "w-3 bg-[#FFD200]/40 hover:bg-[#FFD200]/70" : "w-3 bg-white/15 hover:bg-white/35"}`} />
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <span className="font-mono2 hidden text-[9.5px] tracking-[0.12em] text-white/35 lg:block">← → NAVIGATE · O OVERVIEW · F FULLSCREEN · SWIPE ON TOUCH</span>
          <span className="font-mono2 hidden text-[10px] text-white/40 sm:block">{SLIDES[idx].label}</span>
        </div>
      </footer>
    </div>
  );
}
